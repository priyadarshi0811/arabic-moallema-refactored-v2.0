import supabase from "@/supabaseClient";

export const fetchTeachersData = async () => {
  const { data, error } = await supabase.from("teachers").select("*");
  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  return data;
};
