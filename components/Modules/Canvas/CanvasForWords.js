import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { useState } from "react";
import ColorOptions from "./ColorOptions";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import BatchContext from "@/components/Context/store/batch-context";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";
import {
  fetchBatcheIdBasedOnBatchName,
  fetchTeacherIdBasedOnBatchId,
} from "@/backend/Batches/BatchesDB";
import { fetchTeacherEmailBasedonId } from "@/backend/UserProfile/StudentTeacherProfileDB";
import supabase from "@/supabaseClient";
import BackButton from "@/components/Layout/elements/BackButton";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CanvasForWords = ({ subModule, module, activityIndex, user }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [update, setUpdate] = useState();
  const [assignment, setAssignment] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const [getColor, setColor] = useState("red");

  const [batchId, setBatchId] = useState();
  const [teacher, setTeacher] = useState();
  const [studentId, setStudentId] = useState();

  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  const id = authCtx.userEmail;
  const { myArray, setMyArray } = useContext(BatchContext);

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

  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      if (subModule && module && activityIndex) {
        const data = await fetchAssignmentForLetter(subModule, module);
        if (data[0]) {
          setAssignment(data[0].assignment_json.letter);
          setCurrentIndex(activityIndex);
        }
      }
    };
    fetchAssignment();
  }, [module, subModule, activityIndex]);

  console.log(assignment);

  let activityType;
  if (assignment[currentIndex]) {
    activityType = assignment[currentIndex].activity_type;
  }

  const changeColorPri = (colorData) => {
    //console.log(getColor);
    setColor(colorData);
  };

  let style;
  useEffect(() => {
    style = document.createElement("style");
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
  }, []);

  console.log(style);
  let canvas = canvasRef.current;
  let context;

  useEffect(() => {
    if (context) {
      console.log("in");
      setUpdate((prev) => !prev);
      context.font = "100px Noto Sans Arabic";
    }
  }, [canvas, context, style]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1120;
    canvas.height = 350;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.fillStyle = "lightgray";
    context.font = "100px Noto Sans Arabic";
    context.fillStyle = "white";
    context.textAlign = "center";

    context.lineWidth = 8;
    if (assignment[currentIndex] && activityType === "color_huruf") {
      const traceData = assignment[currentIndex].trace_data;
      traceData &&
        traceData.forEach((value, index) => {
          // set the position of each letter based on its index in the traceData array
          let x, y;
          if (index === 0) {
            y = 120;
            x = 320;
          } else if (index === 1) {
            y = 280;
            x = 550;
          } else {
            y = 120;
            x = 770;
          }

          // stroke the text
          context.strokeText(value, x, y);
          // fill the text
          context.fillText(value, x, y);
        });
    }

    contextRef.current = context;
  }, [update, activityType, assignment, style]);

  useEffect(() => {
    if (contextRef.current) {
      console.log("ini");
      contextRef.current.strokeStyle = getColor;
    }
  }, [getColor, contextRef, activityType, update, assignment]);

  console.log(getColor);
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    console.log("new");
    canvasRef.current.strokeStyle = getColor;
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

  const handleNextButtonClick = () => {
    setCurrentIndex(+currentIndex + 1);
  };
  const saveImageToLocal = () => {
    setCurrentIndex(+currentIndex + 1);

    let image = canvasRef.current.toDataURL("image/png");
    // setImage(image);

    const newObj = { submission: image, mark: 0, remark: "" };
    setMyArray([...myArray, newObj]);
  };

  let activityTypeNew;
  useEffect(() => {
    //teacher
    if (assignment[currentIndex] && userType === "instructor") {
      activityTypeNew = assignment[currentIndex].activity_type;
      if (activityTypeNew && currentIndex <= +assignment.length - 1) {
        console.log("first");
        router.replace(
          `/teacher/activity/${activityTypeNew}/${module}/${subModule}/${currentIndex}`
        );
      }
    }

    if (currentIndex > assignment.length - 1 && userType === "instructor") {
      console.log("third");
      window.location.href = `/teacher/module/${module}/${subModule}`;
    }

    //student
    if (assignment[currentIndex] && userType === "student") {
      activityTypeNew = assignment[currentIndex].activity_type;
      if (
        activityTypeNew &&
        currentIndex <= +assignment.length - 1 &&
        module &&
        subModule &&
        currentIndex
      ) {
        console.log("first");
        router.push(
          `/student/activity/${activityTypeNew}/${module}/${subModule}/${currentIndex}`
        );
        router.push(
          `/student/activity/${activityTypeNew}/${module}/${subModule}/${currentIndex}`
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

      router.replace(`/student/module/${module}/${subModule}`);
      router.replace(`/student/module/${module}/${subModule}`);
    }
  }, [activityIndex, currentIndex, assignment]);

  return (
    <>
      <div className="pt-5">
        <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-5">
        <h1 className="mx-5 text-white text-lg">
          Arabic Alphabets : How to Read
        </h1>
        <div>
          

          <Link href={`/${user}/module/${module}/${subModule}`} className="mx-5">
            <Button
              variant="contained"
              className="bg-white text-dark-purple"
              startIcon={<ArrowBackIcon />}
            >
              Back To Main Module
            </Button>
          </Link>
        </div>
        </div>
        <div className="bg-white py-10 mx-10 rounded-xl ">
          <div className="w-full cursor-cell flex justify-center pt-5 ">
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
          <div className="mt-2 flex justify-center items-center ">
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
            <ColorOptions finalColor={changeColorPri} />
          </div>
        </div>
        <div className="my-5 w-full flex justify-center ">
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
              className="p-3 ml-4 bg-white text-dark-purple rounded-md  hover:bg-blue-600 hover:shadow-lg border-2 border-slate-100  "
              style={{ backgroundColor: "white " }}
            >
              Next Activity
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default CanvasForWords;
