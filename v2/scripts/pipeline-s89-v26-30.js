// Pipeline S89 v26-30 — Étapes 3-4 : Axes + Traductions
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log(`  ERR update VWA ${word_key}: ${error.message}`);
    else console.log(`  ✓ VWA updated ${word_key} (id=${existing[0].id})`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  ERR insert VWA ${word_key}: ${error.message}`);
    else console.log(`  ✓ VWA created ${word_key} (id=${data.id})`);
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log(`  ERR update VA: ${error.message}`);
    else console.log(`  ✓ VA updated (id=${existing[0].id})`);
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log(`  ERR insert VA: ${error.message}`);
    else console.log(`  ✓ VA created (id=${data.id})`);
  }
}

(async () => {
  console.log('=== PIPELINE S89 v26-30 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 26 (6019): وَلَا يُوثِقُ وَثَاقَهُۥٓ أَحَدٌ
  // "Et personne ne lie de ses liens"
  // ============================================================
  console.log('--- VERSET 26 ---');

  // wthq (id=426) — يُوثِقُ / وَثَاقَهُ — forme IV + mafoul mutlaq
  await upsertVWA(6019, 'wthq', 'lier solidement', {
    sense_chosen: 'lier solidement',
    concept_chosen: 'Fermeté/Confiance',
    concepts: {
      'Fermeté/Confiance': {
        status: 'retenu',
        senses: ['être ferme', 'être solide', 'lier solidement', 'avoir confiance', 'pacte', 'se garantir'],
        proof_ctx: "La racine w-th-q n'a qu'un seul regroupement de sens, tous lies a l'idee de fermete, de solidite, de lien indefectible. Le verbe yuthiqu (forme IV inaccompli) signifie « lier solidement, attacher fermement ». Le nom wathaqahu (ses liens) est le mafoul mutlaq avec pronom. La forme IV (af'ala) ajoute l'idee de « rendre solide, faire en sorte que le lien tienne ». Dans le contexte du verset, personne ne lie de ses liens — personne ne peut attacher aussi solidement. Le sens physique (lier, attacher) est premier, et les extensions (confiance, pacte) derivent de l'idee qu'un lien solide cree la confiance. Ici, c'est le sens physique qui est active : des liens qui attachent et retiennent.",
        axe1_verset: "Le champ lexical du verset est celui de l'immobilisation et de l'incomparabilite. Le verbe yuthiqu (il lie) et le nom wathaqahu (ses liens) viennent de la meme racine — la construction mafoul mutlaq insiste sur l'intensite des liens. Le mot ahad avec la negation la donne l'impossibilite absolue. Le verset est parallele au verset 25 (personne ne chatie de son chatiment) — le meme schema est repete pour les liens. L'enchainement chatiment puis liens decrit une sequence : d'abord la punition, puis l'immobilisation.",
        axe2_voisins: "Le verset 25 etablissait l'incomparabilite du chatiment. Le verset 26 complete le tableau avec l'incomparabilite des liens. Ensemble, v25-26 forment un couple symetrique : chatiment + liens. Le verset 27 ouvrira un tout autre registre (l'ame sereine), creant un contraste saisissant entre les enchaines et les liberes. Le passage des liens (v26) a l'ame en paix (v27) est le pivot de la sourate.",
        axe3_sourate: "La sourate 89 oppose la liberte apparente de l'humain sur terre (v15-20 : il dispose de biens, il mange l'heritage) et l'immobilisation au jour du jugement. Les civilisations anciennes (Aad, Thamoud) semblaient invincibles — elles ont ete detruites. De meme, l'humain qui semblait libre est maintenant lie de liens que personne ne peut reproduire. Le theme de la puissance renversee traverse toute la sourate.",
        axe4_coherence: "Le Coran utilise la racine w-th-q dans d'autres contextes de liens et d'attachement. En 69:32, « attachez-le avec une chaine de soixante-dix coudees ». En 76:4, « nous avons prepare pour les negateurs des chaines et des liens ». Le motif des liens au jour du jugement est un element coranique constant. La construction du verset 89:26 s'inscrit dans cette coherence : les liens divins sont uniques et incomparables.",
        axe5_frequence: "Les liens representent la consequence ultime du refus de remplir la mission du khalifa. L'humain qui a refuse la responsabilite (v17-20 : il n'honore pas l'orphelin, ne nourrit pas le pauvre) est celui qui se retrouve lie. La liberte d'action sur terre avait un but — ceux qui l'ont gaspillee perdent cette liberte et sont immobilises par des liens que personne ne peut defaire."
      }
    }
  }, 2);

  // ahd already analyzed in v25 — reuse same concept for v26
  await upsertVWA(6019, 'ahd', 'personne', {
    sense_chosen: 'personne',
    concept_chosen: 'Quiconque/Indéfini',
    concepts: {
      'Quiconque/Indéfini': {
        status: 'retenu',
        senses: ['quiconque', 'personne', 'quelque chose'],
        proof_ctx: "Meme emploi qu'au verset 25 : ahad dans un contexte negatif signifie « personne ». Le parallelisme entre v25 et v26 est parfait — les deux versets utilisent ahad comme sujet d'une phrase negative pour exprimer l'incomparabilite.",
        axe1_verset: "Le mot ahad est le sujet du verbe yuthiqu avec la negation la — « personne ne lie ». Le parallelisme avec v25 (personne ne chatie) est exact. Les deux versets forment un couple ou ahad exprime l'impossibilite absolue.",
        axe2_voisins: "Le verset 25 utilisait le meme mot dans la meme construction. La repetition cree un martellement : personne ne chatie... personne ne lie... L'effet est cumulatif — l'incomparabilite est doublee.",
        axe3_sourate: "L'utilisation de ahad dans les deux versets conclusifs du chatiment renforce le theme de la puissance divine incomparable face a la pretention humaine qui traverse la sourate.",
        axe4_coherence: "La construction parallele la ... ahadun est un procede coranique classique pour les enumerations d'incomparabilite (voir aussi 112:4 : « et il n'est personne (ahad) qui lui soit egal »).",
        axe5_frequence: "L'impossibilite pour quiconque d'intervenir souligne la responsabilite individuelle du khalifa — personne ne peut attenuer les consequences de ses choix."
      },
      'Unicité/Indivisibilité': { status: 'nul', senses: ['déclarer l\'unicité'], proof_ctx: "Le contexte syntaxique negatif active le sens indefini, pas le sens d'unicite." },
      'Solitude/Isolement': { status: 'nul', senses: ['être seul'], proof_ctx: "Hors sujet." },
      'Nombre/Quantification': { status: 'nul', senses: ['rendre onze'], proof_ctx: "Hors sujet." },
      'Sens isolé/Dimanche': { status: 'nul', senses: ['dimanche'], proof_ctx: "Hors sujet." },
      'Sens isolé/Calamité': { status: 'nul', senses: ['calamité'], proof_ctx: "Hors sujet." },
      'Minéral/Terre': { status: 'nul', senses: ['tradition isolée'], proof_ctx: "Hors sujet." }
    }
  }, 4);

  // VA verset 26
  await upsertVA(6019, {
    segments: [
      { fr: 'Et', pos: 'CONJ', phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'ne', pos: 'NEG', phon: 'lā', arabic: 'لَا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'lie', pos: 'V', phon: 'yūṯiqu', arabic: 'يُوثِقُ', word_key: 'wthq', is_particle: false, sense_retenu: 'lier solidement', position: 2 },
      { fr: 'de ses liens', pos: 'N', phon: 'waṯāqahu', arabic: 'وَثَاقَهُۥٓ', word_key: 'wthq', is_particle: false, sense_retenu: 'pacte', position: 3 },
      { fr: 'personne', pos: 'N', phon: 'aḥad', arabic: 'أَحَدٌ', word_key: 'ahd', is_particle: false, sense_retenu: 'personne', position: 4 }
    ],
    translation_arab: "Et personne ne lie de ses liens",
    full_translation: "et nul ne saura garrotter comme Lui garrotte",
    translation_explanation: `§DEMARCHE§
La particule **wa** (وَ) coordonne ce verset avec le precedent — « Et » lie les deux incomparabilites (chatiment + liens).

Le verbe **yuthiqu** (يُوثِقُ) est une forme IV (une forme causative qui dit que le sujet « fait en sorte que » quelque chose soit fait) a l'inaccompli. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine w-th-q signifie etre ferme, etre solide, lier solidement. La forme IV ajoute l'idee de « rendre solide un lien, attacher de maniere indefectible ». Le verbe decrit l'acte de lier quelqu'un avec des liens si fermes qu'ils ne peuvent pas etre defaits.

Le mot **wathaqahu** (وَثَاقَهُۥٓ) est le nom de la meme racine (le lien, l'attache) avec le pronom suffixe hu (son/ses). La construction mafoul mutlaq (complement absolu) « lier de ses liens » insiste sur l'intensite et l'unicite des liens. Le pronom renvoie au seigneur mentionne en v22.

Le mot **ahad** (أَحَدٌ) avec la negation la signifie « personne » — meme emploi qu'au verset 25. La construction parallele cree un effet de martellement.

§JUSTIFICATION§
**lie** — Le sens retenu est « lier solidement » du regroupement Fermete/Confiance. Le verbe « lier » est le plus naturel en francais pour decrire l'acte d'attacher quelqu'un. L'alternative « avoir confiance » ne correspond pas au contexte physique des liens. L'alternative « pacte » est un nom, pas un verbe, et designe un accord mutuel, pas une immobilisation.

**ses liens** — Le nom wathaq designe l'objet qui lie — les liens, les attaches. Le mot « liens » est choisi car il est le plus courant et le plus direct.

**personne** — Meme justification qu'au verset 25.

§CRITIQUE§
**lier vs garrotter** — Hamidullah traduit « garrotter ». Le verbe « garrotter » est tres specifique — il designe l'acte d'attacher quelqu'un avec un garrot (lien serre). D'apres les sources etymologiques, la racine w-th-q signifie simplement « lier solidement, attacher fermement » — sans preciser la methode. « Garrotter » est un choix interpretatif qui reduit la portee du verbe arabe. « Lier » est plus fidele car il couvre toutes les formes d'attache solide.

**saura vs fait** — Comme au verset 25, Hamidullah ajoute « saura » qui n'est pas dans le texte. Le texte dit simplement « personne ne lie de ses liens » — pas « personne ne saura lier ».`
  });
  console.log('  v26 done\n');

  // ============================================================
  // VERSET 27 (6020): يَـٰٓأَيَّتُهَا ٱلنَّفْسُ ٱلْمُطْمَئِنَّةُ
  // "O toi, l'ame sereine !"
  // ============================================================
  console.log('--- VERSET 27 ---');

  // nfs (id=298) — ٱلنَّفْسُ — nom defini
  await upsertVWA(6020, 'nfs', 'âme', {
    sense_chosen: 'âme',
    concept_chosen: 'Âme/Être',
    concepts: {
      'Âme/Être': {
        status: 'retenu',
        senses: ['âme', 'soi-même', 'personne', 'esprit', 'désir'],
        proof_ctx: "La racine n-f-s possede cinq regroupements de sens. Le mot al-nafs (l'ame, avec l'article defini) designe ici l'ame en tant qu'entite interieure qui porte l'identite de la personne. Le regroupement Souffle/Vie est philosophiquement proche — l'ame et le souffle sont lies car l'ame est ce qui anime le corps, comme le souffle. La distinction est : le souffle est l'element physique qui maintient la vie (respiration, souffle vital), tandis que l'ame est l'entite interieure qui porte la conscience, les desirs, l'identite. Dans le contexte du verset, c'est l'ame en tant qu'entite consciente qui est interpellee, pas le souffle physique. L'ame peut etre « sereine » — un souffle ne peut pas etre « serein ».",
        axe1_verset: "Le mot al-nafs est precede de ya ayyatuha (o toi) — un vocatif qui interpelle directement l'ame. Le champ lexical est celui de l'interpellation personnelle et intime. L'ame est qualifiee de al-mutma'inna (la sereine) — cette qualification montre qu'on parle de l'entite interieure qui peut ressentir la serenite, pas du souffle physique. Le verset est une adresse directe a l'ame, ce qui implique que l'ame a une conscience, une identite, une capacite a recevoir une parole.",
        axe2_voisins: "Le verset 26 parlait des liens et du chatiment — le verset 27 bascule brutalement vers la douceur et la paix. Ce contraste est le pivot central de la fin de la sourate. Les versets 25-26 decrivaient le sort des defaillants, les versets 27-30 decrivent le sort de l'ame sereine. Le changement de ton est total : du chatiment a l'interpellation bienveillante, des liens a l'invitation au retour.",
        axe3_sourate: "La sourate 89 est construite sur une opposition : les civilisations orgueilleuses (v6-13), l'humain attache aux biens (v15-20), le chatiment (v25-26) d'un cote — et de l'autre, l'ame sereine (v27-30). L'ame sereine est l'antithese de tout ce qui precede. Elle n'est pas attachee aux biens, elle n'a pas transgresse, elle n'est pas enchainee. Le mot nafs est le meme mot utilise pour decrire l'etre humain en general — ici, c'est une ame particuliere, celle qui a atteint la serenite.",
        axe4_coherence: "Le Coran utilise nafs de maniere constante pour designer l'entite interieure de l'etre humain. En 91:7, « par l'ame (nafs) et ce qui l'a faconnee ». En 12:53, « l'ame (nafs) est tres incitative au mal ». En 75:2, « par l'ame qui se blame ». Le Coran distingue trois etats de l'ame : incitative au mal (ammara), qui se blame (lawwama), et sereine (mutma'inna, 89:27). L'ame sereine est le stade le plus eleve — celle qui a depasse les tentations et le doute pour atteindre la paix interieure.",
        axe5_frequence: "L'ame sereine est le modele du khalifa accompli — celui qui a rempli sa mission avec succes. La serenite n'est pas l'absence d'epreuve mais le resultat d'un parcours ou l'ame a choisi la justice, la generosite, et la responsabilite. L'ame sereine est l'antithese de l'humain des versets 15-20 qui croit que l'honneur ou l'humiliation sont une fin en soi."
      },
      'Souffle/Vie': {
        status: 'probable',
        senses: ['souffle', 'respirer', 'soulagement'],
        proof_ctx: "Le souffle est l'element physique qui anime le corps. Le souffle et l'ame sont lies etymologiquement — nafs vient de l'idee de souffler, de respirer. Mais dans le contexte de l'interpellation « o toi, l'ame sereine », c'est l'entite consciente qui est adressee, pas le phenomene physique de la respiration. La distinction philosophique est : le souffle est un processus physique (l'air entre et sort), l'ame est une entite consciente (elle pense, elle ressent, elle choisit). On peut parler a une ame — on ne parle pas a un souffle.",
        axe1_verset: "Le vocatif ya ayyatuha (o toi) s'adresse a un etre conscient. Le souffle physique n'a pas de conscience et ne peut pas etre interpelle. La qualification al-mutma'inna (la sereine) decrit un etat interieur de paix — un souffle peut etre calme, mais « serein » implique une conscience qui a atteint la paix. Le champ lexical pointe vers l'entite consciente, pas le phenomene physique.",
        axe2_voisins: "Les versets suivants (28-30) demandent a cette entite de « retourner vers ton seigneur, satisfaite et agreee » — seule une entite consciente peut retourner, etre satisfaite, et etre agreee. Un souffle ne peut pas retourner vers un seigneur avec satisfaction.",
        axe3_sourate: "La sourate oppose des comportements humains (conscients, volontaires) a leurs consequences. L'ame sereine est celle dont les comportements ont ete justes — c'est un bilan de conscience, pas un etat physique.",
        axe4_coherence: "Le Coran utilise nafs dans les trois etats (ammara, lawwama, mutma'inna) — les trois decrivent des etats de conscience, pas des etats de respiration. Le souffle est plutot designe par ruh dans le Coran.",
        axe5_frequence: "La mission du khalifa est accomplie par une ame consciente, pas par un souffle physique. La serenite est un accomplissement moral, pas une frequence respiratoire."
      },
      'Corps/Anatomie': { status: 'nul', senses: ['sang'], proof_ctx: "Sens physique isole, hors sujet dans le contexte de l'interpellation d'une entite consciente." },
      'Sens isolé/Oeil': { status: 'nul', senses: ['oeil mauvais'], proof_ctx: "Hors sujet." },
      'Sens isolé/Quantité': { status: 'nul', senses: ['quantité'], proof_ctx: "Hors sujet." }
    }
  }, 2);

  // tmn (id=2249) — ٱلْمُطْمَئِنَّةُ — participe actif (forme VIII?)
  await upsertVWA(6020, 'tmn', 'être serein', {
    sense_chosen: 'être serein',
    concept_chosen: 'Sérénité/Apaisement',
    concepts: {
      'Sérénité/Apaisement': {
        status: 'retenu',
        senses: ['rassurer', 'être serein'],
        proof_ctx: "La racine T-m-'-n n'a qu'un seul regroupement de sens, tout entier consacre a l'idee de serenite, d'apaisement, de tranquillite interieure. Le mot al-mutma'inna est un participe actif (une forme qui dit que l'ame FAIT l'action de maniere continue) — l'ame est activement sereine, elle a atteint cet etat et s'y maintient. La serenite n'est pas un etat passif subi mais un etat actif atteint par l'ame elle-meme. C'est un etat interieur, permanent et profond — pas une emotion passagere mais une paix qui s'est installee dans l'ame apres un parcours.",
        axe1_verset: "Le mot al-mutma'inna qualifie al-nafs (l'ame) comme adjectif epithete. Le champ lexical est celui de la paix interieure et de l'interpellation bienveillante. La serenite est la qualite definissante de cette ame — c'est ce qui la distingue des autres ames (l'ame incitative au mal, l'ame qui se blame). Le participe actif avec l'article defini (al-mutma'inna) indique un etat stable et reconnu, pas un moment de calme passager.",
        axe2_voisins: "Le verset 26 parlait de liens et de chatiment — le verset 27 est un contraste total. L'ame sereine est l'antithese de l'enchaine. Les versets 28-30 decrivent la recompense de cette ame : retourner vers le seigneur, entrer parmi les devoues, entrer dans le jardin. La serenite est la condition prealable a cette recompense — c'est parce que l'ame est sereine qu'elle merite le retour.",
        axe3_sourate: "La sourate 89 est construite pour aboutir a ce moment : apres les civilisations detruites, les comportements humains defaillants, le chatiment incomparable — voici l'ame sereine. La serenite est la reponse a tout ce qui precede. L'ame qui a refuse l'accumulation egoiste, qui a honore l'orphelin et nourri le pauvre, est celle qui a atteint la serenite.",
        axe4_coherence: "Le Coran utilise la racine T-m-'-n dans d'autres contextes d'apaisement. En 13:28, « c'est par le rappel de Dieu que les coeurs s'apaisent (tatma'innu) ». En 2:260, Abraham demande l'apaisement de son coeur (li-yatma'inna qalbi). La serenite est donc un etat que l'on atteint par la connaissance et la certitude — elle n'est pas innee mais acquise. L'ame sereine de 89:27 est celle qui a atteint cette certitude.",
        axe5_frequence: "La serenite est l'accomplissement ultime du khalifa — celui qui a rempli sa mission de justice et de civilisation atteint la paix interieure. La serenite n'est pas l'absence de problemes mais la certitude d'avoir agi justement. C'est l'etat final du khalifa accompli, le contraire de l'angoisse de celui qui n'a rien avance pour sa vie (v24)."
      }
    }
  }, 3);

  // VA verset 27
  await upsertVA(6020, {
    segments: [
      { fr: 'O toi', pos: 'VOC', phon: 'yā ayyatuhā', arabic: 'يَـٰٓأَيَّتُهَا', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: "l'ame", pos: 'N', phon: 'an-nafs', arabic: 'ٱلنَّفْسُ', word_key: 'nfs', is_particle: false, sense_retenu: 'âme', position: 2 },
      { fr: 'sereine', pos: 'ADJ', phon: "al-mutma'inna", arabic: 'ٱلْمُطْمَئِنَّةُ', word_key: 'tmn', is_particle: false, sense_retenu: 'être serein', position: 3 }
    ],
    translation_arab: "O toi, l'ame sereine !",
    full_translation: "Ô toi, âme apaisée",
    translation_explanation: `§DEMARCHE§
Le verset commence par **ya ayyatuha** (يَـٰٓأَيَّتُهَا), une formule d'interpellation directe (vocatif). Le ya est la particule d'appel, ayyatuha est la forme feminine de « celle-ci ». Cette construction interpelle directement l'ame — c'est une adresse personnelle et intime, pas une description a la troisieme personne.

Le mot **al-nafs** (ٱلنَّفْسُ) est le nom defini (avec l'article al-) qui designe l'ame, l'entite interieure qui porte la conscience et l'identite de la personne. D'apres les sources etymologiques, la racine n-f-s lie l'ame au souffle — l'ame est ce qui anime le corps, ce qui lui donne vie et conscience. Le nom est au feminin en arabe, d'ou la forme feminine de l'interpellation.

Le mot **al-mutma'inna** (ٱلْمُطْمَئِنَّةُ) est un participe actif (une forme qui dit que l'ame accomplit activement l'action d'etre sereine). D'apres les sources etymologiques, la racine T-m-'-n signifie etre serein, etre apaise, trouver la tranquillite. Le participe actif indique que la serenite est un etat que l'ame maintient activement — ce n'est pas un calme impose de l'exterieur mais une paix interieure que l'ame a atteinte par elle-meme.

Le verset est remarquablement court (trois mots de contenu) mais dense : il interpelle directement l'ame et la qualifie par sa serenite. Le contraste avec les versets precedents (chatiment, liens) est saisissant — on passe du registre de la punition a celui de la bienveillance.

§JUSTIFICATION§
**ame** — Le sens retenu est « ame » du regroupement Ame/Etre. Le mot « ame » est choisi car il designe l'entite interieure consciente qui porte l'identite. L'alternative « soi-meme » est trop reflexif pour un vocatif (on ne dit pas « o toi, le soi-meme »). L'alternative « personne » est trop generique. L'alternative « esprit » serait acceptable mais « ame » est plus courant en francais pour traduire nafs dans un contexte d'interpellation.

**sereine** — Le sens retenu est « etre serein » du regroupement Serenite/Apaisement. Le mot « sereine » est choisi car il decrit un etat de paix profonde et durable. L'alternative « rassurer » est un verbe transitif (on rassure quelqu'un d'autre) qui ne convient pas pour un adjectif qualificatif. L'alternative « apaisee » (choix de Hamidullah) implique que l'ame a ete apaisee par un agent exterieur, ce qui contredit le participe actif — l'ame EST sereine activement, elle n'a pas ete apaisee passivement.

§CRITIQUE§
**sereine vs apaisee** — Hamidullah traduit « ame apaisee ». Le mot « apaisee » est un participe passe passif — il dit que l'ame a ete apaisee par quelqu'un ou quelque chose d'exterieur. Mais le mot arabe al-mutma'inna est un participe actif — l'ame est sereine par elle-meme, elle maintient activement cet etat de paix. La difference est significative : « apaisee » fait de l'ame un objet passif qui recoit la paix, « sereine » fait de l'ame un sujet actif qui a atteint et maintient la paix. L'etymologie pointe vers la deuxieme lecture.`
  });
  console.log('  v27 done\n');

  // ============================================================
  // VERSET 28 (6021): ٱرْجِعِىٓ إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً
  // "Retourne vers ton seigneur, satisfaite et agreee"
  // ============================================================
  console.log('--- VERSET 28 ---');

  // rje (id=336) — ٱرْجِعِىٓ — imperatif feminin
  await upsertVWA(6021, 'rje', 'retourner', {
    sense_chosen: 'retourner',
    concept_chosen: 'Retour/Réversion',
    concepts: {
      'Retour/Réversion': {
        status: 'retenu',
        senses: ['retourner', 'revenir', 'réverter', 'faire revenir', 'renvoyer'],
        proof_ctx: "La racine r-j-' possede cinq regroupements de sens. Le sens Retour/Reversion est retenu car le verbe irji'i (imperatif feminin) commande a l'ame de retourner vers son seigneur — c'est un mouvement de retour, un retour a l'origine. Le regroupement Pluie/Renouvellement decrit le retour de la pluie apres la secheresse, ce qui est une extension metaphorique du retour mais ne correspond pas au contexte d'un retour volontaire vers le seigneur. Le regroupement Repetition decrit l'acte de refaire — ce n'est pas un retour spatial mais une reprise. La distinction philosophique est : le retour est un mouvement directionnel vers un point d'origine, la repetition est un recommencement. L'ame retourne vers son seigneur — elle ne repete pas quelque chose.",
        axe1_verset: "Le verbe irji'i (retourne !) est un imperatif feminin qui s'adresse a l'ame du verset 27. Le complement ila rabbiki (vers ton seigneur) donne la direction du retour. Le champ lexical est celui du mouvement de retour : l'ame quitte le lieu ou elle se trouvait (la vie terrestre, le jugement) pour retourner vers son point d'origine (le seigneur). Les deux qualificatifs radiya et mardiyya (satisfaite et agreee) decrivent l'etat de l'ame pendant ce retour — elle ne retourne pas contrainte mais satisfaite.",
        axe2_voisins: "Le verset 27 interpellait l'ame sereine. Le verset 28 lui donne son instruction : retourner. Les versets 29-30 completeront l'instruction : entrer parmi les devoues et dans le jardin. La sequence est : interpellation (v27) → direction (v28) → destination (v29-30). Le retour est l'etape intermediaire entre la reconnaissance de la serenite et la recompense finale.",
        axe3_sourate: "La sourate 89 trace un parcours : de la terre (v15-20) a l'aplatissement (v21) au jugement (v22-26) au retour de l'ame (v28). Le retour de l'ame vers le seigneur est la conclusion positive de ce parcours — apres toutes les epreuves, l'ame sereine retourne a son point d'origine. Le theme du retour boucle la sourate : les civilisations ne sont pas revenues (elles ont ete detruites), mais l'ame sereine, elle, revient.",
        axe4_coherence: "Le Coran utilise la racine r-j-' de maniere constante pour le retour a Dieu. En 2:156, « nous sommes a Dieu et c'est vers lui que nous retournons (raji'un) ». En 96:8, « vers ton seigneur est le retour (al-ruj'a) ». Le retour a Dieu est un motif fondamental du Coran — le verset 89:28 s'inscrit dans cette coherence en commandant a l'ame de faire ce retour.",
        axe5_frequence: "Le retour du khalifa vers celui qui l'a envoye est l'aboutissement de la mission. Le khalifa a ete envoye sur terre pour une mission — quand la mission est terminee, il retourne vers celui qui l'a confie. Le retour satisfait et agree est le signe d'une mission accomplie."
      },
      'Pluie/Renouvellement': { status: 'nul', senses: ['pluie'], proof_ctx: "Le retour de la pluie est une extension metaphorique du retour, mais le verset parle du retour de l'ame vers le seigneur, pas de pluie." },
      'Répétition': { status: 'nul', senses: ['répéter', 'réponse'], proof_ctx: "La repetition est un recommencement, pas un retour spatial. Le verset decrit un mouvement directionnel (vers le seigneur), pas une reprise." },
      'Sens isolé/Profit': { status: 'nul', senses: ['profit'], proof_ctx: "Hors sujet." },
      'Sens isolé/Ruminer': { status: 'nul', senses: ['ruminer'], proof_ctx: "Hors sujet." }
    }
  }, 1);

  // rdw (id=812) — رَاضِيَةً (participe actif) et مَّرْضِيَّةً (participe passif)
  await upsertVWA(6021, 'rdw', 'être satisfait', {
    sense_chosen: 'être satisfait',
    concept_chosen: 'Satisfaction/Agrément',
    concepts: {
      'Satisfaction/Agrément': {
        status: 'retenu',
        senses: ['être satisfait', 'agréer', 'approuver', 'consentir'],
        proof_ctx: "La racine r-d-w possede deux regroupements de sens. Satisfaction/Agrement est retenu car les deux formes du verset (radiya = participe actif, mardiyya = participe passif) expriment la double dimension de la satisfaction : l'ame est satisfaite (elle-meme eprouve la satisfaction) ET elle est agreee (le seigneur la trouve satisfaisante). Le regroupement Choix/Preference decrit l'acte de choisir pour soi, ce qui est une extension de la satisfaction mais ne correspond pas au contexte ou il s'agit d'un etat de contentement mutuel, pas d'un choix. La distinction philosophique est : la satisfaction est un etat interieur de contentement, le choix est un acte de selection. L'ame est dans un etat de contentement, elle ne fait pas un choix.",
        axe1_verset: "Le mot radiya (رَاضِيَةً) est un participe actif feminin (une forme qui dit que l'ame FAIT activement l'action d'etre satisfaite). Le mot mardiyya (مَّرْضِيَّةً) est un participe passif feminin (une forme qui dit que l'ame SUBIT l'agrement — elle est agreee par un autre). Le verset place les deux cote a cote : satisfaite ET agreee. Le champ lexical est celui de la reciprocite : l'ame est contente de son seigneur, et le seigneur est content d'elle. Cette double satisfaction est la marque d'une relation accomplie.",
        axe2_voisins: "Le verset 27 qualifiait l'ame de sereine. Le verset 28 ajoute deux nouvelles qualites : satisfaite et agreee. La progression est : serenite (etat interieur de paix) → satisfaction (etat interieur de contentement) → agrement (reconnaissance exterieure). Les versets 29-30 ajouteront la recompense concrete (entrer parmi les devoues, dans le jardin). La satisfaction mutuelle est le fondement de cette recompense.",
        axe3_sourate: "La sourate opposait l'humain insatisfait (v15-16 : « mon seigneur m'a honore / m'a humilie ») a l'ame satisfaite. L'humain des versets 15-16 mesurait tout en termes de biens materiels — l'ame sereine mesure en termes de relation avec le seigneur. La satisfaction du verset 28 est l'antithese de la plainte des versets 15-16.",
        axe4_coherence: "Le Coran utilise la racine r-d-w pour decrire la satisfaction divine et humaine. En 5:119, « Dieu est satisfait (radiya) d'eux et ils sont satisfaits de Lui ». En 98:8, meme formule. La double forme (actif + passif) du verset 89:28 est un condense de cette reciprocite que le Coran developpe ailleurs. Le participe actif (l'ame est satisfaite) et le participe passif (l'ame est agreee) couvrent les deux directions de cette relation.",
        axe5_frequence: "La satisfaction mutuelle entre le khalifa et celui qui l'a envoye est le signe de la mission accomplie. Le khalifa est satisfait de ce qu'il a fait, et celui qui l'a envoye approuve ce qui a ete fait. C'est l'aboutissement ideal de la relation de delegation : confiance, action, et satisfaction reciproque."
      },
      'Choix/Préférence': {
        status: 'peu_probable',
        senses: ['choisir pour soi', 'rendre satisfait'],
        proof_ctx: "Le choix est un acte de selection — on choisit un objet ou une option. La satisfaction est un etat de contentement. Le verset decrit un etat (l'ame est satisfaite et agreee), pas un acte de selection. La distinction philosophique est : le choix est ponctuel et dirige vers un objet precis, la satisfaction est un etat durable et global. De plus, le participe passif mardiyya ne fonctionne pas avec le sens de choix — « etre choisie » n'est pas le meme que « etre agreee ». L'agrement est un etat de reconnaissance, pas une selection.",
        axe1_verset: "Les deux participes (actif et passif) decrivent des etats, pas des actes de choix. Le champ lexical de l'interpellation bienveillante pointe vers le contentement, pas vers la selection.",
        axe2_voisins: "Les versets suivants (29-30) decrivent des invitations a entrer — l'ame ne choisit pas, elle est invitee. Le registre est celui de l'accueil, pas de la selection.",
        axe3_sourate: "La sourate oppose l'insatisfaction terrestre (v15-16) a la satisfaction du retour. Le theme est le contentement, pas le choix.",
        axe4_coherence: "Les emplois coraniques de radiya/mardiyya sont constamment dans le registre de la satisfaction et de l'agrement, pas du choix (voir 5:119, 98:8).",
        axe5_frequence: "La mission du khalifa s'acheve par la satisfaction, pas par un choix supplementaire. Le temps des choix est passe — reste l'etat final de contentement."
      }
    }
  }, 4);

  // VA verset 28
  await upsertVA(6021, {
    segments: [
      { fr: 'Retourne', pos: 'V', phon: "irji'ī", arabic: 'ٱرْجِعِىٓ', word_key: 'rje', is_particle: false, sense_retenu: 'retourner', position: 1 },
      { fr: 'vers', pos: 'P', phon: 'ilā', arabic: 'إِلَىٰ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'ton seigneur', pos: 'N', phon: 'rabbiki', arabic: 'رَبِّكِ', word_key: 'rbb', is_particle: false, sense_retenu: 'seigneur', position: 3 },
      { fr: 'satisfaite', pos: 'N', phon: 'rāḍiya', arabic: 'رَاضِيَةً', word_key: 'rdw', is_particle: false, sense_retenu: 'être satisfait', position: 4 },
      { fr: 'et agreee', pos: 'N', phon: 'marḍiyya', arabic: 'مَّرْضِيَّةً', word_key: 'rdw', is_particle: false, sense_retenu: 'agréer', position: 5 }
    ],
    translation_arab: "Retourne vers ton seigneur, satisfaite et agreee",
    full_translation: "retourne vers ton Seigneur, satisfaite et agréée",
    translation_explanation: `§DEMARCHE§
Le verbe **irji'i** (ٱرْجِعِىٓ) est un imperatif feminin (une forme qui donne un ordre a une personne de genre feminin). L'ordre s'adresse a l'ame (nafs, mot feminin en arabe) du verset 27. D'apres les sources etymologiques, la racine r-j-' signifie retourner, revenir. L'imperatif donne un ordre positif : retourne ! Ce n'est pas une contrainte mais une invitation — l'ame est satisfaite et agreee, elle retourne de son plein gre.

La preposition **ila** (إِلَىٰ) signifie « vers » et donne la direction du retour. Le complement **rabbiki** (رَبِّكِ) est le seigneur avec le suffixe possessif feminin -ki (ton, au feminin, car il s'adresse a l'ame). Le retour se fait vers le seigneur — l'ame retourne vers celui qui l'a envoyee.

Le mot **radiya** (رَاضِيَةً) est un participe actif feminin (une forme qui dit que l'ame FAIT activement l'action d'etre satisfaite, de maniere continue). L'ame est satisfaite — elle eprouve le contentement interieur. Ce n'est pas une satisfaction ponctuelle mais un etat durable.

Le mot **mardiyya** (مَّرْضِيَّةً) est un participe passif feminin (une forme qui dit que l'ame SUBIT l'action d'etre agreee). L'ame est agreee — quelqu'un d'autre (le seigneur) la trouve satisfaisante. Le passif indique que l'agrement vient de l'exterieur, pas de l'ame elle-meme.

La juxtaposition des deux participes (actif + passif) cree une reciprocite remarquable : l'ame est satisfaite (actif, elle eprouve) ET agreee (passif, elle recoit). C'est une satisfaction mutuelle — l'ame est contente de son seigneur, et le seigneur est content d'elle.

§JUSTIFICATION§
**retourne** — Le sens retenu est « retourner » du regroupement Retour/Reversion. Le verbe « retourner » est le plus fidele a l'imperatif irji'i. L'alternative « revenir » est quasi-synonyme mais « retourner » insiste plus sur le mouvement de retour vers un point d'origine.

**satisfaite** — Le sens retenu est « etre satisfait » du regroupement Satisfaction/Agrement. Le mot « satisfaite » est le participe actif en francais qui correspond exactement au participe actif arabe radiya. L'alternative « contente » serait trop familier. L'alternative « agreee » est reservee pour le deuxieme mot (mardiyya).

**agreee** — Le sens retenu est « agreer » du meme regroupement. Le mot « agreee » est le participe passif en francais qui correspond au participe passif arabe mardiyya. L'alternative « approuvee » serait acceptable mais « agreee » est plus proche de « agrement » qui est le substantif naturel.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. Hamidullah traduit « satisfaite et agreee » — notre traduction est identique sur ces deux mots. La seule difference est « retourne » vs « reviens » — les deux sont acceptables. Ce verset est un cas ou les traductions courantes sont fideles au texte arabe.`
  });
  console.log('  v28 done\n');

  // ============================================================
  // VERSET 29 (6022): فَٱدْخُلِى فِى عِبَـٰدِى
  // "Alors entre parmi ceux qui me sont devoues"
  // ============================================================
  console.log('--- VERSET 29 ---');

  // dxl (id=567) — فَٱدْخُلِى — imperatif feminin
  await upsertVWA(6022, 'dxl', 'entrer', {
    sense_chosen: 'entrer',
    concept_chosen: 'Entrée/Pénétration',
    concepts: {
      'Entrée/Pénétration': {
        status: 'retenu',
        senses: ['entrer', 'pénétrer', 'accéder', 'introduire'],
        proof_ctx: "La racine d-x-l possede deux regroupements de sens. Entree/Penetration est retenu car le verbe udkhuli (imperatif feminin) commande a l'ame d'entrer — c'est un mouvement de passage d'un espace a un autre. Le regroupement Ressource (revenu) est un sens derivant de l'idee de ce qui entre (dans les caisses, les revenus), mais il est hors sujet ici. La distinction est : l'entree est un mouvement spatial, la ressource est une entree financiere.",
        axe1_verset: "Le verbe udkhuli (entre !) est suivi de fi (dans/parmi) et de 'ibadi (mes devoues). Le champ lexical est celui de l'inclusion — l'ame entre dans un groupe, elle rejoint une communaute. L'entree est un passage d'un etat a un autre : l'ame quitte l'isolement du jugement pour entrer dans le groupe des devoues. La particule fa (alors) lie ce verset au precedent — le retour vers le seigneur (v28) est suivi de l'entree parmi les devoues.",
        axe2_voisins: "Le verset 28 commandait le retour. Le verset 29 commande l'entree parmi les devoues. Le verset 30 commandera l'entree dans le jardin. La progression est : retour (v28) → integration dans la communaute (v29) → acces au lieu (v30). Chaque etape rapproche l'ame de sa recompense finale.",
        axe3_sourate: "La sourate opposait l'isolement egoiste de l'humain (v17-20 : il n'honore pas l'orphelin, ne nourrit pas le pauvre) et l'entree dans la communaute des devoues. L'ame sereine n'est pas recompensee par la solitude mais par l'inclusion — elle entre parmi d'autres ames qui ont aussi rempli leur mission.",
        axe4_coherence: "Le Coran utilise dakhala pour les entrees dans des lieux ou des etats significatifs. En 39:73, « entrez-y en paix ». En 110:2, « les gens entrent dans la religion de Dieu ». L'entree est toujours un passage vers un etat meilleur. Le verset 89:29 s'inscrit dans cette coherence.",
        axe5_frequence: "L'entree parmi les devoues est l'integration du khalifa accompli dans la communaute de ceux qui ont reussi leur mission. Le khalifa n'est pas seul — il rejoint un groupe, une communaute de pairs. La mission du khalifa est collective, et sa recompense l'est aussi."
      },
      'Ressource': { status: 'nul', senses: ['revenu'], proof_ctx: "Le sens de revenu financier est hors sujet dans le contexte d'une entree physique parmi un groupe." }
    }
  }, 1);

  // ebd (id=259) — عِبَـٰدِى — nom pluriel avec suffixe possessif
  await upsertVWA(6022, 'ebd', 'servir', {
    sense_chosen: 'servir',
    concept_chosen: 'Adoration/Dévotion',
    concepts: {
      'Adoration/Dévotion': {
        status: 'retenu',
        senses: ['adorer', 'servir', 'vouer un culte', 'se dévouer', 'dévotion', 'adoration'],
        proof_ctx: "La racine '-b-d possede cinq regroupements de sens. Adoration/Devotion est retenu car le mot 'ibadi (mes devoues, mes serviteurs devoues) designe des personnes qui ont choisi volontairement de servir le seigneur. Le regroupement Servitude/Esclavage partage des sens proches (serviteur, esclave) mais sa nature philosophique est differente : la servitude est un etat impose, une contrainte exterieure. La devotion est un choix interieur, un engagement volontaire. Dans le contexte du verset, l'ame sereine est invitee a entrer parmi des personnes qui ont choisi — pas des esclaves contraints. La distinction philosophique est : le devoue CHOISIT de servir par amour et conviction, l'esclave SUBIT le service par contrainte. Le mot 'ibadi avec le possessif « mes » (de Dieu) evoque une relation d'appartenance volontaire, pas une servitude imposee.",
        axe1_verset: "Le mot 'ibadi (mes devoues) est le complement du verbe udkhuli fi (entre parmi). Le champ lexical est celui de l'inclusion dans un groupe de personnes choisies. Le suffixe possessif -i (mes) cree un lien personnel entre le seigneur et ses devoues — ce sont « mes » devoues, ceux qui m'appartiennent par le lien de la devotion. L'ame sereine est invitee a rejoindre ce groupe — c'est un honneur, pas une assignation.",
        axe2_voisins: "Le verset 28 parlait de la satisfaction mutuelle entre l'ame et le seigneur. Le verset 29 transforme cette satisfaction en appartenance — l'ame entre parmi ceux qui partagent cette meme relation de satisfaction avec le seigneur. Le verset 30 ouvrira l'acces au jardin. L'entree parmi les devoues precede l'entree dans le jardin — la communaute avant le lieu.",
        axe3_sourate: "La sourate 89 opposait l'humain egoiste (v17-20 : il accumule, il ne partage pas) et les devoues du seigneur. L'ame sereine est recompensee par l'integration dans la communaute — l'antithese de l'egoisme. Les devoues sont ceux qui ont fait le choix contraire : servir plutot qu'accumuler, partager plutot que garder.",
        axe4_coherence: "Le Coran utilise 'ibad dans de nombreux contextes positifs. En 25:63, « les serviteurs ('ibad) du Misericordieux sont ceux qui marchent avec humilite ». En 76:6, « une source ou boivent les serviteurs ('ibad) de Dieu ». Le mot 'ibad dans le Coran designe habituellement des personnes en relation positive et volontaire avec Dieu. Le contexte de 89:29 est celui d'une recompense — les 'ibad sont un groupe d'honneur.",
        axe5_frequence: "Les devoues sont les khalifas qui ont accompli leur mission. L'ame sereine rejoint cette communaute de succes — les devoues sont ceux qui ont choisi la justice, la generosite, la responsabilite. L'entree parmi eux est la reconnaissance d'avoir rempli la mission du khalifa."
      },
      'Servitude/Esclavage': {
        status: 'probable',
        senses: ['serviteur', 'esclave', 'être humain', 'asservir', 'rendre soumis', 'aplanir un chemin'],
        proof_ctx: "Le sens Servitude/Esclavage decrit la relation de soumission et de service. Le mot 'abd (serviteur) vient effectivement de cette racine, et 'ibad en est le pluriel. La distinction avec Adoration/Devotion est fine mais importante : la servitude decrit le statut (etre serviteur), la devotion decrit l'attitude (choisir de servir). Dans le contexte d'une recompense (l'ame est invitee a entrer parmi les 'ibad), c'est l'attitude volontaire qui est mise en avant, pas le statut de soumission. Le Coran ne presente pas l'entree parmi les 'ibad comme une degradation mais comme un honneur — ce qui pointe vers la devotion choisie plutot que la servitude subie.",
        axe1_verset: "Le contexte est une invitation bienveillante (fa-udkhuli fi = alors entre parmi). Le registre est celui de l'honneur et de l'inclusion. Si les 'ibad etaient des esclaves au sens de la servitude, l'invitation n'aurait pas la meme tonalite — entrer parmi les esclaves n'est pas un honneur, entrer parmi les devoues en est un.",
        axe2_voisins: "Le verset 28 decrivait une ame satisfaite et agreee — la satisfaction mutuelle est incompatible avec la servitude contrainte. Les 'ibad sont satisfaits de servir, ce qui confirme le caractere volontaire de leur service.",
        axe3_sourate: "La sourate oppose l'accumulation egoiste et la devotion genereuse. Les 'ibad sont ceux qui ont choisi la generosite — la devotion, pas la contrainte.",
        axe4_coherence: "Le Coran utilise 'ibad dans des contextes d'honneur (25:63, 76:6) — pas dans des contextes de contrainte. La coherence confirme le sens positif et volontaire.",
        axe5_frequence: "La devotion est un choix du khalifa — la servitude est une contrainte. La mission du khalifa implique le libre arbitre, ce qui rend la devotion plus coherente que la servitude."
      },
      'Sens isolé/Être': { status: 'nul', senses: ['être en colère'], proof_ctx: "Hors sujet." },
      'Sens isolé/Mépriser': { status: 'nul', senses: ['mépriser'], proof_ctx: "Hors sujet — incompatible avec le contexte de recompense." },
      'Sens isolé/Colérique': { status: 'nul', senses: ['colérique'], proof_ctx: "Hors sujet." }
    }
  }, 3);

  // VA verset 29
  await upsertVA(6022, {
    segments: [
      { fr: 'Alors', pos: 'CONJ', phon: 'fa', arabic: 'فَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'entre', pos: 'V', phon: 'udkhulī', arabic: 'ٱدْخُلِى', word_key: 'dxl', is_particle: false, sense_retenu: 'entrer', position: 1 },
      { fr: 'parmi', pos: 'P', phon: 'fī', arabic: 'فِى', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'ceux qui me sont devoues', pos: 'N', phon: "'ibādī", arabic: 'عِبَـٰدِى', word_key: 'ebd', is_particle: false, sense_retenu: 'servir', position: 3 }
    ],
    translation_arab: "Alors entre parmi ceux qui me sont devoues",
    full_translation: "entre parmi Mes serviteurs",
    translation_explanation: `§DEMARCHE§
La particule **fa** (فَ) est une conjonction de consequence — « alors ». Elle lie l'invitation a l'instruction du verset precedent : retourne vers ton seigneur (v28), ALORS entre parmi mes devoues (v29).

Le verbe **udkhuli** (ٱدْخُلِى) est un imperatif feminin (une forme qui donne un ordre a une personne de genre feminin). L'ordre s'adresse toujours a l'ame (nafs) du verset 27. D'apres les sources etymologiques, la racine d-x-l signifie entrer, penetrer, passer d'un espace a un autre.

La preposition **fi** (فِى) signifie ici « parmi, au milieu de ». L'ame entre dans un groupe, pas dans un lieu — la preposition fi avec un groupe de personnes indique l'integration.

Le mot **'ibadi** (عِبَـٰدِى) est le pluriel de 'abd avec le suffixe possessif de la premiere personne (mes). D'apres les sources etymologiques, la racine '-b-d couvre deux realites : la servitude (etre serviteur par statut) et la devotion (choisir de servir par engagement). Le mot 'ibad dans le Coran designe habituellement ceux qui sont en relation volontaire avec Dieu — les devoues, pas les esclaves. Le suffixe « mes » (de Dieu) cree un lien d'appartenance personnelle : ce sont MES devoues, ceux qui m'ont choisi et que j'ai choisis.

§JUSTIFICATION§
**entre** — Le sens retenu est « entrer » du regroupement Entree/Penetration. Le verbe « entrer » est le plus direct et naturel pour l'imperatif arabe udkhuli.

**ceux qui me sont devoues** — Le sens retenu est « servir » du regroupement Adoration/Devotion. L'expression « ceux qui me sont devoues » est choisie plutot que « mes serviteurs » pour rendre la dimension volontaire du service. Le mot « serviteur » (sous Servitude/Esclavage) implique un statut impose, tandis que « ceux qui me sont devoues » exprime un choix personnel d'engagement. L'alternative « mes adorateurs » serait acceptable mais ajoute une dimension cultuelle qui n'est pas necessairement dans le texte. L'alternative « mes esclaves » est ecartee car elle contredit le contexte de recompense et de satisfaction mutuelle.

§CRITIQUE§
**ceux qui me sont devoues vs mes serviteurs** — Hamidullah traduit « Mes serviteurs ». Le mot « serviteur » en francais evoque une relation de subordination — quelqu'un qui sert un maitre. Le texte arabe utilise 'ibadi, un mot qui vient de la racine '-b-d dont le sens premier est « servir, se devouer ». La nuance est : le « serviteur » sert par obligation ou par statut, le « devoue » sert par choix et par amour. Dans un contexte de recompense (l'ame sereine, satisfaite et agreee est invitee a entrer parmi eux), le sens de devotion volontaire est plus coherent que celui de service impose. Les traductions courantes perdent cette nuance en utilisant « serviteurs » qui evoque la subordination plutot que la devotion.`
  });
  console.log('  v29 done\n');

  // ============================================================
  // VERSET 30 (6023): وَٱدْخُلِى جَنَّتِى
  // "Et entre dans mon jardin"
  // ============================================================
  console.log('--- VERSET 30 ---');

  // jnn (id=394) — جَنَّتِى — nom avec suffixe possessif
  await upsertVWA(6023, 'jnn', 'jardin', {
    sense_chosen: 'jardin',
    concept_chosen: 'Jardin/Paradis',
    concepts: {
      'Jardin/Paradis': {
        status: 'retenu',
        senses: ['jardin', 'paradis'],
        proof_ctx: "La racine j-n-n possede six regroupements de sens, tous lies a l'idee de cacher, de couvrir. Le jardin (janna) tire son nom du fait qu'il est couvert de vegetation dense — les arbres cachent le sol. Le sens Jardin/Paradis est retenu car le mot jannati (mon jardin) avec le suffixe possessif (de Dieu) designe le lieu de la recompense ultime. Le regroupement Dissimulation/Couverture decrit l'acte de cacher, ce qui est le sens etymologique premier de la racine — mais dans le contexte, c'est l'objet resultant (le jardin, lieu couvert de vegetation) qui est designe, pas l'acte de cacher. La distinction philosophique est : la dissimulation est un acte (cacher), le jardin est un lieu (l'endroit couvert). Les sens Etres caches (djinn), Folie, Bouclier et Embryon sont des extensions isolees hors sujet.",
        axe1_verset: "Le mot jannati (mon jardin) est le complement du verbe udkhuli (entre). Le champ lexical est celui de l'acces a un lieu — l'ame entre dans le jardin apres etre entree parmi les devoues (v29). Le suffixe possessif -i (mon) cree un lien personnel : c'est le jardin DE Dieu, un lieu qui lui appartient et qu'il ouvre a l'ame. Le verset est le dernier de la sourate — l'entree dans le jardin est la conclusion finale, la recompense ultime.",
        axe2_voisins: "Le verset 29 invitait l'ame a entrer parmi les devoues. Le verset 30 complete l'invitation : entre aussi dans mon jardin. La progression est : communaute (v29) puis lieu (v30). L'ame rejoint d'abord un groupe (les devoues) puis accede au lieu (le jardin). Les deux versets forment le dernier couple de la sourate, qui contraste avec le couple chatiment-liens (v25-26).",
        axe3_sourate: "La sourate 89 se termine par l'image du jardin — apres les destructions de civilisations, l'aplatissement de la terre, le chatiment et les liens, voici le jardin. Le contraste est total : la terre est aplatie (v21), mais le jardin est offert (v30). Le jardin represente tout ce que la terre a perdu : la vie, la beaute, la couverture vegetale. L'ame sereine recoit en recompense ce que le monde terrestre a perdu.",
        axe4_coherence: "Le Coran utilise janna de maniere constante pour le lieu de la recompense. En 2:35, « habite le jardin ». En 55:46, « pour celui qui craint la station devant son seigneur, deux jardins ». En 76:12, « il les recompensera par un jardin et de la soie ». Le jardin est le motif recurrent de la recompense divine. Le verset 89:30 s'inscrit dans cette coherence, avec la particularite du possessif « mon jardin » qui personnalise la recompense.",
        axe5_frequence: "Le jardin est la destination finale du khalifa qui a accompli sa mission. Le mot janna (lieu couvert, cache) evoque un lieu de protection et d'abondance — l'oppose de la terre aplatie. Le khalifa qui a choisi la justice et la generosite sur une terre difficile recoit un lieu de paix et d'abondance. La mission du khalifa commence sur la terre (v15-20) et aboutit au jardin (v30) — le parcours est boucle."
      },
      'Dissimulation/Couverture': {
        status: 'peu_probable',
        senses: ['cacher', 'couvrir'],
        proof_ctx: "La dissimulation est l'acte de cacher quelque chose. Le jardin est un lieu qui RESULTE de la couverture vegetale — il est le produit de l'acte de couvrir, pas l'acte lui-meme. Dans le verset, le mot jannati designe un lieu concret (entre dans mon jardin), pas un acte (entre dans mon action de cacher). La distinction philosophique est : la dissimulation est un processus, le jardin est un resultat. Le texte parle d'un lieu ou entrer, pas d'un acte a accomplir.",
        axe1_verset: "Le verbe udkhuli (entre) exige un complement de lieu — on entre dans un endroit, pas dans un acte. Le jardin est un lieu, la dissimulation est un acte. Le champ lexical impose le sens de lieu.",
        axe2_voisins: "Le verset 29 invitait a entrer parmi un groupe (les devoues). Le verset 30 invite a entrer dans un lieu (le jardin). Le parallelisme groupe-lieu confirme que jannati est un lieu.",
        axe3_sourate: "La sourate oppose la destruction de la terre (lieu) et la recompense du jardin (lieu). Le theme est spatial — les lieux terrestre et celeste.",
        axe4_coherence: "Le Coran utilise janna comme lieu de maniere quasi-exclusive. L'emploi comme acte de dissimulation est reserve a des contextes completement differents.",
        axe5_frequence: "Le lieu de recompense du khalifa est un jardin, pas un acte de dissimulation."
      },
      'Êtres cachés': { status: 'nul', senses: ['djinn'], proof_ctx: "Le mot jannati (avec tā' marbūṭa) est la forme feminine qui designe le jardin, pas la forme masculine jinn qui designe les etres caches." },
      'Sens isolé/Folie': { status: 'nul', senses: ['folie'], proof_ctx: "Hors sujet." },
      'Sens isolé/Bouclier': { status: 'nul', senses: ['bouclier'], proof_ctx: "Hors sujet." },
      'Sens isolé/Embryon': { status: 'nul', senses: ['embryon'], proof_ctx: "Hors sujet." }
    }
  }, 2);

  // VA verset 30
  await upsertVA(6023, {
    segments: [
      { fr: 'Et', pos: 'CONJ', phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'entre', pos: 'V', phon: 'udkhulī', arabic: 'وَٱدْخُلِى', word_key: 'dxl', is_particle: false, sense_retenu: 'entrer', position: 1 },
      { fr: 'dans mon jardin', pos: 'N', phon: 'jannatī', arabic: 'جَنَّتِى', word_key: 'jnn', is_particle: false, sense_retenu: 'jardin', position: 2 }
    ],
    translation_arab: "Et entre dans mon jardin",
    full_translation: "et entre dans Mon Paradis",
    translation_explanation: `§DEMARCHE§
La particule **wa** (وَ) coordonne cette instruction avec la precedente — « Et entre ». Les deux imperatifs (v29 : entre parmi mes devoues, v30 : entre dans mon jardin) se suivent comme deux volets d'une meme recompense.

Le verbe **udkhuli** (ٱدْخُلِى) est le meme imperatif feminin qu'au verset 29. L'ame recoit la meme instruction : entrer. Mais cette fois, l'entree est dans un lieu, pas dans un groupe.

Le mot **jannati** (جَنَّتِى) est un nom feminin (janna = jardin) avec le suffixe possessif -i (mon). D'apres les sources etymologiques, la racine j-n-n signifie cacher, couvrir. Le jardin (janna) est ainsi nomme parce que la vegetation y est si dense qu'elle couvre le sol — c'est un lieu cache sous les arbres. Le suffixe « mon » (de Dieu) personnalise le lieu : c'est le jardin personnel de Dieu, un espace qu'il reserve et offre a l'ame sereine.

Le verset est le dernier de la sourate 89. Il conclut le parcours de l'ame sereine par la recompense ultime : entrer dans le jardin de Dieu. La brievete du verset (trois mots seulement) renforce son impact — apres tous les developpements de la sourate, la conclusion est simple et directe.

§JUSTIFICATION§
**jardin** — Le sens retenu est « jardin » du regroupement Jardin/Paradis. Le mot « jardin » est choisi plutot que « paradis » pour rester fidele a l'etymologie. Le mot arabe janna signifie litteralement un jardin couvert de vegetation, un lieu de verdure et d'abondance. Le mot « paradis » en francais vient du persan pardis (enclos) et a acquis des connotations religieuses specifiques (le paradis chretien avec ses anges et ses nuages). « Jardin » preserve le sens concret et sensoriel du mot arabe : un lieu de vegetation, de fraicheur, d'ombre et d'eau. L'alternative « paradis » transformerait un lieu concret et sensoriel en concept religieux abstrait.

§CRITIQUE§
**jardin vs Paradis** — Hamidullah traduit « Mon Paradis » avec une majuscule. Le mot « Paradis » avec majuscule evoque un concept theologico-religieux charge de connotations chretiennes (le Paradis comme lieu de beatitude eternelle, oppose a l'Enfer). Le mot arabe janna est beaucoup plus concret — c'est un jardin, un endroit avec des arbres, de l'eau, de l'ombre. Le Coran decrit ce lieu de maniere sensorielle dans d'autres passages (47:15 : « des jardins sous lesquels coulent les ruisseaux, des fruits... »). Traduire par « jardin » plutot que « Paradis » permet au lecteur de voir le lieu tel que le texte le decrit — un espace de vie et de beaute, pas un concept abstrait. Le possessif « mon » est egalement significatif : Hamidullah met une majuscule (Mon) pour marquer le divin, mais le texte arabe utilise simplement le suffixe possessif -i qui est la forme courante de « mon ». Notre traduction garde la simplicite du texte.`
  });
  console.log('  v30 done\n');

  console.log('=== PIPELINE S89 v26-30 TERMINÉ ===');
})();
