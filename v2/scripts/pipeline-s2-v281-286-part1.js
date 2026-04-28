const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function insertVWA(verse_id, word_key, position, sense_chosen, analysis_axes) {
  const { error } = await supabase.from('verse_word_analyses').insert({ verse_id, word_key, position, sense_chosen, analysis_axes });
  if (error) console.error(`  VWA error [${word_key} pos=${position}]:`, error.message);
  else console.log(`  VWA OK: ${word_key} pos=${position}`);
}

async function updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments) {
  const { error } = await supabase.from('verse_analyses').update({ translation_arab, full_translation, translation_explanation, segments }).eq('id', analysis_id);
  if (error) console.error(`  Verse update error [analysis_id=${analysis_id}]:`, error.message);
  else console.log(`  Verse update OK: analysis_id=${analysis_id}`);
}

async function insertWordDaily(analysis_id, sense, phrases) {
  for (const p of phrases) {
    const { data: existing } = await supabase.from('word_daily').select('id').eq('analysis_id', analysis_id).eq('french', p.fr);
    if (existing && existing.length > 0) { console.log(`  word_daily SKIP (exists): ${p.fr.substring(0,40)}`); continue; }
    const { error } = await supabase.from('word_daily').insert({ analysis_id, sense, french: p.fr, arabic: p.ar, phon: p.phon });
    if (error) console.error(`  word_daily error:`, error.message);
    else console.log(`  word_daily OK: ${p.fr.substring(0,40)}`);
  }
}

// ============================================================
// ÉTAPE 2 VÉRIFICATION — wqy, ywm, rja, llh, wfy, kll, nfs, ksb, zlm
// Tous ont des concepts → SKIP étape 2
// ============================================================

// ============================================================
// VERSET 2:281  verse_id=288  analysis_id=647
// Segments importants:
//   pos=2 wqy (ittaqū) — verbe impératif
//   pos=3 ywm (yawman) — nom
//   pos=4 rja (turjaʿūna) — verbe passif
//   pos=7 llh (allāhi) — nom
//   pos=9 wfy (tuwaffā) — verbe passif
//   pos=10 kll (kullu) — nom
//   pos=11 nfs (nafsin) — nom
//   pos=13 ksb (kasabat) — verbe
//   pos=17 zlm (yuẓlamūna) — verbe passif
// ============================================================
async function processVerse281() {
  console.log('\n=== 2:281 ===');
  const verse_id = 288;
  const analysis_id = 647;

  const translation_arab = "Et craignez un Jour où vous serez ramenés à Dieu. Alors chaque âme sera pleinement rétribuée de ce qu'elle a acquis, et ils ne seront pas lésés.";
  const full_translation = "Et craignez un Jour où vous serez ramenés à Dieu. Alors chaque âme sera pleinement rétribuée de ce qu'elle a acquis, et ils ne seront pas lésés.";

  const translation_explanation = `§DEMARCHE§
Le verset 2:281 est une injonction de vigilance suivie d'une affirmation du jugement individuel. Wa-ttaqū (pos=1-2) : wa = et + ittaqū = Form VIII impératif de wqy = craignez / soyez vigilants. Yawman (pos=3) : accusatif de temps, un Jour. Turjaʿūna fīhi ilā allāhi (pos=4-7) : Form I passif inaccompli 2MP de rja + ilā allāhi = où vous serez ramenés à Dieu. Thumma tuwaffā (pos=8-9) : thumma = puis + Form II passif de wfy = sera pleinement rétribuée. Kullu nafsin (pos=10-11) : kullu = chaque + nafsin = âme, génitif (idafa). Mā kasabat (pos=12-13) : mā = ce que + kasabat = elle a acquis (Form I accompli 3FS de ksb). Wa-hum lā yuẓlamūna (pos=14-17) : et ils ne seront pas lésés.

§JUSTIFICATION§
Ittaqū traduit par "craignez" : sens retenu de wqy = Protection/Préservation, senses incluent "craindre, se prémunir, se protéger". La taqwā ici est la vigilance face au Jour du jugement. Yawman traduit par "un Jour" : sens retenu Temps/Période — ici un jour précis (le Jugement), accusatif de temps. Turjaʿūna traduit par "vous serez ramenés" : sens retenu de rja = Retour/Réversion — le retour vers Dieu est passif (Form I passif) = on est ramené, pas qu'on revient. Tuwaffā traduit par "sera pleinement rétribuée" : sens retenu de wfy = Fidélité/Accomplissement — tuwaffā = être payé en entier, rétribué intégralement. Kullu traduit par "chaque" : sens retenu de kll = Totalité — kullu + génitif = chaque. Nafsin traduit par "âme" : sens retenu de nfs = Âme/Être — nafsin au singulier indéfini = chaque âme individuelle. Kasabat traduit par "elle a acquis" : sens retenu de ksb = Acquisition/Rétribution — ce qu'elle a fait, accompli, gagné. Yuẓlamūna traduit par "ils ne seront pas lésés" : sens retenu de zlm = Injustice/Oppression — lā yuẓlamūna = aucune injustice ne leur sera faite.

§CRITIQUE§
Hamidullah traduit : "Et redoutez le Jour où vous serez ramenés à Allah. Alors chaque âme sera payée selon son oeuvre et personne ne sera lésé." — Notre traduction est très proche. La différence : "craignez" vs "redoutez" (nuance de même sens), et "de ce qu'elle a acquis" vs "selon son oeuvre" (ksb = acquérir/mériter). Les traductions courantes donnent sensiblement le même sens.`;

  const segments = [
    { position: 1, arabic: "وَ", phon: "wa", fr: "Et", is_particle: true },
    { position: 2, arabic: "ٱتَّقُوا۟", phon: "ittaqū", fr: "craignez", is_particle: false, word_key: "wqy", pos: "verbe", sense_retenu: "craignez" },
    { position: 3, arabic: "يَوْمًا", phon: "yawman", fr: "un Jour", is_particle: false, word_key: "ywm", pos: "nom", sense_retenu: "un Jour" },
    { position: 4, arabic: "تُرْجَعُونَ", phon: "turjaʿūna", fr: "où vous serez ramenés", is_particle: false, word_key: "rja", pos: "verbe", sense_retenu: "serez ramenés" },
    { position: 5, arabic: "فِيهِ", phon: "fīhi", fr: "en lui", is_particle: true },
    { position: 6, arabic: "إِلَى", phon: "ilā", fr: "à", is_particle: true },
    { position: 7, arabic: "ٱللَّهِ", phon: "allāhi", fr: "Dieu.", is_particle: false, word_key: "llh", pos: "nom", sense_retenu: "Dieu" },
    { position: 8, arabic: "ثُمَّ", phon: "thumma", fr: "Alors", is_particle: true },
    { position: 9, arabic: "تُوَفَّىٰ", phon: "tuwaffā", fr: "sera pleinement rétribuée", is_particle: false, word_key: "wfy", pos: "verbe", sense_retenu: "sera pleinement rétribuée" },
    { position: 10, arabic: "كُلُّ", phon: "kullu", fr: "chaque", is_particle: false, word_key: "kll", pos: "nom", sense_retenu: "chaque" },
    { position: 11, arabic: "نَفْسٍ", phon: "nafsin", fr: "âme", is_particle: false, word_key: "nfs", pos: "nom", sense_retenu: "âme" },
    { position: 12, arabic: "مَّا", phon: "mā", fr: "ce qu'", is_particle: true },
    { position: 13, arabic: "كَسَبَتْ", phon: "kasabat", fr: "elle a acquis,", is_particle: false, word_key: "ksb", pos: "verbe", sense_retenu: "a acquis" },
    { position: 14, arabic: "وَهُمْ", phon: "wa-hum", fr: "et ils", is_particle: true },
    { position: 15, arabic: "لَا", phon: "lā", fr: "ne seront pas", is_particle: true },
    { position: 16, arabic: "لَا", phon: "lā", fr: "", is_particle: true },
    { position: 17, arabic: "يُظْلَمُونَ", phon: "yuẓlamūna", fr: "lésés.", is_particle: false, word_key: "zlm", pos: "verbe", sense_retenu: "lésés" }
  ];

  await updateVerse(analysis_id, translation_arab, full_translation, translation_explanation, segments);

  // [RACINE] wqy — concept retenu : Protection/Préservation (déjà analysé, SKIP étape 2)
  // Sens retenu : protection/préservation (craindre = se prémunir)
  await insertVWA(verse_id, "wqy", 2, "craignez / vigilance divine", {
    concept_chosen: "Protection/Préservation",
    concepts: {
      "Protection/Préservation": {
        status: "retenu",
        senses: ["piété", "préserver", "protéger", "craindre", "se prémunir", "éviter"],
        proof_ctx: "Ittaqū (pos=2) : Form VIII impératif 2MP de wqy. Form VIII = réflexif : se protéger soi-même, se prémunir. L'impératif direct aux croyants. Wa-ttaqū yawman = et craignez un Jour. La taqwā face au Jour du jugement. Sens retenu Protection/Préservation car la taqwā est une vigilance protectrice. Sens isolé/Bouclier écarté : le bouclier est physique, la taqwā est spirituelle.",
        axe1_verset: "Wa-ttaqū yawman turjaʿūna fīhi ilā llāhi = et craignez un Jour où vous serez ramenés à Dieu. La taqwā est ici orientée vers l'avenir — le Jour du jugement. Le verbe ittaqū ouvre l'injonction et motive tout le reste. La vigilance est la réponse rationnelle à la certitude du retour.",
        axe2_voisins: "Les versets précédents (2:278-280) ordonnent d'abandonner l'usure et d'accorder des délais. Le verset 2:281 est le sceau de cette séquence : après les injonctions pratiques, la perspective eschatologique. Ittaqū relie la conduite économique à la reddition des comptes.",
        axe3_sourate: "La taqwā (vigilance divine) est le thème central d'al-Baqarah depuis 2:2 (hudan lil-muttaqīn). Ittaqū llāha est une formule récurrente dans la sourate. Ici ittaqū yawman (craignez un Jour) donne à la taqwā une dimension eschatologique.",
        axe4_coherence: "La Form VIII ittaqā est utilisée environ 258 fois dans le Coran — c'est l'une des formes les plus fréquentes. Elle désigne la vigilance active, la piété protectrice. En 2:281 elle prépare le jugement universel : chaque âme sera rétribuée.",
        axe5_frequence: "La racine wqy (Form VIII ittaqā) est parmi les plus fréquentes du Coran. La taqwā est le principe cardinal du projet coranique : une société juste naît de la vigilance de chaque individu devant Dieu."
      },
      "Sens isolé/Bouclier": {
        status: "nul",
        senses: ["bouclier"],
        proof_ctx: "Le sens de bouclier physique (wiqāya = protection matérielle) ne s'applique pas à ittaqū yawman : on ne se protège pas d'un Jour avec un bouclier."
      }
    }
  });

  // [RACINE] ywm — concept retenu : Temps/Période
  await insertVWA(verse_id, "ywm", 3, "un Jour (eschatologique)", {
    concept_chosen: "Temps/Période",
    concepts: {
      "Temps/Période": {
        status: "retenu",
        senses: ["journée", "temps", "jour", "période"],
        proof_ctx: "Yawman (pos=3) : accusatif de temps, nom indéfini singulier. Ittaqū yawman = craignez un Jour. Ce Jour est un Jour précis — le Jour du Jugement (yawm al-qiyāma). Le sens Temps/Période capture la dimension temporelle. Sens Événement/Moment marquant est aussi valide — ce Jour est un événement capital. Mais yawman est grammaticalement un accusatif de temps pur.",
        axe1_verset: "Yawman turjaʿūna fīhi ilā llāhi = un Jour où vous serez ramenés à Dieu. Le yawm est défini par la relative qui suit. C'est un Jour unique dans l'eschatologie coranique. L'accusatif yawman est un objet de la vigilance (ittaqū).",
        axe2_voisins: "Yawm al-qiyāma (le Jour de la Résurrection) est mentionné en 2:85, 2:113, 2:174. Le yawm du jugement clôt la séquence sur l'usure (2:275-281). Le Jour est la réalité eschatologique qui donne sens à toutes les injonctions économiques.",
        axe3_sourate: "Al-Baqarah mentionne souvent le yawm al-ākhir (le Jour Dernier) comme fondement de la foi et de la conduite. Le ywm (2:281) est la clôture naturelle de la grande séquence législative.",
        axe4_coherence: "La racine ywm est très fréquente dans le Coran — apparaît environ 475 fois. Yawman en accusatif de temps est un usage standard. Le Coran utilise yawm de façon récurrente pour désigner le Jugement (yawm al-dīn, yawm al-ḥisāb).",
        axe5_frequence: "Yawm est l'une des racines les plus fréquentes du Coran. Sa présence ici donne à la vigilance économique sa dimension eschatologique ultime."
      },
      "Événement/Moment marquant": {
        status: "probable",
        senses: ["bataille", "jour de combat", "événement", "jour marquant"],
        proof_ctx: "Yawman pourrait être un Événement/Moment marquant dans le sens où le Jugement est un événement capital. Mais l'accusatif de temps pur (ittaqū yawman = craignez un Jour) est mieux rendu par Temps/Période. La distinction : Événement/Moment marquant insiste sur la singularité de l'occurrence, Temps/Période sur la réalité temporelle. Ici yawman est avant tout une durée (turjaʿūna fīhi = où vous y serez).",
        axe1_verset: "Yawman turjaʿūna fīhi = un Jour où vous serez dans ce Jour. Le fīhi (en lui) traite yawman comme un contenant temporel, ce qui confirme Temps/Période plutôt qu'Événement.",
        axe2_voisins: "Les yawm eschatologiques dans al-Baqarah sont traités comme des périodes (yawm al-qiyāma = le Jour de la Résurrection = une durée). En 2:85 : ʿadhāb fī l-ḥayāt al-dunyā wa-yawm al-qiyāmati = châtiment dans la vie mondaine et le Jour de la Résurrection.",
        axe3_sourate: "Al-Baqarah utilise yawm comme période temporelle à redouter. La vigilance s'exerce face à une durée, pas seulement face à un moment ponctuel.",
        axe4_coherence: "Le Coran utilise yawm al-dīn (le Jour de la Rétribution) en 1:4 comme axe central de la foi. C'est une durée eschatologique.",
        axe5_frequence: "Les deux concepts sont compatibles. Temps/Période est retenu car il capture mieux la valeur grammaticale de l'accusatif de temps."
      },
      "Sens isolé/Étape": { status: "nul", senses: ["étape"], proof_ctx: "Le sens d'étape de marche (distance d'un jour de voyage) ne s'applique pas ici — le contexte est eschatologique." },
      "Temps/Cycle": { status: "nul", senses: ["distance d'un jour de marche"], proof_ctx: "Le sens de cycle ou distance ne s'applique pas à un Jour eschatologique." }
    }
  });

  // [RACINE] rja — concept retenu : Retour/Réversion
  await insertVWA(verse_id, "rja", 4, "serez ramenés (retour vers Dieu)", {
    concept_chosen: "Retour/Réversion",
    concepts: {
      "Retour/Réversion": {
        status: "retenu",
        senses: ["retourner", "revenir", "renvoyer"],
        proof_ctx: "Turjaʿūna (pos=4) : Form I passif inaccompli 2MP de rja = vous serez ramenés. Le passif est crucial : ce ne sont pas les hommes qui reviennent, c'est Dieu qui les ramène. Turjaʿūna ilā llāhi = vous serez ramenés à Dieu. Sens Retour/Réversion est retenu. Sens Eau/Liquide et Réponse écartés : pluie et réponse ne s'appliquent pas ici.",
        axe1_verset: "Wa-ttaqū yawman turjaʿūna fīhi ilā llāhi = craignez un Jour où vous serez ramenés à Dieu. Le passif turjaʿūna souligne que le retour est subi, non voulu. Dieu est l'agent du retour (ilā llāhi). La vigilance s'impose devant cette réalité.",
        axe2_voisins: "La formule ilā llāhi/rabbihim turjaʿūna (vous serez ramenés à votre Seigneur) est récurrente dans le Coran eschatologique. En 2:245 : wa-ilā llāhi turjaʿūna. En 2:186 : wa-idha saʾalaka ʿibādī ʿannī fa-innī qarīb. Le retour à Dieu est un leitmotiv.",
        axe3_sourate: "Le retour (rujūʿ) est l'un des thèmes fondamentaux d'al-Baqarah : la vie humaine est un voyage dont Dieu est le point d'arrivée. En 2:156 : innā li-llāhi wa-innā ilayhi rājiʿūna (à Dieu nous appartenons et à Lui nous retournons).",
        axe4_coherence: "La racine rja dans le Coran est utilisée presque exclusivement pour le retour vers Dieu (eschatologie) ou le retour à quelque chose. Turjaʿūna ilā llāhi est une formule coranique standard. En 10:4, 18:110 : turjaʿūna ilayhi.",
        axe5_frequence: "La racine rja apparaît environ 107 fois dans le Coran. Le retour à Dieu est le fondement du jugement : chaque acte — y compris économique — sera rendu devant Dieu."
      },
      "Eau/Liquide": { status: "nul", senses: ["pluie"], proof_ctx: "Le sens d'eau/pluie est un sens isolé de la racine rja non applicable ici." },
      "Sens isolé/Réponse": { status: "nul", senses: ["réponse"], proof_ctx: "Le sens de réponse ne s'applique pas à turjaʿūna ilā llāhi." }
    }
  });

  // llh pos=7 — concept retenu : Divinité
  await insertVWA(verse_id, "llh", 7, "Dieu", {
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": {
        status: "retenu",
        senses: ["théologie", "dieu", "Dieu", "divinité"],
        proof_ctx: "Allāhi (pos=7) : génitif de allāhu = Dieu (le nom propre divin). Turjaʿūna ilā llāhi = vous serez ramenés à Dieu. Le nom allāh désigne Dieu, l'Un. Sens Divinité retenu.",
        axe1_verset: "Ilā llāhi (vers Dieu) est le point d'arrivée du retour eschatologique. Allāh est le juge souverain devant qui chaque âme sera rétribuée.",
        axe2_voisins: "Allāh est mentionné 37 fois dans la séquence 2:275-283. Sa présence finale en 2:281 couronne la séquence économique : tout retourne à Dieu.",
        axe3_sourate: "Al-Baqarah commence par al-ḥamd li-llāhi rabb al-ʿālamīn et se conclut par wa-ilā llāhi turjaʿūna. L'alpha et l'oméga sont Dieu.",
        axe4_coherence: "Allāh comme nom propre de Dieu est le mot le plus fréquent du Coran (environ 2699 fois). Il désigne sans ambiguïté le Dieu unique.",
        axe5_frequence: "La présence d'allāh ici clôt la grande séquence sur l'usure en rappelant que l'économie humaine s'inscrit dans l'ordre divin."
      },
      "Adoration/Culte": { status: "nul", senses: ["adorer", "se consacrer au culte"], proof_ctx: "Ici allāh est sujet du retour, non objet du culte directement — le contexte est le jugement." },
      "Confusion/Perplexité": { status: "nul", senses: ["être confus"], proof_ctx: "Non applicable." },
      "Asservissement": { status: "nul", senses: ["réduire en esclavage"], proof_ctx: "Non applicable." }
    }
  });

  // wfy pos=9 — concept retenu : Fidélité/Accomplissement
  await insertVWA(verse_id, "wfy", 9, "sera pleinement rétribuée (accomplie)", {
    concept_chosen: "Fidélité/Accomplissement",
    concepts: {
      "Fidélité/Accomplissement": {
        status: "retenu",
        senses: ["être fidèle", "accomplir", "tenir sa promesse", "payer intégralement"],
        proof_ctx: "Tuwaffā (pos=9) : Form II passif 3FS de wfy = être pleinement payée, rétribuée intégralement. Tuwaffā kullu nafsin = chaque âme sera pleinement rétribuée. L'idée d'intégralité (waffā = remettre en entier) est centrale. Sens Mort/Fin écarté car tuwaffā ici n'est pas 'mourir' mais 'recevoir intégralement'. Distinction : en 3:185 tuwuffiya kull nafs = chaque âme mourra, mais ici le contexte est la rétribution (mā kasabat), pas la mort.",
        axe1_verset: "Tuwaffā kullu nafsin mā kasabat = chaque âme sera pleinement rétribuée de ce qu'elle a acquis. La forme II passif tuwaffā = être payé en entier, sans déduction. La plénitude de la rétribution est l'idée centrale.",
        axe2_voisins: "La formule tuwaffā nafs(un) mā kasabat apparaît en 2:281 et 3:161. Dans les deux cas, le contexte est la rétribution juste au Jour du jugement. La plénitude (wafā') garantit la justice.",
        axe3_sourate: "Al-Baqarah insiste sur la justice divine : ni diminution ni injustice. Tuwaffā ici est la garantie de la parfaite justice divine dans la rétribution.",
        axe4_coherence: "La racine wfy dans le Coran désigne l'intégralité, le plein accomplissement. En 39:70 : wa-wuffiyat kullu nafsin mā ʿamilat = chaque âme sera intégralement rétribuée de ses actes. En 2:281 : même formule.",
        axe5_frequence: "La racine wfy apparaît environ 25 fois dans le Coran. Sa forme passive dans le contexte de la rétribution est caractéristique : la justice divine est une fidélité totale."
      },
      "Mort/Fin": {
        status: "probable",
        senses: ["mourir"],
        proof_ctx: "Tuwaffā peut aussi signifier 'mourir' (Form II passif = être rappelé par la mort). En 3:185 tuwuffiya kull nafs = chaque âme mourra. Mais ici le contexte (mā kasabat = ce qu'elle a acquis) indique la rétribution, pas la mort. La distinction est grammaticale et contextuelle : tuwaffā + mā kasabat = être rétribué de ce qu'on a accompli.",
        axe1_verset: "Thumma tuwaffā kullu nafsin mā kasabat = puis chaque âme sera rétribuée de ce qu'elle a acquis. Le 'ce qu'elle a acquis' oriente vers la rétribution (Fidélité/Accomplissement), pas vers la mort.",
        axe2_voisins: "En 39:70 wa-wuffiyat kullu nafsin mā ʿamilat confirme que la construction tuwaffā + mā désigne la rétribution des actes.",
        axe3_sourate: "Al-Baqarah utilise wfy dans le sens de la rétribution juste, non de la mort ici.",
        axe4_coherence: "La distinction mort/rétribution est confirmée par le complément mā kasabat : on est rétribué de ses acquisitions, pas on meurt à cause d'elles.",
        axe5_frequence: "Les deux emplois coexistent dans le Coran. Ici le contexte penche pour la rétribution."
      }
    }
  });

  // kll pos=10 — concept retenu : Totalité
  await insertVWA(verse_id, "kll", 10, "chaque (totalité distributive)", {
    concept_chosen: "Totalité",
    concepts: {
      "Totalité": {
        status: "retenu",
        senses: ["chaque", "totalité", "tout"],
        proof_ctx: "Kullu (pos=10) : Form I nom de kll en idafa avec nafsin = chaque âme. Kullu + génitif indéfini = chaque (sens distributif). Ici kullu nafsin = chaque âme, une par une. Sens Totalité retenu dans sa valeur distributive (chaque = la totalité des individus pris un par un). Sens Émoussement/Faiblesse et Charge/Dépendance écartés : non applicables à kullu.",
        axe1_verset: "Tuwaffā kullu nafsin mā kasabat = chaque âme sera pleinement rétribuée de ce qu'elle a acquis. Kullu nafsin = chaque âme, sans exception. Le jugement est individuel et universel.",
        axe2_voisins: "Kullu nafsin dans le Coran est une formule récurrente pour désigner l'universalité du jugement individuel. En 3:185 : kullu nafsin dhāʾiqatu l-mawt. En 39:70 : wa-wuffiyat kullu nafsin.",
        axe3_sourate: "Al-Baqarah utilise kullu pour souligner l'universalité des lois divines. Kullu nafsin ici universalise la rétribution.",
        axe4_coherence: "La racine kll dans le sens de totalité/chaque est très fréquente dans le Coran (environ 750 fois pour kull). Sa valeur distributive (chaque = chacun pris individuellement) est un pilier du raisonnement coranique.",
        axe5_frequence: "Kullu nafsin est une des formules coraniques les plus importantes pour le jugement individuel. Elle affirme que la responsabilité est personnelle."
      },
      "Émoussement/Faiblesse": { status: "nul", senses: ["s'émousser", "être fatigué"], proof_ctx: "Non applicable à kullu en idafa." },
      "Charge/Dépendance": { status: "nul", senses: ["fardeau", "personne à charge"], proof_ctx: "Non applicable à kullu nafsin." },
      "Corps/Anatomie": { status: "nul", senses: ["couronner"], proof_ctx: "Non applicable." },
      "Sens isolé/Agacer": { status: "nul", senses: ["agacer les dents"], proof_ctx: "Non applicable." }
    }
  });

  // nfs pos=11 — concept retenu : Âme/Être
  await insertVWA(verse_id, "nfs", 11, "âme (être individuel)", {
    concept_chosen: "Âme/Être",
    concepts: {
      "Âme/Être": {
        status: "retenu",
        senses: ["personne", "désir", "soi-même", "âme", "esprit"],
        proof_ctx: "Nafsin (pos=11) : génitif indéfini de nafs = âme, être individuel. Kullu nafsin = chaque âme. Nafsin ici = l'être individuel dans son entier (pas juste l'esprit, ni juste le corps). Sens Âme/Être retenu. Sens Souffle/Vie écarté : ici nafs n'est pas le souffle mais l'individu entier.",
        axe1_verset: "Kullu nafsin mā kasabat = chaque âme ce qu'elle a acquis. Nafs = l'individu responsable de ses actes. La nafsin porte sa rétribution propre.",
        axe2_voisins: "La formule kullu nafsin + mā + verbe est très fréquente dans les versets eschatologiques. Nafs = l'être individuel qui rend compte.",
        axe3_sourate: "Al-Baqarah 2:48 : wa-ttaqū yawman lā tajzī nafsun ʿan nafsin shayʾan = craignez un Jour où aucune âme ne suppléera une autre. La nafs est l'unité du jugement.",
        axe4_coherence: "La racine nfs dans le Coran désigne l'être individuel responsable, l'âme-personne. La rétribution est individuelle : chaque nafs porte ce qu'elle a acquis.",
        axe5_frequence: "La racine nfs apparaît environ 295 fois dans le Coran. Kullu nafsin est une formule eschatologique fondamentale."
      },
      "Souffle/Vie": { status: "probable", senses: ["souffle", "respirer", "soulagement"], proof_ctx: "La nafs peut désigner le souffle vital. Mais ici kullu nafsin désigne l'être individuel qui rend compte, pas son souffle. La distinction : Souffle/Vie = aspect biologique, Âme/Être = l'individu moral responsable. Ici c'est l'individu moral (mā kasabat = ce qu'il a acquis).", axe1_verset: "Nafsin mā kasabat = l'être qui acquiert. L'acquisition (kasb) est un acte moral de l'individu, pas du souffle.", axe2_voisins: "Kullu nafsin dans les versets du jugement désigne l'individu responsable, pas la respiration.", axe3_sourate: "Al-Baqarah utilise nafs pour l'individu moral (2:48, 2:281, 2:286).", axe4_coherence: "Le Coran distingue rūḥ (souffle divin) de nafs (individu responsable).", axe5_frequence: "Nafs dans les contextes eschatologiques désigne toujours l'individu." },
      "Corps/Anatomie": { status: "nul", senses: ["sang"], proof_ctx: "Non applicable." },
      "Sens isolé/Oeil": { status: "nul", senses: ["oeil mauvais"], proof_ctx: "Non applicable." },
      "Sens isolé/Quantité": { status: "nul", senses: ["quantité"], proof_ctx: "Non applicable." }
    }
  });

  // ksb pos=13 — concept retenu : Acquisition/Rétribution
  await insertVWA(verse_id, "ksb", 13, "a acquis (mérite/actes)", {
    concept_chosen: "Acquisition/Rétribution",
    concepts: {
      "Acquisition/Rétribution": {
        status: "retenu",
        senses: ["mériter", "acquérir", "gagner"],
        proof_ctx: "Kasabat (pos=13) : Form I accompli 3FS de ksb = elle a acquis, gagné, mérité. Mā kasabat = ce qu'elle a acquis (les actes dont elle est responsable). La racine ksb dans le Coran désigne à la fois l'acquisition matérielle et le mérite moral. Ici dans un contexte de rétribution divine, le sens de mérite moral prime.",
        axe1_verset: "Tuwaffā kullu nafsin mā kasabat = chaque âme sera pleinement rétribuée de ce qu'elle a acquis. Kasabat = l'ensemble des actes accomplis. La rétribution (tuwaffā) porte sur l'acquisition (kasabat).",
        axe2_voisins: "La formule mā kasabat dans les versets du jugement est récurrente. En 2:79 : wa-yaqūlūna hādhā min ʿindi llāhi li-yashtarū bihi thamanan qalīlan — fawaylun lahum mimmā katabatat aydīhim wa-waylun lahum mimmā yaksibūna. En 2:286 : lahā mā kasabat wa-ʿalayhā mā iktasabat.",
        axe3_sourate: "La racine ksb dans al-Baqarah désigne l'acquisition morale — les actes dont on sera rétribué. Elle apparaît en 2:79, 2:134, 2:141, 2:202, 2:281, 2:286.",
        axe4_coherence: "La racine ksb apparaît environ 67 fois dans le Coran. Dans les contextes de rétribution, elle désigne le mérite moral accumulé par les actes. C'est le concept de responsabilité individuelle.",
        axe5_frequence: "La responsabilité individuelle (chaque âme ce qu'elle a acquis) est le fondement de la justice coranique."
      }
    }
  });

  // zlm pos=17 — concept retenu : Injustice/Oppression
  await insertVWA(verse_id, "zlm", 17, "lésés (injustice nulle)", {
    concept_chosen: "Injustice/Oppression",
    concepts: {
      "Injustice/Oppression": {
        status: "retenu",
        senses: ["oppresseur", "injustice", "être injuste", "opprimer"],
        proof_ctx: "Yuẓlamūna (pos=17) : Form I passif inaccompli 3MP de zlm = ils seront lésés/opprimés. Lā yuẓlamūna = ils ne seront pas lésés. La négation lā + passif = garantie que nulle injustice ne leur sera infligée. Sens Injustice/Oppression retenu. Sens Obscurité/Ténèbres et Souffle/Vent écartés : non applicables.",
        axe1_verset: "Wa-hum lā yuẓlamūna = et ils ne seront pas lésés. Cette formule garantit la justice parfaite de la rétribution divine. Lā yuẓlamūna clôt le verset en assurant qu'aucun tort ne sera subi.",
        axe2_voisins: "Lā yuẓlamūna est une formule de garantie récurrente dans les versets eschatologiques. En 2:279 : lā taẓlimūna wa-lā tuẓlamūna. La séquence 2:278-281 répète la garantie de non-injustice.",
        axe3_sourate: "La racine zlm dans al-Baqarah est très présente (injustice des infidèles, injustice économique, injustice du jugement). La garantie lā yuẓlamūna clôt la séquence sur l'usure en affirmant la justice divine parfaite.",
        axe4_coherence: "La racine zlm apparaît environ 315 fois dans le Coran. La formule passive lā yuẓlamūna est la garantie standard de la justice divine dans la rétribution. En 3:161 : thumma tuwaffā kullu nafsin mā kasabat wa-hum lā yuẓlamūna (même formule).",
        axe5_frequence: "L'absence d'injustice (lā zuẓlamūna) est un pilier du projet divin : la justice est totale et individuelle."
      },
      "Obscurité/Ténèbres": { status: "nul", senses: ["obscurité", "ténèbres"], proof_ctx: "Le sens d'obscurité physique (zulumat) ne s'applique pas à yuẓlamūna = être lésé. La racine zlm a deux significations étymologiques distinctes." },
      "Souffle/Vent": { status: "nul", senses: ["se faire du tort"], proof_ctx: "Le sens isolé de vent ne s'applique pas ici." }
    }
  });

  // word_daily pour les racines sans daily dans V281
  // rja (419) — Retour/Réversion
  await insertWordDaily(419, "retour", [
    { fr: "Il est revenu à la maison après une longue absence.", ar: "رَجَعَ إِلَى الْبَيْتِ بَعْدَ غَيَابٍ طَوِيلٍ.", phon: "rajaʿa ilā l-bayti baʿda ghiyābin ṭawīl" },
    { fr: "L'eau retourne toujours à sa source.", ar: "الْمَاءُ يَرْجِعُ دَائِمًا إِلَى مَصْدَرِهِ.", phon: "al-māʾu yarjiʿu dāʾiman ilā maṣdarihi" },
    { fr: "Tout ce qui part finit par revenir.", ar: "كُلُّ مَا يَذْهَبُ يَرْجِعُ فِي النِّهَايَةِ.", phon: "kullu mā yadhabu yarjiʿu fī n-nihāya" }
  ]);

  // wfy (487) — Fidélité/Accomplissement
  await insertWordDaily(487, "accomplissement", [
    { fr: "Il a tenu sa promesse jusqu'au bout.", ar: "وَفَى بِوَعْدِهِ حَتَّى النِّهَايَةِ.", phon: "wafā bi-waʿdihi ḥattā n-nihāya" },
    { fr: "Payer une dette en totalité, c'est être fidèle à sa parole.", ar: "أَدَاءُ الدَّيْنِ كَامِلًا هُوَ الْوَفَاءُ بِالْكَلِمَةِ.", phon: "adāʾ al-dayn kāmilan huwa l-wafāʾu bi-l-kalima" },
    { fr: "Elle a accompli toutes ses obligations sans en omettre une.", ar: "وَفَّتْ بِجَمِيعِ الْتِزَامَاتِهَا دُونَ إِغْفَالٍ.", phon: "waffat bi-jamīʿ iltizāmātihā dūna ighfāl" }
  ]);

  console.log('\nVERSET 2:281 — TERMINÉ');
  console.log('  wqy (pos=2) → Protection/Préservation → "craignez"');
  console.log('  ywm (pos=3) → Temps/Période → "un Jour"');
  console.log('  rja (pos=4) → Retour/Réversion → "serez ramenés"');
  console.log('  llh (pos=7) → Divinité → "Dieu"');
  console.log('  wfy (pos=9) → Fidélité/Accomplissement → "sera pleinement rétribuée"');
  console.log('  kll (pos=10) → Totalité → "chaque"');
  console.log('  nfs (pos=11) → Âme/Être → "âme"');
  console.log('  ksb (pos=13) → Acquisition/Rétribution → "a acquis"');
  console.log('  zlm (pos=17) → Injustice/Oppression → "lésés"');
  console.log('  Traduction : "Et craignez un Jour où vous serez ramenés à Dieu. Alors chaque âme sera pleinement rétribuée de ce qu\'elle a acquis, et ils ne seront pas lésés."');
}

processVerse281().catch(console.error);
