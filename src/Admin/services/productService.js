import { supabase } from "./supabaseClient";

// ✅ Get all products (excluding soft deleted)
export const getAllProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_deleted", false)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};


// ✅ Add new product
export const addProduct = async (productData) => {
  const { data, error } = await supabase
    .from("products")
    .insert([productData])
    .select();

  if (error) throw error;
  return data;
};


// ✅ Update product
export const updateProduct = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("products")
    .update(updatedData)
    .eq("id", id)
    .select();

  if (error) throw error;
  return data;
};


// ✅ Soft delete product
export const deleteProduct = async (id) => {
  const { data, error } = await supabase
    .from("products")
    .update({ is_deleted: true })
    .eq("id", id);

  if (error) throw error;
  return data;
};


// ✅ Search products
export const searchProducts = async (searchTerm) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${searchTerm}%`)
    .eq("is_deleted", false);

  if (error) throw error;
  return data;
};


// ✅ Upload Product Image
export const uploadProductImage = async (file) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("product-images")
    .upload(fileName, file);

  if (error) throw error;

  const { data: publicUrl } = supabase.storage
    .from("product-images")
    .getPublicUrl(fileName);

  return publicUrl.publicUrl;
};