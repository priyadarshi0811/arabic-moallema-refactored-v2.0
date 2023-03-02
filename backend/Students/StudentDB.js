import supabase from "@/supabaseClient";

export const fetchStudentsData = async () => {
  const { data, error } = await supabase.from("students").select("*");
  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  return data;
};

export const updateStudentDetail = async (email, name, contact, batchName) => {
  const { data4, error4 } = await supabase
    .from("students")
    .update({ email: email, name: name, contact: contact })
    .match({ email: email });

  const { data5, error5 } = await supabase
    .from("batch_student_relation")
    .update({ batch_id: batchName })
    .match({ student_id: email });
};
