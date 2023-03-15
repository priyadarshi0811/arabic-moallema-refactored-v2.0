import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import ClassForStudent from "@/components/user/student/ClassForStudent";
import { fetchBatchNameForStudent } from "@/backend/Batches/BatchesForTeachersStudentsDB";

const index = () => {
  const [batchName, setBatchName] = useState();
  const authCtx = useContext(AuthContext);
  const email = authCtx.userEmail;

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
