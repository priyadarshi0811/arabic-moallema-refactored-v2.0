import supabase from "@/supabaseClient";

export const fetchTeachersData = async () => {
  const { data, error } = await supabase.from("teachers").select("*");
  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  return data;
};

export const updateTeacherDetail = async (email, name, contact) => {
  const { data4, error4 } = await supabase
    .from("teachers")
    .update({ email: email, name: name, contact: contact })
    .match({ email: email });
};
