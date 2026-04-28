import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Check verses table columns
const { data: v, error: ev } = await supabase.from('verses').select('*').limit(3);
if (ev) console.log('verses error:', ev.message);
else console.log('verses cols:', Object.keys(v[0] || {}), '\nSample:', JSON.stringify(v[0]));

// Check surahs table
const { data: s, error: es } = await supabase.from('surahs').select('*').limit(5);
if (es) console.log('surahs error:', es.message);
else console.log('\nsurahs cols:', Object.keys(s[0] || {}), '\nSample:', JSON.stringify(s.slice(0,3)));
