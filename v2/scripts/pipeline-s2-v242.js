const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 242
// verse_id=249, analysis_id=607
// "kadhalika yubayyinu Allahu lakum ayatihi
//  la'allakum ta'qiluna"
// =====================================================

const verseData = {
  242: {
    verse_id: 249,
    analysis_id: 607,
    translation_arab: "C'est ainsi qu'Allah vous clarifie Ses signes afin que vous raisonniez.",
    full_translation: "C'est ainsi qu'Allah vous explique Ses versets afin que vous raisonniez.",
    translation_explanation: `§DEMARCHE§
Le verset 242 est une formule de cloture qui conclut la longue section juridique sur le mariage, le divorce et ses suites (versets 221-241). Ce type de verset de transition — appele parfois "verset cle" ou "verset charniere" — joue un role structurel dans al-Baqarah : il scelle une section et annonce un changement de registre. La formule « kadhalika yubayyinu Allahu lakum ayatihi la'allakum ta'qiluna » (C'est ainsi qu'Allah vous clarifie Ses signes afin que vous raisonniez) est une formule doxologique qui attribue la clarte de la legislation a Dieu lui-meme et invite les humains a activer leur raison.

Le mot **yubayyinu** est un inaccompli 3MS de la racine b-y-n (Form II, bayyina). Le Lane's donne pour b-y-n (Form I) : etre clair, etre distinct, se separer. La Form II (bayyina) est intensive : rendre pleinement clair, clarifier, expliciter, distinguer ce qui etait confus. Yubayyinu Allahu = Allah clarifie/explicite — le sujet de la clarte est Dieu lui-meme, qui agit activement pour rendre Ses signes intelligibles.

Le mot **ayatihi** est un pluriel de la racine '-y-y (ou '-y-n selon certaines analyses). Le Lane's donne pour aya : signe, indice, preuve, miracle, verset coranique. Ayat = les signes/versets — a la fois les versets coraniques et plus largement les signes divins dans le monde et dans la revelation. Le suffixe « hi » (ses) renvoie a Allah : ce sont les signes de Dieu.

Le mot **ta'qiluna** est un inaccompli 2MP de la racine '-q-l. Le Lane's donne : raisonner, lier, attacher. L'origine du terme : 'aqal = la raison, etymologiquement ce qui lie et retient l'homme de la deraison (comme une entrave retient un chameau). Ta'qiluna = que vous raisonniez, que vous activiez votre raison. La particule « la'alla » exprime le but et l'esperance : « afin que vous raisonniez » — le but de la clarification divine est d'activer la raison humaine.

§JUSTIFICATION§
**C'est ainsi** — kadhalika. Le demonstratif kadhalika (ainsi, de cette maniere) resume et pointe vers ce qui vient d'etre enonce : toute la legislation matrimoniale des versets 221-241. « C'est ainsi » = de la maniere dont ces lois ont ete exposees, avec cette clarte et cette precision.

**qu'Allah vous clarifie Ses signes** — yubayyinu Allahu lakum ayatihi. Le verbe bayyina (Form II de b-y-n) est plus fort qu'« expliquer » : il signifie rendre pleinement evident, clarifier de sorte qu'aucune ambiguite ne subsiste. Allah est le sujet actif — c'est Lui qui clarifie, les humains sont les destinataires (lakum = pour vous). Les ayat (signes/versets) sont l'objet : ce sont les dispositions juridiques qui viennent d'etre enoncees.

**afin que vous raisonniez** — la'allakum ta'qiluna. La particule la'alla exprime le but espere : la clarification divine vise a activer la raison humaine. Ta'qiluna (vous raisonnez) implique un effort actif — non pas seulement entendre ou lire, mais saisir intellectuellement et appliquer. La raison ('aql) est ici l'instrument qui relie la revelation divine a l'action humaine.

§CRITIQUE§
Hamidullah traduit « yubayyinu » par « explique ». Le verbe bayyina (Form II de b-y-n) est plus fort qu'« expliquer » — il signifie rendre pleinement clair, clarifier de maniere intensive et exhaustive. Bayyina implique une clarte parfaite, sans reste d'ambiguite. « Clarifie » ou « rend manifeste » rendrait mieux la force de la Form II intensive que le verbe ordinaire « explique ».

Hamidullah traduit « ayatihi » par « Ses versets ». Le mot aya designe a la fois le verset coranique et le signe divin (dans la creation, dans l'histoire, dans la revelation). Dans ce contexte de cloture d'une section juridique, « ayatihi » designe les dispositions juridiques qui viennent d'etre enoncees — des versets concrets. Mais le sens plus large de « signes » est aussi present. La traduction « versets » est correcte et contextuellement precise, mais peut restreindre le sens.

La formule ta'qiluna (que vous raisonniez) dans ce verset est significative : la legislation divine n'est pas donnee pour etre suivie aveuglément mais pour etre comprise et integrée par la raison. L'islam encourage l'usage de la raison ('aql) pour comprendre les lois divines — la revelation et la raison sont complementaires, non opposees. Ce verset est l'un des nombreux exemples coraniques d'invitation explicite a raisonner.`,
    segments: [
      { fr: "C'est ainsi", is_particle: true, phon: "kadhalika", arabic: "كَذَٰلِكَ", position: 1 },
      { fr: "il clarifie", pos: "verbe", phon: "yubayyinu", arabic: "يُبَيِّنُ", word_key: "byn", is_particle: false, sense_retenu: "clarte/distinction", position: 2 },
      { fr: "Allah", is_particle: true, phon: "Allahu", arabic: "ٱللَّهُ", position: 3 },
      { fr: "pour vous", is_particle: true, phon: "lakum", arabic: "لَكُمْ", position: 4 },
      { fr: "Ses signes", pos: "nom", phon: "'ayatihi", arabic: "ءَايَـٰتِهِۦ", word_key: "ayy", is_particle: false, sense_retenu: "signe/indice", position: 6 },
      { fr: "afin que vous", is_particle: true, phon: "la'allakum", arabic: "لَعَلَّكُمْ", position: 7 },
      { fr: "raisonniez", pos: "verbe", phon: "ta'qiluna", arabic: "تَعْقِلُونَ", word_key: "eql", is_particle: false, sense_retenu: "raison/lien", position: 8 }
    ],
    vwa: [
      {
        word_key: "byn",
        position: 2,
        sense_chosen: "clarte/distinction",
        analysis_axes: {
          sense_chosen: "clarte/distinction",
          concept_chosen: "Clarté/Distinction",
          concepts: {
            "Clarté/Distinction": {
              status: "retenu",
              senses: ["clarifier", "rendre evident", "distinguer", "expliciter", "separer ce qui est confus", "rendre manifeste"],
              proof_ctx: "Yubayyinu est un inaccompli 3MS de la racine b-y-n en Form II (bayyina). Le Lane's donne pour b-y-n (Form I) : etre clair, etre distinct, se separer. La Form II bayyina est intensive : rendre pleinement clair, clarifier, expliciter de maniere exhaustive. Le sujet est Allah — c'est Dieu qui agit pour rendre Ses signes intelligibles. La Form II intensive souligne que la clarte est totale, parfaite.",
              axe1_verset: "Yubayyinu dans ce verset de cloture a une double portee : il resume la section juridique 221-241 (c'est ainsi qu'Allah a clarifie Ses lois) et il annonce le modus operandi de la revelation divine (Allah clarifie Ses signes pour activer la raison humaine). Le verbe au present (inaccompli) indique une action continue — Allah clarifie en permanence, pas seulement dans ce passage.",
              axe2_voisins: "La racine b-y-n apparait plusieurs fois dans al-Baqarah, notamment au verset 230 (yubayyinuha li qawmin ya'lamuna = Il les clarifie pour un peuple qui sait). Le verset 242 reprend la meme racine en version generale : ce n'est plus la clarification des hudud (limites) mais de toutes les ayat (signes). La repetition de b-y-n cree une coherence thematique dans la section.",
              axe3_sourate: "Al-Baqarah est la sourate de la legislation — elle contient la plus grande concentration de droit islamique du Coran. La formule recurrente yubayyinu Allahu ayatihi (Allah clarifie Ses signes) sert de cloture aux grandes sections juridiques. Elle attribue la paternite des lois a Dieu et invite les humains a les comprendre par la raison.",
              axe4_coherence: "La racine b-y-n apparait environ 170 fois dans le Coran. La clarte (bayan) est l'un des attributs fondamentaux de la revelation divine — le Coran est un « bayan li n-nas » (une clarification pour les gens, sourate 3:138). La Form II bayyina est la forme causative/intensive : Allah ne se contente pas d'etre clair, Il rend clair activement.",
              axe5_frequence: "Pour les commentateurs, yubayyinu Allahu est une affirmation de la pedagogie divine : Dieu ne legifere pas de maniere obscure ou arbitraire. Il clarifie Ses lois avec precision et completude. La Form II intensive confirme que cette clarte est intentionnelle et exhaustive — aucune ambiguite n'est laissee par negligence."
            }
          }
        }
      },
      {
        word_key: "ayy",
        position: 6,
        sense_chosen: "signe/indice",
        analysis_axes: {
          sense_chosen: "signe/indice",
          concept_chosen: "Signe/Indice",
          concepts: {
            "Signe/Indice": {
              status: "retenu",
              senses: ["signe", "indice", "preuve", "miracle", "verset coranique", "signe divin"],
              proof_ctx: "Ayatihi est un pluriel de ayat de la racine '-y-y (certains donnent '-y-n). Le Lane's donne : signe, indice, preuve, miracle, verset du Coran. Ayat designe a la fois les versets coraniques (unites textuelles de la revelation) et les signes divins en general (dans la creation, l'histoire, la revelation). Le suffixe hi renvoie a Allah : Ses signes, Ses ayat.",
              axe1_verset: "Ayatihi dans ce verset de cloture designe en premier lieu les dispositions juridiques qui viennent d'etre enoncees (les ayat matrimoniales des versets 221-241). Mais le terme ayat a une portee plus large — c'est l'ensemble des signes divins que la revelation transmet. Le verset 242 lie ainsi la legislation concrete (les lois du divorce) aux signes divins universels.",
              axe2_voisins: "Le verset 230 concluait en disant « yubayyinuha li qawmin ya'lamuna » (Il les clarifie pour ceux qui savent) — « ha » renvoyait aux hudud (limites). Le verset 242 elargit : non plus « les limites » mais « Ses ayat » (Ses signes) — c'est l'ensemble de la revelation, pas seulement les regles juridiques d'un passage specifique.",
              axe3_sourate: "Al-Baqarah contient de nombreuses occurrences de ayat, aussi bien dans le sens de « versets coraniques » que de « signes divins » (naturels, historiques, legislatifs). La section 2:221-241 contient elle-meme des ayat juridiques — des signes divins sous forme de lois. Le verset 242 fait la jonction entre les deux sens.",
              axe4_coherence: "La racine '-y-y (aya) apparait environ 382 fois dans le Coran — c'est l'un des mots les plus frequents. Son sens couvre un spectre large : des signes naturels (le soleil, la lune) aux miracles prophetiques, aux versets scripturaires. En contexte de cloture de section, ayatihi designe specifiquement les versets qui viennent d'etre enonces.",
              axe5_frequence: "Pour les commentateurs, l'emploi d'ayat (plutot que ahkam = regles, ou hudud = limites) pour designer les lois coranique est significatif : les lois divines ne sont pas de simples reglements mais des signes (ayat) qui pointent vers la sagesse divine. Chaque loi est un signe — elle a une dimension transcendante qui depasse sa fonction reglementaire immediate."
            }
          }
        }
      },
      {
        word_key: "eql",
        position: 8,
        sense_chosen: "raison/lien",
        analysis_axes: {
          sense_chosen: "raison/lien",
          concept_chosen: "Raison/Lien",
          concepts: {
            "Raison/Lien": {
              status: "retenu",
              senses: ["raisonner", "lier", "attacher", "la raison qui retient", "comprendre", "exercer l'intellect"],
              proof_ctx: "Ta'qiluna est un inaccompli 2MP de la racine '-q-l. Le Lane's donne : lier, attacher (sens premier) ; puis raisonner, comprendre (sens derive). L'aqal (raison) est etymologiquement ce qui lie et retient l'homme — comme une entrave retient un chameau de s'errer. La raison est le lien interieur qui ordonne l'esprit et retient l'homme de la deraison et du desordre.",
              axe1_verset: "Ta'qiluna est le mot final du verset et de la section matrimoniale 221-241. Sa position finale est rhetoriquement forte — c'est le but ultime de toute la clarification juridique precedente : activer la raison humaine. La particule la'alla (afin que) exprime le but espere par Dieu : la revelation des lois vise a faire raisonner les humains, pas seulement a les faire obeir mecaniquement.",
              axe2_voisins: "La section matrimoniale 221-241 contient plusieurs invitations a la raison : « li qawmin ya'lamuna » (pour ceux qui savent, v.230), « la'allakum tatadhakkarun » (afin que vous vous souveniez, v.221), et maintenant « la'allakum ta'qiluna » (afin que vous raisonniez, v.242). La progression montre que comprendre les lois divines requiert memoire, savoir et raison.",
              axe3_sourate: "Al-Baqarah contient de nombreuses invitations a raisonner (ta'qiluna, tatafakkarun, yatadabbarun). Ces appels a l'intellect sont caracteristiques du style coranien : la revelation ne s'adresse pas a une obeissance aveugle mais a une comprehension raisonnee. La raison ('aql) est le partenaire de la revelation dans la construction de la conduite humaine.",
              axe4_coherence: "La racine '-q-l apparait environ 49 fois dans le Coran, toujours au present ou futur (jamais comme nom abstrait directement — le Coran dit ta'qiluna, ya'qiluna mais jamais al-'aql seul). Cette observation des grammairiens est significative : la raison dans le Coran est une action, un processus actif — non une faculte statique. Raisonner est un verbe, pas un etat.",
              axe5_frequence: "Pour les theologiens et philosophes musulmans, ce verset (et ses paralleles) est une des bases coraniques de la valorisation de la raison en islam. La raison ('aql) n'est pas opposee a la revelation (wahy) mais en est le complement naturel. Allah clarifie (yubayyinu) Ses signes pour que les humains raisonnent (ya'qiluna) — la revelation active la raison, et la raison saisit la revelation. C'est la synthese epistemologique de l'islam."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[242];
  const {error:veErr} = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V242)');
  for (const word of data.vwa) {
    const {error:vwaErr} = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V242 TERMINE');
}
main().catch(console.error);
