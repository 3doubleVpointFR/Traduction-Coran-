# PROMPT VÉRIFICATION RÉSUMÉS

Vérifier summary_short et summary_long. Règle d'or : pas d'interprétation, pas de tafsir — rien que le Coran + nos choix de traduction maison.

## Étape 0 — Anti-tafsir préalable

Scanner détecter :
- **Identification tafsirique** : nom propre absent du verset (« Badr », « Quraysh »)
- **Glose contextuelle** : ajout d'éléments « bien connus » de la tradition mais absents (« la mère attendait un garçon pour le temple »)
- **Anticipation** : mention d'un personnage/événement de versets non traités
- **Claims « première occurrence »** : vérifier 3× (sourate vs Coran)

Corriger AVANT.

## summary_short — Vulgarisation absolue

- ❌ Pas de paraphrase mot-à-mot du verset
- ✅ Expliquer en français quotidien ce que ça veut dire
- ✅ Ton oral d'ami qui raconte
- ✅ 2-3 phrases MAX
- ✅ Premier verbe direct : dit, demande, prévient, explique, s'adresse
- ❌ Mots interdits : « pose », « énonce », « rappelle », « fonde », « affirmation cosmique », « principe ontologique »
- ✅ Ex : « ce qui est dans les cieux et sur la terre appartient à Dieu » → « Dieu possède tout, dans le ciel comme sur la terre »
- **Lecture isolée possible** : citer brièvement les éléments cruciaux si référence à un événement/personnage antérieur

## summary_long — 3 blocs séparés par \n\n

**MACRO** — situation dans la sourate (verset ↔ sourate). Placement dans la séquence, citer versets voisins. Purement situationnel — pas d'analyse stylistique.

**MICRO** — relation aux versets voisins (V-1, V+1). Ce que le V courant prolonge/répond/contraste. Cite les segments clés de notre traduction maison.

**ITALIQUE** — `*…*` — Analyse globale + leçons/faits marquants. Style légèrement contemplatif, sans interprétation forcée. Si rien de marquant → dire honnêtement, ne pas forcer.

## Règles transversales

- Éviter redits MACRO/MICRO/ITALIQUE
- Français clair, pas de jargon, pas de phonétique arabe, pas d'arabe
- Paraphraser et expliquer, pas répéter le verset mot pour mot
- Lien V-1 → V courant explicite (MICRO)
- Lien V courant ↔ sourate explicite (MACRO)

## Mots interdits (2 résumés)

- ❌ « rejetants », « rejetant », « rejetantes » → ✅ « ceux qui ont rejeté »
- ❌ « mécréants », « infidèles »
- ❌ « islam » sens confessionnel → ✅ « remise de soi »
- ❌ phonétique arabe (macrons, hamza)
- ❌ arabe en script
- ❌ jargon linguistique (idāfa, taqdim, participe, accusatif)
- ❌ jargon religieux (tawhid, iman, hidayah)
- ❌ « Maison » → « Notre traduction »
- ❌ jargon technique de pipeline

## Cohérence intra-corpus

- Autres versets cités : cohérents avec NOTRE traduction maison
- Verset non encore traité → interdit de citer (anti-anticipation)

## Vérification 3× des affirmations factuelles

- « première occurrence » → requêter BDD
- « X nommé pour la première fois » → toutes occurrences antérieures Mushaf
- « toutes les paroles précédentes étaient X » → relister
- « ce verset clôt la séquence Y-Z » → vérifier V+1

Si doute après 3× → reformuler moins absolu.

## Anti-glose attribut divin

Pour tout attribut divin (muḥīṭ, ʿalīm, qādir, samīʿ, baṣīr) : les résumés ne glosent pas par un autre attribut absent du verset. Rester fidèle à l'image du mot arabe. Glose Hamidullah = à CRITIQUER, pas à REPRENDRE.

## Livrable — Tableau vérifications faites

- ✓ « X » N'EST PAS dans le verset — pas mentionné
- ✓ « ... » : segment fr maison (pos N)
- ✓ Aucune phonétique / arabe / terme technique
- ✓ MACRO/MICRO/ITALIQUE non redondants
- ✓ Claims « première occurrence » vérifiés 3×
- ✓ Mots interdits absents
- ✓ Anti-tafsir : aucun élément ajouté hors verset
- ✓ Anti-anticipation
- ✓ Lien V-1 → V (MICRO)
- ✓ Lien V ↔ sourate (MACRO)

## Format proposition

Présenter les 3 blocs (SHORT + MACRO + MICRO + ITALIQUE), puis « Vérifications faites », puis demander validation avant écriture BDD. Test mode naïf sur summary_short à la fin (un lecteur qui n'a jamais lu le Coran doit comprendre).
