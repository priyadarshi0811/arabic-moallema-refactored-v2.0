import supabase from "@/supabaseClient";

export const fetchTeacherBatches = async (teacherId) => {
  const { data, error } = await supabase
    .from("batches_exp_duplicate")
    .select("*")
    .eq("teacher_id", teacherId);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchstudentBatcheIdBasedOnStudentId = async (studentId) => {
  const { data, error } = await supabase
    .from("exp_duplicate_batch_student_relation")
    .select("batch_id")
    .eq("student_id", studentId);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchBatchNameBasedOnBatchId = async (batchId) => {
  const { data, error } = await supabase
    .from("batches_exp_duplicate")
    .select("batch_name")
    .eq("batch_id", batchId);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
