import React, { useEffect, useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button, Container } from "@mui/material";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import BatchContext from "@/components/Context/store/batch-context";
import {
  fetchBatcheIdBasedOnBatchName,
  fetchTeacherIdBasedOnBatchId,
} from "@/backend/Batches/BatchesDB";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";
import supabase from "@/supabaseClient";
import Link from "next/link";

// const options = ["apple", "banana", "Gvava"];
// const context = ["red", "yellow", "Green"];

const MatchDndHome = ({ subModule, module, activityIndex }) => {
  const [assignment, setAssignment] = useState([]);
  const [items, setItems] = useState();
  const [batchId, setBatchId] = useState();
  const [teacher, setTeacher] = useState();
  const [studentId, setStudentId] = useState();

  const [options, setOptions] = useState();
  const [context, setContext] = useState();
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState();

  const { myArray, setMyArray } = useContext(BatchContext);

  console.log(myArray);
  const authCtx = useContext(AuthContext);
  const router = useRouter();
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

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = [...items];
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

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

  console.log(currentIndex);
  useEffect(() => {
    if (assignment.length > 0 && currentIndex <= assignment.length - 1) {
      console.log("insdf");
      setOptions(assignment[currentIndex].option_data);

      setOptions(assignment[currentIndex].context_data);
      setItems(assignment[currentIndex].option_data);
    }
  }, [assignment, currentIndex, activityIndex]);

  let activityType;
  console.log(module);
  useEffect(() => {
    //teacher
    if (assignment[currentIndex] && userType === "instructor") {
      activityType = assignment[currentIndex].activity_type;
      if (activityType === "trace" && currentIndex <= +assignment.length - 1) {
        console.log("first");
        router.replace(
          `/teacher/activity/tracing/${module}/${subModule}/${currentIndex}`
        );
      } else if (
        activityType === "dnd" &&
        currentIndex <= +assignment.length - 1
      ) {
        console.log("second");
        router.replace(
          `/teacher/activity/dnd/${module}/${subModule}/${currentIndex}`
        );
      } else if (
        activityType === "match" &&
        currentIndex <= +assignment.length - 1
      ) {
        console.log("second");
        router.replace(
          `/teacher/activity/match/${module}/${subModule}/${currentIndex}`
        );
      } else if (
        activityType === "select" &&
        currentIndex <= +assignment.length - 1
      ) {
        console.log("second");
        router.replace(
          `/teacher/activity/select/${module}/${subModule}/${currentIndex}`
        );
      }
    }

    if (
      currentIndex > assignment.length - 1 &&
      userType === "instructor" &&
      module === "harakat"
    ) {
      console.log("third");
      window.location.href = "/teacher/module/harakat/fatahah";
    }

    if (
      currentIndex > assignment.length - 1 &&
      userType === "instructor" &&
      module === "alphabets"
    ) {
      console.log("third");
      window.location.href = "/teacher/module/alphabets";
    }

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
      }
    }
    console.log("ins");

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
    }
  }, [activityIndex, currentIndex, assignment]);

  const nextActivityHandler = () => {
    setCurrentIndex(+currentIndex + 1);

    let submissionObject = {
      context: items,
      options: options,
    };

    console.log(submissionObject);
    const newObj = { submission: submissionObject, mark: 0, remark: "" };
    setMyArray([...myArray, newObj]);
  };

  // when click on the next activity
  const handleNextButtonClick = () => {
    setCurrentIndex(+currentIndex + 1);
  };
  console.log(assignment);
  return (
    <>
      {options && (
        <div className=" ">
          <div className=" flex items-center justify-center">
            <h1 className="text-2xl text-dark-purple">
              Drag the left card to match the following..
            </h1>
          </div>
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              boxShadow: 4,
              marginTop: 5,
              borderRadius: 5,
              paddingY: 5,
            }}
          >
            <div className="w-1/2 ">
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable-context">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="p-4"
                    >
                      <h1>Context</h1>
                      {items.map((item, index) => (
                        <Draggable
                          key={item}
                          draggableId={item}
                          index={index}
                          isDragDisabled={options.includes(item)}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="shadow-md py-5 rounded-xl my-2 font-sans bg-dark-purple text-white text-2xl ">
                                {item}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            <div className="w-1/2 bg-white">
              <div className="p-4">
                <h1>Options</h1>

                {options.map((item, index) => (
                  <div
                    key={item}
                    className="shadow-md py-5 rounded-xl my-2 text-2xl font-sans bg-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
          <div>
            {userType === "student" && (
              <Button
                variant="contained"
                className="text-dark-purple bg-white mt-10"
                onClick={nextActivityHandler}
              >
                Submit Activity
              </Button>
            )}
            {userType !== "student" && (
              <Button
                onClick={handleNextButtonClick}
                className=" mt-4 p-3 ml-4 bg-white text-dark-purple rounded-md  hover:bg-blue-600 hover:shadow-lg border-2 border-slate-100  "
                style={{ backgroundColor: "white " }}
              >
                Next Activity
              </Button>
            )}
       
          </div>
        </div>
      )}
    </>
  );
};

export default MatchDndHome;
