-- Restructuration du résumé : séparer "résumé court" et "note contextuelle"
-- À lancer une seule fois dans Supabase SQL Editor avant la migration des données

ALTER TABLE verse_analyses
  ADD COLUMN IF NOT EXISTS summary_short TEXT,
  ADD COLUMN IF NOT EXISTS summary_long  TEXT;

-- Vérification
-- SELECT column_name, data_type FROM information_schema.columns
-- WHERE table_name = 'verse_analyses' AND column_name IN ('summary_short', 'summary_long');
