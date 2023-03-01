import supabase from "@/supabaseClient";

export const chapterCompletedBatch = async (array, batchId) => {
  const { data, error } = await supabase
    .from("batches")
    .update({ chapter_completed: array })
    .match({ batch_name: batchId });
};
