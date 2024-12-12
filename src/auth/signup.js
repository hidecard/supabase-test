import supabase from '../supabaseClient.js';

export async function signup(email, password) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error('Signup failed:', error.message);
    return null;
  }
  console.log('User signed up:', user);
  return user;
}
