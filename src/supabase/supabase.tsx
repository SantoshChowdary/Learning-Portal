import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_URL
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

// Create a single supabase client for interacting with your database
export const supabase = createClient("https://wxoheozbksyrezqvgeoc.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4b2hlb3pia3N5cmV6cXZnZW9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MjU0MTEsImV4cCI6MjAxMTQwMTQxMX0.9M8zAa57ePCZKr1A6Ca47YA384pzNoQvAeHuGsLbonw");

