import supabase from "@/supabaseClient";

export const createAssignment = async (assignmentJSON) => {
  const { data, error } = await supabase
    .from("activity")
    .insert({
      module: "Alphabates",
      sub_module: "Alif",
      assignment_json: assignmentJSON,
    })

  if (error) {
    console.log("Error creating session: ", error);
    return null;
  }
};
