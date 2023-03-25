import {
  CardContent,
  Card,
  IconButton,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import dnd_data from "./dnd_data";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./column";
import Person from "./tasks";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import AuthContext from "@/components/Context/store/auth-context";
import supabase from "@/supabaseClient";
import {
  fetchBatcheIdBasedOnBatchName,
  fetchTeacherIdBasedOnBatchId,
  fetchTeacherIdForBatchName,
} from "@/backend/Batches/BatchesDB";
import BatchContext from "@/components/Context/store/batch-context";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";

const activity = {
  Alif: [
    {
      activity_type: "dnd",
      identifier: "position",
      activity_ques_title:
        "Drag and drop words which have Alif at initial, middle or final position",
      dnd_data: {
        tasks: {
          "task-1": { id: "task-1", content: "فِدا" },
          "task-2": { id: "task-2", content: "الله" },
          "task-3": { id: "task-3", content: "مال" },
          "task-4": { id: "task-4", content: "سيما" },
          "task-5": { id: "task-4", content: "سيما" },
        },
        columns: {
          "column-1": {
            id: "column-1",
            name: "Drag the words and drop",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
          },
          "column-2": {
            id: "column-2",
            name: "Initian",
            taskIds: [],
          },
          "column-3": {
            id: "column-3",
            name: "Middle",
            taskIds: [],
          },
          "column-4": {
            id: "column-4",
            name: "Final",
            taskIds: [],
          },
        },
        columnOrder: ["column-1", "column-4", "column-3", "column-2"],
      },
    },
  ],
};

const returnAssignmentComponent = (assignment_type, processing_data) => {
  switch (assignment_type) {
    case "dnd":
      return <DragDropActivity dnd_data={processing_data["dnd_data"]} />;
    default:
      return;
  }
};

let finalDndData;
const getData = (data) => {
  console.log(data);
  finalDndData = data;
  return data;
};

console.log(finalDndData);
const LetterActivity = () => {
  const [assignment, setAssignment] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const [dndAvtivity, setDndActivity] = useState();

  const [batch, setBatch] = useState();
  const [teacher, setTeacher] = useState();
  const { myArray, setMyArray } = useContext(BatchContext);

  const [batchId, setBatchId] = useState();
  const [studentId, setStudentId] = useState();
  // const [statusData, setStatusData] = useState("");

  const authCtx = useContext(AuthContext);

  const id = authCtx.userEmail;
  const userType = authCtx.userType;

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
  }, [batch]);

  useEffect(() => {
    const batch = localStorage.getItem("batchName");
    setBatch(batch);
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

  console.log("techer: ", teacher);
  console.log("batch: ", batchId);
  console.log("student: ", studentId);

  //getting the URl route
  const router = useRouter();
  let alphabate;
  let activityIndex;
  let module;

  if (router.query.dnd_id) {
    module = router.query.dnd_id[0];
    alphabate = router.query.dnd_id[1];
    activityIndex = router.query.dnd_id[2];
  }

  let activityType;
  // based on the index navigating to the activities

  useEffect(() => {
    console.log(finalDndData);
  }, [finalDndData]);

  useEffect(() => {
    //teacher
    if (assignment[currentIndex] && userType === "instructor") {
      activityType = assignment[currentIndex].activity_type;
      if (activityType === "trace" && currentIndex <= +assignment.length - 1) {
        console.log("first");
        router.replace(
          `/teacher/activity/tracing/${module}/${alphabate}/${currentIndex}`
        );
      } else if (
        activityType === "dnd" &&
        currentIndex <= +assignment.length - 1
      ) {
        console.log("second");
        router.replace(
          `/teacher/activity/dnd/${module}/${alphabate}/${currentIndex}`
        );
      }
    }

    //student
    if (assignment[currentIndex] && userType === "student") {
      activityType = assignment[currentIndex].activity_type;
      if (activityType === "trace" && currentIndex <= +assignment.length - 1) {
        console.log("first");
        router.replace(
          `/student/activity/tracing/${module}/${alphabate}/${currentIndex}`
        );
      } else if (
        activityType === "dnd" &&
        currentIndex <= +assignment.length - 1
      ) {
        console.log("second");
        router.replace(
          `/student/activity/dnd/${module}/${alphabate}/${currentIndex}`
        );
      }
    }
    if (currentIndex > assignment.length - 1 && userType === "student") {
      console.log("third");
      router.replace("/student/module/alphabets");
    }

    if (currentIndex > assignment.length - 1 && userType === "instructor") {
      console.log("third");
      router.replace("/teacher/module/alphabets");
    }

    if (currentIndex > assignment.length - 1 && userType === "student") {
      if (studentId && batchId && teacher && module) {
        supabase
          .from("assignments_exp_duplicate")
          .insert({
            assignment_name: "letterPractice",
            student_id: studentId,
            batch_id: batchId,
            submission: myArray,
            module_name: module,
            sub_module: alphabate,
            teacher_id: teacher,
          })
          .then((data) => console.log(data))
          .catch((er) => console.log(er));
      }
      setMyArray([]);
      router.replace("/student/module/alphabets");
      window.location.href = "/student/module/alphabets";
    }
  }, [activityIndex, currentIndex, assignment]);

  console.log("activity type: ", activityType);
  console.log("curr index: ", currentIndex);

  //get the assignment for the selected activity
  useEffect(() => {
    console.log("inside 2");

    const fetchAssignment = async () => {
      const data = await fetchAssignmentForLetter(alphabate, module);
      if (data[0]) {
        setAssignment(data[0].assignment_json.letter);
        setCurrentIndex(activityIndex);
      }
    };
    fetchAssignment();
  }, [alphabate, activityIndex, currentIndex, module]);

  // when click on the next activity
  const handleNextButtonClick = () => {
    setCurrentIndex(+currentIndex + 1);
  };

  const submitDND = () => {
    setCurrentIndex(+currentIndex + 1);
    const newObj = { submission: finalDndData, mark: 0, remark: "" };
    setMyArray([...myArray, newObj]);
  };

  useEffect(() => {
    console.log("inside 1");
    if (assignment[activityIndex]) {
      setDndActivity(assignment[activityIndex]);
    }
  }, [assignment, activityIndex]);

  console.log(dndAvtivity);
  return (
    <div>
      {dndAvtivity &&
        activity["Alif"].map((act) => {
          console.log(act);
          return (
            <center>
              <br />
              <Card style={{ width: "100%" }}>
                <CardContent>
                  <div className="bg-dark-purple text-center text-white p-5 w-full rounded-md">
                    <h1>
                      Drag the words and drop it in Initial, Middle or Final:
                      Alif
                    </h1>
                  </div>
                  {returnAssignmentComponent(act["activity_type"], dndAvtivity)}
                </CardContent>
              </Card>
            </center>
          );
        })}
      {userType === "instructor" && (
        <button
          onClick={handleNextButtonClick}
          className="p-3 ml-4 text-white bg-dark-purple rounded-md justify-center items-center hover:bg-blue-600 hover:shadow-lg"
        >
          Next Activity
        </button>
      )}
      {userType === "student" && (
        <button
          onClick={submitDND}
          className="p-3 ml-4 text-white bg-dark-purple rounded-md justify-center items-center hover:bg-blue-600 hover:shadow-lg"
        >
          Submit Activity
        </button>
      )}
    </div>
  );
};

class DragDropActivity extends React.Component {
  state = this.props.dnd_data;

  // handling drag ends

  handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const end = this.state.columns[destination.droppableId];

    if (start === end) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    console.log("TO other column");
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(end.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...end,
      taskIds: endTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    console.log("Different column");
    console.log(newState);
    getData(newState);
    this.setState(newState);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <Container style={{ display: "flex" }}>
            <Grid container rowSpacing={6} sx={{ marginTop: "2%" }}>
              {this.state.columnOrder.map((columnid) => {
                const column = this.state.columns[columnid];
                console.log(column.taskIds);
                const tasks = column.taskIds.map((taskid) => {
                  return this.state.tasks[taskid];
                });
                console.log("Column:" + columnid);
                console.log(tasks);

                return (
                  <div className="grid grid-cols-auto">
                    <Droppable droppableId={columnid}>
                      {(provided) => (
                        <List
                          provided={provided}
                          innerRef={provided.innerRef}
                          name={column.name}
                        >
                          {tasks.map((task, key) => {
                            return (
                              <Draggable
                                draggableId={task.id}
                                index={key}
                                key={task.id}
                              >
                                {(provided, snapshot) => (
                                  <Person
                                    provided={provided}
                                    snapshot={snapshot}
                                    innerRef={provided.innerRef}
                                    task_content={task.content}
                                  />
                                )}
                              </Draggable>
                            );
                          })}

                          {provided.placeholder}
                        </List>
                      )}
                    </Droppable>
                  </div>
                );
              })}
            </Grid>
          </Container>
        </DragDropContext>
      </>
    );
  }
}

export default LetterActivity;
