import BatchDetailTeacher from "@/components/user/teacher/batchesTeacher/batchDetailTeacher";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  let batchName;
  if (router.query.batch_id_teacher) {
    batchName = router.query.batch_id_teacher;
  }
  console.log(batchName);

  return <div>{batchName && <BatchDetailTeacher batchName={batchName} />}</div>;
};

export default index;
