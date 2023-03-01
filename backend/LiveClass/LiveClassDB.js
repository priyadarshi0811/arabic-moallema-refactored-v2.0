import supabase from "@/supabaseClient";

export const postLiveClassData = async (batchId, chapterName) => {
  const { data, error } = await supabase
    .from("live_class")
    .insert({
      batch_id: batchId,
      chapter_name: chapterName,
    })
    .select();

  if (error) {
    console.log("Error creating session: ", error);
    return null;
  }
};

export const deleteLiveClass = async (batchId) => {
  //remove from the relation
  const { data1, error1 } = await supabase
    .from("live_class")
    .delete()
    .match({ batch_id: batchId })
    .select();

  console.log("deleted: ", data1);
};

export const fetchLiveClassData = async () => {
  const { data, error } = await supabase.from("live_class").select("*");
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
