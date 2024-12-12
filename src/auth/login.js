import supabase from '../supabaseClient.js';

export async function login(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error('Login failed:', error.message);
    return null;
  }
  console.log('User logged in:', user);
  return user;
}
