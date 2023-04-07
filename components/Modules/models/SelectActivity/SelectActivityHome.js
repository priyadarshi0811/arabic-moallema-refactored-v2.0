import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";
import BatchContext from "@/components/Context/store/batch-context";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";
import {
  fetchBatcheIdBasedOnBatchName,
  fetchTeacherIdBasedOnBatchId,
} from "@/backend/Batches/BatchesDB";
import supabase from "@/supabaseClient";

const SelectActivityHome = ({ subModule, module, activityIndex }) => {
  const [assignment, setAssignment] = useState([]);

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [selectData, setSelectData] = useState([]);

  const [batchId, setBatchId] = useState();
  const [teacher, setTeacher] = useState();
  const [studentId, setStudentId] = useState();

  const [currentIndex, setCurrentIndex] = useState();
  const { myArray, setMyArray } = useContext(BatchContext);
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const userType = authCtx.userType;

  const [selectedOption, setSelectedOption] = useState(null);

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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  console.log(selectedOption);
  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      if (subModule && module) {
        const data = await fetchAssignmentForLetter(subModule, module);
        if (data[0]) {
          setAssignment(data[0].assignment_json.letter);
          setCurrentIndex(activityIndex);
        }
      }
    };
    fetchAssignment();
  }, [module, subModule]);

  useEffect(() => {
    if (assignment.length > 0 && currentIndex <= assignment.length - 1) {
      setQuestion(assignment[currentIndex].question);
      setSelectData(assignment[currentIndex].select_data);
    }
  }, [assignment, activityIndex, currentIndex]);

  const handleNext = () => {
    setCurrentIndex(+currentIndex + 1);

    const submissionObject = {
      question: question,
      selectData: selectData,
      selectedOption: selectedOption,
    };

    const newObj = { submission: submissionObject, mark: 0, remark: "" };

    setMyArray([...myArray, newObj]);
  };

  console.log(myArray);
  let activityType;

  useEffect(() => {
    //teacher
    // if (assignment[currentIndex] && userType === "instructor") {
    //   activityType = assignment[currentIndex].activity_type;
    //   if (activityType === "trace" && currentIndex <= +assignment.length - 1) {
    //     console.log("first");
    //     // router.replace(
    //     //   `/teacher/activity/tracing/${module}/${subModule}/${currentIndex}`
    //     // );
    //     window.location.href = `/teacher/activity/tracing/${module}/${subModule}/${currentIndex}`;
    //   } else if (
    //     activityType === "dnd" &&
    //     currentIndex <= +assignment.length - 1
    //   ) {
    //     console.log("second");
    //     router.replace(
    //       `/teacher/activity/dnd/${module}/${subModule}/${currentIndex}`
    //     );
    //   }
    // }

    //student
    if (assignment[currentIndex] && userType === "student") {
      activityType = assignment[currentIndex].activity_type;
      if (
        activityType === "trace" &&
        currentIndex <= +assignment.length - 1 &&
        module &&
        subModule &&
        currentIndex
      ) {
        console.log("first");
        router.push(
          `/student/activity/tracing/${module}/${subModule}/${currentIndex}`
        );
        router.push(
          `/student/activity/tracing/${module}/${subModule}/${currentIndex}`
        );
        // window.location.href = `/student/activity/tracing/${module}/${subModule}/${currentIndex}`;
      } else if (
        activityType === "dnd" &&
        currentIndex <= +assignment.length - 1
      ) {
        console.log("second");
        router.push(
          `/student/activity/dnd/${module}/${subModule}/${currentIndex}`
        );
        router.push(
          `/student/activity/dnd/${module}/${subModule}/${currentIndex}`
        );
        // window.location.href = `/student/activity/dnd/${module}/${subModule}/${currentIndex}`;
      } else if (
        activityType === "match" &&
        currentIndex <= +assignment.length - 1
      ) {
        console.log("second");
        router.push(
          `/student/activity/match/${module}/${subModule}/${currentIndex}`
        );
        router.push(
          `/student/activity/match/${module}/${subModule}/${currentIndex}`
        );

        // window.location.href = `/student/activity/dnd/${module}/${subModule}/${currentIndex}`;
      } else if (
        activityType === "select" &&
        currentIndex <= +assignment.length - 1
      ) {
        console.log("second");
        router.push(
          `/student/activity/select/${module}/${subModule}/${currentIndex}`
        );
        router.push(
          `/student/activity/select/${module}/${subModule}/${currentIndex}`
        );

        // window.location.href = `/student/activity/dnd/${module}/${subModule}/${currentIndex}`;
      }
    }
    if (currentIndex > assignment.length - 1 && userType === "student") {
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
      }
      setMyArray([]);

      if (module === "harakat") {
        router.replace("/student/module/harakat/fatahah");
        router.replace("/student/module/harakat/fatahah");
      }
      if (module === "alphabets") {
        router.replace("/student/module/alphabets");
        router.replace("/student/module/alphabets");
      }
      // window.location.href = "/student/module/alphabets";
    }
  }, [activityIndex, currentIndex, assignment]);

  console.log(assignment);
  console.log(selectData);
  return (
    <>
      <div className="mx-auto max-w-lg mt-44">
        <Card className="mb-4 shadow-lg" variant="outlined">
          <CardContent>
            <Typography
              className=" text-xl font-semibold  mt-8  text-gray-600"
              variant="h5"
            >
              Q.{index + 1} {question && question}
            </Typography>
            <Grid container spacing={1} mt={2} className=" mt-8">
              {selectData &&
                selectData.map((option, index) => (
                  <Grid item key={index}>
                    <div
                      className={`bg-orange-400 shadow-lg ml-20 rounded-lg px-4 py-2 ${
                        selectedOption === option ? "bg-green-400" : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <Typography
                        className=" text-white font-extrabold "
                        variant="h6"
                      >
                        {option}
                      </Typography>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </CardContent>
        </Card>

        <button
          className="my-10 flex justify-around mr-10 px-4 py-2 bg-orange-500 text-white rounded-sm shadow-lg hover:bg-orange-700"
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default SelectActivityHome;
