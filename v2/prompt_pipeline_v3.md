📜 PROMPT PIPELINE MAISON — Sourate [3], verset [37]
CONTEXTE
Tu lances la pipeline maison V3 sur le verset [X:Y]. La BDD Supabase est pré-enrichie pour la sourate : toutes les racines ont ≥6 sens regroupés en 4-7 concepts avec descriptions philosophiques. Tu n'as donc plus besoin d'enrichir une racine en cours de route (cette dette a été soldée par la Phase 2 d'enrichissement préventif). Tu peux te concentrer sur le travail d'analyse et de traduction.

Inspire-toi du rendu de la sourate 1 et des V1-V36 de la sourate 3 déjà validés ★. Quand tu as fini → lance node scripts/validate-pipeline.js [verseId] et corrige tout warning.

ÉTAPE 0 — PRÉPARATION (lecture BDD)
Récupérer le verset arabe (verses.arabic_text), verses.id, verses.surah_id, verses.verse_num.
Récupérer les words (position, arabic, root, transliteration, pos_tag) du verset.
Récupérer la traduction Hamidullah (verse_analyses.full_translation) si déjà présente.
Pour CHAQUE racine non-particule du verset :
SELECT * FROM word_analyses WHERE id = ? (id obtenu via root → root_ar match)
SELECT * FROM word_meanings WHERE analysis_id = ? ORDER BY display_order
Vérification doublons : si la racine a une entrée stub (≤2 sens) ET une entrée riche (>5 sens) avec mêmes lettres permutées, utiliser l'entrée riche systématiquement.
⚠️ Anti-doublons obligatoire — chercher TOUJOURS par root_ar avant word_key :

SELECT * FROM word_analyses
WHERE root_ar = '<racine>' OR root_ar = '<racine sans espaces>'
ORDER BY (SELECT count(*) FROM word_meanings WHERE analysis_id = word_analyses.id) DESC
ÉTAPE 1 — SEGMENTATION + TAGGING (résultat LLM existant)
Récupérer les segments de l'étape 1 (verse_analyses.segments_step1) déjà produits par LLM. Si absents, les générer. Ne jamais modifier l'ordre des positions.

ÉTAPE 2 — RICHESSE DES RACINES (déjà soldée pour S3)
Pour S3, la pré-enrichissement Phase 2 a porté toutes les racines à ≥6 sens. Skip cette étape sauf si tu détectes une racine inattendue (créée tardivement) si tu skip je veux que tu me dise que toute les racine ont deja des sens dans les log. Si oui :

Consulter Lane's SQLite (lanes_data/lexicon.sqlite).
Regrouper en 4-7 concepts avec description philosophique 2-3 phrases par concept (état intérieur vs acte extérieur, directionnel, ponctuel/permanent, etc.).
Insérer dans word_meanings : description du concept sur la première sens du concept, descriptions individuelles pour les suivants.
Vérifier total_occurrences via corpus.quran.com.
ÉTAPE 3 — CHOIX DU CONCEPT RETENU (par mot important)
Réflexion interne sur les 5 axes (NON écrits)
Avant de choisir, réfléchir mentalement aux 5 axes pour CHAQUE concept non-nul :

Champ lexical du verset
Versets voisins
Thème de la sourate
Cohérence coranique globale
Finalité khalifa (vivifier la terre / établir la justice / accomplir l'adoration)
⚠️ NE JAMAIS prendre le 1er sens listé par défaut. Faire les 5 axes AVANT de décider.

Test de compatibilité grammaticale — PHILOSOPHIQUE, pas linguistique
Tester si la réalité philosophique du concept (sa description) est compatible avec la structure du mot dans le verset :

Participe passif appliqué à un objet : la réalité doit pouvoir SORTIR d'un agent et ATTEINDRE l'objet. Si l'objet ne peut pas physiquement subir l'action, le sens premier échoue → chercher le sens dérivé compatible.
Cas V36 : al-rajīm (participe passif de rjm = lapider) appliqué à un être spirituel invisible. Lapider physiquement échoue → retenir « maudire » (sens dérivé).
Verbe accompli/inaccompli : événement achevé vs en cours.
Forme IV : intègre l'idée de « faire faire / accorder ».
Idāfa (X de Y) : Y détermine X.
Test de naturalité sémantique
Le sens retenu + préposition + objet du verset doit former une expression naturelle en français (test francophone naïf).

Classification des concepts (analysis_axes.concepts)
nul — proof_ctx 1 phrase
peu_probable — proof_ctx 1-2 phrases avec distinction philosophique vs retenu
probable — proof_ctx 1-2 phrases avec distinction philosophique vs retenu
retenu — proof_ctx 4 phrases minimum avec distinction vs CHAQUE probable
⚠️ Règle proof_ctx retenu = SEUL probables (V35)
Le proof_ctx du concept retenu mentionne UNIQUEMENT les concepts probable de la même racine, chacun précédé d'un tiret « — ». Ne JAMAIS y commenter les peu_probable ni les nul (ils ont leur propre proof_ctx). Si 0 probable → pas de section « Comparaison… ».

Format de stockage
{
  "sense_chosen": "mot français choisi étape 4",
  "concept_chosen": "Nom exact du concept retenu (copié de word_meanings)",
  "concepts": {
    "Nom Concept 1": {
      "status": "retenu|probable|peu_probable|nul",
      "senses": ["sens1", "sens2", ...],
      "proof_ctx": "..."
    }
  }
}

R2bis — mise en forme du bloc Comparaison)
Le proof_ctx du concept retenu doit présenter sa section « Comparaison » avec sauts de ligne explicites pour la lisibilité UI :

[paragraphe retenu : Sens retenu + analyse + nature philosophique].
Comparaison avec les sens probables :
— NomProbable1 : [senses listés]. Sa nature est celle d'un *X philosophique*. Tandis qu'ici [contexte du verset] désigne un *Y philosophique*, [pourquoi exclu].
— NomProbable2 : [senses listés]. Sa nature est celle d'un *X philosophique*. Tandis qu'ici [contexte], [pourquoi exclu].
Détails de format obligatoires :

Double saut de ligne \n\n avant Comparaison avec les sens probables :
Double saut de ligne \n\n après le header Comparaison avec les sens probables (en gras):
Double saut de ligne \n\n entre chaque entrée — NomProbable
Nom du probable PAS en italique (juste — NomProbable :, sans *…*, nom en gras)
Italiques *…* sur les descripteurs philosophiques (ex: *processus physique graduel*, *sujet souverain*, *acte directionnel d'acceptation*)
Conjonction « Tandis qu'ici » (pas « alors qu'ici » ni « alors que ici »)
Phrase type : Sa nature est celle d'un *X*. Tandis qu'ici [verset context] [opération précise], [exclusion explicite].
Test automatique : le script _check_proof_distinctions.js peut être étendu pour vérifier qu'après Comparaison avec les sens probables : chaque — est précédé de \n\n (pas inline).
Tableau des règles implicites de mise en forme du proof_ctx :

Élément	Markdown	Rendu	Exemple
En-tête « Sens retenu »	***Sens retenu :***	bold italic	***Sens retenu :***
Header bloc Comparaison	**Comparaison avec les sens probables :**	bold	**Comparaison avec les sens probables :**
Nom du concept probable (après — )	**Nom**	bold	— **Éducation/Accompagnement** :
Descripteur philosophique	***X***	bold italic	position relationnelle permanente, processus continu d'éducation, statut permanent
Marqueur phonétique / grammatical / mention de mot	*X*	italic	-hā, son, yā, fa-, bi-, kullamā
Mention de versets / racines en clair	plain	normal	« Comme au V35-36 », « racine n-b-t »
Texte courant	plain	normal	reste du proof_ctx
Structure complète d'un proof_ctx retenu :

***Sens retenu :*** [mot français = sense_chosen], [analyse grammaticale]. Le mot est ici [forme]. [Contexte précis du verset, ancrage au V−1 / sourate]. La nature philosophique du sens retenu est celle d'une ***[descripteur philo]***.
**Comparaison avec les sens probables :**
— **NomProbable1** : [senses listés]. Sa nature est celle d'un ***[descripteur philo X]***. Tandis qu'ici [contexte], [exclusion explicite].
— **NomProbable2** : [senses listés]. Sa nature est celle d'un ***[descripteur philo Y]***. Tandis qu'ici [contexte], [exclusion explicite].
Sauts de ligne obligatoires :

\n\n avant **Comparaison avec les sens probables :**
\n\n après le header
\n\n entre chaque entrée — **NomProbable**

ÉTAPE 4 — TRADUCTION
4a. Choix du mot français — DEUX niveaux distincts
Niveau A — sense_chosen et segment.sense_retenu : OBLIGATOIREMENT un mot exact de la liste senses du concept retenu dans word_meanings. Si aucun ne colle, enrichir word_meanings AVANT.

Niveau B — translation_arab (phrase complète) : liberté de variante grammaticale ou idiomatique tant que :

Reste dans le champ sémantique du concept retenu
N'est PAS un mot d'un autre concept (sinon on confond les concepts)
Sonne naturel en français contemporain
⚠️ Triple alignement à vérifier (V23/V35) :

concept_chosen ↔ concepts.X.status='retenu'
sense_chosen ↔ existe dans senses du concept retenu
segment.fr ↔ segment.sense_retenu ↔ mot du concept retenu
Si segment.fr = "Livre" et que « livre » est dans senses → sense_retenu = "livre" (pas un sens voisin)
4b. translation_explanation — STRUCTURE 4 SECTIONS
Marqueurs OBLIGATOIRES : §DEMARCHE§, §JUSTIFICATION§, §CRITIQUE§

§DEMARCHE§ — commence DIRECTEMENT par le 1er paragraphe **phon** (fr) — explication. Plus d'intro de résumé (le résumé est dans summary_short/summary_long).

1 mot = 1 paragraphe (séparés par \n\n)
Format : **Mot phonétique** (traduction française) — analyse grammaticale en français simple
Pas de jargon : « participe passif » → « forme qui dit que la personne subit l'action »
Pas le mot « concept » (utiliser « sens »)
Pas d'arabe brut, pas d'anglais (Lane's traduit)
Aucun sens cité qui n'existe pas en word_meanings
§JUSTIFICATION§ — pour chaque mot important :

**mot français** — Le sens retenu est « ... ». Le mot est choisi car... L'alternative « ... » est écartée car...
NE PAS comparer aux autres concepts (c'est le rôle du proof_ctx)
⚠️ Une entry par occurrence — si « Dieu » apparaît 3× en segments, il faut 3 entries (ou une entry qui couvre les 3 explicitement) — pas de sous-couverture
§CRITIQUE§ — exhaustive et dans l'ordre du verset, mot par mot :

Format : **X vs « Y »** : Hamidullah rend [phon arabe] par « Y ». [étymologie/contexte]. « X » conserve [aspect] ; « Y » glisse vers [glissement].
Pas de bloc « Allah vs Dieu »
Pas de fausses critiques sur prépositions sélectionnées par le verbe (amara bi-, qaḍā ʿalā...)
Honnêteté : si Lane's donne partiellement raison à Hamidullah, le reconnaître puis montrer la nuance
Mise en forme : un point = un saut de ligne (script _format_critique_aere.js)
4c. Résumés (champs séparés verse_analyses.summary_short et summary_long)
summary_short (3-4 phrases, affiché par défaut) :

Paraphrase vulgarisée, pas un rephrase mot à mot du verset
Doit permettre la lecture isolée → citer brièvement les éléments cruciaux du contexte (ex: « faisant suite au V33 qui venait de nommer Adam, Noé… »)
Style : français courant, vulgarisé
Pas de phonétique, pas d'arabe brut
summary_long (replié, 3 blocs séparés par \n\n) :

MACRO — où ce verset s'insère dans la sourate (purement situationnel, pas d'analyse)
MICRO — relation Verset avec ses verset contextuelle proche . 
ITALIQUE — fait textuel marquant en *…*
⚠️ Mots interdits dans les 2 résumés :

❌ « rejetants » → ✅ « ceux qui ont rejeté »
❌ « mécréants », « infidèles ».
❌ « islam » au sens confessionnel → ✅ « remise de soi »
⚠️ Anti-tafsir résumés (V36) : ne JAMAIS importer dans les résumés des hypothèses tafsiriques classiques même bien connues. Si le verset NE DIT PAS « X », ne pas glisser X. Vérifier 3× les claims « première occurrence » (sourate vs Coran).

⚠️ Anti-anticipation : ne pas anticiper sur les versets non encore traités (ex: ne pas mentionner Jésus dans le résumé d'un verset sur Marie qui ne le nomme pas).

4d. Phrases du quotidien (word_daily)
Pour chaque sens retenu : 3 phrases du quotidien.

Vérifier d'abord SELECT count(*) FROM word_daily WHERE analysis_id = X → si > 0, SKIP.
Phrases permanentes par racine (jamais ré-insérées).
4e. Segments d'affichage
Format obligatoire { fr, pos, phon, arabic, word_key, is_particle, sense_retenu, position }.

Champ position OBLIGATOIRE (correspondance avec étape 1)
⚠️ Aucun segment ne doit avoir fr vide — particules incluses (donner traduction littérale ne... pas, à, vers...)
Pattern V23 (vider la particule) ABANDONNÉ
⚠️ RÈGLES TRANSVERSALES À NE JAMAIS OUBLIER
R1. Racines à dualité physique/abstrait (k-f-r, ḍ-r-b, ʿ-q-d, ḥ-k-m)
Test obligatoire : l'objet est-il caché (concept passif) ou rejeté ouvertement (concept actif) ? Pour k-f-r dans 95% des contextes coraniques → Rejet/Ingratitude, pas Couverture.

R2. Sens post-islamiques (dīn, slm, kfr, mnfq)
Toujours privilégier le sens primaire étymologique. dīn ≠ « religion », islam ≠ label confessionnel, kāfir ≠ « mécréant », munāfiq ≠ « hypocrite ».

R3. malak ≠ rasūl
mlk → « ange » (catégorie d'être)
rsl → « messager » (rôle/fonction)
Q 22:75 prouve la distinction.
R4. Allah → Dieu, ne jamais l'inverser
R5. translation_arab DOIT être en français (jamais en phonétique brute)
R6. Cohérence interne JUSTIFICATION ↔ CRITIQUE
Test 1 : la JUSTIFICATION et la CRITIQUE pour le même mot doivent se renforcer, pas se contredire.
Test 2 : l'argument de la CRITIQUE doit tenir dans le contexte précis du verset (ex: ne pas critiquer « punir » comme « trop négatif » dans un verset de châtiment).

R7. Em-dash (—) pour ḥāl arabe
Quand l'arabe a un ḥāl (état) qui crée une proximité française ambiguë, utiliser « — » à la place de la virgule (équivalent typographique du marquage casuel -an).
Ex V35 : « ce qui est dans mon ventre — consacré exclusivement »

R8. Pas d'anthropomorphisme
Si Dieu ne dit pas explicitement qu'il possède un attribut, ne pas le lui attribuer.

R9. Lecture manuelle indispensable
Les scripts d'audit (validate-pipeline.js, _check_no_empty_fr.js, etc.) ont des angles morts. APRÈS automation, relire MANUELLEMENT chaque proof_ctx, chaque §DEMARCHE§ paragraphe, chaque §JUSTIFICATION§. Détecter :

Leaks « pos=N », « concept(s) au pluriel »
Claims devenus obsolètes après enrichissement
Parenthèses vides « () »
Phonétique italique sur noms propres déjà traduits (« Maryam » → « Marie »)
Sections « Comparaison avec les sens probables » parasites quand 0 probable
R10. Incohérence option A délibérée
Pour une même racine, on PEUT utiliser deux mots français différents selon le contexte (ex: anth = « fille » humain spécifique vs « femelle » biologique générique). Cette incohérence doit être explicitée dans la JUSTIFICATION.

R11. Pas de jargon technique linguistique visible
❌	✅
copule	verbe « être »
participe actif	celui qui fait l'action
participe passif	celui qui subit l'action
idāfa	structure « X de Y »
accusatif/nominatif	(à éviter, expliquer en clair)
schème	forme du mot
✅ CHECKLIST FINALE OBLIGATOIRE (avant validation)
Données BDD

Toutes les racines lues depuis BDD (pas de mémoire)

Doublons-stubs : utilisé l'entrée riche (>5 sens)

concept_chosen copié-collé exactement de word_meanings
Triple alignement

sense_chosen existe dans senses du concept retenu

segment.sense_retenu existe dans senses du concept retenu

segment.fr ↔ sense_retenu cohérents (pas de mot d'un autre concept)

Concat des segments[].fr ↔ translation_arab (mot pour mot)
Segments

Aucun segment.fr vide (particules incluses)

Champ position présent partout

Si Hamidullah utilise « Allah », notre titre §CRITIQUE§ utilise « Dieu »
Proof_ctx

Retenu : 4 phrases min, distinction vs CHAQUE probable, tiret « — » devant chaque nom

Retenu ne mentionne QUE les probable (jamais peu_probable/nul)

0 probable → pas de section « Comparaison »

Pas de leak « pos=N », « concept au pluriel »

Pas d'anglais
§DEMARCHE§

Commence directement par **phon** (fr) — (pas d'intro résumé)

1 mot par paragraphe

Chaque mot phon suivi de (fr) entre parenthèses

Aucun sens cité absent de word_meanings

Pas le mot « concept » (utiliser « sens »)

Pas de jargon linguistique non expliqué
§JUSTIFICATION§

Une entry par occurrence (pas de sous-couverture)

Format **fr** — Le sens retenu est « ... »

Pas de comparaison avec autres concepts (rôle du proof_ctx)
§CRITIQUE§

Ordre des mots du verset (gauche→droite)

Aucune fausse critique sur préposition sélectionnée

Pas de bloc Allah/Dieu

Honnêteté intellectuelle (reconnaître si Lane's donne partiellement raison)

Cohérence avec JUSTIFICATION et contexte du verset

Mise en forme aérée (un point = un saut de ligne)
§FINALITE§

1-2 phrases STRICT

Honnêteté absolue : si rien à dire → le dire explicitement

Pas de jargon religieux

Pas de « Ce verset… » au début
Résumés

summary_short : paraphrase vulgarisée, lecture isolée possible

summary_long : 3 blocs MACRO/MICRO/ITALIQUE, pas de redits

Aucun mot interdit (rejetants, mécréants, infidèles, hypocrites, islam)

Pas de tafsir importé, pas d'anticipation sur versets non traités

Claims « première occurrence » vérifiés 3× (sourate vs Coran)
Test final francophone naïf

Lire translation_arab à voix haute sans contexte

Niveau 1 LEXICAL : chaque mot univoque sans contexte ?

Niveau 2 GRAMMATICAL : « après que » + passé composé, etc.

Niveau 3 FLUIDITÉ : pas de subordonnées enchâssées
word_daily

3 phrases par sens retenu, OU SKIP si déjà présent
Test final

node scripts/validate-pipeline.js [verseId] → 0 erreur

node scripts/_check_no_empty_fr.js [verseId] → 0 segment vide

node scripts/_format_critique_aere.js [verseId] → §CRITIQUE§ aérée

Si modification de translation_arab après coup → propagation auto à §DEMARCHE§ / §JUSTIFICATION§ / §CRITIQUE§ / §FINALITE§ / proof_ctx
LOGS À PRODUIRE
[RACINE] XX sens disponibles → Y concepts
  Concept 1 (N sens) → NUL : "1 phrase"
  Concept 2 (N sens) → PROBABLE : "1-2 phrases + distinction philosophique"
  Concept 3 (N sens) → RETENU : "4 phrases + distinctions vs probables"
VERSET X:Y — TERMINÉ
  mot1 (racine) → sens "Concept" → fr "mot français"
  mot2 (racine) → sens "Concept" → fr "mot français"
  Traduction : "..."
  validate-pipeline : 0 erreur