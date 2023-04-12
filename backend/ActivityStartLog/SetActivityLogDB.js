import supabase from "@/supabaseClient";

export const addActivityStartStatus = async (module, subModule, batch) => {
  const { data, error } = await supabase
    .from("exp_duplicate_teacher_activity_log")
    .insert({
      module: module,
      sub_module: subModule,
      batch_id: batch,
      is_open_for_activity: true,
    })
    .select();

  if (error) {
    console.log("Error creating Activity Log: ", error);
    return null;
  }
  return data;
};

export const checkActivityStartStatus = async (module, subModule, batch) => {
  const { data, error } = await supabase
    .from("exp_duplicate_teacher_activity_log")
    .select("is_open_for_activity")
    .match({
      module: module,
      sub_module: subModule,
      batch_id: batch,
    });

  if (error) {
    console.log("Error creating Activity Log: ", error);
    return null;
  }
  return data;
};
