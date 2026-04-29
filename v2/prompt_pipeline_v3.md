En prenant les donnée de la BDD (concepte,racine,caracteristique,etc) Lance la pipeline maison sur la sourate [X] et avant de finir relis bien a la fin si tu a bien respecté toutes les regles c'est important, tu peux t'inspirer de la sourate 1 qui a été bien faite par tes ancien toi . quand tu fini lance la pipeline de validation

## RÈGLE PRIORITAIRE — VÉRIFICATION DE RICHESSE DES RACINES
Avant l'étape 3, vérifier CHAQUE racine importante du verset :
1. Compter le nombre de **sens** en BDD (`word_meanings`)
2. Une racine est **suspecte** si elle a **moins de 5 sens** au total
3. Si suspecte → consulter le Lane's SQLite pour vérifier. Si le Lane's donne plus de sens → **REFAIRE l'étape 2** complète (regrouper en 4-7 concepts, etc.). Si le Lane's confirme que la racine n'a que peu de sens (racine très simple/rare) → OK, passer.
4. Si 5 sens ou plus → SKIP l'étape 2

**Pourquoi** : L'étape 2 originale a été faite par GPT-4.1-mini avec un tagging rapide. 2315 racines sur 2355 n'ont que 2-3 sens devinés sans consultation du Lane's. Il faut compléter au fil de l'eau.

## ÉTAPE 2 — Si une racine est suspecte ou n'existe pas en base
Avant de commencer l'étape 3, vérifier que TOUTES les racines des mots importants du verset existent dans `word_analyses` et ont des concepts SUFFISAMMENT RICHES dans `word_meanings`. Si une racine est suspecte (critères ci-dessus) ou n'existe pas :

1. **Créer l'entrée** dans `word_analyses` (word_key, root_ar, root_transliteration)
2. **Consulter le Lane's SQLite** (`lanes_data/lexicon.sqlite`) — chercher la racine dans les tables `entry` ou `root`. Extraire TOUS les sens attestés, y compris les sens physiques obscurs.
3. **Regrouper en 4-7 concepts** : chaque concept a un nom (ex: "Frappe/Coup") et regroupe les sens qui partagent la même nature philosophique.
4. **Description philosophique par CONCEPT** : chaque concept porte une description riche de 2-3 phrases qui répond à : est-ce un état intérieur ou un acte extérieur ? Directionnel ou non ? Ponctuel ou permanent ? Émotion ou jugement rationnel ? Ça sort de qui et ça atteint qui ? Les autres sens du même concept ont juste une courte précision.
5. **Insérer dans `word_meanings`** : chaque sens avec son concept, sa description, meaning_type='etymology', display_order.
6. **Vérifier les occurrences** : immédiatement après la création, vérifier `total_occurrences` via corpus.quran.com. Ne JAMAIS laisser à 0.
7. **Pas de biais religieux** : sens étymologiques purs. Pas d'anthropomorphisme.

Ceci est OBLIGATOIRE avant de passer à l'étape 3 pour cette racine.

## ÉTAPE 3 — Choix du concept retenu (V3 — réflexion interne)

Pour CHAQUE mot important du verset, analyser les CONCEPTS de sa racine (pas les sens individuels) :

### Classification des concepts
- **nul** : concept hors sujet — proof_ctx court (1 phrase)
- **peu_probable** : concept possible mais inadapté — proof_ctx 1-2 phrases avec distinction philosophique vs le retenu
- **probable** : concept cohérent mais moins précis — proof_ctx 1-2 phrases avec distinction philosophique vs le retenu
- **retenu** : le seul meilleur concept — proof_ctx 1-2 phrases avec distinction philosophique vs CHAQUE concept probable

### Les 5 axes — RÉFLEXION INTERNE (pas écrits)
Claude réfléchit à ces 5 axes dans sa tête AVANT de choisir le concept retenu, mais ne les écrit PAS dans les données :
1. **Champ lexical du verset** : ce concept est-il en accord avec les autres mots du verset ?
2. **Contexte des versets voisins** : ce concept correspond-il au sujet du passage ?
3. **Thème de la sourate** : ce concept s'inscrit-il dans le thème général ?
4. **Cohérence coranique** : ce concept contredit-il un autre verset du Coran ?
5. **Finalité du khalifa** : ce concept contribue-t-il à la mission de l'être humain de justice et de civilisation et empêcher la corruption ? Analyser le concept TEL QU'IL EST UTILISÉ DANS LE VERSET (avec la structure grammaticale), pas isolé.

La réflexion sur ces 5 axes est OBLIGATOIRE mais le résultat est synthétisé en 1-2 phrases dans le proof_ctx — pas de rédaction détaillée axe par axe.

### Ordre de réflexion (OBLIGATOIRE)
1. D'abord réfléchir aux 5 axes pour TOUS les concepts non-nul (en interne)
2. PUIS vérifier la compatibilité grammaticale
3. PUIS choisir le concept retenu
NE JAMAIS décider avant d'avoir terminé la réflexion complète.

### Test de compatibilité grammaticale — PHILOSOPHIQUE, pas linguistique
Le test porte sur la NATURE PHILOSOPHIQUE du concept (sa description), PAS sur la forme des mots qui le composent.
Question : **la réalité philosophique de ce concept est-elle compatible avec la structure grammaticale du mot dans le verset ?**
- **Participe passif** : est-ce que cette réalité SORT de celui qui l'émet et ATTEINT celui qui la reçoit ? Un état intérieur (émotion) reste chez celui qui le ressent → pas compatible. Un acte dirigé vers l'extérieur (jugement, décision) atteint l'autre → compatible.
- **Participe actif** : est-ce une action que la personne FAIT activement et en continu, ou un état passif ?
- **Verbe accompli** : est-ce que ça peut avoir eu lieu comme événement achevé ?
- **Verbe inaccompli** : est-ce que ça peut être en cours ou habituel ?
- **Nom défini (al-)** : est-ce que ça peut être identifié comme une réalité connue ?
- **Nom en idafa** : est-ce que ça peut être rattaché au mot suivant ?
- **Forme IV** : est-ce que ça intègre l'idée de "accorder/faire faire" ?
Un concept dont la nature philosophique n'est pas compatible avec la structure grammaticale ne peut PAS être retenu, même s'il est le meilleur sur les 5 axes.

### Test de naturalité sémantique (préposition + objet)
Quand le mot analysé est utilisé avec une préposition et un objet précis dans le verset, le sens retenu DOIT former une expression naturelle en français avec cet objet. Ne pas choisir un sens uniquement parce qu'il est le plus physique/premier — vérifier qu'il fonctionne dans la phrase complète du verset.
Exemple : racine a-m-n, forme IV + bi (à/envers) + al-ghayb (l'invisible) :
- "accorder la sécurité à l'invisible" ❌ — l'invisible n'a pas besoin de sécurité, la phrase est absurde
- "accorder confiance à l'invisible" ✅ — expression naturelle et courante

### Règles de rédaction du proof_ctx
- Pas d'arabe — uniquement français et phonétique.
- Pas de répétition.
- Pas d'interprétation — décrire ce que la grammaire et les mots disent, point.
- Pas de jargon technique ("pipeline", "concept", etc.). Dire "sens" au lieu de "concept".
- Mots non analysés : si on fait référence à un mot d'une autre racine, on ne se prononce PAS sur son sens sauf s'il a déjà été analysé. On cite le Lane's sans affirmer.
- Quand le test grammatical élimine un concept, expliquer la réalité philosophique qui le rend incompatible.
- Pas d'anthropomorphisme : si Dieu ne dit pas explicitement qu'il possède un attribut, on ne le lui attribue pas.
- **Pas d'anglais** : les citations du Lane's doivent être traduites en français. Le Lane's est en anglais mais le lecteur ne parle pas anglais. Traduire systématiquement.

### Stockage (V3 — format simplifié)
Stocker dans `verse_word_analyses.analysis_axes` avec le format :
```json
{
  "sense_chosen": "le_mot_français_choisi_étape_4",
  "concept_chosen": "Nom du concept retenu",
  "concepts": {
    "Nom/Identification": {
      "status": "retenu",
      "senses": ["nom", "nommer", "renommée", "prononcer le nom de Dieu", "..."],
      "proof_ctx": "1-2 phrases de justification synthétique"
    },
    "Hauteur/Élévation": {
      "status": "nul",
      "senses": ["être haut", "noble", "aspirer", "..."],
      "proof_ctx": "1 phrase courte"
    }
  }
}
```
**PAS de champs axe1_verset...axe5_frequence** — la réflexion sur les axes est interne, seul le proof_ctx est écrit.

## ÉTAPE 4 — Traduction

### 4a. Choix du mot français — Deux étapes distinctes

#### Étape 3 (déjà faite) — choix du SENS retenu
Le sens retenu (`sense_chosen` de la VWA, et `sense_retenu` du segment affiché sous la phonétique) est **obligatoirement un des sens listés dans le concept** (dans `word_meanings`). Pas de mot inventé ici. Si aucun sens dans la liste ne correspond bien, c'est qu'il faut enrichir `word_meanings` avant.

Exemple : pour bi-l-kufri en V80, le sens retenu est « dissimuler » → ce mot DOIT exister dans les sens du concept `Couverture/Dissimulation`. Si initialement il n'y était pas, on l'a ajouté à `word_meanings`.

#### Étape 4 — choix du MOT dans la traduction (translation_arab)
Une fois le sens retenu, à l'étape 4 (rédaction de la phrase complète française), tu as la liberté de choisir un mot ou une tournure **qui n'est pas forcément dans la liste des sens**, tant qu'il **se rapproche le plus du sens retenu** et **sonne naturel en français**.

Cette liberté concerne UNIQUEMENT la phrase de traduction (`translation_arab`) — pas le mot affiché sous la phonétique (qui reste le sens retenu).

Exemple :
- Sens retenu (étape 3) : « dissimuler » (du concept Couverture/Dissimulation)
- Mot sous phonétique (étape 3-4) : « dissimuler » ← exactement le sens retenu
- Phrase de traduction (étape 4) : « vous ordonnerait-il **la dissimulation** [de la vérité] » ← variante nominale du verbe, libre choix
- Ou autre exemple : si sens retenu = « ordonner », phrase peut écrire « il ne va pas vous **commander** » (synonyme proche, plus naturel dans le contexte) — tant que c'est fidèle.

**Critères pour la phrase de traduction** :
1. Le mot doit rester dans le champ sémantique du sens retenu (synonyme proche, variante grammaticale, reformulation idiomatique). Pas de glissement vers un autre concept ou une autre racine.
2. **Le mot choisi NE DOIT PAS être l'un des sens des AUTRES concepts** (ceux qui ne sont pas retenus pour ce mot). S'applique à la fois au segment sous phonétique ET à la phrase de traduction. Sinon on confond les concepts entre eux dans l'esprit du lecteur.

#### Critères généraux pour le choix
1. S'aligner avec la description philosophique du concept retenu
2. Être compatible avec la structure grammaticale du mot dans le verset
3. **Sonner naturel en français contemporain** — pas de calque bizarre, pas de tournure forcée. Tester : « est-ce que ça se dit naturellement en français ? » (Ex : préférer « la dissimulation [de la vérité] » à « la couverture [de la vérité] » qui sonne forcé.)
4. Ne pas être du vocabulaire religieux chrétien ("grâce" → "bienfait"), pas de vocabulaire lié aux exégèses.
5. Pas le droit de choisir un mot qui est exactement un mot d'un des sens des autres concepts.

### 4b. Traduction
1. **Français courant** : vocabulaire du quotidien. Pas de registre littéraire. Allah → "Dieu".
2. **Démarche explicative — STRUCTURE OBLIGATOIRE en 4 sections** :
   Le champ `translation_explanation` doit TOUJOURS contenir QUATRE sections séparées par les marqueurs §DEMARCHE§, §JUSTIFICATION§, §CRITIQUE§ et §FINALITE§ :

   **§DEMARCHE§** — Explication pédagogique de la grammaire arabe en français simple.
   - **Phrase d'introduction obligatoire** : la §DEMARCHE§ DOIT commencer par 1-2 phrases qui résument le sens du verset et font le lien avec le(s) verset(s) précédent(s). Ex: "Le verset continue la description des muttaqīn commencée au verset 3." ou "Ce verset est une invocation prononcée par ceux qui sont « enracinés dans le savoir » (verset 7)."
   Pour chaque mot important du verset :
   - **Format obligatoire** : chaque mot phonétique DOIT être suivi de sa traduction française entre parenthèses. Ex: **Muḥkamātun** (fermement établis) est un participe passif... — JAMAIS de mot phonétique sans sa traduction française.
   - Nommer la forme grammaticale et l'expliquer entre parenthèses (ex: "un participe actif, une forme qui dit que la personne FAIT l'action activement")
   - Expliquer ce que cette forme implique pour le sens
   - Citer les sources étymologiques (Lane's Lexicon) si pertinent
   - Ne JAMAIS citer dans la démarche un sens qui n'est pas dans nos données BDD (word_meanings). Si un sens pertinent manque → d'abord l'ajouter via l'étape 2.
   - Expliquer les constructions arabes (idafa, taqdim, phrase nominale, etc.) comme si on parlait à quelqu'un qui découvre l'arabe
   - Montrer les nuances entre les versets (changements de temps, de personne, de forme)
   - Pas d'interprétation. Si le texte ne précise pas quelque chose, dire "le texte ne précise pas"

   **§JUSTIFICATION§** — Pour chaque mot important traduit :
   - Nommer le sens retenu entre guillemets
   - Expliquer pourquoi CE mot français précis a été choisi
   - Lister les alternatives écartées avec la raison pour chacune
   - Ne PAS comparer avec les autres sens/concepts (ça c'est le travail du proof_ctx)
   - Exemple : **louange** — Le sens retenu est « Louange/Éloge ». Le mot « louange » est choisi car... L'alternative « éloge » est écartée car...

   **§CRITIQUE§** — Critique des traductions classiques **EXHAUSTIVE et DANS L'ORDRE DU VERSET**. Couvrir **toutes les divergences substantielles** mot-à-mot avec Hamidullah (`full_translation`), de gauche à droite du verset. Une divergence est substantielle quand elle change la nuance sémantique, l'aspect verbal, l'image, l'agentivité ou la structure. Sont exclues : ponctuation pure, articles définis sans impact, conjonctions équivalentes.

   - **Ordre obligatoire** : suivre l'ordre des mots du verset arabe — pas d'ordre thématique.
   - **PAS de bloc dédié à « Allah vs Dieu »** : ce choix systématique (Allah → Dieu) est documenté ailleurs, ne pas le critiquer dans chaque verset, c'est répétitif. Si Hamidullah utilise « Allah » dans son texte, mentionner « Dieu » dans le titre du bloc critique pour ne pas évoquer la distinction.
   - **PAS de fausses critiques sur la grammaire** : certains verbes arabes prennent leurs objets via une préposition fixe (`amara bi-`, `qaḍā ʿalā`, `ḥakama bi-`, etc.). Cette préposition est **partie intégrante du verbe** — pas un marqueur d'instrument, de moyen ou de lieu. Ne JAMAIS l'analyser comme « instrumental » alors qu'elle est juste « la préposition que ce verbe sélectionne ». Tester : si l'argument repose sur « la préposition X marque tel sens » alors que le verbe arabe sélectionne cette préposition par convention, l'argument est faux et à supprimer.
   - Format standard : `**X vs « Y »** : Hamidullah rend [mot arabe] par « Y ». [Étymologie/contexte de la racine]. « X » conserve [aspect préservé] ; « Y » glisse vers [glissement].`
   - Citer le mot et sa traduction courante vs la nôtre
   - Expliquer en quoi ça change le sens du verset (pas juste du mot)
   - Identifier la source du biais (exégèse, contexte historique, vocabulaire chrétien, ajout invisible)
   - Montrer pourquoi l'étymologie pure donne un résultat différent
   - **Précision et honnêteté** : ne JAMAIS simplifier à l'excès pour défendre notre traduction. Si Lane's donne des sens qui incluent partiellement ce que la traduction courante dit, le reconnaître honnêtement, puis montrer où est la vraie nuance. La critique doit être intellectuellement honnête pour être crédible — sinon on fait la même chose que les exégètes qu'on critique.

   **§FINALITE§** — 1-2 phrases maximum qui répondent à : « En quoi ce verset aide-t-il l'humain à réaliser sa mission de khalifa — c'est-à-dire vivifier la terre, établir la justice, et accomplir son adoration (qui est la finalité de l'être humain) ? »
   - **1-2 phrases STRICT**, pas plus.
   - **Honnêteté absolue** : si le verset n'apporte pas de contenu identifiable sur la mission khalifa (ex: lettres mystérieuses, narration historique sans implication directe, miracle propre à un prophète), DIRE EXPLICITEMENT « Ce verset n'apporte pas de contenu identifiable sur la mission de khalifa de l'humain. Il [contextualise/raconte/etc.] sans porter d'enseignement direct sur la justice, la vivification de la terre ou l'adoration. » NE JAMAIS forcer un lien artificiel.
   - **Pas de jargon religieux** : pas de "tawhid", "iman", "hidayah". Parler naturellement.
   - **Style** : phrase fluide, légèrement contemplative, en français standard. Italique sera appliqué côté UI.
   - **Pas de titre, pas de balise, pas de "Ce verset..."** — juste la phrase.
   - **Référents**: les trois axes-clés de la mission khalifa sont **(1) vivifier la terre, (2) établir la justice, (3) accomplir l'adoration**. Évoquer un ou plusieurs de ces axes selon ce qui est pertinent au verset, ne pas les forcer tous.

3. **Pas de mot "concept"** : ne JAMAIS utiliser le mot "concept" dans la démarche ni la justification. Toujours dire "sens". Le mot "concept" est notre méthode interne, l'utilisateur ne doit jamais le voir.
4. **3 phrases du quotidien** pour chaque sens retenu uniquement. **SKIP si des phrases existent déjà** pour cette racine dans `word_daily` : vérifier `SELECT count(*) FROM word_daily WHERE analysis_id = X`. Si count > 0 → ne PAS en ajouter. Les phrases sont permanentes par racine comme les sens.
5. **Segments d'affichage** : créer les segments avec le format { fr, pos, phon, arabic, word_key, is_particle, sense_retenu, **position** }. Le champ position est OBLIGATOIRE — il correspond à la position du mot dans les segments de l'étape 1.

### 4c. Stockage
- `verse_analyses` : translation_arab, translation_explanation, segments, **full_translation** (traduction classique Hamidullah pour comparaison dans l'UI)
- `word_daily` : analysis_id, sense, arabic, phon, french

## RÈGLE CRITIQUE — Racines à dualité physique/abstrait

Certaines racines arabes ont un sens étymologique premier **physique** (couvrir, frapper, lier, etc.) qui dérive ensuite un sens **actif/abstrait** (nier, juger, contracter, etc.). Quand une racine présente cette dualité dans `word_meanings`, l'étape 3 DOIT systématiquement **confronter le contexte grammatical au sens physique avant de le retenir**.

### Test obligatoire — Structure grammaticale du verset
Pour chaque verset utilisant une racine à dualité physique/abstraite, répondre AVANT de choisir le concept :
1. **Qui fait l'action ?** — sujet
2. **Sur quoi/qui ?** — objet
3. **L'objet est-il caché (concept passif) ou refusé/rejeté ouvertement (concept actif) ?**

Si l'objet n'est pas effectivement « caché » mais « rejeté en pleine lumière », le concept actif/abstrait l'emporte sur le concept physique, peu importe l'antériorité étymologique.

### Cas k-f-r (couvrir / rejeter)
- Sens premier (Lane's) : **couvrir** (le cultivateur couvre la graine, la nuit couvre le jour)
- Usage coranique **massivement majoritaire** : **rejet / ingratitude** (refuser de reconnaître les signes, les bienfaits)
- Test grammatical : si le contexte parle de signes/preuves/bienfaits visibles que les acteurs **refusent** ou **dénient** → concept retenu = **Rejet/Ingratitude**, **jamais Couverture/Dissimulation**
- Le concept Couverture/Dissimulation ne s'applique pour k-f-r que dans des contextes rares où le sens physique premier est explicitement activé (ex: cultivateur, nuit qui couvre)

### Autres racines à risque (à confronter au contexte)
- **k-f-r** (couvrir → rejeter / être ingrat)
- **ḍ-r-b** (frapper → fixer une règle, parcourir, frapper monnaie)
- **ʿ-q-d** (nouer → conclure un contrat, prendre une résolution)
- **ḥ-k-m** (empêcher de bouger → juger, gouverner)

### Pourquoi cette règle existe
La pipeline tend à retenir le sens étymologique premier par défaut, parce qu'il est listé en premier dans `word_meanings`. Mais le Coran utilise massivement les sens dérivés actifs. Sans cette règle, on classe systématiquement les contextes de rejet en « couverture », ce qui est **anachronique**.

Exemple cassé identifié : S3:V52 (Jésus face aux Enfants d'Israël) classé en « Couverture/Dissimulation » alors que c'est clairement un contexte de **rejet actif** des signes — corrigé manuellement en « Rejet/Ingratitude ».

### Application des 5 axes — Renforcement
Les 5 axes existants doivent être appliqués **rigoureusement** AVANT de retenir un concept :
- **Axe 1 (champ lexical)** : si le verset cite des signes/preuves/bienfaits, le sens « couvrir » physique est exclu sauf cas explicite
- **Axe 2 (versets voisins)** : si les voisins parlent de rejet/refus, c'est le concept Rejet
- **Axe 4 (cohérence coranique)** : k-f-r dans le Coran = rejet dans 95% des occurrences

## RÈGLE — SENS POST-ISLAMIQUES
⚠️ Certains sens listés dans les dictionnaires (y compris le Lane's) sont des extensions tardives, post-islamiques. Exemples connus :
- **dīn** (د ي ن) → "religion" est post-islamique. Le sens primaire est "dette/obligation/rétribution". Choisir selon le contexte (dette, devoir, rétribution...).
- **islām** (س ل م) → "islam" comme label confessionnel est post-islamique. Le sens primaire est "remise entière/soumission".
- **kāfir** (ك ف ر) → "mécréant/infidèle" est post-islamique. Le sens primaire est "celui qui recouvre/rejette".
- **munāfiq** (ن ف ق) → "hypocrite" est post-islamique. Le sens primaire est lié au tunnel/passage souterrain.

Quand un de ces mots apparaît, TOUJOURS vérifier le sens primaire étymologique dans le Lane's et ne pas se fier au sens communément admis. Le contexte du verset détermine quel sens primaire est activé — ne jamais figer un sens sur une racine.

## RÈGLE — Résumé / phrase d'introduction agréable à lire

L'intro de la §DEMARCHE§ est le RÉSUMÉ visible en haut du verset (encadré or). Il est lu en premier, par tous les utilisateurs — y compris ceux qui ne déplieront jamais l'analyse mot à mot. Il doit donc être :

1. **Agréable à lire** — phrases courtes, français simple, ton fluide.
2. **PAS de jargon technique grammatical** : ne JAMAIS écrire « négation modale », « particule conjonctive », « subjonctif régi par », « phrase nominale taqdim », etc. dans le résumé. Ces analyses sont réservées aux paragraphes mot à mot.
3. **PAS de méta-discours sur l'analyse** : ne JAMAIS écrire « l'analyse mot par mot ci-dessous éclaire les choix lexicaux retenus », « voir l'analyse », ou similaire. Le lecteur sait qu'il y a une analyse plus bas.
4. **PAS de phonétique arabe brute** dans le résumé, sauf 1-2 mots-clés essentiels (ex: nom propre, racine emblématique). Ne JAMAIS écrire des phrases entières en phonétique (« mā kāna li-bashar an... »).
5. **Dire ce que le verset DIT**, pas comment il est construit grammaticalement. Le contenu, pas la forme.
6. **Lien avec verset précédent** : recommandé quand pertinent — mais en français simple (« Ce verset prolonge le V79 », pas « V79 répond par la négative à V78 selon la structure mā... »).

Exemple cassé (V80 avant correction) :
> ❌ « Le verset 80 prolonge directement l'argumentation du verset 79 — la phrase mā kāna li-bashar an... s'étend par wa-lā yaʾmurakum (« et qu'il ne vous ordonne pas »), reliant la même négation modale à un nouveau scénario [...] L'analyse mot par mot ci-dessous éclaire les choix lexicaux retenus. »

Exemple corrigé :
> ✅ « Ce verset prolonge le verset 79 sur la fonction du prophète. Le texte rappelle qu'aucun envoyé de Dieu (prophète ou ange) ne peut être pris pour seigneur — seul Dieu l'est. Le verset se termine par une question rhétorique : Dieu n'irait pas vous demander de rejeter la foi après que vous l'avez embrassée. »

## RÈGLE — UN MOT PAR PARAGRAPHE DANS LA §DEMARCHE§
Chaque mot important DOIT avoir son propre paragraphe dédié dans la §DEMARCHE§. Ne JAMAIS regrouper 2 mots ou plus dans le même paragraphe. Chaque paragraphe commence par le mot en gras (**Mot**) suivi de sa traduction entre parenthèses, puis l'analyse grammaticale. Séparer chaque mot par un double saut de ligne (\n\n).

## VÉRIFICATIONS OBLIGATOIRES AVANT VALIDATION
Avant de valider chaque racine :
- [ ] Lane's SQLite consulté (pas de mémoire)
- [ ] TOUS les sens listés (aucun raccourci)
- [ ] Sens regroupés par concepts (4-7 concepts par racine)
- [ ] Descriptions philosophiques des concepts (pas juste une liste)
- [ ] Chaque concept garde la liste complète de ses sens
- [ ] Réflexion interne sur les 5 axes faite pour TOUS les concepts non-nul
- [ ] Compatibilité grammaticale vérifiée sur le CONCEPT (test philosophique)
- [ ] Concept retenu choisi APRÈS la réflexion complète
- [ ] Proof_ctx contient 1-2 phrases de justification avec distinction philosophique vs chaque concept probable
- [ ] Mot français choisi dans le concept retenu à l'étape 4
- [ ] Pas d'anthropomorphisme
- [ ] Pas d'interprétation
- [ ] Tout en français (pas d'anglais dans les proof_ctx)
- [ ] Si nouvelle racine créée → `total_occurrences` vérifié immédiatement via corpus.quran.com (ne jamais laisser à 0 sans vérification)
- [ ] Les noms des concepts dans `verse_word_analyses.analysis_axes` sont LUES depuis `word_meanings` en base (SELECT avant INSERT), jamais écrits de mémoire
- [ ] Le `sense_retenu` dans chaque segment d'affichage est un mot qui EXISTE dans les sens du concept retenu dans `word_meanings` (pas un mot inventé, pas le mot de la traduction)
- [ ] **Test de naturalité sémantique** : le sens retenu + préposition + objet du verset forme une expression naturelle en français
- [ ] Le mot français dans la traduction (`fr`) est du français courant et naturel (pas de calque bizarre)
- [ ] **Phrases du quotidien** : vérifier si des phrases existent déjà pour cette racine avant d'en insérer. Si oui → SKIP.
- [ ] **Richesse des racines** : chaque racine utilisée a au moins 6 sens. Si non → refaire l'étape 2 avant de continuer.
- [ ] **Démarche — phrase d'introduction** : la §DEMARCHE§ commence par 1-2 phrases qui résument le verset et font le lien avec le verset précédent.
- [ ] **Démarche — français obligatoire** : chaque mot phonétique dans la §DEMARCHE§ est suivi de sa traduction française entre parenthèses.
- [ ] **Démarche — cohérence BDD** : aucun sens cité dans la §DEMARCHE§ qui n'existe pas dans word_meanings.
- [ ] **Démarche — un mot par paragraphe** : chaque mot important a son propre paragraphe dans la §DEMARCHE§. Aucun paragraphe ne regroupe 2+ mots.
- [ ] **Sens post-islamiques** : vérifier que les racines dyn, slm, kfr, mnfq n'utilisent pas un sens post-islamique. Toujours privilégier le sens primaire étymologique.

## LOGS
Après chaque racine, afficher :
```
[RACINE] XX sens extraits → Y concepts
  Concept 1 (N sens) → NUL : "1 phrase justification"
  Concept 2 (N sens) → PROBABLE : "1-2 phrases justification"
  Concept 3 (N sens) → RETENU : "1-2 phrases justification + distinctions"
  ...
```
Après chaque verset, afficher :
```
VERSET X:Y — TERMINÉ
  mot1 (racine) → sens "Nom" → mot français "nom"
  mot2 (racine) → sens "Divinité" → mot français "divinité"
  Traduction : "..."
```

## RÈGLE — Distinction malak / rasūl (sens lexicalisés)

Le Coran utilise **deux mots distincts** pour deux réalités différentes :

- **malak** (mlk) = **catégorie d'être** : créature céleste, agent de Dieu → traduire **« ange »**
- **rasūl** (rsl) = **rôle/fonction** : humain envoyé en mission → traduire **« messager »**

Ne JAMAIS traduire malak par "messager" même si l'étymologie de la racine archaïque l-ʾ-k = "envoyer" donne au malak la trace étymologique d'un « envoyé ». La distinction est prouvée explicitement par **Q 22:75** : *« Dieu choisit des messagers (rusul) parmi les anges (al-malāʾika) et parmi les humains »* — ce verset serait tautologique si malak = rasūl.

**Concepts BDD** :
- racine `rsl` → concept `Messager/Porteur`
- racine `mlk` → concept `Ange/Messager`

Le double titre `Ange/Messager` pour mlk garde la trace étymologique sans confondre avec rsl (différencié par le mot **Porteur**, qui marque le rôle humain).

## RÈGLE — Vérifier translation_arab après génération

Avant de valider un verset :
- `translation_arab` doit être **en français**, pas en phonétique arabe ni en script arabe.
- Si la pipeline LLM dérape (génère la phonétique au lieu du français), régénérer cette section.
- Cas vus en sourate 3 : V65, V66, V67, V68, V75 (corrigés a posteriori).

## RÈGLE — Cohérence coranique = réflexion interne uniquement

Les 5 axes (verset, voisins, sourate, cohérence coranique, finalité khalifa) sont des **outils de raisonnement INTERNE** pour converger vers le bon sens. Ce qui est **AFFICHÉ** au lecteur dans le `proof_ctx` doit rester **spécifique au verset analysé** (1-2 phrases sur pourquoi CE sens dans CE verset).

Ne PAS dumper dans le `proof_ctx` :
- Les statistiques globales de fréquence ("La racine X apparaît N fois dans le Coran...")
- Les listes d'événements liés à la racine ("Le mot accompagne tel ou tel événement majeur...")

Ces données globales sont stockées dans `word_meanings.axe4_coherence` et restent accessibles via la liste des occurrences à droite.

## RÈGLE — concept_chosen doit exister en base

Le `analysis_axes.concept_chosen` de chaque VWA doit être un copier-coller exact d'un concept de `word_meanings` pour la même racine. Avant insertion :
- `SELECT DISTINCT concept FROM word_meanings WHERE analysis_id = ?` pour récupérer la liste valide.
- Choisir parmi cette liste — jamais inventer un nom de concept.
- Si aucun concept ne convient, c'est qu'il faut enrichir `word_meanings` AVANT de remplir la VWA.

## RÈGLE — Langage simple et accessible (pas de jargon linguistique)

**Le lecteur visé n'est ni linguiste ni arabisant.** Tout le contenu visible (DEMARCHE, JUSTIFICATION, CRITIQUE, proof_ctx) doit être rédigé en **français simple et accessible**. Le jargon technique est interdit ou doit être systématiquement expliqué entre parenthèses.

### Termes à éviter ou expliquer

| ❌ Jargon | ✅ Alternative simple |
|---|---|
| copule | verbe « être » |
| construction elliptique | tournure sans verbe |
| forme intensive (fa'yyūl) | forme renforcée qui dit que l'action est faite tout le temps |
| forme nominale agentive | forme qui désigne celui qui agit |
| participe actif | celui qui fait l'action |
| participe passif | celui qui subit l'action |
| périphrase explicative | explication en plusieurs mots |
| idiomatiquement | naturellement |
| accusatif/nominatif/génitif | (à éviter ou expliquer : « cas du complément », « cas du sujet », « cas du complément du nom ») |
| idāfa | structure « X de Y » |
| taqdim | mise en avant d'un mot |
| schème | forme du mot |

### Principe
Si un concept linguistique est nécessaire pour comprendre le verset, l'expliquer en termes simples plutôt que d'utiliser le terme technique. Ex : au lieu de « participe actif », dire « forme du mot qui dit que la personne fait activement l'action ».

Test : un lecteur sans formation linguistique pourrait-il comprendre ce paragraphe ? Si non, simplifier.

## RÈGLE — Cohérence interne entre JUSTIFICATION et CRITIQUE + cohérence avec le contexte

Une critique peut être logiquement vraie en général mais **fausse dans le contexte du verset** ou **incohérente avec ce que dit la justification**. Ne JAMAIS écrire une critique sans la tester sur 2 plans :

### Test 1 : Cohérence interne
La JUSTIFICATION dit pourquoi on retient le mot X. La CRITIQUE dit pourquoi le mot Hami Y est moins bon. Ces deux arguments doivent se renforcer, pas se contredire.

❌ **Exemple d'incohérence (V4 intiqām)** :
- Justification : « Rétribution » est meilleur car il rend la justice rétributive (rendre ce qui est dû)
- Critique : « Punir » est trop négatif
- Problème : la justification accepte la dimension de justice rétributive (qui peut être négative) tandis que la critique accuse Hamidullah d'être négatif. Contradiction.

✅ **Cohérence correcte** :
- Justification : « Rétribution » rend l'acte exercé (intiqām est un nom d'action)
- Critique : « Pouvoir de punir » introduit le mot « pouvoir » qui transforme un acte en capacité abstraite

### Test 2 : Cohérence avec le contexte du verset
Un argument peut être vrai dans l'absolu mais faux dans le contexte. Toujours tester l'argument **dans la phrase du verset**.

❌ **Exemple de critique hors contexte (V4 intiqām)** :
- Argument : « Punir » est trop négatif, alors que rétribution couvre récompense ET sanction
- Problème : V4 parle du châtiment des dissimulateurs — le contexte EST négatif. Dire que « punir » est « trop négatif » dans un contexte de châtiment n'a aucun sens.

✅ **Cohérence correcte** :
- L'argument doit tenir compte du contexte spécifique. Si le contexte est négatif, ne pas critiquer un mot pour être négatif. Chercher une autre dimension (étymologie, structure, ajout de mots).

### Procédure obligatoire avant chaque bloc CRITIQUE
1. **Relire la justification** pour le même mot — l'argument de la critique est-il cohérent ?
2. **Relire le verset entier** — l'argument tient-il dans CE contexte précis ?
3. Si l'une des deux questions répond non → **réécrire ou supprimer la critique**.
