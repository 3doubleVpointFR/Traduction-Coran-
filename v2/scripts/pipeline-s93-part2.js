// Pipeline Sourate 93 (Ad-Duha) — Partie 2: Versets 5-8
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
  const { error } = await sb.from('word_daily').insert(rows);
  if (error) console.log(`  Daily ERROR:`, error.message);
  else console.log(`  Daily inserted ${rows.length} phrases for id=${analysis_id}`);
}

// ================================================================
// CONTEXTE SOURATE 93 (Ad-Duha / La Clarte du Matin)
// ================================================================
// Structure : 2 serments (v1-2), 1 negation rassurante (v3), 2 promesses (v4-5),
// 3 rappels de bienfaits (v6-8), 3 injonctions (v9-11).
// Theme : Dieu rassure le prophete qu'il ne l'a pas abandonne, rappelle les bienfaits
// passes et ordonne la gratitude et la bienveillance.
// NOTE: etw (step1) → en realite ety (ع ط ى) id=2040, forme IV yu'tika = il te donnera

async function verse93_5() {
  console.log('\n=== VERSET 93:5 — وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ ===');
  const verse_id = 6084;

  // ---- ETW → en realite racine ety (ع ط ى) id=2040 — "donner" ----
  // Forme: yu'tika — verbe inaccompli forme IV (il te donnera)
  // Concepts: Don/Attribution (donner, accorder), Venue/Arrivee (venir, arriver, apporter)
  await upsertVWA(verse_id, 'etw', 'donner', {
    sense_chosen: "donner",
    concept_chosen: "Don/Attribution",
    concepts: {
      "Don/Attribution": {
        status: "retenu",
        senses: ["donner", "accorder"],
        proof_ctx: "Le sens Don/Attribution est retenu pour yu'tika dans ce verset. La forme IV (af'ala) de la racine ety signifie « faire parvenir quelque chose a quelqu'un », c'est-a-dire donner, accorder. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), a'ta = il lui a donne, il lui a accorde. Le verbe est a l'inaccompli (action en cours ou future) avec la particule sawfa qui indique un futur certain — « il te donnera assurement ». Le sens Venue/Arrivee decrit un mouvement vers un lieu, une arrivee physique. Or ici le sujet est Dieu (rabbuka = ton seigneur) et l'objet est « toi » (ka) — il s'agit d'un transfert, d'un don de quelque chose au destinataire, pas d'une arrivee physique. La difference philosophique est nette : le don est un acte genereux dirige de celui qui possede vers celui qui recoit, tandis que la venue est un deplacement de la personne elle-meme. Le contexte du verset (promesse divine apres les serments et la reassurance) confirme qu'il s'agit d'un don futur et certain.",
        axe1_verset: "Le champ lexical du verset contient : sawfa (futur certain), yu'tika (il te donnera), rabbuka (ton seigneur), fa-tarda (alors tu seras satisfait). Ce sont des mots de promesse et de don genereux. Le sens « donner » s'inscrit parfaitement dans ce champ : Dieu promet de donner quelque chose au prophete, et cette chose le satisfera. Le don est le pivot du verset — c'est l'acte qui mene a la satisfaction. Sans le don, la satisfaction n'a pas de cause. Le verset forme une sequence logique : promesse → don → satisfaction.",
        axe2_voisins: "Le verset 4 dit que l'au-dela est meilleur que l'ici-bas. Le verset 5 enchaine avec la promesse concrete de ce « meilleur » — Dieu donnera au prophete jusqu'a ce qu'il soit satisfait. Les versets 6-8 rappellent les dons passes (refuge pour l'orphelin, guidance pour l'egare, enrichissement du demuni). Le don en v5 est donc la synthese et la continuation de ces bienfaits passes, projetes dans le futur. Le passage des versets 3-5 forme un crescendo : pas d'abandon (v3) → l'au-dela est meilleur (v4) → Dieu donnera (v5).",
        axe3_sourate: "Le theme de la sourate 93 est la reassurance divine apres une periode d'inquietude. Les serments (v1-2) posent le cadre solennel, la negation (v3) dissipe la peur, les promesses (v4-5) ouvrent l'espoir, les rappels (v6-8) ancrent la confiance dans l'experience passee, et les injonctions (v9-11) demandent la gratitude active. Le don en v5 est le coeur de la promesse — il transforme la reassurance en engagement concret.",
        axe4_coherence: "La racine ety apparait dans de nombreux versets de promesse divine. En 108:1, « inna a'taynaka al-kawthar » (nous t'avons donne l'abondance) utilise la meme racine au passe — la Dieu rappelle un don deja accompli. Ici en 93:5 c'est au futur (yu'tika). Les deux versets se completent : don passe et don futur. En 20:50, Moise dit « rabbuna alladhi a'ta kulla shay'in khalqahu » (notre seigneur est celui qui a donne a chaque chose sa creation) — le don est presente comme un acte fondamental de Dieu.",
        axe5_frequence: "Le sens de don et d'attribution est directement lie a la mission de l'etre humain en tant que representant sur terre. Recevoir un don de Dieu implique une responsabilite — ce qui est donne n'est pas pour la jouissance personnelle mais pour etre redistribue et utilise dans l'etablissement de la justice. Le verset dit « il te donnera et tu seras satisfait » — la satisfaction vient du don, et ce don sert la mission plus large de bienfaisance que les versets 9-11 vont ordonner (ne pas opprimer l'orphelin, ne pas repousser le demandeur, proclamer les bienfaits)."
      },
      "Venue/Arrivée": {
        status: "peu_probable",
        senses: ["venir", "arriver", "apporter"],
        proof_ctx: "Le sens Venue/Arrivee decrit un deplacement physique vers un lieu. Or dans le verset, le sujet est Dieu et l'action porte sur le prophete (« il te... ») avec un objet implicite a donner. La venue est un mouvement de soi-meme, pas un transfert d'un bien a autrui. La forme IV yu'ti specifie precisement l'acte de faire parvenir quelque chose, pas d'arriver soi-meme. Contextuellement, apres la promesse que l'au-dela est meilleur (v4), ce n'est pas une arrivee qui est attendue mais un don.",
        axe1_verset: "Le champ lexical du verset (sawfa = futur certain, rabbuka = ton seigneur, fa-tarda = tu seras satisfait) pointe vers une promesse de don et non d'arrivee. La satisfaction (rida) est la consequence d'avoir recu quelque chose, pas d'une simple venue. Le verbe a la forme IV avec un suffixe pronominal « ka » (toi) indique un transfert vers le destinataire, ce qui correspond au don, pas au deplacement physique.",
        axe2_voisins: "Les versets voisins (v6-8) rappellent des bienfaits concrets (refuge, guidance, enrichissement) — tous des dons, pas des venues. Le verset 5 s'inscrit dans cette logique de generosite divine. La venue n'explique pas le lien entre v5 et les rappels de bienfaits qui suivent.",
        axe3_sourate: "Le theme de la sourate est la reassurance par le rappel des bienfaits passes et la promesse de bienfaits futurs. La venue ne s'inscrit pas naturellement dans cette thematique de generosite.",
        axe4_coherence: "En 108:1, la meme racine est utilisee clairement au sens de donner (a'taynaka al-kawthar). La coherence coranique pointe vers le don.",
        axe5_frequence: "La venue physique ne contribue pas directement a la mission de l'etre humain dans ce contexte. Le don, en revanche, implique une responsabilite de redistribution."
      }
    }
  }, 1);

  // ---- RBB (ر ب ب) id=253 — "seigneur" ----
  // Forme: rabbuka — nom en idafa avec suffixe pronominal 2e personne (ton seigneur)
  // Deja analyse dans v3. Meme concept retenu: Seigneurie/Autorite bienveillante
  await upsertVWA(verse_id, 'rbb', 'seigneur', {
    sense_chosen: "seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve"],
        proof_ctx: "Le sens Seigneurie/Autorite bienveillante est retenu pour rabbuka dans ce verset. La racine r-b-b dans sa dimension de seigneurie designe celui qui possede, eleve et accompagne la croissance de ce qui est sous sa garde. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), rabb = maitre, seigneur, proprietaire, celui qui eleve. Ici en v5, rabbuka (ton seigneur) est le sujet du don — c'est le seigneur qui donne. Le contexte de la sourate est la reassurance : le seigneur n'a pas abandonne (v3), l'au-dela est meilleur (v4), et maintenant le seigneur donnera (v5). La seigneurie ici est celle de l'autorite bienveillante qui prend soin de son protege. Le sens Croissance/Augmentation (augmenter, croitre) est moins pertinent car le verset parle d'une relation personnelle (rabbuka = TON seigneur) et non d'une augmentation quantitative. Le sens Education/Accompagnement est proche mais trop restreint — le seigneur ne fait pas qu'eduquer, il donne, protege, guide (cf. v6-8).",
        axe1_verset: "Le champ lexical (sawfa yu'tika = il te donnera assurement, fa-tarda = tu seras satisfait) decrit une relation de generosite entre un superieur et celui qui est sous sa charge. Le mot rabbuka (ton seigneur) nomme ce superieur. La seigneurie bienveillante est le cadre naturel de cette relation : un seigneur qui donne a celui dont il s'occupe. Le suffixe possessif « ka » (ton) renforce la dimension personnelle et intime de cette seigneurie.",
        axe2_voisins: "En v3, le meme mot rabbuka apparait dans « ma wadda'aka rabbuka » (ton seigneur ne t'a pas abandonne). En v5, il reapparait comme sujet du don futur. Les deux utilisations dessinent un seigneur qui reste fidele a son protege et qui le comble. Les versets 6-8 illustrent cette seigneurie par des actes concrets : donner un refuge a l'orphelin, guider l'egare, enrichir le demuni.",
        axe3_sourate: "La sourate 93 est centree sur la relation entre Dieu et le prophete. Le mot rabbuka (ton seigneur) apparait deux fois (v3 et v5) et definit cette relation comme une seigneurie personnelle et bienveillante.",
        axe4_coherence: "La racine rbb est la plus frequente du Coran dans ce sens de seigneurie. Al-Fatiha commence par « al-hamdu lillahi rabbi al-'alamin » (la louange est a Dieu, seigneur des mondes). La seigneurie divine est un theme central et constant du Coran.",
        axe5_frequence: "La seigneurie bienveillante implique une responsabilite reciproque : le seigneur donne et protege, celui qui est sous sa charge doit reconnaitre et etre reconnaissant. C'est exactement ce que les versets 9-11 vont demander — la gratitude en actes."
      },
      "Croissance/Augmentation": {
        status: "nul",
        senses: ["augmenter", "croitre"],
        proof_ctx: "Le sens de croissance et d'augmentation est le sens physique premier de la racine r-b-b, mais dans ce verset rabbuka est un titre relationnel (ton seigneur), pas une description de croissance. La forme nominale rabb est lexicalisee comme « seigneur » dans l'arabe coranique."
      },
      "Éducation/Accompagnement": {
        status: "probable",
        senses: ["elever un enfant", "eduquer", "accompagner la croissance"],
        proof_ctx: "Le sens Education/Accompagnement est philosophiquement proche de la seigneurie bienveillante. La difference est que l'education est un aspect specifique de la seigneurie — elle designe l'accompagnement dans la croissance, alors que la seigneurie englobe aussi la possession, la protection et le don. Dans ce verset, le seigneur donne (yu'tika), ce qui depasse le cadre educatif. La seigneurie est donc plus large et plus adaptee.",
        axe1_verset: "Le champ lexical du verset (donner, satisfaire) depasse le cadre strict de l'education. Le don n'est pas un acte pedagogique mais un acte de generosite souveraine. L'education est un sous-ensemble de ce que fait le seigneur, pas l'inverse.",
        axe2_voisins: "Les versets 6-8 rappellent trois bienfaits : refuge (v6), guidance (v7), enrichissement (v8). La guidance (v7) pourrait etre de l'education, mais le refuge (v6) et l'enrichissement (v8) ne sont pas educatifs. L'ensemble pointe vers une seigneurie globale, pas uniquement educative.",
        axe3_sourate: "Le theme de la sourate est la reassurance totale — pas seulement pedagogique. L'education est trop etroite pour couvrir tout le spectre des bienfaits rappeles.",
        axe4_coherence: "Le Coran utilise rabb dans des contextes bien plus larges que l'education : creation, provision, jugement, misericorde. Le sens educatif est un sous-ensemble.",
        axe5_frequence: "L'education contribue a la mission du khalifa mais le don et la protection en sont des conditions prealables. La seigneurie couvre les deux."
      }
    }
  }, 2);

  // ---- RDW (ر ض و) id=812 — "etre satisfait" ----
  // Forme: fa-tarda — verbe inaccompli (alors tu seras satisfait)
  // Concepts: Satisfaction/Agrement (etre satisfait, agreer, approuver, consentir), Choix/Preference (choisir pour soi, rendre satisfait)
  await upsertVWA(verse_id, 'rdw', 'etre satisfait', {
    sense_chosen: "etre satisfait",
    concept_chosen: "Satisfaction/Agrément",
    concepts: {
      "Satisfaction/Agrément": {
        status: "retenu",
        senses: ["etre satisfait", "agreer", "approuver", "consentir"],
        proof_ctx: "Le sens Satisfaction/Agrement est retenu pour fa-tarda. D'apres les sources etymologiques, radiya = il a ete satisfait, il a agree. La forme tarda (inaccompli, 2e personne) signifie « tu seras satisfait ». La particule fa- (consequence) lie cette satisfaction au don qui precede : « il te donnera, ALORS tu seras satisfait ». La satisfaction est un etat interieur de contentement qui nait de ce qu'on a recu. Le sens Choix/Preference designe un acte de selection — choisir une chose plutot qu'une autre. Or ici, il n'y a pas de choix a faire. Le verset dit simplement que le prophete sera satisfait de ce que Dieu lui donnera. La satisfaction est la consequence naturelle du don, pas un acte de preference.",
        axe1_verset: "Le champ lexical (sawfa = futur certain, yu'tika = il te donnera, rabbuka = ton seigneur) dessine une promesse de don. Le verbe tarda (etre satisfait) est la consequence de ce don, introduite par la particule fa- (alors, en consequence). La satisfaction est l'etat qui resulte de la generosite divine. C'est un etat interieur de contentement et d'acceptation — pas un choix ni une preference. Le verset forme une causalite claire : don → satisfaction.",
        axe2_voisins: "Le verset 3 disait « ton seigneur ne t'a pas abandonne et n'a pas deteste ». Le verset 4 promet que l'au-dela est meilleur. Le verset 5 concrete cette promesse : Dieu donnera et le prophete sera satisfait. La satisfaction en v5 est la reponse a l'inquietude implicite des v3-4 — la peur de l'abandon se transforme en certitude de la satisfaction. C'est un etat de repos apres l'angoisse.",
        axe3_sourate: "La sourate 93 passe de l'inquietude (v3) a la certitude (v4-5), puis aux preuves (v6-8), puis aux devoirs (v9-11). La satisfaction en v5 est le point de bascule — le moment ou l'inquietude se dissout completement. Elle marque la fin de la phase de reassurance et ouvre la phase de rappel des bienfaits.",
        axe4_coherence: "La racine rdw est utilisee dans le Coran pour decrire la satisfaction mutuelle entre Dieu et les croyants. En 98:8, « radiya Allahu 'anhum wa-radu 'anhu » (Dieu est satisfait d'eux et ils sont satisfaits de lui). En 89:28, « irji'i ila rabbiki radiyatan mardiyyatan » (retourne a ton seigneur, satisfaite et agreee). La satisfaction est un etat de paix interieure et d'harmonie entre le serviteur et le seigneur.",
        axe5_frequence: "La satisfaction qui nait du don divin n'est pas une jouissance passive. Dans le cadre de la mission du khalifa, etre satisfait de ce que Dieu donne signifie accepter les moyens recus et les utiliser pour la justice. Les versets 9-11 le confirment : la satisfaction de v5 se traduit en action — ne pas opprimer, ne pas repousser, proclamer les bienfaits."
      },
      "Choix/Préférence": {
        status: "peu_probable",
        senses: ["choisir pour soi", "rendre satisfait"],
        proof_ctx: "Le sens Choix/Preference implique un acte de selection active — choisir une chose et en ecarter une autre. Or dans le verset, il n'y a pas d'alternative presentee. Le prophete ne choisit pas — il recoit et il est satisfait. La particule fa- (consequence) indique que la satisfaction decoule automatiquement du don, pas d'un choix delibere. La difference philosophique est celle entre un etat passif (etre satisfait = recevoir et s'en contenter) et un acte actif (choisir = selectionner parmi des options).",
        axe1_verset: "Le champ lexical ne contient aucun element de choix ou d'alternative. Le verset est une promesse unidirectionnelle : Dieu donne, le prophete est satisfait. Le choix impliquerait une deliberation, absente ici.",
        axe2_voisins: "Les versets voisins ne presentent pas de situation de choix. Le v4 compare l'au-dela et l'ici-bas, mais ce n'est pas un choix offert au prophete — c'est une affirmation objective que l'un est meilleur que l'autre.",
        axe3_sourate: "Le theme de la sourate est la reassurance, pas le choix. Le prophete recoit des bienfaits et doit etre reconnaissant, pas choisir parmi des options.",
        axe4_coherence: "Le Coran utilise rdw principalement au sens de satisfaction et d'agrement, pas de choix.",
        axe5_frequence: "Le choix est pertinent pour la mission du khalifa mais n'est pas ce dont parle ce verset specifiquement."
      }
    }
  }, 3);

  // --- Segments & traduction v5 ---
  const segs5 = [
    { fr: "Et assurement", pos: "particule", phon: "wa-la-sawfa", arabic: "وَلَسَوْفَ", position: 0, is_particle: true },
    { fr: "il te donnera", pos: "verbe", phon: "yu'tika", arabic: "يُعْطِيكَ", position: 1, word_key: "etw", is_particle: false, sense_retenu: "donner" },
    { fr: "ton seigneur", pos: "nom", phon: "rabbuka", arabic: "رَبُّكَ", position: 2, word_key: "rbb", is_particle: false, sense_retenu: "seigneur" },
    { fr: "et tu seras satisfait", pos: "verbe", phon: "fa-tarda", arabic: "فَتَرْضَىٰ", position: 3, word_key: "rdw", is_particle: false, sense_retenu: "etre satisfait" }
  ];

  const te5 = `§DEMARCHE§
Le mot **yu'tika** est un verbe inaccompli a la forme IV (une forme qui signifie « faire parvenir quelque chose a quelqu'un », c'est-a-dire donner, accorder). Le sujet est **rabbuka** (ton seigneur) et le destinataire est le suffixe **-ka** (toi). La particule **sawfa** avant le verbe indique un futur certain et definitif — pas un simple « il donnera peut-etre » mais « il donnera assurement ». La particule **la-** avant sawfa renforce encore cette certitude. Le verbe **tarda** est un inaccompli (tu seras satisfait) precede de **fa-** (particule de consequence) — « alors tu seras satisfait ». La structure du verset est une promesse en deux temps : d'abord le don, ensuite la satisfaction qui en resulte. La certitude est maximale : wa + la + sawfa + verbe inaccompli.

§JUSTIFICATION§
**donnera** — Le sens retenu est « Don/Attribution ». Le mot « donner » est choisi car c'est le verbe le plus direct et courant en francais pour exprimer le transfert d'un bien ou d'un bienfait d'une personne a une autre. L'alternative « accorder » est ecartee car elle implique une demande prealable (on accorde quelque chose a quelqu'un qui l'a demande), alors qu'ici la promesse est spontanee. L'alternative « offrir » est ecartee car elle implique un geste solennel ou ceremoniel, alors que le don divin est presente comme un acte naturel de la seigneurie.

**seigneur** — Le sens retenu est « Seigneurie/Autorite bienveillante ». Meme justification que pour le verset 3.

**satisfait** — Le sens retenu est « Satisfaction/Agrement ». Le mot « satisfait » est choisi car il designe un etat de contentement profond et durable. L'alternative « content » est ecartee car elle est trop legere — la satisfaction coranique n'est pas un simple contentement passager. L'alternative « agree » est ecartee car elle implique une evaluation (juger quelque chose comme acceptable), alors qu'ici c'est un etat interieur de paix.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. Hamidullah traduit « Ton Seigneur t'accordera certes (Ses faveurs) et alors tu seras satisfait ». La difference principale est l'ajout entre parentheses de « Ses faveurs » — le texte arabe ne precise pas ce qui sera donne. Le texte laisse l'objet du don ouvert et indefini, ce qui renforce l'ampleur de la promesse. Les parentheses sont un ajout interpretatif qui restreint la portee du verset.`;

  await sb.from('verse_analyses').update({
    segments: segs5,
    translation_explanation: te5,
    full_translation: "Ton Seigneur t'accordera certes, et alors tu seras satisfait."
  }).eq('verse_id', 6084);

  // Daily phrases
  await insertDaily(2040, 'donner', 'أَعْطَى', "a'ta", [
    "Il m'a donne un livre pour mon anniversaire.",
    "Le professeur a donne les resultats aux eleves.",
    "Elle donne toujours de bons conseils."
  ]);
  await insertDaily(812, 'etre satisfait', 'رَضِيَ', "radiya", []);

  console.log('VERSET 93:5 — TERMINE');
  console.log('  etw/ety (ع ط ى) → sens "Don/Attribution" → mot francais "donner"');
  console.log('  rbb (ر ب ب) → sens "Seigneurie/Autorite bienveillante" → mot francais "seigneur"');
  console.log('  rdw (ر ض و) → sens "Satisfaction/Agrement" → mot francais "satisfait"');
  console.log('  Traduction : "Et assurement il te donnera ton seigneur et tu seras satisfait"');
}

async function verse93_6() {
  console.log('\n=== VERSET 93:6 — أَلَمْ يَجِدْكَ يَتِيمًا فَـَٔاوَىٰ ===');
  const verse_id = 6085;

  // ---- WJD (و ج د) id=700 — "trouver" ----
  // Forme: yajidka — verbe inaccompli majzum (ne t'a-t-il pas trouve)
  // Concepts: Decouverte/Existence (trouver, exister, rencontrer)
  // Un seul concept = forcement retenu
  await upsertVWA(verse_id, 'wjd', 'trouver', {
    sense_chosen: "trouver",
    concept_chosen: "Découverte/Existence",
    concepts: {
      "Découverte/Existence": {
        status: "retenu",
        senses: ["trouver", "exister", "rencontrer"],
        proof_ctx: "Le sens Decouverte/Existence est le seul concept de la racine wjd. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), wajada = il a trouve, il a rencontre, il a decouvert. La forme yajidka (inaccompli majzum apres « a-lam ») signifie « ne t'a-t-il pas trouve ». Le verbe est utilise trois fois de suite dans les versets 6, 7 et 8 avec trois complements differents (orphelin, egare, demuni), ce qui cree un rythme de rappel des bienfaits divins. Trouver ici signifie constater un etat — Dieu a constate que le prophete etait orphelin et a agi en consequence.",
        axe1_verset: "Le champ lexical du verset contient : a-lam (n'a-t-il pas, interrogation rhetorique), yajidka (il t'a trouve), yatiman (orphelin), fa-awa (alors il a donne refuge). La decouverte est le premier temps de l'action divine : constater l'etat du prophete (orphelin), puis agir (donner refuge). Le verbe wajada est le declencheur — sans la decouverte de l'etat, il n'y a pas d'action de secours. C'est un constat qui mene a l'action.",
        axe2_voisins: "Les versets 6, 7 et 8 forment un triptyque identique : « ne t'a-t-il pas trouve [dans tel etat] puis [acte de bienfait] ». V6 : orphelin → refuge. V7 : egare → guidance. V8 : demuni → enrichissement. Le verbe wajada est le pivot commun qui introduit chaque bienfait. Sa repetition cree un rythme insistant qui rappelle au prophete les multiples interventions divines dans sa vie.",
        axe3_sourate: "La sourate 93 passe des promesses (v4-5) aux preuves concretes (v6-8). Les trois « ne t'a-t-il pas trouve » sont les preuves que Dieu n'a jamais abandonne le prophete. Le verbe trouver est l'outil rhethorique de ce passage — il transforme des faits biographiques en arguments de reassurance.",
        axe4_coherence: "La racine wjd est utilisee dans le Coran dans des contextes varies. En 93:6-8, c'est le sens de « trouver quelqu'un dans un etat ». En 4:43, « wa-lam tajidu ma'an » (et vous ne trouvez pas d'eau), c'est le sens de trouver/ne pas trouver une chose. Le sens de base est constant : decouvrir, constater la presence ou l'etat de quelque chose.",
        axe5_frequence: "La decouverte divine de l'etat du prophete (orphelin, egare, demuni) et l'action qui en decoule illustrent le modele du khalifa : voir une situation de besoin et agir pour y remedier. Dieu montre l'exemple au prophete — et par extension a tout representant sur terre — de ce que signifie constater un besoin et y repondre."
      }
    }
  }, 1);

  // ---- YTM (ي ت م) id=664 — "orphelin" ----
  // Forme: yatiman — nom indefini a l'accusatif (hal = etat : en tant qu'orphelin)
  // Concepts: Orphelinat/Solitude (etre orphelin, orphelin, unique)
  await upsertVWA(verse_id, 'ytm', 'orphelin', {
    sense_chosen: "orphelin",
    concept_chosen: "Orphelinat/Solitude",
    concepts: {
      "Orphelinat/Solitude": {
        status: "retenu",
        senses: ["etre orphelin", "orphelin", "unique"],
        proof_ctx: "Le sens Orphelinat/Solitude est le seul concept de la racine ytm. D'apres les sources etymologiques, yatim = orphelin, celui qui a perdu son pere (chez les humains) ou sa mere (chez les animaux). Le Lane's donne aussi le sens de « unique, sans pareil » — un objet yatim est un objet unique en son genre (ex: une perle yatima = une perle unique). Dans le verset, yatiman est a l'accusatif indefini en position de hal (etat) — « il t'a trouve [en tant qu']orphelin ». Le sens premier d'orphelin est le plus direct et le plus naturel dans ce contexte biographique. Le sens d'unique est possible mais secondaire — il serait une extension metaphorique.",
        axe1_verset: "Le champ lexical (trouver, orphelin, donner refuge) decrit une situation concrete : un enfant sans pere qui a besoin de protection. L'orphelinat est l'etat de vulnerabilite qui justifie l'acte de refuge. Sans l'orphelinat, le refuge n'a pas de raison d'etre. Le mot yatiman est le diagnostic, fa-awa est le remede.",
        axe2_voisins: "Les trois etats rappeles en v6-8 (orphelin, egare, demuni) forment une gradation : vulnerabilite sociale (orphelin), vulnerabilite intellectuelle (egare), vulnerabilite materielle (demuni). L'orphelinat est le premier de ces trois etats — celui qui touche a l'identite et au lien familial.",
        axe3_sourate: "L'orphelinat du prophete est le point de depart de la reassurance : malgre cette vulnerabilite initiale, Dieu a agi. Le rappel de cet etat passe sert a dire : « si j'ai agi alors que tu etais au plus vulnerable, pourquoi t'abandonnerais-je maintenant ? »",
        axe4_coherence: "Le mot yatim apparait dans plusieurs versets du Coran, notamment en 93:9 (fa-amma al-yatima fa-la taqhar = quant a l'orphelin, ne l'opprime pas). Le verset 9 fait directement echo au verset 6 — le prophete, lui-meme ancien orphelin, doit proteger les orphelins. La racine ytm dans le Coran est toujours liee a la protection des plus vulnerables.",
        axe5_frequence: "L'orphelinat est au coeur de la mission du khalifa. Proteger celui qui n'a pas de protecteur naturel (le pere) est un des devoirs fondamentaux de la justice humaine. Le Coran rappelle constamment ce devoir (2:83, 4:2, 4:10, 107:2). En rappelant au prophete qu'il etait lui-meme orphelin, le texte fonde l'empathie sur l'experience personnelle."
      }
    }
  }, 2);

  // ---- AWY (أ و ي) id=755 — "refuge" ----
  // Forme: fa-awa — verbe accompli forme IV (alors il t'a donne refuge)
  // Concepts: Refuge
  await upsertVWA(verse_id, 'awy', 'donner refuge', {
    sense_chosen: "refuge",
    concept_chosen: "Refuge",
    concepts: {
      "Refuge": {
        status: "retenu",
        senses: ["refuge"],
        proof_ctx: "Le sens Refuge est le seul concept de la racine awy. D'apres les sources etymologiques, awa = il a donne refuge, il a abrite, il a accueilli. La forme IV awa signifie « faire trouver un refuge a quelqu'un ». La particule fa- (consequence) lie le refuge a la decouverte de l'orphelinat : il t'a trouve orphelin, ALORS il t'a donne refuge. Le refuge est la reponse concrete a la vulnerabilite de l'orphelinat — c'est l'acte de protection qui comble le manque de protection parentale.",
        axe1_verset: "Le champ lexical (trouver, orphelin, donner refuge) forme une sequence logique complete : constat → etat → action. Le refuge est l'aboutissement de cette sequence — c'est l'acte divin qui repond a la situation. Le mot fa-awa ferme le verset sur une note d'action accomplie, de bienfait realise.",
        axe2_voisins: "Les trois versets 6-8 suivent la meme structure : constat (trouver) → etat (orphelin/egare/demuni) → action (refuge/guidance/enrichissement). Le refuge est la premiere des trois actions, celle qui porte sur la protection physique et sociale. La guidance (v7) porte sur l'orientation intellectuelle, l'enrichissement (v8) sur les moyens materiels.",
        axe3_sourate: "Le refuge est le premier bienfait rappele dans la sourate, ce qui lui donne une importance particuliere. C'est le bienfait fondateur — sans la protection initiale, rien d'autre n'aurait ete possible. Il ancre toute la sourate dans la realite concrète de la providence divine.",
        axe4_coherence: "La racine awy apparait en 8:26 (idh antum qalilun mustad'afuna fil-ard... fa-awakum) dans un contexte similaire : Dieu rappelle qu'il a donne refuge aux croyants quand ils etaient peu nombreux et vulnerables. Le meme mouvement (vulnerabilite → refuge divin) se retrouve dans les deux versets.",
        axe5_frequence: "Donner refuge a celui qui n'en a pas est un acte fondamental de la mission du khalifa. Le refuge est la premiere forme de justice : avant de pouvoir eduquer ou enrichir, il faut d'abord proteger. L'ordre des bienfaits en v6-8 suit cette logique : d'abord la securite (refuge), puis la direction (guidance), puis les moyens (enrichissement)."
      }
    }
  }, 3);

  // --- Segments & traduction v6 ---
  const segs6 = [
    { fr: "Ne t'a-t-il pas", pos: "particule", phon: "a-lam", arabic: "أَلَمْ", position: 0, is_particle: true },
    { fr: "trouve", pos: "verbe", phon: "yajidka", arabic: "يَجِدْكَ", position: 1, word_key: "wjd", is_particle: false, sense_retenu: "trouver" },
    { fr: "orphelin", pos: "nom", phon: "yatiman", arabic: "يَتِيمًا", position: 2, word_key: "ytm", is_particle: false, sense_retenu: "orphelin" },
    { fr: "et donne refuge", pos: "verbe", phon: "fa-awa", arabic: "فَـَٔاوَىٰ", position: 3, word_key: "awy", is_particle: false, sense_retenu: "refuge" }
  ];

  const te6 = `§DEMARCHE§
Le verset commence par **a-lam** (est-ce que... ne pas), une interrogation rhetorique qui attend la reponse « si, bien sur ». Le verbe **yajidka** est un inaccompli majzum (coupe par « lam ») de la racine w-j-d — il signifie « il t'a trouve ». Le suffixe **-ka** (toi) est le complement d'objet direct. Le mot **yatiman** est un nom a l'accusatif indefini en position de hal (etat concomitant) — « il t'a trouve [etant] orphelin ». C'est une construction arabe qui decrit l'etat dans lequel se trouvait le destinataire au moment de l'action. Le verbe **fa-awa** est un accompli a la forme IV de la racine a-w-y, precede de la particule **fa-** (consequence) — « alors il t'a donne refuge ». La forme IV (af'ala) ajoute le sens causatif : non pas « il s'est refugie » mais « il t'a FAIT trouver un refuge ». Le verset forme une question rhetorique a deux temps : constat de l'etat passe (orphelin) puis rappel de l'action divine (refuge).

§JUSTIFICATION§
**trouve** — Le sens retenu est « Decouverte/Existence ». Le mot « trouver » est le plus naturel en francais pour traduire wajada — c'est le verbe du constat et de la decouverte. L'alternative « rencontrer » est ecartee car elle implique un evenement social entre deux personnes, alors qu'ici Dieu constate un etat.

**orphelin** — Le sens retenu est « Orphelinat/Solitude ». Le mot « orphelin » est la traduction directe et universellement reconnue de yatim. Le Lane's donne aussi « unique, sans pareil » mais dans ce contexte biographique (rappel de l'enfance du prophete), le sens premier est sans ambiguite.

**donne refuge** — Le sens retenu est « Refuge ». L'expression « donner refuge » traduit la forme IV awa qui signifie « faire trouver un abri ». L'alternative « abriter » est ecartee car elle est trop physique (un toit) alors que le refuge coranique est plus large — il englobe la protection, l'accueil et la prise en charge.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit « Ne t'a-t-Il pas trouve orphelin ? Alors Il t'a accueilli ». Le mot « accueilli » chez Hamidullah est plus faible que « donne refuge » — accueillir est un geste social ponctuel, alors que le refuge est une protection durable. La racine a-w-y dans le Lane's designe specifiquement le fait de fournir un abri et une protection a long terme, pas un simple accueil.`;

  await sb.from('verse_analyses').update({
    segments: segs6,
    translation_explanation: te6,
    full_translation: "Ne t'a-t-Il pas trouvé orphelin ? Alors Il t'a accueilli !"
  }).eq('verse_id', 6085);

  // Daily phrases
  await insertDaily(700, 'trouver', 'وَجَدَ', "wajada", [
    "J'ai trouve mes cles dans le tiroir.",
    "Elle a trouve un nouveau travail la semaine derniere.",
    "On trouve toujours une solution quand on cherche."
  ]);
  await insertDaily(755, 'donner refuge', 'آوَى', "awa", [
    "La famille a donne refuge a un ami en difficulte.",
    "Ce centre donne refuge aux personnes sans abri.",
    "Il a donne refuge au chat perdu pendant l'hiver."
  ]);

  console.log('VERSET 93:6 — TERMINE');
  console.log('  wjd (و ج د) → sens "Decouverte/Existence" → mot francais "trouver"');
  console.log('  ytm (ي ت م) → sens "Orphelinat/Solitude" → mot francais "orphelin"');
  console.log('  awy (أ و ي) → sens "Refuge" → mot francais "donner refuge"');
  console.log('  Traduction : "Ne t\'a-t-il pas trouve orphelin et donne refuge"');
}

async function verse93_7() {
  console.log('\n=== VERSET 93:7 — وَوَجَدَكَ ضَآلًّا فَهَدَىٰ ===');
  const verse_id = 6086;

  // ---- WJD (و ج د) id=700 — "trouver" ----
  // Forme: wa-wajadaka — verbe accompli (et il t'a trouve)
  await upsertVWA(verse_id, 'wjd', 'trouver', {
    sense_chosen: "trouver",
    concept_chosen: "Découverte/Existence",
    concepts: {
      "Découverte/Existence": {
        status: "retenu",
        senses: ["trouver", "exister", "rencontrer"],
        proof_ctx: "Meme analyse que v6. Le verbe wajada est utilise ici a l'accompli (wajadaka = il t'a trouve) au lieu du majzum (yajidka en v6). Le sens reste identique : constater un etat. En v6 c'etait dans une question rhetorique, ici c'est une affirmation directe. Le triptyque v6-7-8 utilise le meme verbe avec trois complements differents pour rappeler trois bienfaits distincts.",
        axe1_verset: "Le champ lexical du verset (trouver, egare, guider) forme la meme sequence que v6 : constat → etat → action. Le verbe wajada est le pivot qui introduit le bienfait. L'etat constate ici est l'egarement (dallan), et l'action est la guidance (fa-hada). Le verbe trouver est le meme qu'en v6, ce qui cree un rythme de rappel.",
        axe2_voisins: "Ce verset est le deuxieme d'une serie de trois (v6-8). En v6, Dieu a trouve orphelin et donne refuge. En v7, il a trouve egare et guide. En v8, il a trouve demuni et enrichi. La repetition de wajada structure le passage et souligne la constance de l'attention divine.",
        axe3_sourate: "La fonction de wajada dans la sourate est d'ancrer les bienfaits divins dans l'experience vecue du prophete. Ce n'est pas une affirmation abstraite — c'est un rappel de faits constates.",
        axe4_coherence: "La racine wjd est coherente avec son usage dans le Coran — constater, trouver, decouvrir un etat de fait.",
        axe5_frequence: "Constater un etat et agir en consequence est le modele du khalifa responsable."
      }
    }
  }, 1);

  // ---- DLL (ض ل ل) id=268 — "egare" ----
  // Forme: dallan — participe actif indefini a l'accusatif (hal = etat : egare)
  // Concepts: Egarement/Deviation, Disparition/Perte, Oubli/Enterrement, etc.
  await upsertVWA(verse_id, 'dll', 'egare', {
    sense_chosen: "s'egarer",
    concept_chosen: "Égarement/Déviation",
    concepts: {
      "Égarement/Déviation": {
        status: "retenu",
        senses: ["s'egarer", "devier", "errer", "perdre son chemin"],
        proof_ctx: "Le sens Egarement/Deviation est retenu pour dallan. D'apres les sources etymologiques, dalla = il s'est egare, il a quitte le bon chemin, il a devie. Le Lane's donne : dalla 'an al-tariq = il s'est egare du chemin. Le mot dallan est un participe actif (une forme qui dit que la personne fait l'action activement) a l'accusatif en position de hal — « il t'a trouve [etant] egare ». L'egarement est l'etat de celui qui ne connait pas encore le chemin, qui cherche sans trouver. C'est un etat temporaire et involontaire, pas une faute. Le sens Disparition/Perte (disparaitre, se perdre, perir) est trop radical — il implique la destruction ou la mort. Or ici l'egare est retrouve et guide, pas sauve de la mort. Le sens Oubli/Enterrement (oublier, enterrer) est hors contexte — il n'y a ni oubli ni enterrement dans ce verset. La distinction philosophique entre egarement et disparition est celle entre ne pas connaitre le chemin (temporaire, corrigible) et ne plus exister (definitif, irreversible).",
        axe1_verset: "Le champ lexical (trouver, egare, guider) dessine un parcours : ignorance → decouverte → correction. L'egarement est l'etat intermediaire entre la vulnerabilite et la guidance. Le mot dallan decrit quelqu'un qui n'a pas encore trouve son chemin — pas quelqu'un qui a disparu ou qui est mort. La guidance (fa-hada) est la reponse directe a l'egarement — elle suppose que l'egare peut etre remis sur le chemin.",
        axe2_voisins: "Dans le triptyque v6-8, l'egarement (v7) est la vulnerabilite intellectuelle ou spirituelle, entre la vulnerabilite sociale (orphelinat v6) et la vulnerabilite materielle (denuement v8). Ces trois etats couvrent les trois dimensions de la vie humaine : liens sociaux, orientation, moyens materiels.",
        axe3_sourate: "L'egarement dans la sourate 93 fait reference a l'etat du prophete avant la revelation — il cherchait le vrai sans l'avoir encore trouve. La sourate rassure : cette periode de recherche n'etait pas un abandon, mais un preambule a la guidance. L'egarement est retrospectif — vu depuis la guidance, il prend un sens positif de preparation.",
        axe4_coherence: "La racine dll est tres frequente dans le Coran. En 1:7, ad-dallin (les egares) designe ceux qui ont perdu le chemin. En 93:7, l'egarement est presente comme un etat passe qui a ete corrige par la guidance — le prophete lui-meme a ete dans cet etat avant d'etre guide. Cela humanise l'egarement et le presente comme une etape naturelle, pas comme une condamnation.",
        axe5_frequence: "L'egarement est le contraire de la guidance. La mission du khalifa est d'aider les autres a trouver leur chemin — et pour cela, avoir soi-meme connu l'egarement est une experience formatrice. Le prophete, ayant ete egare puis guide, peut comprendre et guider ceux qui s'egarent."
      },
      "Disparition/Perte": {
        status: "peu_probable",
        senses: ["disparaitre", "se perdre", "perir"],
        proof_ctx: "Le sens de disparition implique la cessation d'existence ou la mort. Or le verset rappelle un etat passe qui a ete corrige — l'egare a ete guide, pas ressuscite. La disparition est irreversible, l'egarement est temporaire et corrigible. La difference philosophique est celle entre la fin (disparaitre) et la transition (s'egarer puis trouver).",
        axe1_verset: "Le champ lexical ne contient pas de notion de mort ou de disparition. La suite du verset (fa-hada = il a guide) presuppose que la personne existe et peut recevoir la guidance. Si la personne avait disparu, la guidance serait impossible.",
        axe2_voisins: "Les trois etats de v6-8 sont tous des etats temporaires et corrigibles : orphelinat → refuge, egarement → guidance, denuement → enrichissement. La disparition romprait cette logique en etant un etat definitif.",
        axe3_sourate: "Le theme de la sourate est la reassurance, pas la resurrection. La disparition est hors theme.",
        axe4_coherence: "Le Coran utilise dalla principalement au sens d'egarement moral ou intellectuel, pas de disparition physique.",
        axe5_frequence: "La disparition ne contribue pas a la mission du khalifa dans ce contexte."
      },
      "Oubli/Enterrement": {
        status: "nul",
        senses: ["oublier", "enterrer"],
        proof_ctx: "Le sens d'oubli et d'enterrement est un sens derive et rare de la racine dll. Il est completement hors contexte dans ce verset qui parle de guidance et de direction."
      }
    }
  }, 2);

  // ---- HDY (ه د ي) id=261 — "guider" ----
  // Forme: fa-hada — verbe accompli (alors il a guide)
  // Concepts: Guidance/Direction, Conduite/Comportement, Don/Offrande, Parente/Famille
  await upsertVWA(verse_id, 'hdy', 'guider', {
    sense_chosen: "guider",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        status: "retenu",
        senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance"],
        proof_ctx: "Le sens Guidance/Direction est retenu pour fa-hada. D'apres les sources etymologiques, hada = il a guide, il a montre le chemin, il a dirige vers la bonne voie. La particule fa- (consequence) lie la guidance a la decouverte de l'egarement : « il t'a trouve egare, ALORS il a guide ». La guidance est la reponse directe a l'egarement — elle transforme l'ignorance en connaissance du chemin. Le sens Conduite/Comportement est un sens derive (maniere d'agir) qui ne correspond pas au contexte — ici il ne s'agit pas de comportement mais de direction. Le sens Don/Offrande (cadeau, sacrifice) est un homonyme qui n'a aucun rapport avec le contexte du verset. La guidance est un acte actif et directionnel : elle part de celui qui sait et atteint celui qui ne sait pas encore.",
        axe1_verset: "Le champ lexical (trouver, egare, guider) forme un triptyque parfait : constat → etat → action. La guidance est l'aboutissement du verset — l'acte qui resout le probleme constate. Le passage de l'egarement a la guidance est le mouvement central du verset. Le fa- (consequence) souligne que la guidance n'est pas un hasard mais une reponse deliberee a un besoin constate.",
        axe2_voisins: "Dans le triptyque v6-8, la guidance (v7) est l'action intermediaire entre le refuge (v6) et l'enrichissement (v8). Elle porte sur la dimension intellectuelle et spirituelle — apres la protection physique (refuge), Dieu donne la direction. Cette progression (securite → orientation → moyens) est un parcours complet de prise en charge.",
        axe3_sourate: "La sourate 93 rassure le prophete sur la constance de l'attention divine. La guidance passee (v7) est la preuve que Dieu ne l'a pas abandonne — s'il l'a guide une fois, il ne le laissera pas sans direction maintenant. La guidance est le bienfait le plus personnel des trois rappeles : le refuge et l'enrichissement sont materiels, la guidance touche a l'etre meme de la personne.",
        axe4_coherence: "La racine hdy est omnipresente dans le Coran. En 1:6 (ihdina al-sirata al-mustaqim = guide-nous sur le chemin droit), la guidance est la demande centrale de la priere quotidienne. En 2:2, le Coran est decrit comme « hudan lil-muttaqin » (guidance pour les pieux). La guidance divine est un theme fondamental du Coran, et son usage ici en 93:7 s'inscrit dans cette continuite.",
        axe5_frequence: "La guidance est au coeur de la mission du khalifa. L'etre humain est cense etablir la justice et empecher la corruption — pour cela il a besoin de direction. La guidance divine est la condition prealable a la mission humaine. Sans direction, le khalifa ne peut pas remplir sa fonction."
      },
      "Conduite/Comportement": {
        status: "peu_probable",
        senses: ["conduite", "maniere d'agir", "comportement calme"],
        proof_ctx: "Le sens de conduite et de comportement designe la maniere dont on se comporte. C'est un etat general, pas un acte dirige. Or dans le verset, le verbe hada est un accompli avec fa- de consequence — c'est un acte ponctuel et dirige (il a guide), pas une description de comportement. La difference philosophique est celle entre un acte directionnel (guider quelqu'un vers un but) et un etat passif (avoir un certain comportement).",
        axe1_verset: "Le champ lexical (egare → guider) implique un mouvement de l'ignorance vers la connaissance. La conduite ou le comportement n'impliquent pas ce mouvement — ils decrivent un etat statique, pas une transformation.",
        axe2_voisins: "Les trois actions de v6-8 (refuge, guidance, enrichissement) sont toutes des interventions actives, pas des descriptions de comportement.",
        axe3_sourate: "La sourate parle de bienfaits divins concrets, pas de manieres d'etre.",
        axe4_coherence: "Le Coran utilise hada principalement au sens de guider, pas de se comporter.",
        axe5_frequence: "Le comportement est pertinent mais trop general pour ce contexte precis."
      },
      "Don/Offrande": {
        status: "nul",
        senses: ["cadeau", "offrande", "sacrifice"],
        proof_ctx: "Le sens de cadeau et d'offrande est un homonyme de la racine hdy qui n'a aucun rapport contextuel avec ce verset. Le contexte est clairement celui de la direction et de l'orientation, pas du don materiel ou du sacrifice."
      }
    }
  }, 3);

  // --- Segments & traduction v7 ---
  const segs7 = [
    { fr: "Et", pos: "particule", phon: "wa", arabic: "وَ", position: 0, is_particle: true },
    { fr: "il t'a trouve", pos: "verbe", phon: "wajadaka", arabic: "وَجَدَكَ", position: 1, word_key: "wjd", is_particle: false, sense_retenu: "trouver" },
    { fr: "egare", pos: "nom", phon: "dallan", arabic: "ضَآلًّا", position: 2, word_key: "dll", is_particle: false, sense_retenu: "s'egarer" },
    { fr: "et il a guide", pos: "verbe", phon: "fa-hada", arabic: "فَهَدَىٰ", position: 3, word_key: "hdy", is_particle: false, sense_retenu: "guider" }
  ];

  const te7 = `§DEMARCHE§
Le verset suit exactement la meme structure que le verset 6. Le verbe **wajadaka** est un accompli (il t'a trouve) — en v6, c'etait yajidka (inaccompli majzum apres a-lam), ici c'est la forme accomplie directe. Le mot **dallan** est un participe actif (une forme qui dit que la personne fait l'action elle-meme) de la racine d-l-l, a l'accusatif indefini en position de hal — « il t'a trouve [etant] egare ». Le participe actif indique que l'egarement est un etat dans lequel la personne se trouve activement — elle cherche mais ne trouve pas. Le verbe **fa-hada** est un accompli de la racine h-d-y, precede de fa- (consequence) — « alors il a guide ». Le verset ne precise pas l'objet de la guidance ni la nature de l'egarement — le texte laisse ces points ouverts.

§JUSTIFICATION§
**egare** — Le sens retenu est « Egarement/Deviation ». Le mot « egare » est le plus naturel pour traduire dall — quelqu'un qui a perdu son chemin et qui cherche. L'alternative « perdu » est ecartee car elle implique une passivite (on est perdu sans forcement chercher), alors que le participe actif dall implique une recherche active sans resultat. L'alternative « devie » est ecartee car elle implique qu'il y avait un chemin connu dont on s'est ecarte volontairement, alors que l'egarement peut etre involontaire.

**guide** — Le sens retenu est « Guidance/Direction ». Le mot « guider » est le plus direct pour traduire hada — montrer le chemin a quelqu'un qui ne le connait pas. L'alternative « diriger » est ecartee car elle implique une autorite hierarchique, alors que la guidance est un acte de bienveillance. L'alternative « orienter » est ecartee car elle est trop technique et froide.

§CRITIQUE§
Hamidullah traduit « Et Il t'a trouvé égaré, alors Il t'a guidé ». La traduction est sensiblement identique a la notre. Certaines traductions ajoutent des precisions sur la nature de l'egarement (« egare de la bonne voie », « ignorant de la revelation ») qui ne sont pas dans le texte arabe. Le texte dit simplement dallan (egare) sans preciser de quoi ni vers quoi — ces ajouts sont des interpretations exegetiques.`;

  await sb.from('verse_analyses').update({
    segments: segs7,
    translation_explanation: te7,
    full_translation: "Et Il t'a trouvé égaré, alors Il t'a guidé."
  }).eq('verse_id', 6086);

  console.log('VERSET 93:7 — TERMINE');
  console.log('  wjd (و ج د) → sens "Decouverte/Existence" → mot francais "trouver"');
  console.log('  dll (ض ل ل) → sens "Egarement/Deviation" → mot francais "egare"');
  console.log('  hdy (ه د ي) → sens "Guidance/Direction" → mot francais "guider"');
  console.log('  Traduction : "Et il t\'a trouve egare et il a guide"');
}

async function verse93_8() {
  console.log('\n=== VERSET 93:8 — وَوَجَدَكَ عَآئِلًا فَأَغْنَىٰ ===');
  const verse_id = 6087;

  // ---- WJD (و ج د) id=700 — "trouver" ----
  // Forme: wa-wajadaka — verbe accompli (et il t'a trouve)
  await upsertVWA(verse_id, 'wjd', 'trouver', {
    sense_chosen: "trouver",
    concept_chosen: "Découverte/Existence",
    concepts: {
      "Découverte/Existence": {
        status: "retenu",
        senses: ["trouver", "exister", "rencontrer"],
        proof_ctx: "Meme analyse que v6 et v7. Le verbe wajada est utilise pour la troisieme fois dans le triptyque v6-8. Le sens reste identique : constater un etat. Ici l'etat constate est le denuement ('a'ilan = ayant des dependants sans moyens, ou demuni).",
        axe1_verset: "Le champ lexical (trouver, demuni, enrichir) forme la meme sequence que v6 et v7 : constat → etat → action. Le verbe wajada est le pivot qui complete le triptyque des bienfaits divins rappeles.",
        axe2_voisins: "Troisieme et dernier rappel de la serie v6-8. Apres la protection (v6) et la guidance (v7), le troisieme bienfait est l'enrichissement. Le verbe wajada lie les trois versets et cree la structure rhetorique du passage.",
        axe3_sourate: "Le triptyque se ferme. Les trois wajada de v6-8 sont la preuve concrete que Dieu n'a pas abandonne le prophete (reponse a v3).",
        axe4_coherence: "Usage coherent avec les deux versets precedents et avec le Coran en general.",
        axe5_frequence: "Constater un besoin et y repondre reste le modele du khalifa responsable."
      }
    }
  }, 1);

  // ---- EYL (ع ي ل) id=2039 — "avoir des dependants / etre demuni" ----
  // Forme: 'a'ilan — participe actif indefini a l'accusatif (hal = etat)
  // Concepts: Famille/Dependants
  // Lane's: 'ala = il avait une famille nombreuse et etait pauvre/dans le besoin, 'a'il = celui qui a des dependants et peu de moyens
  await upsertVWA(verse_id, 'eyl', 'demuni', {
    sense_chosen: "famille",
    concept_chosen: "Famille/Dépendants",
    concepts: {
      "Famille/Dépendants": {
        status: "retenu",
        senses: ["famille", "dependants"],
        proof_ctx: "Le sens Famille/Dependants est le seul concept de la racine eyl. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), 'ala = il avait une famille nombreuse, 'a'il = celui qui a des dependants a sa charge. Le Lane's precise aussi que 'a'il implique souvent le manque de moyens pour subvenir aux besoins de sa famille — c'est un etat de charge familiale sans les ressources correspondantes. Le mot 'a'ilan est un participe actif a l'accusatif en position de hal — « il t'a trouve [etant] charge de dependants [et demuni] ». La reponse divine est fa-aghna (alors il a enrichi), ce qui confirme que l'etat constate est un manque de moyens. Le mot « demuni » capture bien cette realite : avoir des gens a sa charge sans avoir les moyens de les nourrir.",
        axe1_verset: "Le champ lexical (trouver, demuni/charge de famille, enrichir) forme la sequence familiere : constat → etat → action. Le mot 'a'ilan decrit l'etat de celui qui a des responsabilites familiales mais pas les moyens de les assumer. L'enrichissement (fa-aghna) est la reponse directe — il comble le manque materiel. Le mot 'a'ilan est le diagnostic, fa-aghna est le remede.",
        axe2_voisins: "Dans le triptyque v6-8, le denuement (v8) est la vulnerabilite materielle — la derniere des trois dimensions apres la vulnerabilite sociale (orphelinat v6) et intellectuelle (egarement v7). Les trois etats couvrent l'ensemble des besoins fondamentaux : lien social, direction, moyens de vivre.",
        axe3_sourate: "Le denuement est le dernier etat passe rappele avant les injonctions de v9-11. Il ferme la section des preuves et ouvre la section des devoirs. Le fait que Dieu ait enrichi le prophete demuni fonde l'obligation de gratitude et de generosite envers les autres.",
        axe4_coherence: "La racine eyl est rare dans le Coran. En 4:9, « wa-l-yakhsha lladhina law taraku min khalfihim dhurriyyatan di'afan khafu 'alayhim » evoque la peur de laisser des dependants vulnerables. La charge familiale et le souci de pourvoir aux besoins des dependants est un theme coranique lie a la responsabilite.",
        axe5_frequence: "Etre charge de dependants et recevoir de quoi subvenir a leurs besoins est directement lie a la mission du khalifa. La justice commence par la capacite de nourrir les siens. L'enrichissement divin (v8) donne au prophete les moyens d'exercer sa responsabilite envers sa communaute."
      }
    }
  }, 2);

  // ---- GNY (غ ن ي) id=2584 — "enrichir" ----
  // Forme: fa-aghna — verbe accompli forme IV (alors il a enrichi)
  // Concepts: Richesse/Autosuffisance, Sens isole/Chant
  await upsertVWA(verse_id, 'gny', 'enrichir', {
    sense_chosen: "enrichir",
    concept_chosen: "Richesse/Autosuffisance",
    concepts: {
      "Richesse/Autosuffisance": {
        status: "retenu",
        senses: ["etre riche", "se passer de", "etre autosuffisant", "enrichir"],
        proof_ctx: "Le sens Richesse/Autosuffisance est retenu pour fa-aghna. D'apres les sources etymologiques, ghaniya = il etait riche, il n'avait besoin de rien, il se suffisait a lui-meme. La forme IV aghna = il a rendu riche, il a enrichi, il a rendu autosuffisant. La particule fa- (consequence) lie l'enrichissement a la decouverte du denuement : « il t'a trouve demuni, ALORS il a enrichi ». L'enrichissement est l'acte de donner a quelqu'un les moyens de ne plus dependre des autres. C'est un acte transformateur — il change l'etat de la personne de maniere durable. Le sens Chant est un homonyme qui n'a aucun rapport avec le contexte du verset.",
        axe1_verset: "Le champ lexical (trouver, demuni, enrichir) decrit une transformation materielle : du manque a la suffisance. Le verbe aghna (enrichir) est l'aboutissement du verset — l'acte qui resout le denuement. L'enrichissement n'est pas juste donner de l'argent — c'est rendre autosuffisant, donner les moyens de ne plus avoir besoin.",
        axe2_voisins: "L'enrichissement (v8) est le troisieme et dernier bienfait du triptyque. Il porte sur la dimension materielle, apres la protection (v6) et la guidance (v7). L'enrichissement complete le tableau : securite + direction + moyens = vie complete.",
        axe3_sourate: "L'enrichissement est le dernier bienfait rappele avant les injonctions (v9-11). Il ferme la boucle : Dieu a donne refuge, guide et enrichi — maintenant c'est au tour du prophete d'agir de meme envers les autres (ne pas opprimer l'orphelin v9, ne pas repousser le demandeur v10, proclamer les bienfaits v11).",
        axe4_coherence: "La racine gny apparait en 9:28, « sa-yughnihimu Allahu min fadlihi » (Dieu les enrichira de Sa faveur). En 4:130, « yughni Allahu kullan min sa'atihi » (Dieu enrichira chacun de Son ampleur). L'enrichissement divin est un theme coranique recurrent — Dieu est la source de toute richesse et autosuffisance.",
        axe5_frequence: "L'enrichissement divin sert la mission du khalifa en lui donnant les moyens materiels d'etablir la justice. On ne peut pas construire une civilisation juste avec des gens demunis. Les moyens sont une condition de la mission, et leur source est divine."
      },
      "Sens isolé/Chant": {
        status: "nul",
        senses: ["chant"],
        proof_ctx: "Le sens de chant est un homonyme de la racine gny sans aucun rapport avec le contexte du verset. Le verset parle d'enrichissement apres le denuement, pas de musique."
      }
    }
  }, 3);

  // --- Segments & traduction v8 ---
  const segs8 = [
    { fr: "Et", pos: "particule", phon: "wa", arabic: "وَ", position: 0, is_particle: true },
    { fr: "il t'a trouve", pos: "verbe", phon: "wajadaka", arabic: "وَجَدَكَ", position: 1, word_key: "wjd", is_particle: false, sense_retenu: "trouver" },
    { fr: "demuni", pos: "nom", phon: "'a'ilan", arabic: "عَآئِلًا", position: 2, word_key: "eyl", is_particle: false, sense_retenu: "famille" },
    { fr: "et il a enrichi", pos: "verbe", phon: "fa-aghna", arabic: "فَأَغْنَىٰ", position: 3, word_key: "gny", is_particle: false, sense_retenu: "enrichir" }
  ];

  const te8 = `§DEMARCHE§
Le verset suit la meme structure que les versets 6 et 7. Le verbe **wajadaka** (il t'a trouve) est a l'accompli comme en v7. Le mot **'a'ilan** est un participe actif (une forme qui dit que la personne est activement dans cet etat) de la racine 'ayn-ya-lam, a l'accusatif indefini en position de hal — « il t'a trouve [etant] demuni ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), 'ala signifie « il avait une famille nombreuse et etait dans le besoin », et 'a'il designe « celui qui a des dependants a sa charge sans les moyens de subvenir a leurs besoins ». Le verbe **fa-aghna** est un accompli a la forme IV (une forme causative qui signifie « il a FAIT devenir riche », c'est-a-dire « il a enrichi ») de la racine ghayn-nun-ya, precede de **fa-** (consequence). La forme IV transforme « etre riche » en « rendre riche » — c'est un acte dirige de Dieu vers le prophete.

§JUSTIFICATION§
**demuni** — Le sens retenu est « Famille/Dependants ». Le mot « demuni » est choisi pour traduire 'a'ilan car il capture la realite de celui qui a des charges mais pas les moyens. L'alternative « pauvre » est ecartee car elle decrit un etat economique general sans la dimension de charge familiale. L'alternative « necessiteux » est ecartee car elle implique le besoin d'aide exterieure, alors que 'a'il decrit d'abord un etat — celui d'avoir des dependants et peu de ressources. Le mot « demuni » dit « prive de moyens » sans specifier la source de cette privation.

**enrichi** — Le sens retenu est « Richesse/Autosuffisance ». Le mot « enrichir » est choisi car il decrit l'acte de donner a quelqu'un les moyens de se suffire a lui-meme. L'alternative « rendre riche » est ecartee car elle est trop litterale et implique une fortune, alors que l'enrichissement coranique est l'autosuffisance. L'alternative « combler » est ecartee car elle est trop vague.

§CRITIQUE§
Hamidullah traduit « Et Il t'a trouvé pauvre, alors Il t'a enrichi ». Le mot « pauvre » est une simplification de 'a'ilan. Le Lane's montre que 'a'il n'est pas simplement « pauvre » (faqir) mais « celui qui a des dependants et peu de moyens ». La nuance est importante : le texte ne dit pas juste que le prophete manquait d'argent, mais qu'il avait des responsabilites familiales qu'il ne pouvait pas assumer. L'enrichissement divin repond a ce besoin precis — pas juste la richesse pour soi, mais les moyens de prendre soin des siens.`;

  await sb.from('verse_analyses').update({
    segments: segs8,
    translation_explanation: te8,
    full_translation: "Et Il t'a trouvé pauvre, alors Il t'a enrichi."
  }).eq('verse_id', 6087);

  // Daily phrases
  await insertDaily(2039, 'demuni', 'عَائِل', "'a'il", [
    "La famille etait demunie apres avoir perdu la maison.",
    "Il y a beaucoup de gens demunis dans cette ville.",
    "Etre demuni ne veut pas dire etre sans dignite."
  ]);

  console.log('VERSET 93:8 — TERMINE');
  console.log('  wjd (و ج د) → sens "Decouverte/Existence" → mot francais "trouver"');
  console.log('  eyl (ع ي ل) → sens "Famille/Dependants" → mot francais "demuni"');
  console.log('  gny (غ ن ي) → sens "Richesse/Autosuffisance" → mot francais "enrichir"');
  console.log('  Traduction : "Et il t\'a trouve demuni et il a enrichi"');
}

async function main() {
  await verse93_5();
  await verse93_6();
  await verse93_7();
  await verse93_8();
  console.log('\n=== PARTIE 2 TERMINEE (versets 5-8) ===');
}

main().catch(console.error);
