import supabase from "@/supabaseClient";

export const chapterCompletedBatch = async (array, batchId) => {
  const { data, error } = await supabase
    .from("batches_exp_duplicate")
    .update({ chapter_completed: array })
    .match({ batch_id: batchId });
};
