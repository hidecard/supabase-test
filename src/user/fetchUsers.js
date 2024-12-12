import supabase from '../supabaseClient.js';

export async function fetchUsers() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) {
    console.error('Error fetching users:', error.message);
    return [];
  }
  console.log('Users fetched:', data);
  return data;
}
