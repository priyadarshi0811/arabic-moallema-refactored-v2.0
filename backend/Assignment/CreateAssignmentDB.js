import supabase from "@/supabaseClient";

export const createAssignment = async (assignmentJSON, module, subModule) => {
  const { data, error } = await supabase.from("activity").insert({
    module: module,
    sub_module: subModule,
    assignment_json: assignmentJSON,
  });

  if (error) {
    console.log("Error creating session: ", error);
    return null;
  }
};
