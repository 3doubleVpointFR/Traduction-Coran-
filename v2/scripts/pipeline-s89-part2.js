// Pipeline Sourate 89 (Al-Fajr) — Partie 2: Versets 6-10
// Étapes 3 + 4: Axes concepts + Traductions
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

async function upsertVA(verse_id, data) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    await sb.from('verse_analyses').update(data).eq('id', existing[0].id);
    console.log(`  Updated VA id=${existing[0].id}`);
  } else {
    const { data: created, error } = await sb.from('verse_analyses').insert({ verse_id, ...data }).select().single();
    if (error) console.log(`  Error VA:`, error.message);
    else console.log(`  Created VA id=${created.id}`);
  }
}

// ================================================================
// CONTEXTE SOURATE 89 (Al-Fajr)
// ================================================================
// Theme : Apres les serments (v1-5), les versets 6-14 decrivent trois
// civilisations passees detruites par Dieu : Ad/Iram (v6-8), Thamoud (v9),
// Pharaon (v10). Ces peuples etaient puissants — piliers, taille de roche,
// piquets — mais leur puissance ne les a pas proteges.
// v6 ouvre avec la question rhetorique "n'as-tu pas vu".
// v7-8 decrivent la grandeur de Iram. v9 decrit Thamoud. v10 Pharaon.

async function verse89_6() {
  console.log('\n=== VERSET 89:6 — أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ ===');
  const verse_id = 5999;

  // ---- RAY (رأى) — id=552 — "voir" ----
  // Forme: inaccompli 2e pers. (tara) nie par a-lam → "n'as-tu pas vu"
  // Question rhetorique classique du Coran
  await upsertVWA(verse_id, 'ray', 'voir', {
    sense_chosen: "voir",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["voir", "percevoir"],
        proof_ctx: "Le sens retenu est « Vision/Perception ». Le Lane's donne : percevoir par la vue, voir de ses yeux, mais aussi percevoir par l'esprit, savoir. La forme a-lam tara est une question rhetorique (un procede ou la question n'attend pas de reponse, elle sert a affirmer avec force). L'interrogation negative « n'as-tu pas vu » equivaut a « tu as bien vu / tu sais bien ». Le verbe tara est un inaccompli (une forme qui indique que l'action est en cours ou habituelle) a la deuxieme personne, nie par lam et precede de la particule interrogative hamza. Le Lane's distingue la vision oculaire de la vision mentale — ici, la question porte sur un evenement passe (la destruction de Ad), donc la vision est intellectuelle : « ne sais-tu pas ». Distinction avec « Jugement/Avis » : l'avis est une opinion personnelle, un point de vue subjectif. Le verset ne demande pas une opinion mais invite a constater un fait historique. La question rhetorique ne sollicite pas un avis — elle impose une evidence. Distinction avec « Apparition » : l'apparition est le fait de se montrer, de devenir visible. Le verset ne parle pas de quelque chose qui apparait mais d'un acte de perception dirige vers un evenement passe.",
        axe1_verset: "Le verset dit « n'as-tu pas vu comment ton seigneur a agi envers Ad ». Le verbe tara est le pivot de la question rhetorique qui ouvre tout le passage sur les civilisations detruites (versets 6 a 14). La vision est dirigee vers un evenement precis : l'action du seigneur envers Ad. Le champ lexical voir + comment + agir + seigneur forme une invitation a contempler la puissance divine en action dans l'histoire. La particule kayfa (comment) oriente la vision non pas sur le fait brut mais sur la maniere dont le seigneur a agi — c'est le mode operatoire qui est donne a voir.",
        axe2_voisins: "Les versets 7-8 decrivent la grandeur de Ad/Iram (piliers, sans pareil dans les cites). Le verset 9 passe a Thamoud, le verset 10 a Pharaon. La question « n'as-tu pas vu » au verset 6 couvre tout ce passage — elle invite a voir non seulement le sort de Ad mais aussi celui de Thamoud et de Pharaon. La vision porte sur un schema repete : puissance humaine, puis action divine. Les versets 13-14 concluront que le seigneur a deverse sur eux un fouet de chatiment.",
        axe3_sourate: "La sourate 89 est structuree autour de la justice divine dans l'histoire. Les versets 1-5 posent des serments. Les versets 6-14 illustrent par trois exemples historiques. Les versets 15-20 decrivent la nature ingrate de l'etre humain. Les versets 21-30 decrivent le jour du jugement. La vision du verset 6 ouvre la section historique — elle est le pont entre les serments et les preuves. Voir, c'est comprendre que la puissance terrestre ne protege pas de l'action divine.",
        axe4_coherence: "La formule a-lam tara (n'as-tu pas vu) est recurrente dans le Coran : « N'as-tu pas vu comment ton seigneur a etendu l'ombre » (25:45), « N'as-tu pas vu comment ton seigneur a agi avec les gens de l'elephant » (105:1). C'est un procede coranique standard pour introduire un exemple historique ou naturel qui prouve la puissance divine. La formule apparait plus de trente fois dans le Coran, toujours pour inviter a la reflexion sur un fait observable.",
        axe5_frequence: "La vision est l'outil fondamental du khalifa pour tirer les lecons de l'histoire. Celui qui voit comment les civilisations puissantes ont ete detruites comprend que la puissance materielle ne suffit pas. Le khalifa qui ne voit pas les lecons de l'histoire est condamne a repeter les erreurs de Ad, Thamoud et Pharaon. La question rhetorique place l'interlocuteur face a sa responsabilite : voir, c'est deja commencer a comprendre."
      },
      "Jugement/Avis": {
        status: "nul",
        senses: ["opinion", "avis"],
        proof_ctx: "L'avis est un jugement subjectif. La question rhetorique a-lam tara ne demande pas une opinion personnelle mais invite a constater un fait historique. La forme interrogative negative impose une evidence, elle ne sollicite pas un point de vue."
      },
      "Apparition": {
        status: "nul",
        senses: ["apparaitre"],
        proof_ctx: "L'apparition est le fait de se montrer, de devenir visible pour autrui. Le verset ne parle pas de quelque chose qui apparait mais d'un acte de perception intellectuelle dirige vers un evenement passe. Le sujet grammatical est « tu » (celui qui voit), pas « quelque chose qui apparait »."
      }
    }
  }, 1);

  // ---- FEL (فعل) — id=374 — "agir" ----
  // Forme: verbe accompli 3e pers. (fa'ala) — "il a fait/agi"
  await upsertVWA(verse_id, 'fel', 'agir', {
    sense_chosen: "agir",
    concept_chosen: "Action/Acte",
    concepts: {
      "Action/Acte": {
        status: "retenu",
        senses: ["faire", "agir", "action", "subir une action", "faire ensemble", "efficace"],
        proof_ctx: "Le sens retenu est « Action/Acte ». Le Lane's donne : faire, accomplir, produire un acte. Le verbe fa'ala est le verbe d'action par excellence en arabe — c'est le modele meme de la conjugaison (le paradigme fa'ala/yaf'alu). Dans le verset, « comment ton seigneur a agi » utilise fa'ala a l'accompli (une forme qui indique que l'action est terminee et definitive) pour decrire l'intervention divine dans l'histoire. Le verbe est suivi de la preposition bi (envers/avec) qui introduit l'objet indirect — l'action est dirigee vers Ad. Le Lane's souligne que fi'l (l'acte) est distingue de 'amal (le travail continu) : fi'l est un acte ponctuel et decisif, 'amal est un effort prolonge. L'action du seigneur envers Ad est un acte unique et definitif de destruction, pas un processus graduel. Il n'y a pas d'autre sens serieux pour fa'ala dans ce contexte — le verbe est transparent et sans ambiguite.",
        axe1_verset: "Le verset dit « comment ton seigneur a agi envers Ad ». Le verbe fa'ala est en position centrale — il porte toute la charge du verset. La question kayfa (comment) porte sur la maniere de l'acte : ce n'est pas « qu'a fait ton seigneur » mais « comment a-t-il agi ». La distinction est importante : le verset s'interesse au mode operatoire divin, pas au simple fait de l'intervention. L'acte divin envers Ad est qualifie par la suite : Iram aux piliers, sans pareil dans les cites. Le seigneur a agi envers une civilisation d'une puissance inegalee — et il l'a detruite.",
        axe2_voisins: "Les versets 7-8 decrivent la puissance de Ad/Iram pour que l'acte divin soit mesure a sa juste proportion. Les versets 9-10 etendent l'action divine a Thamoud et Pharaon. Le verset 13 resume : « ton seigneur a deverse sur eux un fouet de chatiment ». L'acte du verset 6 est developpe et precise par les versets suivants — il englobe la destruction de trois civilisations. La maniere (kayfa) est revelee progressivement : une intervention decisive contre des puissances inegalees.",
        axe3_sourate: "L'action divine dans l'histoire est le theme central des versets 6-14. La sourate montre que le seigneur agit dans le temps — il n'est pas un spectateur passif. La puissance de Ad, Thamoud et Pharaon n'a pas empeche l'action divine. Ce theme prepare les versets 15-20 ou l'etre humain est teste par la richesse et la pauvrete, et les versets 21-30 ou le jour du jugement revele l'action divine finale.",
        axe4_coherence: "Le Coran utilise fa'ala pour decrire les actes divins decisifs dans l'histoire : « N'as-tu pas vu comment ton seigneur a agi avec les gens de l'elephant » (105:1) — meme structure exacte. Le verbe fa'ala avec kayfa est un schema coranique qui introduit un exemple de la puissance divine en action. La coherence est directe : meme verbe, meme construction, meme intention rhetorique.",
        axe5_frequence: "L'acte divin dans l'histoire est la preuve ultime pour le khalifa que la puissance materielle ne protege de rien. Le khalifa qui comprend comment le seigneur a agi envers Ad sait que sa propre mission doit etre fondee sur la justice, pas sur la force. L'histoire est un tribunal ou les actes des peuples sont juges par l'acte du seigneur — et aucune puissance terrestre n'a jamais resiste a cette action."
      }
    }
  }, 2);

  // ---- RBB (ربب) — id=253 — "seigneur" ----
  // Forme: nom en idafa rabbuka (ton seigneur)
  await upsertVWA(verse_id, 'rbb', 'seigneur', {
    sense_chosen: "seigneur",
    concept_chosen: "Seigneurie/Autorite bienveillante",
    concepts: {
      "Seigneurie/Autorite bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "gouverner"],
        proof_ctx: "Le sens retenu est « Seigneurie/Autorite bienveillante ». Le Lane's donne : le rabb est le seigneur, le maitre, le proprietaire qui eleve et entretient. Dans le verset, « ton seigneur » est le sujet de l'action (fa'ala) envers Ad. Le possessif -ka (ton) personnalise la relation : c'est le seigneur de l'interlocuteur qui a agi. La seigneurie se manifeste ici par l'autorite sur les nations — le seigneur a le pouvoir d'agir envers les peuples les plus puissants. Distinction avec « Croissance/Augmentation » : la croissance est un processus physique, pas une relation d'autorite. Le verset parle d'un seigneur qui agit dans l'histoire, pas d'un processus de developpement. Distinction avec « Education/Accompagnement » : l'education est un aspect de la seigneurie mais le verset met en avant l'action punitive, pas l'accompagnement pedagogique. Distinction avec « Commerce/Usure » : l'usure n'a aucun rapport avec le contexte de la destruction de civilisations.",
        axe1_verset: "Le verset dit « comment ton seigneur a agi envers Ad ». Le mot rabb porte le pronom possessif -ka et est en position de sujet du verbe fa'ala. Le seigneur est celui qui agit — il est le sujet actif de l'histoire. Le champ lexical voir + comment + seigneur + agir place le seigneur comme l'acteur principal du recit historique. La personalisation (ton seigneur) implique que la relation entre le seigneur et l'interlocuteur est la meme que celle entre le seigneur et Ad — le seigneur est le meme, c'est le comportement des peuples qui change.",
        axe2_voisins: "Les versets 7-8 decrivent la grandeur de Ad, ce qui souligne la puissance du seigneur qui a detruit cette civilisation inegalee. Les versets 9-10 etendent l'action du seigneur a Thamoud et Pharaon. Le verset 14 affirme que « ton seigneur est certes a l'affut » — le seigneur observe et attend. La seigneurie dans ce passage est celle du juge supreme qui observe les actes des nations et intervient quand la transgression atteint son comble.",
        axe3_sourate: "La sourate 89 illustre la seigneurie par l'action dans l'histoire. Le seigneur n'est pas une abstraction — il agit, il detruit, il teste, il juge. Les versets 6-14 montrent la seigneurie punitive, les versets 15-20 la seigneurie qui teste (par la richesse et la pauvrete), les versets 27-30 la seigneurie qui accueille (« entre dans Mon jardin »). La seigneurie est complete : elle cree, teste, punit et recompense.",
        axe4_coherence: "Le Coran utilise rabbuka (ton seigneur) dans de nombreux contextes d'action divine dans l'histoire. Dans la sourate 105 (meme structure a-lam tara kayfa fa'ala rabbuka), le seigneur agit contre les gens de l'elephant. Dans la sourate 85, le seigneur punit ceux qui ont persecute les croyants. La formule rabbuka est systematiquement associee a l'action divine personnalisee — le seigneur de l'interlocuteur est le meme qui a agi dans l'histoire.",
        axe5_frequence: "Le khalifa doit reconnaitre que le seigneur est actif dans l'histoire. La seigneurie n'est pas un titre honorifique — c'est une realite active qui se manifeste par des interventions dans le cours des evenements. Le khalifa qui comprend la seigneurie active du seigneur sait que ses propres actes sont observes et juges, tout comme ceux de Ad, Thamoud et Pharaon."
      },
      "Croissance/Augmentation": {
        status: "nul",
        senses: ["augmenter", "croitre", "faire grandir", "exces"],
        proof_ctx: "La croissance est un processus physique de developpement. Le verset parle d'un seigneur qui agit dans l'histoire contre une civilisation — il n'est pas question de croissance ou d'augmentation."
      },
      "Education/Accompagnement": {
        status: "nul",
        senses: ["elever un enfant", "eduquer", "former"],
        proof_ctx: "L'education est un aspect de la seigneurie mais le verset decrit une action punitive contre Ad, pas un processus d'accompagnement pedagogique. Le contexte de destruction elimine ce sens."
      },
      "Commerce/Usure": {
        status: "nul",
        senses: ["usure", "augmentation de dette"],
        proof_ctx: "L'usure est un sens financier de la racine qui n'a aucun rapport avec le contexte de la destruction de civilisations par le seigneur."
      }
    }
  }, 3);

  // --- Traduction verset 6 ---
  // Note: "Ad" est un nom propre, pas de racine a analyser
  await upsertVA(verse_id, {
    translation_arab: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ",
    full_translation: "N'as-tu pas vu comment ton Seigneur a agi avec les Aad?",
    segments: [
      { fr: "N'as-tu pas vu", pos: "verbe", phon: "a-lam tara", arabic: "أَلَمْ تَرَ", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 1 },
      { fr: "comment", pos: "interrogatif", phon: "kayfa", arabic: "كَيْفَ", is_particle: true, position: 2 },
      { fr: "a agi", pos: "verbe", phon: "fa'ala", arabic: "فَعَلَ", word_key: "fel", is_particle: false, sense_retenu: "agir", position: 3 },
      { fr: "ton seigneur", pos: "nom", phon: "rabbuka", arabic: "رَبُّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 4 },
      { fr: "envers Ad", pos: "nom propre", phon: "bi-'ādin", arabic: "بِعَادٍ", is_particle: false, sense_retenu: "Ad (nom propre)", position: 5, prefix_particle: "bi" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par une question rhetorique (un procede ou la question n'attend pas de reponse, elle sert a affirmer avec force). La particule interrogative hamza (a-) precede la negation lam, suivie du verbe inaccompli tara (tu vois). La combinaison a-lam tara equivaut a « tu as bien vu / tu sais bien ». L'interrogatif kayfa (comment) oriente la question sur la maniere de l'acte, pas sur le fait. Le verbe fa'ala (il a agi/fait) est un verbe accompli (une forme qui indique que l'action est terminee et definitive) a la troisieme personne. Le sujet est rabbuka (ton seigneur) — le nom rabb porte le pronom possessif -ka (ton). La preposition bi introduit le complement indirect 'ādin (Ad) — un nom propre au genitif indefini (le tanwin indique que c'est un nom non-arabe declenchant une declinaison partielle). Ad est le peuple ancien mentionne dans le Coran, installe dans le sud de la peninsule arabique.

§JUSTIFICATION§
**voir** — Le sens retenu est « voir ». La formule a-lam tara est traduite par « n'as-tu pas vu » car c'est l'equivalent naturel en francais de cette question rhetorique. L'alternative « ne sais-tu pas » est ecartee car elle perd la dimension visuelle du verbe ra'a, meme si le sens est intellectuel.

**agir** — Le sens retenu est « agir ». Le verbe fa'ala est traduit par « a agi » car il exprime un acte decisif et ponctuel. L'alternative « a fait » est ecartee car « faire » en francais est trop vague — « agir » porte la dimension d'une intervention deliberee et decisive. La preposition bi (envers/avec) donne a l'action une direction : le seigneur a agi envers Ad.

**seigneur** — Le sens retenu est « seigneur ». Le mot rabb est traduit par « seigneur » car il designe la relation d'autorite bienveillante. Le possessif -ka est rendu par « ton ». L'alternative « maitre » est ecartee car elle perd la dimension de bienveillance.

§CRITIQUE§
Hamidullah traduit « N'as-tu pas vu comment ton Seigneur a agi avec les Aad ? ». La traduction proposee est identique dans sa structure. Le seul ecart est le choix de « envers » au lieu de « avec » pour la preposition bi — « envers » souligne la direction de l'action (du seigneur vers Ad), tandis que « avec » est plus neutre. Les deux sont acceptables. La question rhetorique est un procede standard que toutes les traductions rendent de la meme maniere.`
  });

  console.log('VERSET 89:6 — TERMINE');
  console.log('  ray (ر أ ى) -> "Vision/Perception" -> mot francais "voir"');
  console.log('  fel (ف ع ل) -> "Action/Acte" -> mot francais "agir"');
  console.log('  rbb (ر ب ب) -> "Seigneurie/Autorite bienveillante" -> mot francais "seigneur"');
  console.log('  Traduction : "N\'as-tu pas vu comment ton seigneur a agi envers Ad"');
}

async function verse89_7() {
  console.log('\n=== VERSET 89:7 — إِرَمَ ذَاتِ ٱلْعِمَادِ ===');
  const verse_id = 6000;

  // ---- EMD (عمد) — id=1541 — "pilier" ----
  // Forme: nom au genitif defini al-'imad (les piliers), en idafa avec dhati (possesseuse de)
  // "Iram" est un nom propre — pas de racine a analyser
  await upsertVWA(verse_id, 'emd', 'pilier', {
    sense_chosen: "pilier",
    concept_chosen: "Support/Pilier",
    concepts: {
      "Support/Pilier": {
        status: "retenu",
        senses: ["colonne", "pilier"],
        proof_ctx: "Le sens retenu est « Support/Pilier ». Le Lane's donne : le 'imad est la colonne qui soutient une structure, le pilier sur lequel repose un edifice. C'est un element vertical, solide, qui porte le poids de ce qui est au-dessus. Le mot al-'imad est au genitif defini par al-, en position d'idafa (un rattachement grammatical) avec dhati (possesseuse de) — Iram est « la possesseuse des piliers ». Les piliers designent soit les colonnes architecturales d'une cite monumentale, soit metaphoriquement la puissance et la grandeur de cette civilisation. Le Lane's distingue 'imad (colonne materielle qui soutient) de rukn (coin, pilier au sens de fondement). Le 'imad est vertical et visible — c'est un signe de puissance architecturale. Distinction avec « Intention/Volonte » : l'intention est un acte interieur de la volonte (faire expres, avoir l'intention de). Le verset decrit une caracteristique physique d'une cite (ses piliers), pas un acte volontaire. La forme nominale al-'imad (les piliers) est un objet concret, pas un etat mental.",
        axe1_verset: "Le verset dit « Iram aux piliers ». Le mot al-'imad est en position d'idafa avec dhati (possesseuse de). La structure dhati al-'imad est un qualificatif de Iram — la cite est identifiee par ses piliers. Les piliers sont la marque distinctive de cette civilisation : ils signalent une maitrise architecturale exceptionnelle. Le champ lexical Iram + possesseuse + piliers forme une image de puissance construite, de grandeur materielle visible et imposante. Les piliers ne sont pas un detail decoratif — ils sont l'identite meme de cette cite.",
        axe2_voisins: "Le verset 6 introduisait Ad et l'action du seigneur envers eux. Le verset 7 precise : Ad, c'est Iram aux piliers. Le verset 8 ajoute « dont la pareille n'a pas ete creee dans les cites » — les piliers d'Iram n'ont pas d'equivalent. Les trois versets forment une progression : Ad (peuple) -> Iram aux piliers (cite) -> sans pareil dans les cites (superlatif). La puissance architecturale de Ad est soulignee pour que la destruction divine soit mesuree a sa juste proportion.",
        axe3_sourate: "La sourate 89 enumere trois exemples de puissance detruite : les piliers d'Iram (v7), la roche taillee de Thamoud (v9), les piquets de Pharaon (v10). Chaque civilisation est identifiee par un element materiel qui symbolise sa force. Les piliers sont le premier de ces symboles — la grandeur architecturale comme signe de puissance terrestre. La sourate montre que tous ces signes de puissance n'ont pas protege leurs possesseurs de l'action divine.",
        axe4_coherence: "Le Coran mentionne les 'imad (colonnes/piliers) dans d'autres contextes : « Dieu est celui qui a eleve les cieux sans piliers que vous voyez » (13:2). Les piliers sont associes a la structure qui soutient — dans le cas des cieux, Dieu n'a pas besoin de piliers. Dans le cas d'Iram, les piliers sont la marque de la puissance humaine, qui contraste avec la puissance divine qui n'a besoin d'aucun support. La mention des piliers d'Iram est coherente avec le theme coranique de la fragilite de la puissance humaine face a la puissance divine.",
        axe5_frequence: "Les piliers sont le symbole de ce que le khalifa ne doit pas confondre avec la vraie puissance. Iram avait des piliers sans pareil — et elle a ete detruite. Le khalifa qui fonde sa mission sur la justice n'a pas besoin de piliers architecturaux pour etre solide. La vraie solidite vient de la reconnaissance de la seigneurie, pas de la construction de monuments. L'histoire de Ad/Iram enseigne que la grandeur materielle sans justice est vouee a la destruction."
      },
      "Intention/Volonte": {
        status: "nul",
        senses: ["faire expres"],
        proof_ctx: "L'intention est un acte interieur de la volonte — faire quelque chose deliberement. Le verset decrit les piliers d'une cite, pas un acte intentionnel. La forme nominale al-'imad (les piliers) est un objet physique, pas un etat mental. Le contexte architectural elimine ce sens sans ambiguite."
      }
    }
  }, 1);

  // --- Traduction verset 7 ---
  // "Iram" est un nom propre (cite de Ad), pas de racine analysee
  await upsertVA(verse_id, {
    translation_arab: "إِرَمَ ذَاتِ ٱلْعِمَادِ",
    full_translation: "[avec] Iram, la cité aux piliers",
    segments: [
      { fr: "Iram", pos: "nom propre", phon: "irama", arabic: "إِرَمَ", is_particle: false, sense_retenu: "Iram (nom propre)", position: 1 },
      { fr: "aux", pos: "nom", phon: "dhāti", arabic: "ذَاتِ", is_particle: true, position: 2 },
      { fr: "piliers", pos: "nom", phon: "al-'imādi", arabic: "ٱلْعِمَادِ", word_key: "emd", is_particle: false, sense_retenu: "pilier", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est un complement en apposition au verset 6 — il precise l'identite de Ad. Le mot irama (Iram) est un nom propre au genitif (un cas grammatical qui marque le complement de nom), en apposition a 'ādin du verset precedent. Le mot dhāti est un nom feminin signifiant « possesseuse de, dotee de » — il est en idafa (un rattachement grammatical) avec al-'imādi (les piliers, au genitif defini). La construction dhāti al-'imād signifie litteralement « possesseuse des piliers » — c'est-a-dire « celle qui a des piliers / aux piliers ». Le verset entier est une apposition descriptive : Iram, la possesseuse des piliers.

§JUSTIFICATION§
**Iram** — Nom propre conserve tel quel. C'est le nom de la cite (ou du peuple/territoire) de Ad, mentionne uniquement ici dans le Coran.

**aux piliers** — Le sens retenu est « pilier ». La construction dhāti al-'imād est traduite par « aux piliers » car « possesseuse des piliers » serait lourd en francais. L'alternative « aux colonnes » est ecartee car « pilier » est plus courant et porte mieux l'image de puissance. L'alternative de Hamidullah « la cite aux piliers » ajoute « la cite » qui n'est pas dans le texte arabe mais clarifie le sens — nous choisissons de garder la traduction proche du texte sans ajout.

§CRITIQUE§
Hamidullah traduit « [avec] Iram, la cite aux piliers ». L'ajout de « la cite » entre crochets est une glose explicative — le texte arabe dit simplement « Iram aux piliers » sans preciser que Iram est une cite. Cet ajout est cependant utile pour le lecteur francophone qui ne connait pas Iram. La difference est mineure et releve de la clarte, pas du sens.`
  });

  console.log('VERSET 89:7 — TERMINE');
  console.log('  emd (ع م د) -> "Support/Pilier" -> mot francais "pilier"');
  console.log('  Iram = nom propre (pas de racine)');
  console.log('  Traduction : "Iram aux piliers"');
}

async function verse89_8() {
  console.log('\n=== VERSET 89:8 — ٱلَّتِى لَمْ يُخْلَقْ مِثْلُهَا فِى ٱلْبِلَـٰدِ ===');
  const verse_id = 6001;

  // ---- XLQ (خلق) — id=344 — "creer" ----
  // Forme: passif inaccompli nie (lam yukhlaq) — "n'a pas ete cree"
  await upsertVWA(verse_id, 'xlq', 'creer', {
    sense_chosen: "creer",
    concept_chosen: "Creation/Production",
    concepts: {
      "Creation/Production": {
        status: "retenu",
        senses: ["creer", "creation", "creature", "faconner", "nature", "caractere"],
        proof_ctx: "Le sens retenu est « Creation/Production ». Le Lane's donne : faire exister ce qui n'existait pas, faconner, produire. Dans le verset, la forme yukhlaq est un passif inaccompli (une forme ou le sujet subit l'action : « etre cree ») nie par lam — « n'a pas ete cree ». Le sujet grammatical est mithluhā (sa pareille) — ce qui n'a pas ete cree, c'est l'equivalent d'Iram. Le passif efface l'agent (celui qui cree) pour mettre en avant le resultat : personne, nulle part, n'a cree quelque chose de comparable. La negation absolue (lam + inaccompli = negation du passe definitif) souligne le caractere unique et sans precedent d'Iram. Distinction avec « Lisse » : le lisse est une qualite de surface qui n'a aucun rapport avec le contexte. Distinction avec « Mensonge » : le mensonge est un acte de parole, pas une production materielle.",
        axe1_verset: "Le verset dit « dont la pareille n'a pas ete creee dans les cites ». Le verbe yukhlaq est au passif — le sujet subit l'action de creation. La negation lam rend la creation impossible : rien de semblable n'a jamais ete produit. Le champ lexical creation + pareille + negation + cites forme un superlatif absolu : Iram est unique dans toute l'histoire des cites. La creation est invoquee ici dans sa negation — ce qui n'a pas ete cree souligne l'exceptionnalite de ce qui a ete cree (Iram). Le verset utilise la creation comme etalon de mesure : la creation des autres cites ne rivalise pas avec celle d'Iram.",
        axe2_voisins: "Le verset 7 identifiait Iram par ses piliers. Le verset 8 etend le superlatif : pas seulement des piliers, mais une cite sans pareille. Le verset 9 passera a Thamoud qui taillaite la roche — un autre exploit de construction. La progression montre que chaque civilisation detruite etait exceptionnelle dans son domaine. La creation sans pareille d'Iram est le premier maillon d'une chaine d'exploits humains qui n'ont protege personne.",
        axe3_sourate: "La sourate oppose la creation humaine (cites, piliers, roche taillee) a l'action divine qui les detruit. Le mot khalaqa au passif souligne que meme la creation la plus exceptionnelle n'est qu'un produit — quelque chose de fabrique qui peut etre defait. La sourate rappelle que la vraie creation vient du seigneur, pas des batisseurs. Iram a ete creee par des humains, mais c'est le seigneur qui a decide de sa fin.",
        axe4_coherence: "Le Coran utilise le passif de khalaqa pour souligner la dependance de toute creation envers le Createur : « Ont-ils ete crees de rien ou sont-ils eux-memes les createurs ? » (52:35). Le passif rappelle que toute chose creee a un Createur. Ici, le passif est nie — rien de comparable n'a ete cree — ce qui souligne paradoxalement que meme la plus grande creation humaine reste soumise a la volonte divine.",
        axe5_frequence: "Le khalifa doit comprendre que la creation la plus remarquable ne confere aucune immunite. Iram etait sans pareille — et elle a disparu. La creation materielle n'est pas une fin en soi mais un outil au service de la mission de justice. Le khalifa qui batirait une cite sans pareille sans y instaurer la justice subirait le meme sort que Iram."
      },
      "Sens isole/Lisse": {
        status: "nul",
        senses: ["lisse"],
        proof_ctx: "Le lisse est une qualite de surface qui n'a aucun rapport avec le contexte. Le verset parle de la creation d'une cite, pas d'une texture."
      },
      "Sens isole/Mensonge": {
        status: "nul",
        senses: ["mensonge"],
        proof_ctx: "Le mensonge est un acte de parole. Le verset parle de la creation materielle d'une cite sans pareille, pas d'un mensonge."
      }
    }
  }, 1);

  // ---- MVL (مثل) — id=2599 — "pareille" ----
  // Forme: nom au nominatif mithluhā (sa pareille, son equivalent)
  await upsertVWA(verse_id, 'mvl', 'pareil', {
    sense_chosen: "pareil",
    concept_chosen: "Ressemblance/Identite",
    concepts: {
      "Ressemblance/Identite": {
        status: "retenu",
        senses: ["ressembler", "etre semblable", "pareil", "equivalent"],
        proof_ctx: "Le sens retenu est « Ressemblance/Identite ». Le Lane's donne : mithl est ce qui est semblable a une autre chose, son equivalent, son pareil. Le mot mithluhā est compose de mithl (pareil, equivalent) et du pronom feminin -hā (la sienne, renvoyant a Iram). La structure « n'a pas ete cree sa pareille » signifie « rien d'equivalent n'a ete produit ». Le mithl est une relation de comparaison : il suppose un modele et un equivalent. Ici, Iram est le modele et sa pareille n'existe pas — le mot mithl est utilise dans sa negation pour exprimer l'unicite. Distinction avec « Similitude/Comparaison » : la similitude porte sur des exemples et paraboles (mathal). Le verset utilise mithl (l'equivalent concret), pas mathal (la parabole abstraite). La distinction est importante : mithl est un objet reel comparable, mathal est une illustration rhetoriqque. Distinction avec « Representation/Image » : la representation (statue, image) est un objet concret qui imite, pas une relation d'equivalence.",
        axe1_verset: "Le verset dit « dont la pareille n'a pas ete creee dans les cites ». Le mot mithluhā est le sujet grammatical du verbe passif yukhlaq — c'est « sa pareille » qui n'a pas ete creee. Le pronom -hā renvoie a Iram (ou a la civilisation de Ad). Le champ lexical pareille + negation + creation + cites construit un superlatif par la negation : il n'existe aucun equivalent. Cette construction est plus forte qu'un simple superlatif (« la plus grande ») car elle nie l'existence meme d'un concurrent. Iram n'est pas la meilleure — elle est la seule.",
        axe2_voisins: "Le verset 7 identifiait Iram par ses piliers — un element architectural concret. Le verset 8 generalise : pas seulement les piliers sont remarquables, mais la cite entiere est sans equivalent. Le verset 9 introduira Thamoud avec un autre exploit (tailler la roche), et le verset 10 Pharaon avec ses piquets. Chaque civilisation est unique dans son genre — mais aucune n'a survecu a l'action divine.",
        axe3_sourate: "L'unicite d'Iram souligne le theme central de la sourate : la puissance materielle ne protege pas. Plus la cite est exceptionnelle, plus sa destruction illustre la puissance divine. Le mot mithl (pareil) utilise dans sa negation est un outil rhetorique puissant — il mesure l'ampleur de ce qui a ete perdu.",
        axe4_coherence: "Le Coran utilise mithl dans des contextes de comparaison et d'unicite : « Il n'y a rien qui lui soit semblable » (42:11) — la meme construction (laysa ka-mithlihi shay') nie l'existence d'un equivalent pour Dieu. Ici, la meme negation est appliquee a Iram, mais a l'echelle humaine. Le procede est le meme : nier l'equivalent pour affirmer l'unicite.",
        axe5_frequence: "Le khalifa doit savoir que l'unicite materielle n'est pas une protection. Iram etait sans pareil — et elle a ete detruite. Ce qui rend le khalifa unique n'est pas la grandeur de ses constructions mais la justice de ses actes. L'unicite qui protege est morale, pas architecturale."
      },
      "Similitude/Comparaison": {
        status: "peu_probable",
        senses: ["exemple", "parabole", "similitude", "comparaison", "semblable"],
        proof_ctx: "La similitude (mathal) est une illustration rhetorique — un exemple ou une parabole utilisee pour enseigner. Le verset utilise mithl (l'equivalent concret) et non mathal (la parabole). La forme mithluhā designe un objet reel comparable, pas une illustration abstraite. Le contexte est descriptif (une cite reelle), pas didactique (une parabole).",
        axe1_verset: "Le verset utilise mithluhā (son equivalent concret), pas mathaluhā (sa parabole). Le contexte est la description d'une cite reelle et de son unicite materielle. La similitude au sens de parabole ne correspond pas — il n'y a pas d'enseignement par comparaison dans ce verset, mais une affirmation d'unicite factuelle.",
        axe2_voisins: "Les versets 7-8 decrivent une realite historique concrete (Iram et ses piliers), pas une parabole. Le passage entier (versets 6-14) est un recit historique, pas une serie de comparaisons didactiques. Le mot mithl ici est dans son sens concret d'equivalent reel.",
        axe3_sourate: "La sourate utilise des exemples historiques reels (Ad, Thamoud, Pharaon), pas des paraboles. Le vocabulaire est descriptif et factuel — les piliers, la roche taillee, les piquets. Le sens de parabole ne correspond pas au registre du passage.",
        axe4_coherence: "Le Coran distingue mathal (parabole, exemple didactique) de mithl (equivalent reel). Les paraboles sont introduites par des formules specifiques (« Dieu propose en parabole... »). Ici, il n'y a pas de formule d'introduction parabolique.",
        axe5_frequence: "La distinction entre parabole et realite historique est importante pour le khalifa : les exemples historiques (Ad, Thamoud, Pharaon) ne sont pas des illustrations abstraites mais des precedents reels dont il faut tirer des lecons concretes."
      },
      "Representation/Image": {
        status: "nul",
        senses: ["statue", "image", "representation"],
        proof_ctx: "La representation (statue, image) est un objet concret qui imite une realite. Le verset ne parle pas de statues ou d'images mais de l'absence d'equivalent pour Iram. Le mot mithl ici est un nom abstrait (la pareille), pas un objet de representation."
      }
    }
  }, 2);

  // ---- BLD (بلد) — id=793 — "cite" ----
  // Forme: nom au genitif defini al-bilad (les cites/pays)
  await upsertVWA(verse_id, 'bld', 'cite', {
    sense_chosen: "cite",
    concept_chosen: "Territoire/Cite",
    concepts: {
      "Territoire/Cite": {
        status: "retenu",
        senses: ["pays", "cite", "contree"],
        proof_ctx: "Le sens retenu est « Territoire/Cite ». Le Lane's donne : al-balad et al-bilad designent le pays, la cite, la contree habitee. Al-bilad est le pluriel de balad — les cites, les pays. Dans le verset, fi al-bilad (dans les cites) delimite le champ de comparaison : parmi toutes les cites du monde, aucune n'est comparable a Iram. Le mot al-bilad est defini par al- et au genitif (apres la preposition fi) — il designe l'ensemble des cites connues, sans restriction. Le Lane's precise que balad implique un territoire habite et organise, pas un espace sauvage. Les bilad sont les lieux ou les civilisations se developpent — c'est le cadre de la vie humaine organisee. Il n'y a pas d'autre sens serieux pour cette racine dans ce contexte.",
        axe1_verset: "Le verset dit « dont la pareille n'a pas ete creee dans les cites ». Le mot al-bilad est le complement de lieu (fi, dans) qui delimite le champ de la comparaison. Le superlatif ne porte pas sur un domaine restreint mais sur l'ensemble des cites — toutes les cites du monde, de toutes les epoques. Le champ lexical pareille + creation + cites construit une image d'unicite universelle : dans tout l'espace habite, rien ne rivalise avec Iram. Les cites sont le terrain de jeu des civilisations — et sur ce terrain, Iram est sans rival.",
        axe2_voisins: "Le verset 9 mentionne le wadi (la vallee) ou Thamoud a taille la roche, et le verset 10 evoque Pharaon. Chaque civilisation est situee geographiquement : Iram dans les cites, Thamoud dans la vallee. La mention des cites (al-bilad) place la comparaison a l'echelle de toutes les civilisations urbaines, pas seulement d'une region. La progression va du general (les cites) au particulier (la vallee).",
        axe3_sourate: "Les cites sont le cadre ou les civilisations naissent, prosperent et sont detruites. La sourate 89 utilise les cites comme etalon de mesure de la puissance humaine. Le verset 11 ajoutera que ces peuples ont « seme la corruption dans les cites » — le mot bilad revient pour montrer que le theatre de la grandeur est aussi celui de la corruption. Les cites sont le lieu de l'epreuve.",
        axe4_coherence: "Le Coran utilise bilad/balad dans des contextes de civilisation et de jugement : « N'ont-ils pas voyage dans les cites (al-bilad) pour voir quelle a ete la fin de ceux qui etaient avant eux ? » (40:82). Les cites sont le lieu ou les lecons de l'histoire se lisent — les ruines des civilisations passees sont des temoins silencieux de l'action divine.",
        axe5_frequence: "Le khalifa exerce sa mission dans les cites — dans les lieux ou les etres humains vivent ensemble, construisent et organisent leur vie. La cite est le cadre naturel de la mission de justice. Mais la cite est aussi le lieu de la corruption (verset 11). Le khalifa doit faire de la cite un lieu de justice, pas un monument d'orgueil comme Iram."
      }
    }
  }, 3);

  // --- Traduction verset 8 ---
  await upsertVA(verse_id, {
    translation_arab: "ٱلَّتِى لَمْ يُخْلَقْ مِثْلُهَا فِى ٱلْبِلَـٰدِ",
    full_translation: "dont jamais pareille ne fut construite parmi les villes",
    segments: [
      { fr: "dont", pos: "pronom relatif", phon: "allatī", arabic: "ٱلَّتِى", is_particle: true, position: 1 },
      { fr: "n'a pas ete creee", pos: "verbe", phon: "lam yukhlaq", arabic: "لَمْ يُخْلَقْ", word_key: "xlq", is_particle: false, sense_retenu: "creer", position: 2 },
      { fr: "sa pareille", pos: "nom", phon: "mithluhā", arabic: "مِثْلُهَا", word_key: "mvl", is_particle: false, sense_retenu: "pareil", position: 3 },
      { fr: "dans", pos: "preposition", phon: "fī", arabic: "فِى", is_particle: true, position: 4 },
      { fr: "les cites", pos: "nom", phon: "al-bilādi", arabic: "ٱلْبِلَـٰدِ", word_key: "bld", is_particle: false, sense_retenu: "cite", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une proposition relative introduite par allatī (qui/dont, pronom relatif feminin). Le verbe yukhlaq est un passif inaccompli (une forme ou le sujet subit l'action) de la racine kh-l-q (creer), nie par lam — « n'a pas ete cree ». Le sujet grammatical est mithluhā (sa pareille), compose de mithl (equivalent, pareil) et du pronom feminin -hā (la sienne, renvoyant a Iram ou a la civilisation de Ad). La preposition fī (dans) introduit le complement de lieu al-bilādi (les cites, au genitif defini). La phrase entiere signifie : « dont l'equivalent n'a pas ete cree dans les cites ». Le passif nie (lam yukhlaq) est une negation definitive du passe — jamais, a aucun moment, un equivalent n'a ete produit.

§JUSTIFICATION§
**creer** — Le passif yukhlaq est traduit par « n'a pas ete creee ». L'alternative « n'a pas ete construite » est ecartee car khalaqa designe la creation au sens large, pas seulement la construction — le verset ne limite pas la comparaison a l'architecture mais a l'ensemble de la civilisation.

**pareille** — Le mot mithluhā est traduit par « sa pareille ». L'alternative « son equivalent » est ecartee car « pareille » est plus courant en francais et porte la meme idee de ressemblance complete.

**cites** — Le mot al-bilad est traduit par « les cites ». L'alternative « les pays » est ecartee car le contexte est celui de la comparaison entre des entites urbaines construites (Iram et ses piliers), pas entre des territoires geographiques.

§CRITIQUE§
Hamidullah traduit « dont jamais pareille ne fut construite parmi les villes ». La traduction proposee suit la meme structure. La difference principale est le choix de « creee » au lieu de « construite » — le texte arabe dit yukhlaq (etre cree, de khalaqa), pas yubnā (etre construit, de banā). Le choix de « creee » est plus fidele a l'arabe. Hamidullah utilise « villes » tandis que nous choisissons « cites » — les deux sont acceptables, « cite » ayant une connotation plus ancienne et monumentale qui correspond au contexte.`
  });

  console.log('VERSET 89:8 — TERMINE');
  console.log('  xlq (خ ل ق) -> "Creation/Production" -> mot francais "creer"');
  console.log('  mvl (م ث ل) -> "Ressemblance/Identite" -> mot francais "pareil"');
  console.log('  bld (ب ل د) -> "Territoire/Cite" -> mot francais "cite"');
  console.log('  Traduction : "Dont la pareille n\'a pas ete creee dans les cites"');
}

async function verse89_9() {
  console.log('\n=== VERSET 89:9 — وَثَمُودَ ٱلَّذِينَ جَابُوا۟ ٱلصَّخْرَ بِٱلْوَادِ ===');
  const verse_id = 6002;

  // ---- JWB (جوب) — id=963 — "tailler/creuser" ----
  // Forme: verbe accompli 3e pers. pluriel (jābū) — "ils ont taille/creuse"
  // "Thamoud" est un nom propre — pas de racine a analyser
  await upsertVWA(verse_id, 'jwb', 'tailler', {
    sense_chosen: "tailler",
    concept_chosen: "Traversee/Percement",
    concepts: {
      "Traversee/Percement": {
        status: "retenu",
        senses: ["traverser", "creuser", "couper (la roche)"],
        proof_ctx: "Le sens retenu est « Traversee/Percement ». Le Lane's donne : jāba signifie traverser, couper a travers, percer. Le verbe s'applique a ce qui traverse une matiere solide — couper la roche, creuser un passage. La forme jābū est un verbe accompli (une forme qui indique que l'action est terminee) a la troisieme personne du pluriel — « ils ont taille/perce ». Le sujet implicite est Thamoud. L'objet direct est al-sakhr (la roche). Le Lane's precise que jawb implique un percement complet — on traverse la matiere, on ne la gratte pas en surface. C'est un acte de force et de maitrise technique : percer la roche demande des outils et un savoir-faire exceptionnel. Distinction avec « Reponse/Exaucement » : la reponse (jawāb) est un acte de parole — repondre a une question ou exaucer une priere. Le verset decrit un acte physique de construction (tailler la roche), pas un echange verbal. La forme verbale jābū avec l'objet al-sakhr (la roche) elimine le sens de reponse sans ambiguite.",
        axe1_verset: "Le verset dit « et Thamoud qui ont taille la roche dans la vallee ». Le verbe jābū est l'acte central du verset — c'est par cet acte que Thamoud est identifie. Le champ lexical tailler + roche + vallee forme une image de maitrise de la matiere la plus dure dans un environnement naturel. Thamoud n'a pas construit avec des briques ou du bois — ils ont perce la roche brute, la matiere la plus resistante. L'exploit est d'autant plus remarquable qu'il se fait dans la vallee, un environnement naturel non amenage. L'acte de tailler la roche est la signature de Thamoud, comme les piliers sont la signature d'Iram.",
        axe2_voisins: "Le verset 7 decrivait Iram par ses piliers. Le verset 8 ajoutait que sa pareille n'avait jamais ete creee. Le verset 9 presente Thamoud par un autre exploit : tailler la roche. Le verset 10 presentera Pharaon par ses piquets. Les trois versets forment une enumeration de prouesses materielles — piliers, roche taillee, piquets — chacune representant un sommet de la puissance humaine dans son domaine. La taille de la roche est l'exploit le plus physique et le plus brut des trois.",
        axe3_sourate: "La sourate accumule les exemples de puissance materielle pour les opposer a l'action divine. La taille de la roche par Thamoud est le deuxieme maillon de la chaine. Chaque civilisation est plus puissante que la nature qui l'entoure — mais aucune n'est plus puissante que le seigneur qui les detruit toutes. Le percement de la roche symbolise la capacite humaine a dominer la matiere, une capacite qui ne protege de rien face a l'action divine.",
        axe4_coherence: "Le Coran mentionne Thamoud et leur taille de la roche en plusieurs endroits : « Et vers Thamoud, leur frere Salih... Et rappelez-vous quand Il vous a etablis comme successeurs apres Ad et vous a installes sur la terre, vous prelevant des chateaux dans ses plaines et taillant les montagnes en demeures » (7:74). La taille de la roche est systematiquement associee a Thamoud dans le Coran — c'est leur marque distinctive. Le verbe jābū dans la sourate 89 est coherent avec cette description recurrente.",
        axe5_frequence: "La maitrise de la matiere est un atout du khalifa, mais elle ne remplace pas la justice. Thamoud avait la capacite de percer la roche — une prouesse d'ingenierie — mais cette capacite ne les a pas sauves. Le khalifa doit utiliser la maitrise technique au service de la justice, pas comme preuve de sa propre puissance. La technique sans justice est la marque de Thamoud, pas du khalifa."
      },
      "Reponse/Exaucement": {
        status: "nul",
        senses: ["repondre", "exaucer"],
        proof_ctx: "La reponse est un acte de parole — repondre a une question, exaucer une priere. Le verset decrit un acte physique de construction : tailler la roche. Le complement d'objet direct al-sakhr (la roche) elimine le sens de reponse : on ne repond pas a de la roche. La forme jābū al-sakhr est sans ambiguite : c'est un percement materiel."
      }
    }
  }, 1);

  // ---- SXR (صخر) — id=2635 — "roche" ----
  // Forme: nom au genitif defini al-sakhr (la roche)
  await upsertVWA(verse_id, 'Sxr', 'roche', {
    sense_chosen: "roche",
    concept_chosen: "Roche/Solidite",
    concepts: {
      "Roche/Solidite": {
        status: "retenu",
        senses: ["roche", "rocher", "lieu rocheux", "son du fer sur le fer"],
        proof_ctx: "Le sens retenu est « Roche/Solidite ». Le Lane's donne : al-sakhr est la grande pierre, le rocher, la roche massive et dure. Le mot designe la matiere minerale brute, non travaillee — la roche dans sa forme naturelle, avant toute intervention humaine. Dans le verset, al-sakhr est l'objet direct du verbe jābū (tailler/percer) — c'est la matiere que Thamoud a taillee. Le mot est defini par al- (la roche en general, pas un rocher particulier). Le Lane's precise que sakhr implique la durete et la masse — c'est la roche au sens le plus solide, pas un caillou ou un gravier. La solidite de la roche est ce qui rend l'exploit de Thamoud remarquable : tailler la matiere la plus dure est le signe d'une puissance technique exceptionnelle. Distinction avec « Durete/Insensibilite » : la durete abstraite (un visage dur, un coeur dur) est un sens figure de la racine. Le verset parle de roche materielle, pas de durete morale. Le complement jābū (tailler) exige un objet physique. Distinction avec la « Plante » : le sens isole de plante n'a aucun rapport avec le contexte de la taille de la roche.",
        axe1_verset: "Le verset dit « Thamoud qui ont taille la roche dans la vallee ». Le mot al-sakhr est l'objet direct du verbe tailler — c'est la matiere brute sur laquelle Thamoud exerce sa puissance. Le champ lexical tailler + roche + vallee forme une image de confrontation entre l'etre humain et la nature la plus resistante. La roche est le symbole de ce qui ne plie pas facilement — et Thamoud l'a pliee. L'exploit est physique, brut, impressionnant. La roche ne ment pas sur la puissance de celui qui la taille.",
        axe2_voisins: "Le verset 7 mentionnait les piliers d'Iram — une construction raffinee, architecturale. Le verset 9 mentionne la roche — une matiere brute, naturelle. Les deux exploits sont differents : Iram a construit en hauteur (piliers), Thamoud a creuse en profondeur (roche). Le verset 10 ajoutera les piquets de Pharaon — un troisieme type de maitrise materielle. Les trois materiaux (piliers, roche, piquets) representent trois formes de domination de la matiere.",
        axe3_sourate: "La roche est le symbole de la durete et de la permanence. La sourate montre que meme la roche — la matiere la plus permanente — n'a pas protege Thamoud. Si la roche peut etre taillee par Thamoud, Thamoud peut etre detruit par le seigneur. La hierarchie des puissances est claire : la roche resiste a tout sauf a l'etre humain, et l'etre humain resiste a tout sauf a l'action divine.",
        axe4_coherence: "Le Coran utilise la roche comme symbole de durete dans d'autres contextes : « Puis vos coeurs se sont endurcis apres cela ; ils sont comme la roche (al-hijara) ou plus durs encore » (2:74). Le verset 89:9 utilise sakhr (roche massive) et non hijara (pierres) — le choix de sakhr souligne la masse et l'impregnabilite de la matiere que Thamoud a vaincue.",
        axe5_frequence: "La roche enseigne au khalifa que la matiere la plus dure peut etre vaincue par la technique, mais que la technique elle-meme peut etre vaincue par l'action divine. La durete materielle n'est pas une protection absolue. Le khalifa doit chercher sa solidite dans la justice et la reconnaissance de la seigneurie, pas dans la roche de ses constructions."
      },
      "Durete/Insensibilite": {
        status: "nul",
        senses: ["visage dur", "recipient en terre"],
        proof_ctx: "La durete abstraite (visage dur, insensibilite) est un sens figure de la racine. Le verset parle de roche materielle taillee par Thamoud, pas de durete morale. Le verbe jābū (tailler) exige un objet physique concret, pas une qualite abstraite."
      },
      "Sens isole/Plante": {
        status: "nul",
        senses: ["plante"],
        proof_ctx: "Le sens isole de plante n'a aucun rapport avec le contexte de la taille de la roche dans la vallee par Thamoud."
      }
    }
  }, 2);

  // ---- WDY_V (وادي) — id=2637 — "vallee" ----
  // Forme: nom au genitif defini al-wad(i) (la vallee)
  await upsertVWA(verse_id, 'wdy_v', 'vallee', {
    sense_chosen: "vallee",
    concept_chosen: "Vallee/Cours d'eau",
    concepts: {
      "Vallee/Cours d'eau": {
        status: "retenu",
        senses: ["vallee", "cours d'eau"],
        proof_ctx: "Le sens retenu est « Vallee/Cours d'eau ». Le Lane's donne : al-wadi est la depression naturelle du terrain ou l'eau coule, la vallee entre deux reliefs. C'est un lieu geographique precis : une formation naturelle creusee par l'erosion. Dans le verset, bi-al-wad (dans la vallee) est le complement de lieu qui situe l'action de Thamoud. La preposition bi (dans/par) introduit le lieu ou la taille de la roche a eu lieu. Le wadi est un environnement naturel, brut, non amenage — ce qui souligne que Thamoud a taille la roche dans la nature meme, pas dans un atelier. Le Lane's precise que wadi peut designer aussi bien une vallee seche qu'un lit de riviere — c'est la depression entre deux hauteurs. Distinction avec « Prix du sang/Compensation » : la compensation financiere (diya) est un sens juridique de la racine wdy qui n'a aucun rapport avec le contexte geographique du verset. Distinction avec « Destruction » et « Palmier » : ces sens isoles n'ont aucun rapport avec le lieu ou Thamoud a taille la roche.",
        axe1_verset: "Le verset dit « Thamoud qui ont taille la roche dans la vallee ». Le mot al-wad est le complement de lieu qui ancre l'exploit de Thamoud dans un paysage reel. La vallee est un cadre naturel — un espace sauvage ou la roche affleure et ou Thamoud a construit ses demeures. Le champ lexical tailler + roche + vallee forme une image de civilisation qui s'impose dans un environnement hostile. La vallee n'est pas une plaine facile — c'est un terrain encaisse ou la roche est partout. L'exploit de Thamoud est d'avoir transforme ce terrain en espace habitable.",
        axe2_voisins: "Le verset 7 situait Iram dans les cites (al-bilad). Le verset 9 situe Thamoud dans la vallee (al-wad). Les deux espaces sont differents : la cite est un milieu urbain organise, la vallee est un milieu naturel brut. Iram a construit dans un espace deja civilise (les cites), Thamoud a construit dans un espace sauvage (la vallee). L'exploit de Thamoud est peut-etre plus impressionnant : transformer la nature brute en habitat humain.",
        axe3_sourate: "La sourate situe chaque civilisation dans son espace : les cites (v8), la vallee (v9). Ce n'est pas un detail decoratif — le lieu definit le type de puissance : Iram est puissante dans les cites, Thamoud dans la nature. Les deux espaces sont soumis a l'action divine. La sourate montre que ni la ville ni la nature ne protegent du jugement.",
        axe4_coherence: "Le Coran mentionne les vallees dans des contextes geographiques et symboliques : « Il fait descendre du ciel de l'eau et les vallees coulent selon leur mesure » (13:17). Les vallees sont les canaux naturels de l'eau — des lieux de vie mais aussi de vulnerabilite. Thamoud a choisi la vallee comme lieu de vie — un choix qui montre leur maitrise de l'environnement mais qui ne les a pas proteges.",
        axe5_frequence: "La vallee est un lieu de vie et de travail — un espace ou le khalifa peut exercer sa mission. Mais la vallee est aussi un lieu de passage et de vulnerabilite : l'eau qui y coule peut se transformer en torrent. Le khalifa qui s'installe dans la vallee doit savoir que la nature n'est pas un rempart contre l'action divine. Seule la justice offre une protection durable."
      },
      "Prix du sang/Compensation": {
        status: "nul",
        senses: ["prix du sang", "compensation"],
        proof_ctx: "La compensation financiere (diya) est un sens juridique de la racine wdy qui n'a aucun rapport avec le contexte geographique du verset. Le verset situe l'action de Thamoud dans un lieu physique (la vallee), pas dans un cadre juridique."
      },
      "Sens isole/Destruction": {
        status: "nul",
        senses: ["destruction"],
        proof_ctx: "La destruction est un sens isole de la racine qui ne correspond pas au contexte. Le verset parle de la vallee comme lieu geographique, pas d'une destruction."
      },
      "Sens isole/Palmier": {
        status: "nul",
        senses: ["palmier"],
        proof_ctx: "Le palmier est un sens isole de la racine qui n'a aucun rapport avec le contexte du verset. Le mot al-wad designe clairement la vallee dans ce contexte geographique."
      }
    }
  }, 3);

  // --- Traduction verset 9 ---
  // "Thamoud" est un nom propre — pas de racine analysee
  await upsertVA(verse_id, {
    translation_arab: "وَثَمُودَ ٱلَّذِينَ جَابُوا۟ ٱلصَّخْرَ بِٱلْوَادِ",
    full_translation: "et avec les Thamoud qui taillaient le rocher dans la vallée",
    segments: [
      { fr: "Et", pos: "conjonction", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "Thamoud", pos: "nom propre", phon: "thamūda", arabic: "ثَمُودَ", is_particle: false, sense_retenu: "Thamoud (nom propre)", position: 2 },
      { fr: "qui", pos: "pronom relatif", phon: "alladhīna", arabic: "ٱلَّذِينَ", is_particle: true, position: 3 },
      { fr: "ont taille", pos: "verbe", phon: "jābū", arabic: "جَابُوا۟", word_key: "jwb", is_particle: false, sense_retenu: "tailler", position: 4 },
      { fr: "la roche", pos: "nom", phon: "al-sakhra", arabic: "ٱلصَّخْرَ", word_key: "Sxr", is_particle: false, sense_retenu: "roche", position: 5 },
      { fr: "dans la vallee", pos: "nom", phon: "bi-al-wādi", arabic: "بِٱلْوَادِ", word_key: "wdy_v", is_particle: false, sense_retenu: "vallee", position: 6, prefix_particle: "bi" }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est coordonne au verset 6 par la conjonction wa (et) — il ajoute un deuxieme exemple a la question rhetorique « n'as-tu pas vu comment ton seigneur a agi envers... ». Le mot thamūda est un nom propre au genitif (cas exige par la preposition bi implicite du verset 6 qui gouverne aussi ce complement). Le pronom relatif alladhīna (ceux qui, masculin pluriel) introduit une proposition relative qui qualifie Thamoud. Le verbe jābū est un verbe accompli a la troisieme personne du pluriel (une forme qui indique que l'action est terminee), de la racine j-w-b (traverser, percer). L'objet direct est al-sakhra (la roche, au genitif defini). Le complement de lieu bi-al-wādi (dans la vallee) est introduit par la preposition bi — le wadi est le lieu ou la taille a eu lieu.

§JUSTIFICATION§
**ont taille** — Le sens retenu est « tailler ». Le verbe jābū est traduit par « ont taille » car le verbe « tailler » en francais exprime l'acte de couper dans une matiere dure pour lui donner forme. L'alternative « ont creuse » est ecartee car « creuser » implique un mouvement vertical vers le bas, alors que « tailler » est plus general et peut inclure la taille horizontale de facades et de demeures dans la roche. L'alternative « ont perce » est ecartee car « percer » implique un trou, pas une mise en forme.

**roche** — Le sens retenu est « roche ». Le mot al-sakhr est traduit par « la roche » car c'est le terme le plus naturel en francais pour la matiere minerale massive et dure. L'alternative « le rocher » est ecartee car « rocher » designe un bloc individuel alors que « roche » designe la matiere elle-meme.

**vallee** — Le sens retenu est « vallee ». Le mot al-wad est traduit par « la vallee » car c'est le terme geographique standard en francais. L'alternative « le cours d'eau » est ecartee car le verset parle d'un lieu ou l'on taille la roche, pas d'un point d'eau.

§CRITIQUE§
Hamidullah traduit « et avec les Thamoud qui taillaient le rocher dans la vallee ». La difference principale est « rocher » vs « roche » — Hamidullah choisit le bloc individuel, nous choisissons la matiere. Le texte arabe al-sakhr designe la matiere (la roche en general), pas un bloc particulier. Hamidullah utilise aussi l'imparfait « taillaient » (action repetee) tandis que le texte arabe est un accompli (action achevee). Nous choisissons « ont taille » pour respecter l'accompli arabe. Ces differences sont mineures et ne changent pas le sens global.`
  });

  console.log('VERSET 89:9 — TERMINE');
  console.log('  jwb (ج و ب) -> "Traversee/Percement" -> mot francais "tailler"');
  console.log('  Sxr (ص خ ر) -> "Roche/Solidite" -> mot francais "roche"');
  console.log('  wdy_v (و د ي) -> "Vallee/Cours d\'eau" -> mot francais "vallee"');
  console.log('  Thamoud = nom propre (pas de racine)');
  console.log('  Traduction : "Et Thamoud qui ont taille la roche dans la vallee"');
}

async function verse89_10() {
  console.log('\n=== VERSET 89:10 — وَفِرْعَوْنَ ذِى ٱلْأَوْتَادِ ===');
  const verse_id = 6003;

  // ---- WTD (وتد) — id=2636 — "piquet" ----
  // Forme: nom au genitif defini pluriel al-awtad (les piquets), en idafa avec dhi (possesseur de)
  // "Pharaon" est un nom propre — pas de racine a analyser
  await upsertVWA(verse_id, 'wtd', 'piquet', {
    sense_chosen: "piquet",
    concept_chosen: "Fixation/Ancrage",
    concepts: {
      "Fixation/Ancrage": {
        status: "retenu",
        senses: ["enfoncer un piquet", "piquet", "piquets (awtad)", "maillet"],
        proof_ctx: "Le sens retenu est « Fixation/Ancrage ». Le Lane's donne : le watad (pluriel awtad) est le piquet que l'on enfonce dans le sol pour fixer quelque chose — une tente, une corde, un poteau. L'acte de watada est enfoncer, planter dans le sol. Le piquet est un objet qui penetre la matiere (sol, terre, roche) pour creer un point d'ancrage fixe et stable. Dans le verset, al-awtad (les piquets) est en idafa (un rattachement grammatical) avec dhi (possesseur de) — Pharaon est « le possesseur des piquets ». L'expression dhu al-awtad est une epithete coranique specifique a Pharaon. Le Lane's precise que les awtad peuvent designer : les piquets de tente (symbole d'un vaste campement militaire), les pieux de supplice (instruments de torture), ou metaphoriquement les piliers du pouvoir (ce qui ancre et stabilise un regime). Les trois sens convergent vers l'idee d'ancrage et de fixation par la force. Distinction avec « Stabilite/Immobilite » : la stabilite est l'etat de ce qui ne bouge pas. Le verset parle des piquets comme possessions de Pharaon, pas d'un etat de stabilite. Les piquets sont des instruments actifs de fixation, pas un etat passif d'immobilite.",
        axe1_verset: "Le verset dit « et Pharaon aux piquets ». Le mot al-awtad est en position d'idafa avec dhi — les piquets definissent Pharaon. Comme Iram est definie par ses piliers (verset 7) et Thamoud par la roche taillee (verset 9), Pharaon est defini par ses piquets. Le champ lexical Pharaon + possesseur + piquets forme une image de pouvoir ancre par la force. Les piquets peuvent evoquer les camps militaires vastes (un grand nombre de tentes fixees par des piquets), les instruments de supplice (les pieux auxquels on attachait les condamnes), ou les constructions massives (les obelisques et pylones qui jalonnent l'Egypte). Les trois images convergent : Pharaon est celui qui fixe, qui ancre, qui plante — c'est un pouvoir d'imposition physique.",
        axe2_voisins: "Le verset 7 decrivait Iram par ses piliers (vertical, architectural). Le verset 9 decrivait Thamoud par la roche taillee (horizontal, souterrain). Le verset 10 decrit Pharaon par ses piquets (vertical, enfonce dans le sol). Les trois images sont complementaires : piliers qui montent, roche qui est creusee, piquets qui descendent. Chaque civilisation a sa maniere de dominer la matiere — et chacune a ete detruite. Les piquets de Pharaon completent le triptyque de la puissance materielle illusoire.",
        axe3_sourate: "La sourate accumule trois exemples de puissance materielle : piliers, roche taillee, piquets. L'enumeration n'est pas un catalogue — c'est une demonstration. Chaque element est plus menacant que le precedent : les piliers sont une construction, la roche taillee est un exploit, les piquets sont des instruments de domination et de terreur. La progression va de la grandeur architecturale a la violence du pouvoir. La conclusion (versets 11-14) montrera que le seigneur a repondu a cette puissance par un chatiment plus grand encore.",
        axe4_coherence: "Le Coran utilise l'expression dhu al-awtad pour Pharaon en deux endroits : ici (89:10) et en 38:12 (« et Pharaon aux piquets »). L'expression est une epithete fixe — elle identifie Pharaon de maniere unique dans le texte coranique. En 38:12, le contexte est aussi celui d'une enumeration de peuples detruits. La coherence est totale : dhu al-awtad est le marqueur coranique de Pharaon comme tyran ancre dans la force brute.",
        axe5_frequence: "Les piquets de Pharaon enseignent au khalifa que le pouvoir fonde sur la force (enfoncer, ancrer, fixer par la contrainte) est voue a la destruction. Le khalifa doit ancrer son pouvoir dans la justice, pas dans les piquets. L'ancrage par la force est l'image meme de la tyrannie — le contraire de la seigneurie bienveillante que le Coran decrit. Pharaon est l'anti-modele du khalifa : la ou le khalifa sert, Pharaon domine ; la ou le khalifa libere, Pharaon enchaine."
      },
      "Stabilite/Immobilite": {
        status: "peu_probable",
        senses: ["se tenir debout fermement", "corne dressee"],
        proof_ctx: "La stabilite est l'etat de ce qui ne bouge pas — se tenir droit, etre ferme. Le verset utilise al-awtad comme un nom pluriel (les piquets) possede par Pharaon, pas comme une qualite de stabilite. La forme nominale plurielle (awtad) designe des objets concrets (des piquets), pas un etat abstrait de stabilite. Cependant, le lien entre les deux sens n'est pas artificiel : le piquet cree la stabilite. Les piquets de Pharaon sont les instruments de sa stabilite — mais le verset les presente comme des possessions (dhi al-awtad), pas comme une qualite (la stabilite de Pharaon).",
        axe1_verset: "Le verset dit « Pharaon aux piquets ». La stabilite est implicite dans l'image des piquets — ce qui est fixe par des piquets est stable. Mais le verset nomme les instruments (les piquets), pas la qualite (la stabilite). La distinction est importante : le verset decrit ce que Pharaon possede, pas ce qu'il est. Les piquets sont des objets concrets, la stabilite est un etat abstrait.",
        axe2_voisins: "Les versets 7 et 9 nomment aussi des objets concrets (piliers, roche), pas des qualites abstraites. Le passage entier est descriptif et materiel. La stabilite comme qualite abstraite ne correspond pas au registre des versets voisins qui enumerent des realisations materielles.",
        axe3_sourate: "La sourate montre que la puissance materielle est illusoire — les piquets (instruments de stabilite) n'ont pas stabilise le pouvoir de Pharaon. La sourate oppose la stabilite materielle (fausse) a l'action divine (vraie). Parler de stabilite comme sens retenu serait contradictoire avec le message de la sourate qui demontre justement l'instabilite de tout pouvoir humain.",
        axe4_coherence: "Le Coran utilise l'expression dhu al-awtad (possesseur des piquets) et non dhu al-thubut (possesseur de la stabilite). Le choix lexical coranique est celui des objets concrets, pas des qualites abstraites.",
        axe5_frequence: "La stabilite est un objectif du khalifa, mais elle doit etre fondee sur la justice, pas sur la force des piquets. Le sens de stabilite enrichit la comprehension de l'image mais n'est pas le sens premier du verset."
      },
      "Sens isole/Fixe": {
        status: "nul",
        senses: ["fixe"],
        proof_ctx: "Le sens isole « fixe » est un adjectif derive de la meme racine mais le verset utilise le pluriel nominal awtad (piquets), pas un adjectif. Le contexte est celui d'une epithete de Pharaon, pas d'une description d'un etat."
      }
    }
  }, 1);

  // --- Traduction verset 10 ---
  // "Pharaon" est un nom propre — pas de racine analysee
  await upsertVA(verse_id, {
    translation_arab: "وَفِرْعَوْنَ ذِى ٱلْأَوْتَادِ",
    full_translation: "ainsi qu'avec Pharaon, l'homme aux épieux",
    segments: [
      { fr: "Et", pos: "conjonction", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "Pharaon", pos: "nom propre", phon: "fir'awna", arabic: "فِرْعَوْنَ", is_particle: false, sense_retenu: "Pharaon (nom propre)", position: 2 },
      { fr: "aux", pos: "nom", phon: "dhī", arabic: "ذِى", is_particle: true, position: 3 },
      { fr: "piquets", pos: "nom", phon: "al-awtādi", arabic: "ٱلْأَوْتَادِ", word_key: "wtd", is_particle: false, sense_retenu: "piquet", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est coordonne aux versets 6 et 9 par la conjonction wa (et) — c'est le troisieme et dernier element de l'enumeration ouverte par « n'as-tu pas vu comment ton seigneur a agi envers... ». Le mot fir'awna (Pharaon) est un nom propre au genitif. Le mot dhī est le masculin de dhāti (verset 7) — il signifie « possesseur de, dote de ». Il est en idafa (un rattachement grammatical) avec al-awtādi (les piquets, au genitif defini pluriel). La construction dhī al-awtād signifie litteralement « le possesseur des piquets » — c'est-a-dire « celui qui a des piquets / aux piquets ». L'expression dhu al-awtad est une epithete coranique unique a Pharaon, qui le designe par ses instruments de pouvoir.

§JUSTIFICATION§
**Pharaon** — Nom propre conserve tel quel. Le Coran utilise Fir'awn comme titre generique du souverain d'Egypte.

**piquets** — Le sens retenu est « piquet ». Le mot awtad (pluriel de watad) est traduit par « piquets » car c'est le terme le plus fidele a l'etymologie : le watad est ce qu'on enfonce dans le sol. L'alternative « epieux » (Hamidullah) est ecartee car un epieu est une arme de chasse ou de combat, tandis que le watad est un piquet d'ancrage — la fonction est differente. L'alternative « pieux » est ecartee pour la meme raison — le pieu est un poteau pointu enfonce dans le sol pour la defense ou le supplice, tandis que le piquet est un element de fixation plus general. Le choix de « piquets » conserve la polyvalence du mot arabe : tentes militaires, instruments de supplice, ou constructions monumentales.

§CRITIQUE§
Hamidullah traduit « ainsi qu'avec Pharaon, l'homme aux epieux ». L'ajout de « l'homme » est une glose — le texte arabe dit simplement « Pharaon aux piquets ». Le choix d'« epieux » oriente vers l'arme de combat, ce qui reduit la polyvalence du mot arabe awtad. Le texte arabe ne precise pas la fonction des piquets — ils peuvent etre des tentes, des instruments de supplice ou des constructions. Traduire par « piquets » preserve cette ouverture semantique. La difference est significative car « epieux » connote la violence directe tandis que « piquets » connote l'ancrage du pouvoir — les deux lectures sont presentes dans la tradition exegetique.`
  });

  console.log('VERSET 89:10 — TERMINE');
  console.log('  wtd (و ت د) -> "Fixation/Ancrage" -> mot francais "piquet"');
  console.log('  Pharaon = nom propre (pas de racine)');
  console.log('  Traduction : "Et Pharaon aux piquets"');
}

async function main() {
  await verse89_6();
  await verse89_7();
  await verse89_8();
  await verse89_9();
  await verse89_10();
  console.log('\n=== PARTIE 2 TERMINEE (versets 6-10) ===');
}

main().catch(console.error);
