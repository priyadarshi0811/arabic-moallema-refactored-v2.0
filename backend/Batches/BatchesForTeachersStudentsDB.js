import supabase from "@/supabaseClient";

export const fetchTeacherBatches = async (email) => {
  const { data, error } = await supabase
    .from("batches")
    .select("*")
    .eq("teacher_email", email);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchstudentBatches = async (email) => {
  const { data, error } = await supabase
    .from("batch_student_relation")
    .select("*")
    .eq("student_id", email);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
