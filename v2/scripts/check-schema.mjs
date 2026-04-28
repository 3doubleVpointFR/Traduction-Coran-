import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Get all tables
const tables = ['verse_analyses', 'verse_word_analyses', 'word_analyses', 'word_meanings'];

for (const table of tables) {
  console.log('\n=== TABLE:', table, '===');
  const { data, error } = await supabase.from(table).select('*').limit(1);
  if (error) {
    console.log('ERROR:', error.message);
  } else if (data && data.length > 0) {
    console.log('COLUMNS:', Object.keys(data[0]));
    console.log('SAMPLE:', JSON.stringify(data[0], null, 2).substring(0, 500));
  } else {
    console.log('Empty table or no data');
  }
}
