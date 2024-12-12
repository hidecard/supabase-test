import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://mkbbrfwsjuadeuzvcpbt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rYmJyZndzanVhZGV1enZjcGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MTAxNTksImV4cCI6MjA0OTQ4NjE1OX0.nWWjhUa5fxWjWuOqkKS0fCtQv09pT4po53JATGmP6wE";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
