import supabase from "@/supabaseClient";

export const updateTeacher = async (batchId, teacherId) => {
  const { data4, error4 } = await supabase
    .from("batches_exp_duplicate")
    .update({ teacher_id: teacherId })
    .match({ batch_id: batchId });
};

export const updateBatch = async (
  enteredBatchName,
  enteredType,
  obj,
  glink,
  batchId
) => {
  const { data, error } = await supabase
    .from("batches_exp_duplicate")
    .update({
      batch_name: enteredBatchName,
      type: enteredType,
      schedule: obj,
      g_meet: glink,
    })
    .match({ batch_id: batchId })
    .select();

  if (error) {
    console.log("Error updating batchName: ", error);
    return null;
  }
  console.log(error);
  return data;
};
