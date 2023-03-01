import supabase from "@/supabaseClient";

export const addStudentToBatch = async (email, selectedBatch) => {
  const { data, error } = await supabase
    .from("batch_student_relation")
    .insert({ student_id: email, batch_id: selectedBatch })
    .select();

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
