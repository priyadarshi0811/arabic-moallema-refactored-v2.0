import supabase from "@/supabaseClient";

export const fetchChapters = async () => {
  const { data, error } = await supabase.from("chapters").select("*");
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
