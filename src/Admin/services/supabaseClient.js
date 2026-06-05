import { createClient } from '@supabase/supabase-js';

// ✅ Replace with your actual values from Supabase
const supabaseUrl = "https://cixlottsfhhpjtidnuak.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpeGxvdHRzZmhocGp0aWRudWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NTg4MDMsImV4cCI6MjA5NjEzNDgwM30.J1xCYZotogAcJQrD0oBYaXJEqHOTzQswscFqVtMNC94";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);