import supabase from "@/supabaseClient";

export const fetchAssignmentForLetter = async (letter, module) => {
  const { data, error } = await supabase
    .from("activity_exp_duplicate")
    .select("assignment_json")
    .match({ sub_module: letter, module: module });

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSubmittedAssignment = async (batch) => {
  const { data, error } = await supabase
    .from("assignments_exp_duplicate")
    .select("*")
    .eq("batch_id", batch);

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSubmittedAssignmentBasedOnStudent = async (
  studentId,
  batchId
) => {
  const { data, error } = await supabase
    .from("assignments_exp_duplicate")
    .select("*")
    .match({ student_id: studentId, batch_id: batchId });

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
export const fetchSubmittedAssignmentBasedOnStudentAndModule = async (
  studentId,
  batchId,
  module
) => {
  const { data, error } = await supabase
    .from("assignments_exp_duplicate")
    .select("*")
    .match({ student_id: studentId, batch_id: batchId, module_name: module });

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
    .from("assignments_exp_duplicate")
    .select("*")
    .match({ student_id: student, batch_id: batch, sub_module: sub_module });

  if (error) {
    console.log("Error fetching assignment data: ", error);
    return null;
  }
  return data;
};

export const fetchAllAssignments = async (letter) => {
  const { data, error } = await supabase
    .from("activity_exp_duplicate")
    .select("*");

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

export const fetchAssignmentSubmissionStatus = async (
  student,
  batch,
  sub_module
) => {
  const { data, error } = await supabase
    .from("assignments_exp_duplicate")
    .select("is_assesed")
    .match({ student_id: student, batch_id: batch, sub_module: sub_module });

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSubModulesCreatedActivity = async () => {
  const { data, error } = await supabase
    .from("activity_exp_duplicate")
    .select("sub_module");

  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const checkAssignmentSubmitionStatus = async (
  module,
  subModule,
  batch,
  student_id
) => {
  const { data, error } = await supabase
    .from("assignments_exp_duplicate")
    .select("*")
    .match({
      module_name: module,
      sub_module: subModule,
      batch_id: batch,
      student_id: student_id,
    });

  if (error) {
    console.log("Error creating Activity Log: ", error);
    return null;
  }
  return data;
};
