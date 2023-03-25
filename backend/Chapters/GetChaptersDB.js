import supabase from "@/supabaseClient";

export const fetchChapters = async () => {
  const { data, error } = await supabase
    .from("chapters_exp_duplicate")
    .select("*");
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchChapterIdBasedOnChapterName = async (chapterName) => {
  const { data, error } = await supabase
    .from("chapters_exp_duplicate")
    .select("chapter_id")
    .match({ chapter_name: chapterName });
    
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
