import supabase from "@/supabaseClient";

export const fetchActivtyStartStatus = async (module, subModule, batch) => {
  const { data, error } = await supabase
    .from("teacher_activity_log")
    .select("is_open_for_activity")
    .match({ module: module, sub_module: subModule, batch_id: batch });

  if (error) {
    console.log("Error fetching announcement data: ", error);
    return null;
  }
  return data;
};
