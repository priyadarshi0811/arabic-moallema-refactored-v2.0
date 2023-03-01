import supabase from "@/supabaseClient";

export const createNewModule = async (moduleName, obj) => {
  const { data, error } = await supabase.from("modules").insert({
    module_name: moduleName,
    section_decription: obj,
  });

  if (error) {
    console.log("Error creating module: ", error);
    return null;
  }
  console.log(error);
};
