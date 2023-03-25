import supabase from "@/supabaseClient";

export const deleteStudent = async (studentId) => {
  //remove from the relation
  const { data1, error1 } = await supabase
    .from("exp_duplicate_batch_student_relation")
    .delete()
    .match({ student_id: studentId });

  //remove from the relation
  const { data4, error4 } = await supabase
    .from("assignments_exp_duplicate")
    .delete()
    .match({ student_id: studentId });

  //remove from the relation
  const { data3, error3 } = await supabase
    .from("students_exp_duplicate")
    .delete()
    .match({ student_id: studentId });
};
