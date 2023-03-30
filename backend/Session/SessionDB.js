import supabase from "@/supabaseClient";

export const postSessionData = async (
  currTime,
  // moduleName,
  attendanceList,
  batchId,
  teacherId,
  chapterName,
  status,
  finalVideo
) => {
  const { data, error } = await supabase
    .from("session_exp_duplicate")
    .insert({
      starting_time: currTime,
      // module_name: moduleName,
      students_present: { students: attendanceList },
      batch_id: batchId,
      teacher_id: teacherId,
      chapter_completion_status: status,
      chapter_id: chapterName,
      recorded_video: finalVideo,
    })
    .select();

  if (error) {
    console.log("Error creating session: ", error);
    return null;
  }
  return data;
};

export const fetchSessionAttendance = async (
  batch_id,
  session_id,
  chapter_id
) => {
  const { data, error } = await supabase
    .from("session_exp_duplicate")
    .select("students_present")
    .match({
      batch_id: batch_id,
      session_id: session_id,
      chapter_id: chapter_id,
    });
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSessionRecording = async (
  batch_id,
  session_id,
  chapter_id
) => {
  const { data, error } = await supabase
    .from("session_exp_duplicate")
    .select("recorded_video")
    .match({
      batch_id: batch_id,
      session_id: session_id,
      chapter_id: chapter_id,
    });
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSessionData = async (batch_id, chapter_id) => {
  const { data, error } = await supabase
    .from("session_exp_duplicate")
    .select("*")
    .match({
      batch_id: batch_id,
      chapter_id: chapter_id,
    });
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};

export const fetchSessionDataForBatch = async (batch_id) => {
  const { data, error } = await supabase
    .from("session_exp_duplicate")
    .select("*")
    .match({
      batch_id: batch_id,
    });
  if (error) {
    console.log("Error fetching batches data: ", error);
    return null;
  }
  return data;
};
