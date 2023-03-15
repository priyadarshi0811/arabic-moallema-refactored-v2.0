import supabase from "@/supabaseClient";
export const markAssignment = async (
  student,
  batch,
  sub_module,
  submission
) => {
  const { data4, error4 } = await supabase
    .from("assignments")
    .update({ submission: submission, is_assesed: true })
    .match({ student_id: student, batch_id: batch, sub_module: sub_module });
};
