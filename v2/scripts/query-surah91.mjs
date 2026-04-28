import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../.env.local');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function querySurah91() {
  console.log('Starting Surah 91 (Ash-Shams) data query...\n');
  
  const results = {
    timestamp: new Date().toISOString(),
    surah_id: 91,
    surah_name: 'Ash-Shams',
    queries: {}
  };

  try {
    // Query 1: Get all verses
    console.log('Executing Query 1: Get all verses...');
    const { data: verses, error: versesError } = await supabase
      .from('verses')
      .select('id, verse_num, arabic_text')
      .eq('surah_id', 91)
      .order('verse_num', { ascending: true });

    if (versesError) {
      console.error('Query 1 Error:', versesError.message);
      results.queries.verses = { error: versesError.message };
    } else {
      console.log(`Query 1 Success: Found ${verses.length} verses`);
      results.queries.verses = {
        count: verses.length,
        data: verses
      };
    }

    // Query 2: Check if verse_analyses exist
    console.log('\nExecuting Query 2: Check verse_analyses...');
    const verseIds = verses?.map(v => v.id) || [];
    
    if (verseIds.length > 0) {
      const { data: analyses, error: analysesError } = await supabase
        .from('verse_analyses')
        .select('verse_id, segments')
        .in('verse_id', verseIds);

      if (analysesError) {
        console.error('Query 2 Error:', analysesError.message);
        results.queries.verse_analyses = { error: analysesError.message };
      } else {
        const withSegments = analyses.filter(a => a.segments !== null);
        console.log(`Query 2 Success: Found ${analyses.length} analyses (${withSegments.length} with segments)`);
        results.queries.verse_analyses = {
          total_analyses: analyses.length,
          with_segments: withSegments.length,
          without_segments: analyses.length - withSegments.length,
          data: analyses.map(a => ({
            verse_id: a.verse_id,
            has_segments: a.segments !== null
          }))
        };
      }
    } else {
      console.log('Query 2 Skipped: No verses found');
      results.queries.verse_analyses = { skipped: 'No verses found' };
    }

    // Query 3: Get count of existing VWA
    console.log('\nExecuting Query 3: Count verse_word_analyses...');
    const { count, error: countError } = await supabase
      .from('verse_word_analyses')
      .select('*', { count: 'exact', head: true })
      .in('verse_id', verseIds);

    if (countError) {
      console.error('Query 3 Error:', countError.message);
      results.queries.verse_word_analyses_count = { error: countError.message };
    } else {
      console.log(`Query 3 Success: Found ${count} verse_word_analyses`);
      results.queries.verse_word_analyses_count = {
        count: count || 0
      };
    }

    // Summary
    console.log('\n=== SUMMARY ===');
    console.log(`Verses: ${verses?.length || 0}`);
    console.log(`Verse Analyses: ${results.queries.verse_analyses.total_analyses || 0}`);
    console.log(`Verse Word Analyses: ${results.queries.verse_word_analyses_count.count || 0}`);

  } catch (error) {
    console.error('Unexpected error:', error.message);
    results.error = error.message;
  }

  // Output full results as JSON
  console.log('\n=== FULL RESULTS (JSON) ===');
  console.log(JSON.stringify(results, null, 2));
  
  return results;
}

await querySurah91();
