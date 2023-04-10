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
import Link from "next/link";

const SelectActivityHome = ({ subModule, module, activityIndex }) => {
  const [assignment, setAssignment] = useState([]);

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [audioUrl, setAudioUrl] = useState();

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
      console.log("inside useEffect");
      setQuestion(assignment[currentIndex].question);
      setSelectData(assignment[currentIndex].select_data);
      setAudioUrl(assignment[currentIndex].recorded_audio);
    }
  }, [assignment, activityIndex, currentIndex, userType, module]);

  console.log("options: ", selectData);
  console.log("question: ", question);
  console.log("assignment: ", assignment);
  console.log("user type: ", userType);
  console.log("currentIndex: ", currentIndex);

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
    if (assignment[currentIndex] && userType === "instructor") {
      activityType = assignment[currentIndex].activity_type;
      if (activityType && currentIndex <= +assignment.length - 1) {
        console.log("first");
        router.replace(
          `/teacher/activity/${activityType}/${module}/${subModule}/${currentIndex}`
        );
      }
    }

    if (currentIndex > assignment.length - 1 && userType === "instructor") {
      console.log("third");
      window.location.href = `/teacher/${module}/${subModule}/fatahah`;
    }

    //student
    if (assignment[currentIndex] && userType === "student") {
      activityType = assignment[currentIndex].activity_type;
      if (
        activityType &&
        currentIndex <= +assignment.length - 1 &&
        module &&
        subModule &&
        currentIndex
      ) {
        console.log("first");
        router.push(
          `/student/activity/${activityType}/${module}/${subModule}/${currentIndex}`
        );
        router.push(
          `/student/activity/${activityType}/${module}/${subModule}/${currentIndex}`
        );
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

      router.replace(`/student/module/${module}/${subModule}`);
      router.replace(`/student/module/${module}/${subModule}`);
    }
  }, [activityIndex, currentIndex, assignment]);

  // when click on the next activity
  const handleNextButtonClick = () => {
    setCurrentIndex(+currentIndex + 1);
    console.log("clicked");
  };

  return (
    <>
      <div className="mx-auto mt-8">
        <Card className="mb-4 shadow-lg w-full">
          <CardContent className="">
            <div className=" flex items-center justify-center mb-5">
              <h1 className="text-2xl text-dark-purple">
                Q.{index + 1} {question && question}
              </h1>
            </div>

            {/* <Grid container spacing={1} mt={2} className=" mt-8"> */}
            <div className=" mt-8 flex flex-wrap justify-stretch justify-center ">
              {selectData &&
                selectData.map((option, index) => (
                  <div className=" " key={index}>
                    <div
                      className={` shadow-lg w-64   cursor-pointer  m-5 rounded-lg px-4 py-2 ${
                        selectedOption === option
                          ? "bg-dark-purple text-white"
                          : "bg-white text-dark-purple"
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <h1 className="  text-3xl font-sans m-3 py-2">
                        {option}
                      </h1>
                    </div>
                  </div>
                ))}

              {/* <div className="">
                <div
                  className={`bg-orange-400 shadow-lg w-64  m-5 rounded-lg px-4 py-2`}
                >
                  <h1 className=" text-white font-extrabold m-3">test</h1>
                </div>
              </div> */}
            </div>
          </CardContent>
        </Card>

        {/* <button
          className="my-10 flex justify-around mr-10 px-4 py-2 bg-orange-500 text-white rounded-sm shadow-lg hover:bg-orange-700"
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          Submit
        </button> */}
        {/* <Link href={`/student/activity/select/harakat/Fatah/2`}> */}
        {userType === "student" && (
          <Button
            onClick={handleNext}
            variant="contained"
            className="text-dark-purple bg-white mt-10 mx-3"
            style={{ marginRight: 10 }}
          >
            Submit Activity
          </Button>
        )}

        {userType !== "student" && (
          <Button
            onClick={handleNextButtonClick}
            className=" mt-4 p-3 ml-4 text-white bg-dark-purple rounded-md  hover:bg-blue-600 hover:shadow-lg border-2 border-slate-100  "
            // style={{ backgroundColor: "white " }}
          >
            Next Activity
          </Button>
        )}
      </div>
    </>
  );
};

export default SelectActivityHome;
