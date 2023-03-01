import supabase from "@/supabaseClient";

export const fetchStudentsData = async () => {
  const { data, error } = await supabase.from("students").select("*");
  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  return data;
};
