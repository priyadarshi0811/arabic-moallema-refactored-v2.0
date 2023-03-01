import supabase from "@/supabaseClient";

export const updateTeacher = async (batchName, teacherEmail) => {
  const { data4, error4 } = await supabase
    .from("batches")
    .update({ teacher_email: teacherEmail })
    .match({ batch_name: batchName });
};
