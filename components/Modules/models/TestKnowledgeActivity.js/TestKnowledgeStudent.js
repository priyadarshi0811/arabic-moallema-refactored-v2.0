import {
  fetchBatcheIdBasedOnBatchName,
  fetchTeacherIdBasedOnBatchId,
} from "@/backend/Batches/BatchesDB";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";
import AuthContext from "@/components/Context/store/auth-context";
import BatchContext from "@/components/Context/store/batch-context";
import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

const TestKnowledgeStudent = ({ user, subModule, module, activityIndex }) => {
  const [batchId, setBatchId] = useState();
  const [teacher, setTeacher] = useState();
  const [studentId, setStudentId] = useState();

  const { myArray, setMyArray } = useContext(BatchContext);

  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;

  const id = authCtx.userEmail;
  useEffect(() => {
    const getId = async () => {
      if (id) {
        const data = await fetchStudentIdBasedOnEmail(id);
        if (data[0]) {
          setStudentId(data[0].student_id);
        }
      }
    };
    getId();
  }, [id]);

  useEffect(() => {
    const getId = async () => {
      const batch = localStorage.getItem("batchName");
      const data = await fetchBatcheIdBasedOnBatchName(batch);
      if (data[0]) {
        setBatchId(data[0].batch_id);
      }
    };
    getId();
  }, []);

  useEffect(() => {
    const fetchTeacher = async () => {
      if (batchId) {
        const data = await fetchTeacherIdBasedOnBatchId(batchId);
        if (data[0]) {
          setTeacher(data[0].teacher_id);
        }
      }
    };
    fetchTeacher();
  }, [batchId]);
  console.log(myArray);

  useEffect(() => {
    if (studentId && batchId && teacher && module && subModule) {
      supabase
        .from("assignments_exp_duplicate")
        .insert({
          assignment_name: "letterPractice",
          student_id: studentId,
          batch_id: batchId,
          submission: myArray,
          module_name: module,
          sub_module: subModule,
          teacher_id: teacher,
        })
        .then((data) => console.log(data))
        .catch((er) => console.log(er));
      setMyArray([]);
    }

    router.replace(`/student/module/${module}/${subModule}`);
    router.replace(`/student/module/${module}/${subModule}`);
  }, [studentId, batchId, teacher, module, subModule]);

  return <div></div>;
};

export default TestKnowledgeStudent;
