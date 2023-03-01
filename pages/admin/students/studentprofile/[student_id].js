import React from "react";
import { useRouter } from "next/router";
import StudentProfile from "@/components/user/admin/Student/StudentProfile";

const index = () => {
  const router = useRouter();

  let id;
  if (router.query.student_id) {
    id = router.query.student_id;
    console.log(id);
  }

  return <>{id && <StudentProfile email={id} />}</>;
};

export default index;
