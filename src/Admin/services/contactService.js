import { supabase } from "./supabaseClient";

// ✅ Get Contact Info
export const getContactInfo = async () => {
  const { data, error } = await supabase
    .from("contact_info")
    .select("*")
    .single();

  if (error) throw error;
  return data;
};

// ✅ Update Contact Info
export const updateContactInfo = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("contact_info")
    .update(updatedData)
    .eq("id", id);

  if (error) throw error;
  return data;
};