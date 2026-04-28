// Pipeline Sourate 90 (Al-Balad) — Partie 2: Versets 6-10 (Étapes 3-4)
// Analyse des concepts sur 5 axes + traduction + segments
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  Updated VWA ${word_key} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  Error VWA ${word_key}:`, error.message);
    else console.log(`  Created VWA ${word_key} id=${data.id}`);
  }
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) { console.log(`  Daily SKIP (${count} exist) for id=${analysis_id}`); return; }
  const rows = french.map(fr => ({ analysis_id, sense, arabic, phon, french: fr }));
  await sb.from('word_daily').insert(rows);
  console.log(`  ✓ ${french.length} daily phrases for id=${analysis_id}`);
}

// ============================================================
// VERSET 90:6
// ============================================================
async function verse90_6() {
  console.log('\n=== VERSET 90:6 — يَقُولُ أَهْلَكْتُ مَالًا لُّبَدًا ===');
  const verse_id = 6029;

  // ---- QWL (قول) — id=307 — "dire" ----
  // Forme: verbe inaccompli 3MS yaqūlu (il dit)
  await upsertVWA(verse_id, 'qwl', 'dire', {
    sense_chosen: "dire",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        status: "retenu",
        senses: ["dire", "parler", "parole", "discours", "affirmer"],
        proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le verbe yaqūlu est un inaccompli de la racine q-w-l qui signifie émettre une parole, produire un discours. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qawl est l'acte de prononcer des mots articulés qui portent un sens. La parole est un acte extérieur et directionnel : elle sort de celui qui parle et atteint celui qui écoute. Ici, l'être humain profère une déclaration vantarde — il dit à voix haute ce qu'il prétend avoir fait. Distinction avec « Pensée/Avis » : la pensée reste intérieure, l'avis est une opinion formée dans l'esprit. Or le verbe yaqūlu décrit explicitement un acte de parole, pas une réflexion silencieuse. Le verset met en scène un discours prononcé, une déclaration publique de vantardise.",
        axe1_verset: "Le verset dit « il dit : j'ai dilapidé une richesse abondante ». Le verbe yaqūlu ouvre le discours direct de l'être humain. Le champ lexical est : dire + dilapider + richesse + abondance. La parole sert ici de véhicule à la vantardise : l'être humain se vante publiquement d'avoir dépensé sans compter. L'inaccompli (une forme qui exprime une action en cours ou habituelle) indique que cette vantardise est répétée, habituelle — il ne l'a pas dit une fois, il le dit et le redit. La parole est le moyen par lequel la prétention se manifeste dans le monde extérieur.",
        axe2_voisins: "Le verset 5 posait la question « Pense-t-il que personne ne peut rien contre lui ? ». Le verset 6 donne le contenu de cette arrogance : il dit avoir dilapidé une richesse abondante. Le verset 7 pose une deuxième question : pense-t-il que personne ne l'a vu ? La parole du verset 6 est encadrée par deux questions rhétoriques qui exposent l'absurdité de la prétention. Le « il dit » est la preuve concrète de l'arrogance dénoncée par les questions.",
        axe3_sourate: "La sourate 90 décrit l'être humain créé dans la difficulté (v4) qui se croit au-dessus de tout (v5-7) avant de lui rappeler les dons divins (v8-10) et la voie de la vertu (v11-20). La parole vantarde du verset 6 illustre la phase d'arrogance : l'être humain parle comme s'il était maître de ses biens, oubliant leur origine. Le « il dit » est le marqueur de la rupture entre la condition réelle (difficulté) et la perception faussée (toute-puissance).",
        axe4_coherence: "Le Coran utilise fréquemment yaqūlu pour introduire les paroles des arrogants et des négateurs. En 18:34, le propriétaire des deux jardins « dit à son compagnon » en se vantant de sa richesse. En 28:78, Qārūn « dit : on ne m'a donné cela qu'en raison d'un savoir que je possède ». Le schéma est récurrent : la parole vantarde précède la chute. Le verbe yaqūlu est le signal textuel de l'arrogance humaine dans le Coran.",
        axe5_frequence: "Le khalifa qui parle pour se vanter au lieu de reconnaître la source de ses biens trahit sa mission de justice. La parole vantarde est un détournement de la fonction du langage — au lieu de nommer les choses avec justesse (mission adamique de nommer, 2:31), il utilise la parole pour gonfler son ego. La vantardise verbale est le premier signe de la corruption du khalifa."
      },
      "Pensée/Avis": {
        status: "nul",
        senses: ["opinion", "avis", "doctrine"],
        proof_ctx: "Le verset utilise yaqūlu (il dit) qui est un acte de parole explicite, pas une pensée intérieure. Le contenu est un discours direct (« j'ai dilapidé... »), pas une opinion silencieuse."
      },
      "Sens isolé/Puissance": {
        status: "nul",
        senses: ["puissance"],
        proof_ctx: "La puissance n'a aucun rapport avec l'acte de prononcer des mots. Le verset décrit une parole, pas un exercice de force."
      },
      "Corps/Anatomie": {
        status: "nul",
        senses: ["troupeau"],
        proof_ctx: "Le sens de troupeau est un sens marginal qui n'a aucun rapport avec le contexte de déclaration vantarde."
      }
    }
  }, 1);

  // ---- HLK (هلك) — id=982 — "dilapider" ----
  // Forme: verbe accompli 1S forme IV ahlaktu (j'ai fait périr/dilapidé)
  await upsertVWA(verse_id, 'hlk', 'dilapider', {
    sense_chosen: "dilapider",
    concept_chosen: "Destruction/Anéantissement",
    concepts: {
      "Destruction/Anéantissement": {
        status: "retenu",
        senses: ["périr", "être détruit", "être perdu", "faire périr"],
        proof_ctx: "Le sens retenu est « Destruction/Anéantissement ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine h-l-k signifie périr, être détruit, être perdu. La forme IV (ahlaka) ajoute la causalité : faire périr, causer la destruction. Appliqué à la richesse (mālan), « faire périr la richesse » signifie la détruire en la dépensant — dilapider. La destruction est un acte extérieur, directionnel et achevé : la richesse sort de la possession de celui qui la dépense et disparaît. L'accompli (j'ai dilapidé) marque l'achèvement : la richesse a été entièrement consommée. Distinction avec « Gaspiller » : le gaspillage est une dépense inutile, alors que la destruction est plus large — elle inclut toute dépense qui fait disparaître la richesse, qu'elle soit utile ou non. L'être humain se vante d'avoir détruit une grande quantité de biens, le texte ne précise pas si cette dépense était utile ou gaspillée.",
        axe1_verset: "Le verset dit « j'ai dilapidé une richesse abondante ». Le verbe ahlaktu est un accompli (une forme qui exprime une action achevée dans le passé) à la première personne du singulier de la forme IV (une forme causative : « j'ai fait périr »). Le complément d'objet est mālan lubadan (une richesse abondante). Le champ lexical est : dire + détruire + richesse + abondance. La destruction de la richesse est présentée comme un exploit par celui qui parle — il se vante d'avoir eu tellement de biens qu'il a pu les détruire sans s'appauvrir.",
        axe2_voisins: "Le verset 5 demandait « Pense-t-il que personne ne peut rien contre lui ? ». Le verset 6 montre le contenu de cette arrogance : il prétend avoir détruit une richesse abondante. Le verset 7 répond : « Pense-t-il que personne ne l'a vu ? ». La destruction de la richesse est l'acte concret qui illustre l'arrogance — l'être humain croit pouvoir dépenser sans limite et sans surveillance.",
        axe3_sourate: "La sourate oppose la condition réelle de l'être humain (créé dans la difficulté, v4) à sa prétention (il a dilapidé une richesse abondante, v6). La destruction de la richesse est le signe de l'oubli de la difficulté originelle. Plus tard, la sourate appellera à nourrir l'orphelin et le pauvre (v14-16) — contraste direct avec celui qui détruit sa richesse par vantardise au lieu de la partager.",
        axe4_coherence: "Le Coran utilise la racine h-l-k dans des contextes de destruction de peuples (28:58 : « Combien avons-Nous détruit de cités ») et de perte de biens. En 18:42, les fruits du jardin sont détruits (uḥīṭa bi-thamarihi) et le propriétaire se retrouve « à tourner les paumes de ses mains » — la destruction de la richesse est suivie du regret. Le schéma coranique montre que la vantardise sur la dépense précède toujours la prise de conscience de la perte.",
        axe5_frequence: "Le khalifa qui détruit sa richesse par vantardise au lieu de l'utiliser pour la justice et le bien commun trahit sa mission. La richesse est un dépôt confié à l'être humain pour établir la civilisation — la dilapider est un acte de corruption. La sourate montre que la bonne dépense est celle qui libère un esclave (v13) et nourrit les nécessiteux (v14-16), pas celle dont on se vante."
      },
      "Sens isolé/Gaspiller": {
        status: "probable",
        senses: ["gaspiller"],
        proof_ctx: "Le gaspillage est une forme spécifique de destruction appliquée aux biens : dépenser de manière inutile et excessive. D'après les sources étymologiques, le Lane's mentionne ihlāk al-māl comme « dépenser la richesse ». La nuance avec la destruction est que le gaspillage implique un jugement moral sur l'inutilité de la dépense, alors que la destruction (sens retenu) est plus neutre — elle décrit simplement la disparition de la richesse. Le texte ne dit pas si la dépense était utile ou inutile, il dit que l'être humain a « fait périr » sa richesse. La forme IV (ahlaka) porte la causalité de la destruction, pas le jugement moral du gaspillage.",
        axe1_verset: "Le verset dit « j'ai dilapidé une richesse abondante ». Le verbe ahlaktu avec mālan pourrait se lire comme « j'ai gaspillé de la richesse ». Le champ lexical dire + gaspiller + richesse + abondance fonctionne : la vantardise porte sur la capacité à dépenser sans compter. Le gaspillage implique que la dépense est inutile, ce qui renforcerait la critique implicite.",
        axe2_voisins: "Les versets voisins (5 et 7) questionnent l'arrogance de l'être humain. Le gaspillage s'inscrit dans cette critique : non seulement il dépense, mais il dépense inutilement. Cependant, le texte ne porte pas de jugement explicite sur l'utilité de la dépense — il questionne seulement la vantardise et la surveillance divine.",
        axe3_sourate: "Dans le contexte de la sourate qui appelle à dépenser pour les pauvres et les orphelins (v14-16), le gaspillage serait le contraire de la bonne dépense. L'être humain gaspille au lieu de nourrir — le contraste fonctionne. Mais le texte ne dit pas explicitement que la dépense était gaspillée.",
        axe4_coherence: "Le Coran utilise d'autres racines pour le gaspillage moral (s-r-f : dépenser avec excès, b-dh-r : dilapider). Le choix de h-l-k plutôt que ces racines spécifiques suggère que le texte vise la destruction en général, pas spécifiquement le gaspillage moral.",
        axe5_frequence: "Le gaspillage est un manquement à la mission du khalifa qui doit gérer les ressources avec justice. La distinction avec la destruction reste fine : le gaspilleur détruit inutilement, le destructeur détruit tout court. La mission du khalifa est compromise dans les deux cas."
      }
    }
  }, 2);

  // ---- MWL (مول) — id=1148 — "richesse" ----
  // Forme: nom indéfini mālan (une richesse)
  await upsertVWA(verse_id, 'mwl', 'richesse', {
    sense_chosen: "richesse",
    concept_chosen: "Richesse/Biens",
    concepts: {
      "Richesse/Biens": {
        status: "retenu",
        senses: ["richesse", "biens", "fortune", "être riche"],
        proof_ctx: "Le sens retenu est « Richesse/Biens ». D'après les sources étymologiques, la racine m-w-l désigne la richesse matérielle, les biens possédés, la fortune. Le māl est tout ce qui est possédé et a de la valeur. C'est un état de possession permanent — les biens appartiennent à quelqu'un tant qu'il ne les perd pas ou ne les dépense pas. Le nom est indéfini (mālan, sans article) ce qui indique une richesse non spécifiée, une masse de biens sans détail sur leur nature. L'indéfinition renforce l'idée de quantité vague mais imposante, qualifiée par lubadan (abondante).",
        axe1_verset: "Le verset dit « j'ai dilapidé une richesse abondante ». Le mot mālan est le complément d'objet du verbe ahlaktu (j'ai dilapidé). Il est qualifié par lubadan (abondante). Le champ lexical dire + dilapider + richesse + abondance tourne entièrement autour de la vantardise matérielle. La richesse est l'objet de la destruction et le support de la vantardise — l'être humain se définit par ce qu'il possède et ce qu'il dépense.",
        axe2_voisins: "Le verset 5 questionnait la croyance en l'invulnérabilité. Le verset 6 révèle que cette croyance repose sur la richesse : c'est parce qu'il a de l'argent qu'il se croit intouchable. Le verset 7 demande s'il pense que personne ne l'a vu — la richesse ne protège pas du regard divin. Les versets 8-10 rappelleront les dons divins qui précèdent toute richesse humaine.",
        axe3_sourate: "La richesse est le pivot du contraste entre la vantardise (v6) et la générosité requise (v14-16). La sourate montre que la richesse n'est pas un exploit personnel mais un dépôt — elle doit servir à franchir la voie escarpée (libérer, nourrir) et non à se vanter. L'être humain qui se vante de sa richesse a oublié qu'il a été créé dans la difficulté (v4).",
        axe4_coherence: "Le Coran utilise māl dans de nombreux contextes de mise en garde contre l'attachement aux biens : « La richesse et les enfants sont l'ornement de la vie d'ici-bas » (18:46). En 104:2, le calomniateur « amasse une richesse et la compte » — même schéma d'accumulation vaine. La richesse dans le Coran n'est jamais condamnée en soi mais dans son usage égoïste.",
        axe5_frequence: "La richesse est un outil confié au khalifa pour établir la justice. La gestion des biens fait partie intégrante de la mission civilisatrice — construire, nourrir, libérer. Le khalifa qui se vante de détruire sa richesse détourne cet outil de sa finalité. La sourate oppose la vantardise destructrice à l'usage vertueux de la richesse."
      }
    }
  }, 3);

  // ---- LBD (لبد) — id=2627 — "abondante" ----
  // Forme: nom/adjectif indéfini lubadan (abondante, accumulée)
  await upsertVWA(verse_id, 'lbd', 'abondante', {
    sense_chosen: "abondante",
    concept_chosen: "Abondance/Accumulation",
    concepts: {
      "Abondance/Accumulation": {
        status: "retenu",
        senses: ["richesse abondante", "richesse collectée", "foule compacte"],
        proof_ctx: "Le sens retenu est « Abondance/Accumulation ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), lubad désigne ce qui est accumulé en grande quantité, au point de former une masse compacte dont on ne craint pas l'épuisement. Le Lane's cite explicitement ce verset (90:6) avec le sens « much wealth ». L'abondance est un état de surplus permanent — tellement de choses rassemblées qu'elles forment un bloc inépuisable. Lubadan qualifie mālan : la richesse est non seulement grande mais accumulée, tassée, compacte. Distinction avec « Adhésion/Fixation » : l'adhésion est l'acte de se coller à une surface, ce qui ne qualifie pas la richesse. Distinction avec « Compactage/Feutre » : le feutre est un matériau physique obtenu par compression de fibres, sans rapport avec la quantité de biens. Distinction avec « Crinière/Lion » : la crinière est un attribut animal sans rapport avec le contexte.",
        axe1_verset: "Le verset dit « j'ai dilapidé une richesse abondante ». Le mot lubadan est un adjectif qualificatif de mālan (richesse). Il indique que la richesse n'est pas quelconque mais massive, accumulée en tas. Le champ lexical dire + dilapider + richesse + abondance culmine avec ce qualificatif : la vantardise porte précisément sur la quantité phénoménale des biens dépensés. L'être humain ne dit pas simplement qu'il a dépensé — il insiste sur le volume impressionnant de sa dépense.",
        axe2_voisins: "Le verset 5 questionnait l'invulnérabilité supposée. Le verset 6 donne la mesure de l'arrogance : la richesse n'est pas ordinaire, elle est abondante, accumulée. Le verset 7 demande s'il pense que personne ne l'a vu dépenser cette richesse abondante. L'adjectif lubadan amplifie la critique : plus la richesse est grande, plus la vantardise est grotesque face à la surveillance divine.",
        axe3_sourate: "L'abondance de la richesse contraste avec la difficulté dans laquelle l'être humain a été créé (v4). Celui qui est né dans la difficulté se retrouve avec une richesse abondante — mais au lieu de reconnaître ce renversement comme un don, il s'en vante. La sourate montre que l'abondance matérielle sans gratitude mène à l'oubli de la condition originelle.",
        axe4_coherence: "Le Coran décrit la richesse abondante comme une épreuve plutôt qu'une bénédiction automatique. En 89:15-16, l'être humain dit « mon seigneur m'a honoré » quand il est riche et « mon seigneur m'a humilié » quand il est pauvre — le Coran corrige cette vision en montrant que richesse et pauvreté sont des tests, pas des jugements de valeur.",
        axe5_frequence: "L'abondance des biens est une responsabilité accrue pour le khalifa. Plus la richesse est grande, plus la mission de justice exige d'en faire bon usage. L'accumulation de richesse sans redistribution est un manquement direct à la mission civilisatrice — la sourate le montrera en appelant à libérer des esclaves et nourrir les nécessiteux."
      },
      "Adhésion/Fixation": {
        status: "nul",
        senses: ["adhérer au sol", "se coucher sur sa poitrine (oiseau)", "rester fixé et observer", "demeurer en un lieu", "chameau étouffé par excès de nourriture"],
        proof_ctx: "L'adhésion au sol ne qualifie pas la richesse. Le verset parle d'une quantité de biens, pas d'un acte de se coller à une surface."
      },
      "Compactage/Feutre": {
        status: "nul",
        senses: ["laine compactée", "feutre", "tapis de feutre", "tapis de selle", "pluie compactant le sol"],
        proof_ctx: "Le feutre est un matériau physique. Lubadan qualifie la richesse (mālan), pas un tissu ou un sol. Le sens matériel de compression de fibres ne s'applique pas aux biens."
      },
      "Crinière/Lion": {
        status: "nul",
        senses: ["crinière du lion", "le lion"],
        proof_ctx: "La crinière du lion n'a aucun rapport avec la richesse décrite dans le verset."
      }
    }
  }, 4);

  // --- Traduction verset 6 ---
  await sb.from('verse_analyses').update({
    translation_arab: "يَقُولُ أَهْلَكْتُ مَالًا لُّبَدًا",
    full_translation: "Il dit : «J'ai gaspillé beaucoup de biens».",
    segments: [
      { fr: "il dit :", pos: "verbe", phon: "yaqūlu", arabic: "يَقُولُ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "j'ai dilapidé", pos: "verbe", phon: "ahlaktu", arabic: "أَهْلَكْتُ", word_key: "hlk", is_particle: false, sense_retenu: "dilapider", position: 2 },
      { fr: "une richesse", pos: "nom", phon: "mālan", arabic: "مَالًا", word_key: "mwl", is_particle: false, sense_retenu: "richesse", position: 3 },
      { fr: "abondante", pos: "adjectif", phon: "lubadan", arabic: "لُّبَدًا", word_key: "lbd", is_particle: false, sense_retenu: "abondante", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe yaqūlu est un inaccompli (une forme qui exprime une action en cours ou habituelle) de la troisième personne du masculin singulier — « il dit ». L'inaccompli indique que cette parole est répétée, habituelle. Le discours direct suit : ahlaktu est un verbe accompli (action achevée) de la forme IV (une forme causative en arabe) de la racine h-l-k (périr). La forme IV signifie « faire périr, causer la destruction ». Le pronom sujet -tu (je) indique la première personne : « j'ai fait périr ». Le complément d'objet est mālan (une richesse) qualifié par lubadan (abondante, accumulée). La phrase complète est un discours direct introduit par yaqūlu : l'être humain proclame avoir détruit une masse de richesse imposante. La structure grammaticale oppose l'inaccompli du verbe introducteur (action habituelle) à l'accompli du verbe cité (action achevée) — il répète habituellement qu'il a achevé de dilapider.

§JUSTIFICATION§
**dit** — Le sens retenu est « dire ». Le mot « dit » traduit yaqūlu dans son sens premier de parole prononcée. L'alternative « affirme » est trop solennelle — le verset décrit une vantardise désinvolte, pas une déclaration formelle. L'alternative « prétend » ajouterait un jugement de fausseté que le texte ne porte pas explicitement.

**dilapidé** — Le sens retenu est « Destruction/Anéantissement » appliqué à la richesse. Le mot « dilapidé » est choisi car il traduit ahlaktu mālan : faire périr de la richesse, c'est-à-dire la dépenser jusqu'à la faire disparaître. L'alternative « détruit » est trop physique pour de l'argent. L'alternative « gaspillé » ajoute un jugement moral sur l'inutilité de la dépense que le texte ne porte pas — le texte dit qu'il a fait périr sa richesse, pas qu'il l'a mal dépensée.

**richesse** — Le mot « richesse » traduit mālan dans son sens direct de biens matériels possédés. L'alternative « argent » est trop restrictif — māl englobe tous les types de biens. L'alternative « fortune » implique un niveau de richesse exceptionnel que l'indéfinition du mot ne garantit pas.

**abondante** — Le sens retenu est « Abondance/Accumulation ». Le mot « abondante » traduit lubadan : une richesse accumulée en grande quantité. L'alternative « considérable » est acceptable mais moins concret — « abondante » évoque la masse physique des biens entassés, conformément à la racine l-b-d qui décrit la compression en un bloc compact.

§CRITIQUE§
Les traductions courantes donnent « J'ai gaspillé beaucoup de biens » (Hamidullah). Le mot « gaspillé » pour ahlaktu est une interprétation : la racine h-l-k signifie périr/détruire, pas spécifiquement gaspiller (qui serait plutôt la racine b-dh-r). Traduire par « dilapidé » garde l'idée de dépense destructrice sans le jugement moral du gaspillage. Par ailleurs, « beaucoup de biens » pour mālan lubadan simplifie : lubadan ne signifie pas simplement « beaucoup » mais « accumulée en masse compacte, dont on ne craint pas l'épuisement » d'après les sources étymologiques. La nuance est que l'être humain se vante non seulement de la quantité dépensée mais de son caractère apparemment inépuisable.`
  }).eq('verse_id', verse_id);

  // Daily phrases pour hlk (id=982) — 0 existantes
  await insertDaily(982, 'dilapider', 'أَهْلَكَ', 'ahlaka', [
    "Il a dilapidé toutes ses économies en un mois.",
    "Ne dilapide pas ton salaire dans des achats inutiles.",
    "Cette entreprise a dilapidé ses réserves financières."
  ]);

  console.log('VERSET 90:6 — TERMINÉ');
}

// ============================================================
// VERSET 90:7
// ============================================================
async function verse90_7() {
  console.log('\n=== VERSET 90:7 — أَيَحْسَبُ أَن لَّمْ يَرَهُۥٓ أَحَدٌ ===');
  const verse_id = 6030;

  // ---- HSB (حسب) — id=996 — "penser" ----
  // Forme: verbe inaccompli 3MS yaḥsabu avec hamza d'interrogation a-yaḥsabu (pense-t-il ?)
  await upsertVWA(verse_id, 'hsb', 'penser', {
    sense_chosen: "penser",
    concept_chosen: "Calcul/Évaluation",
    concepts: {
      "Calcul/Évaluation": {
        status: "retenu",
        senses: ["compter", "estimer", "penser", "compte"],
        proof_ctx: "Le sens retenu est « Calcul/Évaluation ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine ḥ-s-b porte l'idée de compter, évaluer, estimer. Le verbe yaḥsabu signifie « il compte, il estime, il pense » — c'est une évaluation mentale, un calcul intérieur qui produit une conclusion. Penser au sens de ḥasiba est se faire une idée après estimation, pas simplement réfléchir. L'interrogation a- devant le verbe crée une question rhétorique : « Est-ce qu'il estime que... ? ». La question implique que l'estimation est fausse. Distinction avec « Suffisance » : suffire est un état de complétude, pas une opération d'évaluation. Le verset parle d'une pensée, pas d'une suffisance. Distinction avec « Noblesse » : la noblesse est un statut social sans rapport avec l'acte de penser.",
        axe1_verset: "Le verset dit « Pense-t-il que personne ne l'a vu ? ». Le verbe yaḥsabu est un inaccompli (action en cours ou habituelle) précédé du hamza d'interrogation (a-). Le champ lexical est : penser + voir + personne. La pensée est ici une estimation fausse : l'être humain calcule qu'il est invisible, que personne n'observe ses actes. L'inaccompli indique que cette croyance est persistante, pas ponctuelle — il continue de penser que personne ne le surveille.",
        axe2_voisins: "Le verset 6 montrait la vantardise (« j'ai dilapidé une richesse abondante »). Le verset 7 expose le fondement de cette vantardise : l'être humain pense que personne ne l'a vu. L'absence de surveillance perçue est ce qui permet la vantardise. Le verset 8 commencera les dons divins (les yeux) — réponse directe à celui qui pense être invisible : celui qui t'a donné les yeux te voit aussi.",
        axe3_sourate: "La fausse estimation est le coeur du problème dans la sourate 90. L'être humain estime mal sa situation : il se croit puissant (v5), il se vante de ses dépenses (v6), il pense être invisible (v7). La sourate corrige ces fausses estimations en rappelant les dons divins (v8-10) et en montrant la vraie voie de la vertu (v11-20). Le verbe yaḥsabu est le marqueur de l'erreur d'évaluation.",
        axe4_coherence: "Le Coran utilise a-yaḥsabu comme question rhétorique pour dénoncer les fausses croyances. En 75:36, « L'être humain pense-t-il qu'il sera laissé sans but ? ». En 90:5, le même verbe était déjà utilisé (« Pense-t-il que personne ne peut rien contre lui ? »). La répétition de la même question rhétorique (v5 et v7) encadre la vantardise du verset 6, montrant que l'arrogance est basée sur une double erreur d'estimation.",
        axe5_frequence: "Le khalifa qui pense être invisible oublie la reddition des comptes. La mission de justice exige la conscience d'être observé — celui qui se croit sans surveillance agit sans limite. La fausse estimation de l'invisibilité est la racine de la corruption : on ne triche que quand on pense que personne ne regarde."
      },
      "Suffisance": {
        status: "nul",
        senses: ["suffire", "suffisant"],
        proof_ctx: "La suffisance est un état de complétude. Le verset utilise yaḥsabu dans le sens de penser/estimer, pas de suffire. La structure « pense-t-il que... » exige le sens d'estimation mentale."
      },
      "Sens isolé/Noblesse": {
        status: "nul",
        senses: ["noblesse"],
        proof_ctx: "La noblesse est un statut social. Le verbe yaḥsabu dans le contexte d'une question rhétorique n'a aucun rapport avec le rang ou la noblesse."
      }
    }
  }, 1);

  // ---- RAY (رأي) — id=552 — "voir" ----
  // Forme: verbe inaccompli 3MS yarahu (il le voit) avec lam de négation + jussive
  await upsertVWA(verse_id, 'ray', 'voir', {
    sense_chosen: "voir",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["voir", "percevoir"],
        proof_ctx: "Le sens retenu est « Vision/Perception ». D'après les sources étymologiques, la racine r-'-y signifie voir par les yeux ou par l'esprit, percevoir. Le verbe yarāhu est un inaccompli au jussif (après lam de négation) avec le pronom -hu (le) : « il le voit ». La vision est un acte de perception qui sort de celui qui voit et atteint ce qui est vu — l'observateur capte la réalité de l'observé. Dans le verset, la question porte sur la vision divine : pense-t-il que personne ne l'a vu ? Le verbe yarā est au sens de voir, observer, être témoin de ses actes. Distinction avec « Jugement/Avis » : l'avis est une opinion formée après réflexion. Le verset parle de voir (percevoir visuellement), pas de juger. La question est « personne ne l'a VU », pas « personne n'a d'avis sur lui ». Distinction avec « Apparition » : apparaître est devenir visible — le verset parle de l'acte de voir, pas d'apparaître.",
        axe1_verset: "Le verset dit « Pense-t-il que personne ne l'a vu ? ». Le verbe yarahu est un inaccompli au jussif (une forme qui exprime la négation : lam yarahu = il ne le voit pas). La particule an (que) introduit la subordonnée. Le champ lexical est : penser + négation + voir + personne. La vision est l'objet de la fausse croyance : l'être humain pense que l'acte de voir ne s'applique pas à lui, qu'il est hors du champ de perception de quiconque.",
        axe2_voisins: "Le verset 6 montrait la vantardise. Le verset 7 en expose la condition : l'être humain se croit invisible. Le verset 8 répondra par le don des yeux — la vision est le fil conducteur. Celui qui a donné les yeux (v8) voit nécessairement celui à qui il les a donnés. La question du verset 7 prépare la réponse du verset 8 : l'invisibilité est impossible face à celui qui accorde la vue.",
        axe3_sourate: "La vision est au coeur de la sourate 90. L'être humain ne voit pas sa propre condition (créé dans la difficulté, v4), ne voit pas qu'il est observé (v7), et a reçu les yeux pour voir (v8). La sourate oppose la cécité morale (l'oubli de la surveillance) à la vision physique (les yeux donnés) — celui qui a des yeux devrait voir qu'il est vu.",
        axe4_coherence: "Le Coran affirme que rien n'échappe à la vision divine : « Ton seigneur observe » (89:14). En 96:14, le même thème revient : « Ne sait-il pas que Dieu voit ? ». La racine r-'-y est utilisée pour la vision divine qui englobe tout. L'être humain qui pense être invisible commet l'erreur fondamentale de nier cette vision englobante.",
        axe5_frequence: "Le khalifa conscient de sa mission sait qu'il est observé. La conscience de la surveillance fonde l'intégrité — le khalifa agit avec justice parce qu'il sait que ses actes sont vus. La question rhétorique du verset rappelle cette conscience : la mission de justice n'a de sens que si celui qui la remplit sait qu'il rend des comptes."
      },
      "Jugement/Avis": {
        status: "nul",
        senses: ["opinion", "avis"],
        proof_ctx: "L'avis est une opinion réfléchie. Le verset parle de voir (lam yarahu = il ne le voit pas), pas d'avoir un avis. Le contexte est la vision/observation, pas le jugement."
      },
      "Apparition": {
        status: "nul",
        senses: ["apparaître"],
        proof_ctx: "Apparaître est devenir visible aux yeux d'un autre. Le verset parle de l'acte actif de voir (yarā), pas de l'état passif d'être visible."
      }
    }
  }, 2);

  // ---- WHD (وحد) — id=578 — "personne" ----
  // Forme: nom indéfini aḥadun (quelqu'un, personne — en contexte négatif)
  await upsertVWA(verse_id, 'whd', 'personne', {
    sense_chosen: "personne",
    concept_chosen: "Unicité/Unité",
    concepts: {
      "Unicité/Unité": {
        status: "retenu",
        senses: ["un", "unique", "seul", "unifier"],
        proof_ctx: "Le sens retenu est « Unicité/Unité ». D'après les sources étymologiques, la racine w-ḥ-d porte l'idée d'unité, de singularité. Le mot aḥad est le nombre « un » au sens de « quelqu'un, un seul individu ». En contexte négatif (lam yarahu aḥadun = personne ne l'a vu), aḥad signifie « pas un seul » c'est-à-dire « personne ». L'unité est une réalité abstraite de singularité : un seul individu, une seule personne. Dans le verset, l'être humain croit qu'aucun individu unique, aucune entité singulière ne l'a vu — c'est une négation totale de la surveillance.",
        axe1_verset: "Le verset dit « Pense-t-il que personne ne l'a vu ? ». Le mot aḥadun est le sujet du verbe yarahu dans la subordonnée négative. Aḥad signifie « un seul » — en contexte négatif, « pas un seul » = personne. Le champ lexical penser + négation + voir + personne forme une question rhétorique complète. Le mot aḥad souligne la totalité de la négation : pas un seul être ne l'aurait vu, selon sa croyance.",
        axe2_voisins: "Le verset 5 utilisait déjà aḥad dans la même construction : « Pense-t-il que personne ne peut rien contre lui ? ». La répétition de aḥad dans deux questions consécutives (v5 et v7) crée un parallélisme structurel. Les deux questions encadrent la vantardise du verset 6 et exposent la double illusion : invulnérabilité + invisibilité.",
        axe3_sourate: "Le mot aḥad dans la sourate 90 souligne l'isolement de l'être humain dans sa fausse croyance. Il se pense seul, non observé, non contrôlable. La sourate corrige cette illusion : les versets 8-10 montrent que l'être humain est entouré de dons divins (yeux, langue, lèvres, guidance). L'unicité de aḥad contraste avec la pluralité des bienfaits.",
        axe4_coherence: "Le Coran utilise aḥad dans des contextes de négation absolue pour souligner l'impossibilité de l'isolement face à la puissance divine. En 69:47, « Aucun d'entre vous n'aurait pu nous en empêcher ». Le mot aḥad en contexte négatif est un outil rhétorique qui exprime l'impossibilité totale.",
        axe5_frequence: "Le khalifa qui pense que « personne » ne le voit nie la surveillance qui fonde sa responsabilité. La mission de justice suppose un observateur — si « personne » ne regarde, rien n'empêche la corruption. La question rhétorique rappelle que l'unicité de chaque individu n'implique pas son isolement."
      }
    }
  }, 3);

  // --- Traduction verset 7 ---
  await sb.from('verse_analyses').update({
    translation_arab: "أَيَحْسَبُ أَن لَّمْ يَرَهُۥٓ أَحَدٌ",
    full_translation: "Pense-t-il que nul ne l'a vu ?",
    segments: [
      { fr: "pense-t-il", pos: "verbe", phon: "a-yaḥsabu", arabic: "أَيَحْسَبُ", word_key: "hsb", is_particle: false, sense_retenu: "penser", position: 1 },
      { fr: "que", pos: "particule", phon: "an", arabic: "أَن", is_particle: true, position: 2 },
      { fr: "ne", pos: "particule", phon: "lam", arabic: "لَّمْ", is_particle: true, position: 3 },
      { fr: "l'a vu", pos: "verbe", phon: "yarahu", arabic: "يَرَهُۥٓ", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 4 },
      { fr: "personne ?", pos: "nom", phon: "aḥadun", arabic: "أَحَدٌ", word_key: "whd", is_particle: false, sense_retenu: "personne", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par la particule d'interrogation a- (hamza) suivie du verbe yaḥsabu (un inaccompli de la racine ḥ-s-b signifiant estimer, penser). L'ensemble a-yaḥsabu forme une question rhétorique : « Pense-t-il que... ? ». La particule an (que) introduit la subordonnée. Lam est une particule de négation qui met le verbe au jussif : yarahu au lieu de yarāhu. Le pronom -hu (le) est le complément d'objet du verbe yarā (voir). Le sujet aḥadun (quelqu'un) en contexte négatif signifie « personne ». La structure complète est : « Pense-t-il que personne ne l'a vu ? » — une question rhétorique qui attend la réponse « non, il se trompe ». Cette question fait écho au verset 5 qui utilisait la même structure (a-yaḥsabu ... aḥadun).

§JUSTIFICATION§
**pense-t-il** — Le sens retenu est « penser/estimer ». Le mot « pense-t-il » traduit a-yaḥsabu avec le sens d'estimation fausse. L'alternative « croit-il » est acceptable mais ḥasiba porte plus l'idée de calcul que de croyance — c'est une évaluation, pas un acte de foi.

**l'a vu** — Le sens retenu est « voir/percevoir ». Le mot « vu » traduit yarahu dans son sens de vision directe. L'alternative « observé » est trop soutenu — le verset pose une question simple sur le fait d'être vu.

**personne** — Le sens retenu est « Unicité/Unité ». Le mot « personne » traduit aḥadun en contexte négatif (lam ... aḥadun = pas un seul = personne). L'alternative « nul » (Hamidullah) est synonyme.

§CRITIQUE§
Les traductions courantes donnent « Pense-t-il que nul ne l'a vu ? » (Hamidullah). Cette traduction est fidèle au texte. Le mot « nul » est un synonyme de « personne » — les deux sont corrects. Notre traduction est sensiblement identique.`
  }).eq('verse_id', verse_id);

  // Daily phrases pour whd (id=578) — 0 existantes
  await insertDaily(578, 'un', 'وَاحِد', 'wāḥid', [
    "Il n'y a qu'un seul exemplaire de ce livre.",
    "Pas une seule personne n'est venue à la réunion.",
    "Ils ont parlé d'une seule voix."
  ]);

  console.log('VERSET 90:7 — TERMINÉ');
}

// ============================================================
// VERSET 90:8
// ============================================================
async function verse90_8() {
  console.log('\n=== VERSET 90:8 — أَلَمْ نَجْعَل لَّهُۥ عَيْنَيْنِ ===');
  const verse_id = 6031;

  // ---- JEL (جعل) — id=359 — "donner" ----
  // Forme: verbe inaccompli 1P jussif najʿal (Nous faisons/donnons) après a-lam (interrogative négative)
  await upsertVWA(verse_id, 'jel', 'donner', {
    sense_chosen: "donner",
    concept_chosen: "Action/Réalisation",
    concepts: {
      "Action/Réalisation": {
        status: "retenu",
        senses: ["faire", "rendre", "placer", "commencer à", "établir", "créer"],
        proof_ctx: "Le sens retenu est « Action/Réalisation ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine j-ʿ-l signifie faire, rendre, placer, créer. Le verbe najʿal est un inaccompli au jussif (après a-lam) de la première personne du pluriel de majesté : « N'avons-Nous pas fait ? ». Le sens de jaʿala avec un complément indirect (lahu = pour lui) est « faire pour quelqu'un, accorder, donner ». L'action est extérieure, directionnelle et créatrice : celui qui fait produit quelque chose qui atteint et bénéficie au destinataire. Le complément d'objet ʿaynayni (deux yeux) précise ce qui est fait/donné. Distinction avec « Récompense » : la récompense est un paiement pour un mérite. Les yeux ne sont pas une récompense mais un don originel qui précède tout mérite.",
        axe1_verset: "Le verset dit « Ne lui avons-Nous pas donné deux yeux ? ». Le verbe najʿal est un inaccompli au jussif (une forme qui apparaît après la négation lam — ici dans une interrogation négative rhétorique a-lam). Le pronom « Nous » (première personne du pluriel de majesté) renvoie au locuteur divin. Le complément indirect lahu (pour lui) indique le bénéficiaire. Le champ lexical est : faire/donner + pour lui + deux yeux — un don divin concret et physique.",
        axe2_voisins: "Les versets 5-7 exposaient l'arrogance et la fausse croyance d'invisibilité. Le verset 8 commence la réponse divine en rappelant le premier don : les yeux. Ce rappel est à la fois un argument (celui qui t'a donné les yeux te voit) et une mise en perspective (avant de te vanter de ta richesse, reconnais ce que tu as reçu gratuitement). Les versets 9-10 poursuivront l'énumération des dons.",
        axe3_sourate: "Les versets 8-10 forment le bloc central de la sourate : l'énumération des dons divins. Ce bloc répond à l'arrogance des versets 5-7 et prépare l'appel à la vertu des versets 11-20. Le verbe najʿal (Nous avons fait/donné) est la réponse à ahlaktu (j'ai dilapidé) : l'être humain détruit sa richesse tandis que le locuteur divin crée et donne.",
        axe4_coherence: "Le Coran utilise jaʿala dans de nombreux contextes de création divine : « N'avons-Nous pas fait la terre une couche ? » (78:6). Le verbe jaʿala est distinct de khalaqa (créer ex nihilo) — jaʿala implique un aménagement, un placement, un don fonctionnel. Les yeux ne sont pas seulement créés mais placés, donnés, rendus fonctionnels pour l'être humain.",
        axe5_frequence: "Le don des yeux est la base de la mission du khalifa. Voir, c'est pouvoir discerner le juste de l'injuste, l'équilibre du déséquilibre. Le khalifa qui oublie que ses yeux sont un don oublie que sa capacité de discernement vient d'ailleurs — il ne peut pas se prétendre autosuffisant quand sa vision même lui a été donnée."
      },
      "Sens isolé/Récompense": {
        status: "nul",
        senses: ["récompense"],
        proof_ctx: "La récompense est un paiement pour un mérite. Le verset décrit un don originel qui précède tout acte humain — les yeux sont donnés à la naissance, pas en récompense d'un mérite."
      }
    }
  }, 1);

  // ---- EYN (عين) — id=590 — "yeux" ----
  // Forme: nom duel ʿaynayni (deux yeux)
  await upsertVWA(verse_id, 'eyn', 'yeux', {
    sense_chosen: "yeux",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["œil", "regard"],
        proof_ctx: "Le sens retenu est « Vision/Perception ». D'après les sources étymologiques, la racine ʿ-y-n désigne l'œil en tant qu'organe de la vue, et par extension le regard, la perception visuelle. Le mot ʿaynayni est un duel (une forme grammaticale qui indique exactement deux) : les deux yeux. C'est l'organe physique de la vision — une réalité concrète et permanente du corps humain. Le duel est significatif : les yeux viennent par paire, symétriques, complémentaires. Distinction avec « Eau vive » : la source d'eau est un sens de la même racine mais le contexte des versets 8-9 est clairement anatomique (yeux, langue, lèvres = organes du corps). Distinction avec « Identité » : l'essence ou l'identité n'a pas de duel — on ne dit pas « les deux identités ». Le duel impose le sens concret d'organe physique.",
        axe1_verset: "Le verset dit « Ne lui avons-Nous pas donné deux yeux ? ». Le mot ʿaynayni est le complément d'objet direct de najʿal (donner/faire). La forme duelle (une forme qui indique exactement deux — ici les deux yeux) est significative : le don est précis, mesuré, symétrique. Le champ lexical donner + deux yeux est celui du don corporel — l'organe de la vue est le premier bienfait mentionné, soulignant la primauté de la vision.",
        axe2_voisins: "Le verset 7 demandait « pense-t-il que personne ne l'a vu ? ». Le verset 8 répond par le don des yeux — ironiquement, l'organe même de la vision est un don. Celui qui pense être invisible a été doté de la vue par le même donateur. Les versets 9-10 poursuivront avec la langue, les lèvres et la guidance — une progression du corps vers l'esprit.",
        axe3_sourate: "Les yeux ouvrent l'énumération des dons dans la sourate 90. La progression est : yeux (v8) → langue et lèvres (v9) → guidance vers les deux voies (v10). Cette progression va du physique (organes du corps) vers le moral (discernement du bien et du mal). Les yeux sont la fondation : sans voir, on ne peut ni parler avec justesse ni choisir sa voie.",
        axe4_coherence: "Le Coran mentionne les yeux comme don divin dans plusieurs passages. En 76:2, « Nous avons fait l'être humain... et Nous l'avons doté de l'ouïe et de la vue ». En 16:78, la même énumération : ouïe, vue, cœurs. Les yeux sont systématiquement le premier ou le second don mentionné, soulignant leur importance dans l'économie coranique du discernement.",
        axe5_frequence: "Les yeux sont l'outil premier du khalifa pour discerner la justice de l'injustice. Voir, c'est constater, témoigner, évaluer. Le khalifa sans yeux ne peut pas remplir sa mission de justice — le don de la vue est la condition nécessaire de la responsabilité. La sourate rappelle ce don élémentaire à celui qui prétend être autosuffisant."
      },
      "Eau vive": {
        status: "nul",
        senses: ["source"],
        proof_ctx: "La source d'eau est un sens de ʿayn, mais le contexte est anatomique. Le verset 9 mentionne la langue et les lèvres — le verset 8 parle donc des yeux du corps, pas de sources d'eau. Le duel (ʿaynayni = deux yeux) confirme le sens anatomique."
      },
      "Identité": {
        status: "nul",
        senses: ["essence"],
        proof_ctx: "L'essence ou l'identité n'a pas de forme duelle. Le mot ʿaynayni (deux yeux) exclut le sens abstrait d'essence — on ne dit pas « les deux essences » dans un contexte de dons corporels."
      }
    }
  }, 2);

  // --- Traduction verset 8 ---
  await sb.from('verse_analyses').update({
    translation_arab: "أَلَمْ نَجْعَل لَّهُۥ عَيْنَيْنِ",
    full_translation: "Ne lui avons-Nous pas assigné deux yeux,",
    segments: [
      { fr: "ne", pos: "particule", phon: "a-lam", arabic: "أَلَمْ", is_particle: true, position: 1 },
      { fr: "lui avons-Nous pas donné", pos: "verbe", phon: "najʿal lahu", arabic: "نَجْعَل لَّهُۥ", word_key: "jel", is_particle: false, sense_retenu: "donner", position: 2 },
      { fr: "deux yeux", pos: "nom", phon: "ʿaynayni", arabic: "عَيْنَيْنِ", word_key: "eyn", is_particle: false, sense_retenu: "yeux", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset commence par a-lam, une combinaison de la particule d'interrogation a- (hamza) et de la négation lam. Ensemble, elles forment une interrogation négative rhétorique qui attend une réponse affirmative : « N'avons-Nous pas... ? » = « Bien sûr que si, Nous avons... ». Le verbe najʿal est un inaccompli au jussif (après lam) de la première personne du pluriel de majesté (le « Nous » divin) de la racine j-ʿ-l (faire, rendre, donner). Le complément indirect lahu (pour lui) indique le bénéficiaire. Le complément d'objet ʿaynayni est un duel (une forme qui indique exactement deux) de ʿayn (œil). La phrase complète est une question rhétorique : « N'avons-Nous pas donné pour lui deux yeux ? ». Le passage du « il » des versets 5-7 (l'être humain arrogant) au « Nous » divin marque le changement de perspective : après l'arrogance humaine, la réponse divine.

§JUSTIFICATION§
**donné** — Le sens retenu est « faire/réaliser ». Le mot « donné » est choisi car jaʿala lahu signifie « faire pour lui, lui accorder ». L'alternative « assigné » (Hamidullah) est plus administrative — « donner » est plus direct et courant. L'alternative « créé » est trop large — jaʿala implique un don fonctionnel adressé à quelqu'un (lahu), pas une création abstraite.

**deux yeux** — Le sens retenu est « Vision/Perception ». Le mot « deux yeux » traduit le duel ʿaynayni littéralement. L'alternative « la vue » résumerait le sens mais perdrait la précision du duel qui insiste sur la paire d'organes physiques.

§CRITIQUE§
Les traductions courantes donnent « Ne lui avons-Nous pas assigné deux yeux » (Hamidullah). Le mot « assigné » pour najʿal est plus administratif que le sens premier de la racine j-ʿ-l qui est « faire, placer, donner ». « Donné » est plus naturel en français courant et plus fidèle au registre du verset qui énumère des dons concrets.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 90:8 — TERMINÉ');
}

// ============================================================
// VERSET 90:9
// ============================================================
async function verse90_9() {
  console.log('\n=== VERSET 90:9 — وَلِسَانًا وَشَفَتَيْنِ ===');
  const verse_id = 6032;

  // ---- LSN (لسن) — id=1298 — "langue" ----
  // Forme: nom indéfini lisānan (une langue)
  await upsertVWA(verse_id, 'lsn', 'langue', {
    sense_chosen: "langue",
    concept_chosen: "Langue/Parole",
    concepts: {
      "Langue/Parole": {
        status: "retenu",
        senses: ["langue", "langage", "éloquence", "parole"],
        proof_ctx: "Le sens retenu est « Langue/Parole ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine l-s-n désigne la langue en tant qu'organe physique de la bouche et, par extension, le langage, l'éloquence, la parole. Le mot lisānan est un nom indéfini (sans article) : « une langue ». Dans le contexte des versets 8-9, l'énumération est clairement anatomique : yeux (v8), langue et lèvres (v9). La langue est l'organe physique de la parole — placée entre les lèvres, elle permet l'articulation des mots. C'est un don concret, un organe unique (pas en paire comme les yeux et les lèvres), au centre de l'appareil vocal. Le singulier est significatif : une seule langue, entre deux yeux et deux lèvres.",
        axe1_verset: "Le verset dit « et une langue et deux lèvres ». Le mot lisānan est un nom indéfini à l'accusatif (complément d'objet du verbe najʿal du verset 8, sous-entendu ici). La conjonction wa (et) rattache ce don aux yeux du verset 8 — la phrase se lit en continu : « Ne lui avons-Nous pas donné deux yeux, et une langue et deux lèvres ? ». Le champ lexical est celui des organes du visage : yeux + langue + lèvres. La langue est le deuxième don mentionné, entre la vue et la parole.",
        axe2_voisins: "Le verset 8 donnait les yeux (la vue). Le verset 9 donne la langue et les lèvres (la parole). Le verset 10 donnera la guidance vers les deux voies (le discernement). La progression est : voir → parler → choisir. La langue est le moyen d'expression — après avoir vu, l'être humain peut nommer et communiquer ce qu'il a vu. La progression va de la perception à l'expression puis au choix moral.",
        axe3_sourate: "La langue est le don de la parole dans une sourate qui a commencé par une parole vantarde (yaqūlu, v6). L'ironie est que l'organe même dont l'être humain se sert pour se vanter est un don. Celui qui dit « j'ai dilapidé une richesse abondante » utilise une langue qui lui a été donnée — la vantardise est un détournement du don de la parole.",
        axe4_coherence: "Le Coran associe la langue à la responsabilité de la parole. En 50:18, « Il ne prononce pas une parole sans qu'il y ait auprès de lui un observateur prêt ». La langue est un organe surveillé — chaque mot prononcé est enregistré. En 75:16, le Coran dit « Ne remue pas ta langue » — la langue est un organe qui doit être maîtrisé, pas laissé libre.",
        axe5_frequence: "La langue est l'outil de communication du khalifa. La mission de justice passe par la parole : nommer les choses justement (mission adamique de 2:31), témoigner avec vérité, appeler au bien. Le don de la langue est la condition de la mission sociale du khalifa — sans parole, pas de civilisation, pas de justice communiquée."
      }
    }
  }, 1);

  // ---- SHFH (شفه) — id=2629 — "lèvres" ----
  // Forme: nom duel shafatayni (deux lèvres)
  await upsertVWA(verse_id, 'shfh', 'lèvres', {
    sense_chosen: "lèvres",
    concept_chosen: "Lèvre/Bouche",
    concepts: {
      "Lèvre/Bouche": {
        status: "retenu",
        senses: ["lèvre", "les deux couvercles de la bouche", "frapper la lèvre de quelqu'un"],
        proof_ctx: "Le sens retenu est « Lèvre/Bouche ». D'après les sources étymologiques, la racine sh-f-h désigne la lèvre en tant qu'organe physique de la bouche. Le Lane's décrit la shafa comme le couvercle de la bouche — les deux lèvres sont les deux couvercles qui s'ouvrent et se ferment pour permettre la parole et la nourriture. Le mot shafatayni est un duel : « les deux lèvres ». Dans le contexte des versets 8-9, l'énumération est anatomique (yeux, langue, lèvres) — les lèvres sont le dernier organe de la série. Les lèvres complètent l'appareil vocal : la langue articule, les lèvres forment et libèrent les sons. Distinction avec « Parole/Expression » : la parole est la fonction des lèvres, pas les lèvres elles-mêmes. Le verset liste des organes physiques, pas des fonctions. Distinction avec « Consommation/Épuisement » et « Réputation/Renommée » : ces sens n'ont aucun rapport avec l'énumération anatomique du contexte.",
        axe1_verset: "Le verset dit « et une langue et deux lèvres ». Le mot shafatayni est un duel (une forme qui indique exactement deux) à l'accusatif. Comme lisānan, il est complément d'objet du verbe najʿal sous-entendu du verset 8. Le champ lexical est anatomique : langue + lèvres forment l'appareil de la parole. Le duel (deux lèvres) fait écho au duel du verset 8 (deux yeux) — les organes pairs encadrent l'organe unique (la langue).",
        axe2_voisins: "Le verset 8 donnait les yeux. Le verset 9 donne la langue et les lèvres, complétant l'appareil sensoriel et vocal du visage. Le verset 10 passera au don moral (la guidance). Les lèvres sont le dernier élément physique avant le passage à l'abstrait — la dernière pièce de l'équipement corporel avant le discernement.",
        axe3_sourate: "Les lèvres, comme la langue, sont un don de la parole. La sourate oppose la parole vantarde (v6) à la parole vertueuse (implicite dans les versets 11-20 où les croyants s'encouragent mutuellement à la patience). Le don des lèvres rend possible aussi bien la vantardise que l'encouragement — le choix entre les deux est le sujet des versets suivants.",
        axe4_coherence: "Le Coran mentionne rarement les lèvres directement, ce qui rend ce verset distinctif. L'énumération yeux-langue-lèvres rappelle l'attention coranique au détail de la création : chaque organe est un signe, un don comptable. En 23:78, « C'est Lui qui a créé pour vous l'ouïe, la vue et les cœurs » — le schéma d'énumération des dons corporels est récurrent.",
        axe5_frequence: "Les lèvres sont l'ultime barrière entre la pensée et la parole prononcée. Le khalifa qui parle sans réfléchir franchit cette barrière trop vite. Les deux lèvres représentent le filtre physique de la communication — elles s'ouvrent pour laisser passer la parole juste et se ferment pour retenir la parole nuisible. La maîtrise de la parole est une responsabilité centrale du khalifa."
      },
      "Parole/Expression": {
        status: "probable",
        senses: ["parler face à face", "un mot (fille de la lèvre)", "être proche d'une affaire"],
        proof_ctx: "La parole est la fonction naturelle des lèvres — le Lane's donne « fille de la lèvre » (bint al-shafa) comme métaphore du mot. La distinction avec le sens retenu est que le verset 9 liste des organes physiques (après les yeux du v8, la langue dans le même v9), pas des fonctions. Les lèvres sont mentionnées comme organes du corps, la parole qu'elles produisent est leur fonction secondaire. Le passage du physique (organes) au moral (guidance, v10) est la structure de l'argument — insérer une fonction abstraite (la parole) au milieu d'une liste d'organes briserait cette progression.",
        axe1_verset: "Le verset dit « et une langue et deux lèvres ». Si shafatayni signifie la parole/expression, le verset dirait : « et une langue et deux paroles ». Or une langue et des paroles sont des niveaux différents — la langue est un organe, la parole est une fonction. La cohérence de l'énumération (organes du visage) favorise le sens physique de lèvres.",
        axe2_voisins: "Les versets 8 et 9 forment une unité qui liste des dons corporels. Le verset 10 passe au don moral (la guidance). Si le verset 9 incluait déjà la parole (fonction abstraite), le passage au moral serait moins marqué. La progression organes → guidance est plus nette avec le sens physique.",
        axe3_sourate: "La sourate utilise la progression physique → moral pour montrer que les dons corporels servent un but plus grand. Les lèvres comme organe physique sont le support matériel de la parole, qui elle-même sert la guidance morale (v10). Chaque niveau prépare le suivant.",
        axe4_coherence: "Le Coran distingue habituellement l'organe de sa fonction. La langue (lisān) peut désigner la parole, mais les lèvres (shafatān) désignent plus souvent l'organe physique dans le Coran. Le contexte d'énumération de dons corporels confirme le sens physique.",
        axe5_frequence: "La parole comme expression de la pensée est essentielle à la mission du khalifa. Mais dans ce verset, c'est l'organe qui est donné en premier — la capacité d'expression vient de l'organe physique. La mission du khalifa commence par les outils corporels avant de passer aux choix moraux."
      },
      "Consommation/Épuisement": {
        status: "nul",
        senses: ["eau fréquentée par beaucoup de buveurs", "nourriture mangée par beaucoup", "importuner par la demande jusqu'à épuiser", "la famille a presque consommé mes biens"],
        proof_ctx: "La consommation et l'épuisement n'ont aucun rapport avec l'énumération anatomique des dons corporels. Le contexte est clairement : yeux + langue + lèvres = organes du visage."
      },
      "Réputation/Renommée": {
        status: "nul",
        senses: ["louange parmi les gens", "bonne réputation parmi nous"],
        proof_ctx: "La réputation est un état social abstrait. Le duel shafatayni (deux lèvres) est clairement physique — on n'a pas « deux réputations »."
      }
    }
  }, 2);

  // --- Traduction verset 9 ---
  await sb.from('verse_analyses').update({
    translation_arab: "وَلِسَانًا وَشَفَتَيْنِ",
    full_translation: "et une langue et deux lèvres ?",
    segments: [
      { fr: "et", pos: "particule", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "une langue", pos: "nom", phon: "lisānan", arabic: "لِسَانًا", word_key: "lsn", is_particle: false, sense_retenu: "langue", position: 2 },
      { fr: "et", pos: "particule", phon: "wa", arabic: "وَ", is_particle: true, position: 3 },
      { fr: "deux lèvres", pos: "nom", phon: "shafatayni", arabic: "شَفَتَيْنِ", word_key: "shfh", is_particle: false, sense_retenu: "lèvres", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est la continuation de la question rhétorique du verset 8 (« N'avons-Nous pas donné... ? »). La conjonction wa (et) relie les nouveaux dons aux yeux déjà mentionnés. Le verbe najʿal (donner/faire) est sous-entendu du verset précédent. Le mot lisānan est un nom indéfini (sans article, avec tanwīn) au singulier — « une langue ». Le singulier contraste avec les duels (ʿaynayni, shafatayni) : un seul organe de parole entre deux paires d'organes. Le mot shafatayni est un duel (une forme qui indique exactement deux) — « deux lèvres ». Les lèvres sont les couvercles de la bouche d'après les sources étymologiques. L'ensemble forme une énumération de dons corporels : deux yeux, une langue, deux lèvres — les organes essentiels du visage humain, ceux de la perception (yeux) et de l'expression (langue, lèvres).

§JUSTIFICATION§
**langue** — Le sens retenu est « langue/organe de la parole ». Le mot « langue » traduit lisānan dans son sens premier d'organe physique. L'alternative « langage » désigne la fonction abstraite, pas l'organe — or le verset liste des dons corporels concrets. L'alternative « éloquence » est trop spécifique — la langue permet toute parole, pas seulement la parole élégante.

**lèvres** — Le sens retenu est « Lèvre/Bouche ». Le mot « lèvres » traduit shafatayni dans son sens anatomique. L'alternative « les deux paroles » (sens de Parole/Expression) briserait la cohérence de l'énumération anatomique. Le duel confirme le sens physique : les deux lèvres, supérieure et inférieure.

§CRITIQUE§
Les traductions courantes donnent « et une langue et deux lèvres » (Hamidullah). Cette traduction est identique à la nôtre. Le texte est ici suffisamment clair pour que les traductions convergent. La seule nuance possible est que certains commentateurs voient dans la langue et les lèvres une métonymie pour la parole — mais le texte dit bien lisānan wa shafatayni (une langue et deux lèvres), les organes physiques.`
  }).eq('verse_id', verse_id);

  // Daily phrases pour lsn (id=1298) — 0 existantes
  await insertDaily(1298, 'langue', 'لِسَان', 'lisān', [
    "Sa langue maternelle est l'arabe.",
    "Il a tenu sa langue pendant toute la réunion.",
    "La langue est l'organe le plus puissant du corps."
  ]);

  console.log('VERSET 90:9 — TERMINÉ');
}

// ============================================================
// VERSET 90:10
// ============================================================
async function verse90_10() {
  console.log('\n=== VERSET 90:10 — وَهَدَيْنَـٰهُ ٱلنَّجْدَيْنِ ===');
  const verse_id = 6033;

  // ---- HDY (هدي) — id=261 — "guider" ----
  // Forme: verbe accompli 1P + suffixe hadaynāhu (Nous l'avons guidé)
  await upsertVWA(verse_id, 'hdy', 'guider', {
    sense_chosen: "guider",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        status: "retenu",
        senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-même"],
        proof_ctx: "Le sens retenu est « Guidance/Direction ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine h-d-y signifie guider, montrer le chemin, diriger vers la bonne direction. La guidance est un acte extérieur et directionnel : celui qui guide sort de son savoir et oriente l'autre vers un but. Le verbe hadaynā est un accompli de la première personne du pluriel de majesté (« Nous avons guidé ») avec le suffixe -hu (le). L'accompli marque un acte achevé : la guidance a été donnée, le chemin a été montré. Le complément d'objet direct al-najdayni (les deux voies) précise la nature de cette guidance : montrer les deux chemins possibles. Distinction avec « Conduite/Comportement » : la conduite est la manière d'agir de quelqu'un, un état personnel. La guidance est un acte dirigé vers l'autre — on guide quelqu'un, on ne « conduit » pas quelqu'un vers deux voies. Distinction avec « Don/Offrande » : le don est un transfert de bien matériel. La guidance est un transfert de savoir, pas de matière.",
        axe1_verset: "Le verset dit « et Nous l'avons guidé vers les deux voies ». Le verbe hadaynāhu est un accompli (une forme qui exprime une action achevée) avec le pronom « Nous » (pluriel de majesté) et le suffixe -hu (le). Le complément d'objet al-najdayni (les deux voies) est un duel défini (avec l'article al-). Le champ lexical est : guider + les deux voies — le don n'est plus physique (yeux, langue, lèvres) mais moral : la capacité de discernement entre le bien et le mal.",
        axe2_voisins: "Les versets 8-9 donnaient les organes du corps (yeux, langue, lèvres). Le verset 10 passe au don moral : la guidance vers les deux voies. La progression est : percevoir (yeux) → exprimer (langue, lèvres) → choisir (guidance). Les dons physiques rendaient possible l'action ; le don moral rend possible le choix juste. Ce verset est le sommet de l'énumération des dons divins.",
        axe3_sourate: "La guidance vers les deux voies est le pivot de la sourate 90. Avant ce verset : l'arrogance et les dons corporels. Après ce verset : l'appel à choisir la bonne voie (la voie escarpée, v11-20). Le verset 10 est la charnière — il montre que l'être humain a reçu à la fois les outils (corps) et le mode d'emploi (guidance) pour faire le bon choix. S'il ne le fait pas, c'est par choix, pas par ignorance.",
        axe4_coherence: "Le Coran utilise la racine h-d-y abondamment pour la guidance divine. En 76:3, « Nous l'avons guidé vers le chemin, qu'il soit reconnaissant ou ingrat ». En 91:8, « Et Il lui a inspiré son impiété et sa piété ». Le schéma est constant : la guidance est donnée, le choix reste à l'être humain. La guidance des deux voies (bien et mal) est une constante coranique qui fonde la responsabilité humaine.",
        axe5_frequence: "La guidance vers les deux voies est la condition de la mission du khalifa. Le khalifa ne peut choisir la justice que s'il connaît aussi l'injustice. Le don de la guidance est le don du discernement — savoir distinguer le bien du mal, le juste de l'injuste. Sans ce discernement, la mission civilisatrice est impossible. La sourate montre que l'être humain a tout reçu pour réussir sa mission : la perception (yeux), l'expression (langue, lèvres) et le discernement (guidance)."
      },
      "Conduite/Comportement": {
        status: "peu_probable",
        senses: ["conduite", "manière d'agir", "comportement calme"],
        proof_ctx: "La conduite est la manière personnelle d'agir — un état intérieur qui se manifeste dans le comportement. La guidance est un acte dirigé vers l'autre : « Nous l'avons guidé ». La structure du verset (sujet divin + objet humain + complément directionnel) impose un acte de direction, pas un état de comportement. La conduite est quelque chose que l'on a, la guidance est quelque chose que l'on reçoit.",
        axe1_verset: "Le verset dit « Nous l'avons guidé vers les deux voies ». Si le sens était « conduite », le verset dirait « Nous lui avons donné la conduite des deux voies ». Or le verbe hadaynā est transitif direct avec l'objet al-najdayni — « Nous l'avons dirigé vers les deux voies », pas « Nous lui avons appris la conduite ». La structure grammaticale favorise la guidance directionnelle.",
        axe2_voisins: "Dans le contexte des dons divins (v8-10), la conduite serait un don intérieur. Or la progression va du physique (yeux, v8) au moral (guidance, v10) en passant par l'expressif (langue, lèvres, v9). La guidance comme acte directionnel s'inscrit mieux dans cette progression que la conduite comme état intérieur.",
        axe3_sourate: "La sourate appelle à franchir la voie escarpée (v11-20) — ce qui suppose que les deux voies ont été montrées (guidance) et que l'être humain doit choisir. La conduite comme manière d'agir ne donne pas ce choix explicite entre deux chemins.",
        axe4_coherence: "Le Coran utilise la racine h-d-y dans le sens de guidance directionnelle bien plus souvent que dans le sens de conduite personnelle. La formule hadaynāhu al-najdayni est un acte de montrer deux chemins, pas d'enseigner un comportement.",
        axe5_frequence: "La conduite est un résultat de la guidance, pas la guidance elle-même. Le khalifa reçoit la guidance (il apprend les deux voies) puis adopte une conduite (il choisit l'une des deux). Le verset décrit la première étape, pas la seconde."
      },
      "Don/Offrande": {
        status: "nul",
        senses: ["cadeau", "offrande", "sacrifice", "présent"],
        proof_ctx: "Le don/offrande est un transfert de bien matériel. Le verset parle de montrer un chemin, pas de donner un objet. La guidance n'est pas un cadeau matériel mais une orientation morale."
      },
      "Parenté/Famille": {
        status: "nul",
        senses: ["conduire une mariée"],
        proof_ctx: "Conduire une mariée est un usage social spécifique de la racine h-d-y sans rapport avec le contexte de guidance morale entre le bien et le mal."
      },
      "Sens isolé/Repentance": {
        status: "nul",
        senses: ["repentance"],
        proof_ctx: "La repentance est un retour vers le bien après une faute. Le verset décrit un don initial (montrer les deux voies), pas un retour après égarement."
      }
    }
  }, 1);

  // ---- NJD (نجد) — id=2628 — "voies" ----
  // Forme: nom duel défini al-najdayni (les deux voies)
  await upsertVWA(verse_id, 'njd', 'voies', {
    sense_chosen: "voies",
    concept_chosen: "Voie/Chemin",
    concepts: {
      "Voie/Chemin": {
        status: "retenu",
        senses: ["route apparente et élevée", "les deux voies (bien et mal)", "chemin dans une montagne", "chose apparente et manifeste"],
        proof_ctx: "Le sens retenu est « Voie/Chemin ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-j-d désigne une voie élevée et apparente, un chemin qui se voit de loin parce qu'il est en hauteur. Le Lane's cite explicitement ce verset (90:10) avec le sens « les deux voies : la voie du bien et celle du mal ; ou les deux chemins apparents et élevés ». Le mot al-najdayni est un duel défini (avec l'article al-) : « les deux voies connues ». Le duel est significatif : il ne s'agit pas de plusieurs chemins mais de deux chemins précis, clairement distincts et visibles. La définition (al-) indique que ces deux voies sont connues, identifiables — pas vagues. Distinction avec « Élévation/Hauteur » : l'élévation est la racine physique du mot — les voies sont élevées parce qu'elles sont apparentes. Mais le verset ne parle pas d'altitude, il parle de guidance vers deux chemins moraux. L'élévation est la caractéristique physique de ces voies, pas leur identité.",
        axe1_verset: "Le verset dit « et Nous l'avons guidé vers les deux voies ». Le mot al-najdayni est le complément d'objet direct du verbe hadaynā (guider). Le duel (une forme qui indique exactement deux) précise qu'il y a exactement deux voies. L'article défini al- indique que ces voies sont connues et identifiables. Le champ lexical guider + les deux voies forme le don du discernement moral : voir clairement les deux options qui s'offrent à l'être humain.",
        axe2_voisins: "Le verset 10 clôt la série des dons divins commencée au verset 8. Après les organes du corps (yeux, langue, lèvres), les deux voies représentent le don ultime : la capacité de distinguer le bien du mal. Les versets 11-20 développeront le contenu de ces deux voies — la voie escarpée (libérer, nourrir) et son contraire (ne pas croire, ne pas s'encourager). Le verset 10 est la transition entre le constat des dons et l'appel à les utiliser.",
        axe3_sourate: "Les deux voies sont le pivot de la sourate 90. Tout ce qui précède (v1-9) prépare ce moment : l'être humain a été créé dans la difficulté, il a reçu les organes de la perception et de l'expression, et maintenant il connaît les deux chemins. La voie escarpée (v11-20) est la description de l'un des deux najd — le chemin élevé et difficile de la vertu. L'autre chemin est celui de l'arrogance et de la vantardise (v5-7).",
        axe4_coherence: "Le Coran utilise le duel pour les deux voies dans plusieurs passages : en 91:8, « Il lui a inspiré son impiété et sa piété » — deux voies intérieures. En 76:3, « Nous l'avons guidé vers le chemin, qu'il soit reconnaissant ou ingrat » — une seule voie mais deux attitudes possibles. Le verset 90:10 est plus explicite : deux voies distinctes et élevées. La racine n-j-d ajoute la nuance de visibilité — ces voies ne sont pas cachées, elles sont apparentes et en hauteur, impossibles à ignorer.",
        axe5_frequence: "Les deux voies fondent la responsabilité du khalifa. Le khalifa ne peut être tenu responsable que s'il connaît les deux options. Le don de la guidance vers al-najdayni signifie que l'être humain sait où mène chaque chemin — il ne peut pas plaider l'ignorance. La voie escarpée (la justice, la libération, la nourriture des pauvres) et la voie facile (la vantardise, l'arrogance) sont toutes deux visibles et connues. Le choix est donc pleinement conscient."
      },
      "Élévation/Hauteur": {
        status: "probable",
        senses: ["terre élevée", "haut plateau", "région du Nejd", "lieu sans arbres"],
        proof_ctx: "L'élévation est le sens physique premier de la racine n-j-d : une terre élevée, un lieu en hauteur. Ce sens est la base étymologique des voies élevées — les najd sont des chemins en hauteur, visibles de loin. La distinction avec le sens retenu est que le verset ne parle pas de géographie (des terres élevées) mais de guidance morale (deux voies à suivre). L'élévation est la caractéristique physique qui rend les voies visibles et apparentes, mais le verset utilise cette image pour parler de choix moraux, pas de topographie. Le duel défini (al-najdayni) avec le verbe hadaynā (guider) oriente vers le sens moral de chemin, pas le sens géographique de plateau.",
        axe1_verset: "Si al-najdayni signifie « les deux hauteurs », le verset dirait « Nous l'avons guidé vers les deux hauteurs ». Le verbe guider (hadā) avec un complément d'élévation géographique est inhabituel — on guide vers un chemin, pas vers un plateau. Le champ lexical guider + élévation est moins naturel que guider + voie.",
        axe2_voisins: "Les versets voisins (v8-9) parlent de dons corporels. Le verset 10 passe au don moral. Deux hauteurs géographiques ne s'inscrivent pas dans cette progression physique → moral. Deux voies (le bien et le mal) s'inscrivent parfaitement.",
        axe3_sourate: "La sourate appelle à franchir la voie escarpée (al-ʿaqaba, v11). Si al-najdayni était un sens géographique (deux hauteurs), il y aurait une redondance avec la montée escarpée du verset 11. Le sens de deux voies morales prépare mieux le passage à la voie escarpée comme l'un des deux chemins.",
        axe4_coherence: "Le Coran utilise d'autres mots pour la hauteur géographique (jabal pour montagne, ṭūr pour mont). Le mot najd dans le contexte de guidance morale est spécifique à ce verset — le Lane's confirme que pour ce verset, najd signifie les deux voies du bien et du mal.",
        axe5_frequence: "L'élévation comme qualité physique des voies souligne leur visibilité. La mission du khalifa repose sur des chemins clairs et apparents, pas cachés — l'élévation renforce l'idée que le choix moral est évident."
      },
      "Courage/Vaillance": {
        status: "nul",
        senses: ["être courageux et vigoureux", "vaillant dans les affaires difficiles", "celui qui surmonte les difficultés"],
        proof_ctx: "Le courage est un trait de caractère personnel. Le duel al-najdayni (les deux) exclut ce sens — on ne dit pas « les deux courages ». Le verbe hadaynā (Nous l'avons guidé vers) + duel impose un complément de direction, pas un trait de caractère."
      },
      "Victoire/Domination": {
        status: "nul",
        senses: ["vaincre", "conquérir et soumettre"],
        proof_ctx: "La victoire est un résultat d'un conflit. Le duel (les deux victoires) n'a pas de sens dans le contexte de guidance morale. Le verset parle de montrer deux chemins, pas de vaincre."
      },
      "Détresse/Affliction": {
        status: "nul",
        senses: ["être affligé par le chagrin", "suer d'anxiété ou de travail", "secours et assistance"],
        proof_ctx: "La détresse est un état de souffrance. Le duel (les deux détresses) ne correspond pas au contexte de guidance divine vers deux chemins moraux."
      },
      "Ornement/Mobilier": {
        status: "nul",
        senses: ["mobilier de maison", "décorer une tente"],
        proof_ctx: "Le mobilier n'a aucun rapport avec la guidance morale du verset. Le contexte exclut entièrement ce sens."
      },
      "Sein/Poitrine": {
        status: "nul",
        senses: ["sein de femme"],
        proof_ctx: "Le sein est un sens marginal de la racine. Le Lane's le mentionne comme alternative rare pour ce verset mais le sens de « voie » est largement dominant dans la tradition lexicographique."
      }
    }
  }, 2);

  // --- Traduction verset 10 ---
  await sb.from('verse_analyses').update({
    translation_arab: "وَهَدَيْنَـٰهُ ٱلنَّجْدَيْنِ",
    full_translation: "Ne l'avons-Nous pas guidé aux deux voies ?",
    segments: [
      { fr: "et", pos: "particule", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "Nous l'avons guidé", pos: "verbe", phon: "hadaynāhu", arabic: "هَدَيْنَـٰهُ", word_key: "hdy", is_particle: false, sense_retenu: "guider", position: 2 },
      { fr: "vers les deux voies", pos: "nom", phon: "al-najdayni", arabic: "ٱلنَّجْدَيْنِ", word_key: "njd", is_particle: false, sense_retenu: "voies", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction wa (et) relie ce verset aux dons précédents (v8-9). Le verbe hadaynā est un accompli (une forme qui exprime une action achevée) de la première personne du pluriel de majesté (le « Nous » divin) de la racine h-d-y (guider). Le suffixe -hu (le) est le complément d'objet direct : « Nous l'avons guidé ». Le passage de l'inaccompli (najʿal au v8 = Nous faisons) à l'accompli (hadaynā = Nous avons guidé) est significatif : les dons corporels sont présentés comme des actions en cours ou intemporelles, tandis que la guidance est présentée comme un acte achevé — les deux voies ont été montrées une fois pour toutes. Le mot al-najdayni est un duel défini (une forme qui indique exactement deux, avec l'article al-) de la racine n-j-d. D'après les sources étymologiques, le najd est une voie élevée et apparente — les deux voies sont donc des chemins bien visibles, impossibles à ignorer.

§JUSTIFICATION§
**guidé** — Le sens retenu est « guider/montrer le chemin ». Le mot « guidé » traduit hadaynā dans son sens premier de direction. L'alternative « dirigé » est proche mais plus autoritaire — la guidance montre le chemin sans forcer, la direction impose. L'alternative « conduit » implique un accompagnement physique — la guidance est un don de discernement, pas un accompagnement.

**les deux voies** — Le sens retenu est « Voie/Chemin ». Le mot « voies » traduit al-najdayni dans le sens de chemins moraux clairement distincts. L'alternative « les deux hauteurs » (sens d'Élévation/Hauteur) est le fondement étymologique mais le contexte de guidance morale oriente vers le sens de chemin. L'alternative « les deux chemins » est synonyme — « voie » est choisi car plus courant en français dans le registre moral (la voie du bien, la voie du mal).

§CRITIQUE§
Hamidullah donne « Ne l'avons-Nous pas guidé aux deux voies ? ». Sa formulation présente le verset comme une question rhétorique (avec « Ne... pas »), alors que le texte arabe utilise wa-hadaynāhu (et Nous l'avons guidé) — une affirmation reliée à la question des versets 8-9 par la conjonction wa. Hamidullah étend la structure interrogative du verset 8 jusqu'au verset 10, ce qui est une lecture possible mais pas la seule. Notre traduction « et Nous l'avons guidé vers les deux voies » préserve l'affirmation comme un fait acquis qui conclut la liste des dons. La nuance est que dans notre lecture, la guidance n'est pas questionnée mais affirmée — c'est un don certain, pas un rappel rhétorique.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 90:10 — TERMINÉ');
}

// ============================================================
// MAIN
// ============================================================
(async () => {
  console.log('========================================');
  console.log('PIPELINE S90 — PARTIE 2 (v6-10)');
  console.log('Étapes 3-4: Analyse concepts + Traduction');
  console.log('========================================');

  await verse90_6();
  await verse90_7();
  await verse90_8();
  await verse90_9();
  await verse90_10();

  // Daily phrases pour racines manquantes
  console.log('\n=== DAILY PHRASES ===');
  // hlk already handled in verse90_6
  // whd already handled in verse90_7
  // lsn already handled in verse90_9

  console.log('\n========================================');
  console.log('PIPELINE S90 PARTIE 2 — TERMINÉ');
  console.log('========================================');

  process.exit(0);
})();
