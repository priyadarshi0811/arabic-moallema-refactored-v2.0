import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import ClassForStudent from "@/components/user/student/ClassForStudent";
import { fetchBatchNameForStudent } from "@/backend/Batches/BatchesForTeachersStudentsDB";
import { useRouter } from "next/router";

const index = () => {
  const [batchName, setBatchName] = useState();
  const authCtx = useContext(AuthContext);
  const email = authCtx.userEmail;

  const router = useRouter();
  const type = authCtx.userType;

  const loggedIn = authCtx.isLoggedIn;

  const typeStudent = authCtx.userType === "student" ? true : false;

  if (!typeStudent && loggedIn) {
    router.replace("/");
  }

  useEffect(() => {
    console.log("in");
    if (typeStudent && loggedIn) {
      if (!typeStudent && !loggedIn) {
        console.log("second in");
        router.replace("/");
      }
    }

    const localType = localStorage.getItem("type");

    if (localType !== "student") {
      console.log("second in");
      router.replace("/");
    }
  }, [loggedIn, typeStudent]);

  useEffect(() => {
    const fetchBatch = async () => {
      const data = await fetchBatchNameForStudent(email);
      if (data[0]) {
        setBatchName(data[0].batch_id);
      }
    };
    fetchBatch();
  }, [email]);

  console.log("batch: ", batchName);
  return (
    <>
      <ClassForStudent batchName={batchName} />
    </>
  );
};

export default index;
