import supabase from '../supabaseClient.js';

export async function addUser(email, name) {
  const { data, error } = await supabase.from('users').insert([{ email, name }]);
  if (error) {
    console.error('Error adding user:', error.message);
    return null;
  }
  console.log('User added:', data);
  return data;
}
