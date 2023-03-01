import supabase from "@/supabaseClient";

export const deleteTeacher = async (email, teacherEmail) => {
  //remove from the relation
  const { data, error } = await supabase
    .from("batches")
    .select("batch_name")
    .match({ teacher_email: email });

  console.log(data);
  if (data[0]) {
    const { data1, error1 } = await supabase
      .from("batches")
      .update({ teacher_email: teacherEmail })
      .match({ teacher_email: email });
  }

  const { data4, error4 } = await supabase
    .from("batches")
    .update({ teacher_email: teacherEmail })
    .match({ teacher_email: email });

  const { data5, error5 } = await supabase
    .from("session")
    .update({ teacher_id: null })
    .match({ teacher_id: email });

  const { data3, error3 } = await supabase
    .from("teachers")
    .delete()
    .match({ email: email });
};
