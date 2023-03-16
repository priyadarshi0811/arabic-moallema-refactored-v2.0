import supabase from "@/supabaseClient";

export const fetchAssignmentForLetter = async (letter) => {
  const { data, error } = await supabase
    .from("activity")
    .select("assignment_json")
    .eq("sub_module", letter);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSubmittedAssignment = async (batch) => {
  const { data, error } = await supabase
    .from("assignments")
    .select("*")
    .eq("batch_id", batch);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSubmittedAssignmentBasedOnStudent = async (
  student,
  batch
) => {
  const { data, error } = await supabase
    .from("assignments")
    .select("*")
    .match({ student_id: student, batch_id: batch });

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSubmittedAssignmentBasedOnStudentBatchSubModule = async (
  student,
  batch,
  sub_module
) => {
  const { data, error } = await supabase
    .from("assignments")
    .select("*")
    .match({ student_id: student, batch_id: batch, sub_module: sub_module });

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchAllAssignments = async (letter) => {
  const { data, error } = await supabase.from("activity").select("*");

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchAssignmentBasedOnSubModule = async (subModule) => {
  const { data, error } = await supabase
    .from("activity")
    .select("*")
    .eq("sub_module", subModule);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
