import supabase from '../supabaseClient.js';

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Logout failed:', error.message);
    return null;
  }
  console.log('User logged out');
}
