import supabase from "@/supabaseClient";

export const fetchBatchesSchedule = async () => {
  const { data, error } = await supabase.from("batches").select("schedule");
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchIndividualBatch = async (name) => {
  const { data, error } = await supabase
    .from("batches")
    .select("chapter_completed")
    .eq("batch_name", name);
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchStudentBatchData = async () => {
  const { data, error } = await supabase
    .from("batch_student_relation")
    .select("*");

  if (error) {
    console.log("Error fetching batch_student_relation data: ", error);
    return null;
  }
  return data;
};

export const postCreateBatch = async (
  enteredBatchName,
  enteredTeacherEmail,
  enteredType,
  enteredBookName,
  obj,
  glink
) => {
  const { data, error } = await supabase
    .from("batches")
    .insert({
      batch_name: enteredBatchName,
      teacher_email: enteredTeacherEmail,
      type: enteredType,
      book_name: enteredBookName,
      schedule: obj,
      g_meet: glink,
    })
    .select();

  if (error) {
    console.log("Error creating announcement: ", error);
    return null;
  }
  console.log(error);
  return data;
};

export const fetchEnrolledStudentsInBatch = async (batchName) => {
  const { data, error } = await supabase
    .from("batch_student_relation")
    .select("*")
    .match({ batch_id: batchName });

  if (error) {
    console.log("Error fetching batch_student_relation data: ", error);
    return null;
  }
  return data;
};

export const fetchIndividualBatchBasedOnName = async (name) => {
  const { data, error } = await supabase
    .from("batches")
    .select("id")
    .eq("batch_name", name);
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchBatchesForTeacher = async (email) => {
  const { data, error } = await supabase
    .from("batches")
    .select("*")
    .match({ teacher_email: email });

  if (error) {
    console.log("Error fetching batch_student_relation data: ", error);
    return null;
  }
  return data;
};

export const fetchBatchesForTeacherBasedOnBatchName = async (batch) => {
  const { data, error } = await supabase
    .from("batches")
    .select("*")
    .match({ batch_name: batch });

  if (error) {
    console.log("Error fetching batch_student_relation data: ", error);
    return null;
  }
  return data;
};
