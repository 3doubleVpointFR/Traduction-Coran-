-- Encart Conclusion en fin de sourate — champ optionnel sur verse_analyses
-- Rempli uniquement pour le DERNIER verset de chaque sourate.
-- L'UI affiche l'encart sous le résumé du verset final.

ALTER TABLE verse_analyses
  ADD COLUMN IF NOT EXISTS surah_conclusion TEXT;
