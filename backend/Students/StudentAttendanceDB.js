import supabase from "@/supabaseClient";

export const fetchStudentAttendance = async (batchName) => {
  const { data, error } = await supabase
    .from("session")
    .select("*")
    .eq("batch_id", batchName);
  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  return data;
};

export const fetchTeachersAttendance = async (batchName, email) => {
  const { data, error } = await supabase
    .from("session")
    .select("*")
    .match({ batch_id: batchName, teacher_id: email });
  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  return data;
};
