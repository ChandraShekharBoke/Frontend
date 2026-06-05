import { supabase } from "./supabaseClient";


// ✅ Get total products count
export const getTotalProducts = async () => {
  const { count, error } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true })
    .eq("is_deleted", false);

  if (error) throw error;
  return count;
};


// ✅ Get total contacts count
export const getTotalContacts = async () => {
  const { count, error } = await supabase
    .from("contacts")
    .select("*", { count: "exact", head: true })
    .eq("is_deleted", false);

  if (error) throw error;
  return count;
};


// ✅ Get recent products (for activity section)
export const getRecentProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, created_at")
    .eq("is_deleted", false)
    .order("created_at", { ascending: false })
    .limit(5);

  if (error) throw error;
  return data;
};


// ✅ Get recent contacts (for activity section)
export const getRecentContacts = async () => {
  const { data, error } = await supabase
    .from("contacts")
    .select("id, name, created_at")
    .eq("is_deleted", false)
    .order("created_at", { ascending: false })
    .limit(5);

  if (error) throw error;
  return data;
};