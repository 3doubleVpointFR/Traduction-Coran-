-- Ajout du concept étymologique premier sur les racines
-- Le champ etymological_concept indique quel concept parmi les concepts de la racine
-- représente le sens fondateur (celui d'où dérivent les autres, selon Lane's).
-- Peut être NULL tant que l'étymologie n'a pas été tranchée.

ALTER TABLE word_analyses
  ADD COLUMN IF NOT EXISTS etymological_concept TEXT;

-- Vérification
-- SELECT column_name, data_type FROM information_schema.columns
-- WHERE table_name = 'word_analyses' AND column_name = 'etymological_concept';
