import supabase from "@/supabaseClient";

export const fetchStudentTeacherProfile = async (role, email) => {
  const { data, error } = await supabase
    .from(role)
    .select("*")
    .eq("email", email);
  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  console.log(data);
  return data;
};

export const fetchStudentBasedonEmail = async (emailId) => {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .match({ email: emailId });

  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  return data;
};

export const fetchTeachersBasedonEmail = async (emailId) => {
  const { data, error } = await supabase
    .from("teachers")
    .select("*")
    .match({ email: emailId });
  if (error) {
    console.log("Error fetching students data: ", error);
    return null;
  }
  return data;
};
