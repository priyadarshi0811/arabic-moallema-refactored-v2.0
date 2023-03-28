import AuthContext from "@/components/Context/store/auth-context";
import supabase from "@/supabaseClient";
import { useContext, useEffect, useRef, useState } from "react";

import { Button, ButtonGroup, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { PhotoCamera } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import index from "@/pages/admin";
import BatchContext from "@/components/Context/store/batch-context";
import {
  fetchBatcheIdBasedOnBatchName,
  fetchTeacherIdBasedOnBatchId,
  fetchTeacherIdForBatchName,
} from "@/backend/Batches/BatchesDB";
import WarningCard from "@/components/Layout/card/WarningCard";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";

const DrawingCanvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
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
  }, []);

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
  console.log("id: ", props.id);
  console.log("module: ", props.module);

  const [isDrawing, setIsDrawing] = useState(false);
  const [image, setImage] = useState(false);
  const [assignment, setAssignment] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();

  /***************fetch assignment**************************** */
  //getting the URl route
  const router = useRouter();
  let letterName;
  let index;

  if (router.query.alphabateDetail) {
    letterName = router.query.alphabateDetail[1];
    index = router.query.alphabateDetail[2];
  }

  let activityType;
  if (assignment[currentIndex]) {
    activityType = assignment[currentIndex].activity_type;
  }

  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      if (props.id && props.module) {
        const data = await fetchAssignmentForLetter(props.id, props.module);
        if (data[0]) {
          setAssignment(data[0].assignment_json.letter);
          setCurrentIndex(index);
        }
      }
    };
    fetchAssignment();
  }, [props.module, props.id]);

  console.log(assignment);
  console.log(props.id);
  //if no avtivities then navigate to modules
  useEffect(() => {
    if (currentIndex > assignment.length - 1 && userType === "instructor") {
      router.replace("/teacher/module/alphabets");
    }
    if (currentIndex > assignment.length - 1 && userType === "student") {
      router.replace("/student/module/alphabets");
    }
    if (currentIndex > assignment.length - 1 && userType === "student") {
      if (studentId && batchId && teacher && props.module) {
        supabase
          .from("assignments_exp_duplicate")
          .insert({
            assignment_name: "letterPractice",
            student_id: studentId,
            batch_id: batchId,
            submission: myArray,
            module_name: props.module,
            sub_module: props.id,
            teacher_id: teacher,
          })
          .then((data) => console.log(data))
          .catch((er) => console.log(er));
      }
      setMyArray([]);
      router.replace("/student/module/alphabets");
      window.location.href = "/student/module/alphabets";
    }
  }, [currentIndex]);

  console.log("Assignment: ", assignment);

  //navigating to DND Activity
  const handleNextButtonClick = () => {
    setCurrentIndex(+currentIndex + 1);
    if (activityType === "dnd" && userType === "instructor") {
      console.log("teacher");
      router.replace(
        `/teacher/activity/dnd/${props.module}/${props.id}/${currentIndex}`
      );
    }
  };

  console.log("current Index: ", currentIndex);

  //****************canvas Logic******************* */

  let canvas = canvasRef.current;
  // var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  // var width = (window.innerWidth * 3) / 5;

  let context;
  if (canvas) {
    context = canvas.getContext("2d");
  }
  let style = document.createElement("style");
  style.innerHTML = `
  @font-face {
    font-family: 'Noto Sans Arabic';
    font-style: normal;
    font-weight: 400;
    font-stretch: 100%;
    src: url(https://fonts.gstatic.com/s/notosansarabic/v18/nwpxtLGrOAZMl5nJ_wfgRg3DrWFZWsnVBJ_sS6tlqHHFlhQ5l3sQWIHPqzCfyGyfuXqA.woff2) format('woff2');
    unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/ubuntumono/v15/KFOjCneDtsqEr0keqCMhbCc3CsTKlA.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  `;
  document.head.appendChild(style);
  
  useEffect(() => {
    if (assignment && assignment.length > 0) {
      canvas = canvasRef.current;
      canvas.width = 1120;
      canvas.height = 280;

      context = canvas.getContext("2d");
      context.lineCap = "round";

      context.font = "100px 'Noto Sans Arabic'";
      // context.font = "150px Arial";

      context.fillStyle = "lightgray";

      // Align the text horizontally and vertically
      context.textAlign = "center";

      if (assignment[currentIndex] && activityType !== "dnd") {
        const traceData = assignment[currentIndex].trace_data;
        traceData.map((value, index) =>
          context.fillText(value, 200 * index + 400, 180)
        );
      } else if (activityType === "dnd" && userType === "instructor") {
        router.replace(
          `/teacher/activity/dnd/${props.module}/${props.id}/${currentIndex}`
        );
      } else if (activityType === "dnd" && userType === "student") {
        router.replace(
          `/student/activity/dnd/${props.module}/${props.id}/${currentIndex}`
        );
      }

      context.lineWidth = 5;
      contextRef.current = context;
    }
  }, [id, props.symbol, assignment, currentIndex]);

  if (context) {
    context.strokeStyle = "black";
  }
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const setToDraw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };

  const setToErase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };
  const setToClear = () => {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
    context.lineWidth = 5;
  };

  const saveImageToLocal = () => {
    setCurrentIndex(+currentIndex + 1);

    let image = canvasRef.current.toDataURL("image/png");
    setImage(image);

    const newObj = { submission: image, mark: 0, remark: "" };
    setMyArray([...myArray, newObj]);
  };

  const canvasBg = props.bgImg;
  console.log("CanVas", canvasBg);

  return (
    <>
      {assignment && assignment.length > 0 && (
        <div>
          <div className="w-full cursor-cell flex justify-center ">
            <canvas
              className="bg-white border-2 rounded-lg shadow-lg border-1"
              style={{
                // backgroundImage: `url(${alifV.src})`,
                backgroundRepeat: "repeat-x",
              }}
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            ></canvas>
          </div>
          <div className="mt-8 ">
            <h1>{props.bgImg} </h1>

            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={setToDraw}
                className="bg-dark-purple"
                startIcon={<EditIcon />}
              >
                Draw
              </Button>
              <Button
                onClick={setToErase}
                className="bg-dark-purple"
                startIcon={<CleaningServicesIcon />}
              >
                Erase
              </Button>
              <Button
                onClick={setToClear}
                className="bg-dark-purple"
                startIcon={<DeleteForeverIcon />}
              >
                Clear
              </Button>
            </ButtonGroup>

            <div className="mt-5">
              {userType !== "instructor" && (
                <button
                  className="p-3 ml-4 text-white bg-red-500 rounded-md hover:bg-red-600 hover:shadow-lg"
                  onClick={saveImageToLocal}
                >
                  Submit Activity
                </button>
              )}

              {userType !== "student" && (
                <Button
                  onClick={handleNextButtonClick}
                  className="p-3 ml-4 text-white bg-dark-purple rounded-md  hover:bg-blue-600 hover:shadow-lg"
                >
                  Next Activity
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      {assignment && assignment.length === 0 && (
        <WarningCard title={`Asssignment not created for ${props.id}`} />
      )}
    </>
  );
};

export default DrawingCanvas;
