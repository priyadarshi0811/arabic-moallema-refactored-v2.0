import supabase from "@/supabaseClient";

export const deleteStudent = async (email) => {
    //remove from the relation
    const { data1, error1 } = await supabase
    .from("batch_student_relation")
    .delete()
    .match({ student_id: email });

  //remove from the relation
  const { data4, error4 } = await supabase
    .from("assignments")
    .delete()
    .match({ student_id: email });

  //remove from the relation
  const { data3, error3 } = await supabase
    .from("students")
    .delete()
    .match({ email: email });

}