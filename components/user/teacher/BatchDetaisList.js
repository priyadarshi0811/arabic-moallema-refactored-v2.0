import * as React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import InputWithLable from "@/components/Layout/elements/InputWithLable";
import AttandanceListStudent from "@/components/user/teacher/AttandanceList";
import { LinkOff } from "@mui/icons-material";

import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchBatchesData } from "@/backend/Announcement/AnnouncementDB";
import {
  fetchBatcheIdBasedOnBatchName,
  fetchBatchesSchedule,
  fetchEnrolledStudentsInBatch,
  fetchIndividualBatch,
} from "@/backend/Batches/BatchesDB";
import {
  deleteLiveClass,
  postLiveClassData,
} from "@/backend/LiveClass/LiveClassDB";
import { postSessionData } from "@/backend/Session/SessionDB";
import { fetchChapters } from "@/backend/Chapters/GetChaptersDB";
import BatchContext from "@/components/Context/store/batch-context";
import { chapterCompletedBatch } from "@/backend/Chapters/ChapterCompletedDB";
import { useRouter } from "next/router";
import { fetchStudentsData } from "@/backend/Students/StudentDB";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Spinner from "@/components/Layout/spinner/Spinner";
import { useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ClassDetais = ({ batchName, user }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const navigate = useNavigate();

  const [batchDetail, setBatchDetail] = React.useState([]);
  const [enrollStudentsId, setEnrollStudentsId] = React.useState([]);
  const [allStudents, setAllStudents] = React.useState([]);

  const [scheduleDetail, setScheduleDetail] = React.useState();
  const [chapters, setChapters] = React.useState([]);
  const [allChapters, setAllChapters] = React.useState();

  const [isDisabled, setIsDisabled] = React.useState(false);
  const [batchId, setBatchId] = React.useState();
  const [getModuleName, setModuleName] = React.useState();

  const [recording, setRecording] = React.useState(false);

  const batchCtx = React.useContext(BatchContext);
  const attendanceList = batchCtx.attendanceList;
  let newAttendance;
  if (attendanceList) {
    newAttendance = attendanceList.map((obj) => obj.student_id);
  }
  console.log(newAttendance);
  console.log(attendanceList);

  React.useEffect(() => {
    const getChapters = async () => {
      const data = await fetchChapters();
      setAllChapters(data);
    };
    getChapters();
  }, []);

  React.useEffect(() => {
    const getChaptersName = async () => {
      if (allChapters && chapters) {
        let name = allChapters
          .filter((item) => item.chapter_id === +chapters)
          .map((item2) => item2.chapter_name);

        setModuleName(name[0]);
      }
    };
    getChaptersName();
  }, [allChapters, chapters]);
  console.log(chapters);
  console.log(getModuleName);

  //getting the data of batches
  React.useEffect(() => {
    const fetchBatches = async () => {
      const data = await fetchBatchesData();
      setBatchDetail(data);
    };
    fetchBatches();
  }, []);

  //getting batches schedule
  React.useEffect(() => {
    const batchSchedule = async () => {
      const data = await fetchBatchesSchedule();
      setScheduleDetail(JSON.stringify(data, null, 2));
    };
    batchSchedule();
  }, []);

  //getting the batch id
  React.useEffect(() => {
    const setBatchIdData = async () => {
      const idData = await fetchBatcheIdBasedOnBatchName(batchName);
      if (idData[0]) {
        setBatchId(idData[0].batch_id);
        console.log(idData[0].batch_id);
      }
    };
    setBatchIdData();
  }, [batchName]);
  console.log(batchId);

  //getting the students ids
  React.useEffect(() => {
    const enrollStudents = async () => {
      if (batchId) {
        const data = await fetchEnrolledStudentsInBatch(batchId);
        setEnrollStudentsId(data);
      }
    };
    enrollStudents();
  }, [batchId]);

  //getting the students email
  React.useEffect(() => {
    const allStudents = async () => {
      const data = await fetchStudentsData();
      setAllStudents(data);
    };
    allStudents();
  }, [batchId]);

  console.log(allStudents);

  let enrollStudents;

  if (allStudents && enrollStudentsId) {
    enrollStudents = allStudents
      .filter((item1) =>
        enrollStudentsId.some((item2) => item1.student_id === item2.student_id)
      )
      .map((item) => item.email);
  }

  console.log(enrollStudents);
  //filtering the bathches data
  const detail = batchDetail.filter((batch) => batch.batch_name === batchName);

  let arr;
  if (scheduleDetail) {
    arr = JSON.parse(scheduleDetail);
  }
  // filtering the batches schedule and getting the schedule
  let sheduleData;
  if (detail[0] && arr) {
    sheduleData = arr.filter(
      (sch) => sch.schedule.batchName === detail[0].batch_name
    );
  }

  //getting the data of chapters

  React.useEffect(() => {
    const fetchChaptersData = async () => {
      if (detail[0]) {
        // let batchId = detail[0].batch_name;

        if (detail[0].chapter_completed != null) {
          console.log("not null");
          const chapterData = await fetchChapters();
          if (chapters && batchId) {
            const data2 = await fetchIndividualBatch(batchId);
            console.log(data2[0].chapter_completed);
            console.log(chapterData);
            console.log(data2);

            console.log("inside");

            const nextChapter = chapterData.filter(
              (value) => !data2[0].chapter_completed.includes(+value.chapter_id)
            );
            console.log(nextChapter);

            if (nextChapter[0]) {
              setChapters(nextChapter[0].chapter_id);

              console.log(nextChapter[0].chapter_id);
            }
          }
        } else {
          console.log("yes null");
          const data = await fetchChapters();
          setChapters(data[0].chapter_id);
          console.log(data[0].chapter_id);
        }
      }
    };
    fetchChaptersData();
  }, [detail[0], chapters, batchId]);

  //*************************handle time************************************ */

  React.useEffect(() => {
    const currentDate = new Date();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDayName = daysOfWeek[currentDate.getDay()]; // Returns the name of the day (e.g. "Monday")

    if (sheduleData) {
      let isTrue = sheduleData[0].schedule.days.includes(currentDayName);
      console.log(isTrue);

      const currTime = currentDate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      if (currTime > sheduleData[0].schedule.time && isTrue) {
        setIsDisabled(true);
      }
    }
  }, [sheduleData]);

  /////////////////////Session handling/////////////////////////////////

  /*************************Recording************************************ */
  const [chapterCompletedClicked, setchapterCompletedClicked] =
    React.useState(false);

  const [chapterProgressClicked, setchapterProgressClicked] =
    React.useState(false);
  //Recording states
  const [stream, setStream] = React.useState(null);
  const [recorder, setRecorder] = React.useState(null);
  const [isRecording, setIsRecording] = React.useState(false);
  const [recordedVideo, setRecordedVideo] = React.useState(null);
  const [finalVideo, setFinalVideo] = React.useState(null);
  const [uploadingVideo, setUploadingVideo] = React.useState(false);

  const videoRef = React.useRef(null);

  /**************************complete chapter****************************** */
  let statusName;

  useEffect(() => {
    let chapterName = +chapters;
    const chapterCompletedFinal = async (videoUrl) => {
      if (batchId && chapterCompletedClicked && chapters && finalVideo) {
        const data2 = await fetchIndividualBatch(batchId);
        console.log(data2);
        console.log(chapterName);
        let array = [];
        console.log(chapterName);
        if (data2[0].chapter_completed) {
          data2[0].chapter_completed.map((chapter) => array.push(+chapter));
        }
        array.push(chapterName);
        console.log(array);

        chapterCompletedBatch(array, batchId);

        let currentTime = new Date();
        let currTime = currentTime.toLocaleString();
        let teacherId = detail[0].teacher_id;
        let status = "Completed";

        deleteLiveClass(batchId);

        const data = await postSessionData(
          currTime,
          attendanceList,
          batchId,
          teacherId,
          chapterName,
          status,
          finalVideo
        );
        setchapterCompletedClicked(false);
        window.location.reload();
      }
    };
    chapterCompletedFinal();
  }, [chapterCompletedClicked, batchId, chapters, finalVideo]);

  const chapterCompleted = async () => {
    statusName = "Completed";

    setchapterCompletedClicked(true);
    setTimeout(() => {
      if (recording) {
        setIsRecording(false);
        recorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      }
    }, 1000);

    if (!recording) {
      if (batchId) {
        let chapterName = +chapters;

        const data2 = await fetchIndividualBatch(batchId);
        console.log(data2);
        console.log(chapterName);
        let array = [];
        console.log(chapterName);
        if (data2[0].chapter_completed) {
          data2[0].chapter_completed.map((chapter) => array.push(+chapter));
        }
        array.push(chapterName);
        console.log(array);

        chapterCompletedBatch(array, batchId);

        let currentTime = new Date();
        let currTime = currentTime.toLocaleString();
        let teacherId = detail[0].teacher_id;
        let status = "Completed";

        deleteLiveClass(batchId);

        const data = await postSessionData(
          currTime,
          attendanceList,
          batchId,
          teacherId,
          chapterName,
          status,
          finalVideo
        );
        setchapterCompletedClicked(false);

        if (data) {
          window.location.reload();
        }
      }

      setOpen(false);
    }
  };

  /**************************in-progress chapter****************************** */

  useEffect(() => {
    if (batchId && chapterProgressClicked && chapters && finalVideo) {
      const postSession = async () => {
        let currentTime = new Date();
        let currTime = currentTime.toLocaleString();
        // let moduleName = detail[0].book_name;
        // let batchId = detail[0].batch_name;
        let teacherId = detail[0].teacher_id;
        let chapterName = chapters;
        let status = "In Progress ";

        deleteLiveClass(batchId);
        console.log("in progress");

        console.log("inside progress");
        const data = await postSessionData(
          currTime,
          // moduleName,
          attendanceList,
          batchId,
          teacherId,
          chapterName,
          status,
          finalVideo
        );
        setchapterProgressClicked(false);
        window.location.reload();
      };
      postSession();
    }
  }, [chapterProgressClicked, batchId, chapters, finalVideo]);

  const startSession = async () => {
    statusName = "InProgress";
    setchapterProgressClicked(true);
    setTimeout(() => {
      if (recording) {
        setIsRecording(false);
        recorder.stop();
        stream.getTracks().forEach((track) => track.stop());
      }
    }, 1000);
    console.log("outside stop recording");

    if (!recording) {
      if (batchId) {
        let currentTime = new Date();
        let currTime = currentTime.toLocaleString();
        // let moduleName = detail[0].book_name;
        // let batchId = detail[0].batch_name;
        let teacherId = detail[0].teacher_id;
        let chapterName = chapters;
        let status = "In Progress ";

        deleteLiveClass(batchId);
        console.log("in progress");

        console.log("inside progress");
        const data = await postSessionData(
          currTime,
          // moduleName,
          attendanceList,
          batchId,
          teacherId,
          chapterName,
          status,
          finalVideo
        );
        setchapterProgressClicked(false);

        if (data) {
          window.location.reload();
        }
      }
      setOpen(false);
    }
  };

  useEffect(() => {
    if (chapterCompletedClicked) {
      statusName = "Completed";
    }
    if (chapterProgressClicked) {
      statusName = "InProgress";
    }
  }, [chapterCompletedClicked, chapterProgressClicked]);

  const startSessionRecording = async () => {
    setRecording(!recording);
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          volume: 1, // increase the audio volume
        },
      });
      const videoStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: {
          volume: 1, // increase the audio volume
        },
      });
      const stream = new MediaStream([
        ...audioStream.getTracks(),
        ...videoStream.getTracks(),
      ]);
      setStream(stream);
      const recorder = new MediaRecorder(stream);
      setRecorder(recorder);
      setIsRecording(true);

      const chunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setRecordedVideo(blob);
        const url = URL.createObjectURL(blob);
        // videoRef.current.src = url;
        // videoRef.current.volume = 1; // increase the video volume

        const myFile = new File([blob], "demo.video/webm", {
          type: "video/webm",
        });

        setUploadingVideo(true);

        console.log(myFile);
        const data = new FormData();
        data.append("file", myFile);
        data.append("upload_preset", "my_uploads");
        data.append("cloud_name", "dbqeq2yxq");
        data.append("resource_type", "video");

        fetch("https://api.cloudinary.com/v1_1/dbqeq2yxq/video/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setFinalVideo(data.url);
            setOpen(false);
            setUploadingVideo(false);
            console.log(data);
            return data.url;
          })
          .catch((err) => console.log(err));
      };

      recorder.start();
    } catch (error) {
      console.error("Error capturing screen stream:", error);
    }
  };

  const router = useRouter();
  const startingLiveClass = () => {
    let routes = {};
    if (user !== "student" && batchId) {
      setOpen(true);

      let chapterName = chapters;
      postLiveClassData(batchId, chapterName);
    } else {
      // navigate("/student/module/alphabets");
    }
    if (user === "student") {
      router.replace(`/student/module/${getModuleName}`);
    }
  };
  console.log(recordedVideo);
  console.log(finalVideo);
  return (
    <>
      {detail[0] && sheduleData && (
        <div className="">
          <div className="">
            <div className="px-20 w-full grid grid-cols-3 gap-5 ">
              <div className="col-span-2 bg-white rounded-md">
                <h1 className="p-5 border-b-2">Batch Details</h1>
                <div className="px-5 w-full grid grid-cols-2 gap-5">
                  <div className="col-span-1 p-3">
                    <span className="text-lg font-bold mr-10">Name </span>
                    <span className="font-light">{detail[0].batch_name}</span>
                  </div>
                  <div className="col-span-1 p-3 ">
                    <span className="text-lg font-bold mr-10">Batch Type</span>
                    <span className="font-light">{detail[0].type}</span>
                  </div>
                  <div className="col-span-1 p-3">
                    <span className="text-lg font-bold mr-10">Start Date </span>
                    <span className="font-light">
                      {sheduleData[0].schedule.startDate}{" "}
                    </span>
                  </div>
                  <div className="col-span-1 p-3">
                    <span className="text-lg font-bold mr-10">Start Time </span>
                    <span className="font-light">
                      {sheduleData[0].schedule.time}
                    </span>
                  </div>
                  <div className="col-span-2 p-3">
                    <span className="text-lg font-bold mr-10">Days </span>
                    <span className="font-light">
                      {" "}
                      {sheduleData &&
                        sheduleData[0].schedule.days.map((day) => (
                          <Chip label={day} color="success" />
                        ))}
                    </span>
                  </div>
                </div>
              </div>
              {user !== "student" && (
                <div className="col-span-1 bg-white rounded-md">
                  <h1 className="p-5 border-b-2">Students List</h1>
                  <List sx={{ width: "200%", maxWidth: 360 }}>
                    {enrollStudents &&
                      enrollStudents.map((student, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={student} />
                        </ListItem>
                      ))}
                  </List>
                </div>
              )}
              <div className="col-span-3 bg-white rounded-md">
                <h1 className="p-5 border-b-2">Batch Details</h1>
                <div className="w-full grid grid-cols-5 gap-20 rounded-lg overflow-hidden shadow-lg  items-center justify-center bg-slate-50 ">
                  <div className=" m-10 w-full  col-span-3">
                    <label>G Meet</label>
                    <span class="ml-10 inline-flex items-center justify-center px-4 py-2 text-base font-medium text-black  rounded-lg shadow-md ">
                      {detail[0].g_meet}
                    </span>
                  </div>
                  <div className="  my-5 col-span-2">
                    <div className="flex items-center justify-end ">
                      <Link
                        href={detail[0].g_meet}
                        target="_blank"
                        className="w-full"
                      >
                        {isDisabled && (
                          <Button
                            variant="contained"
                            className=" w-full bg-dark-purple "
                            onClick={startingLiveClass}
                          >
                            Join Class
                          </Button>
                        )}
                      </Link>

                      <div className=" w-96">
                        {!isDisabled && <span className="">Days - </span>}
                        {!isDisabled &&
                          sheduleData[0].schedule.days.map((day) => (
                            <span
                              name="role"
                              className=" text-red-600 focus:outline-none border-x-1"
                            >
                              {day},
                            </span>
                          ))}
                        {!isDisabled && (
                          <span className="block mt-2 ">
                            Timing -
                            <span className=" text-red-600">
                              {sheduleData[0].schedule.time}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {user !== "student" && (
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                className="bg-white rounded-md"
                style={{ width: "720px" }}
              >
                {uploadingVideo && (
                  <div className="mb-10 flex justify-center">
                    <Spinner />
                    <label>Uploading Recorded Video....</label>
                  </div>
                )}

                <div className="my-2 grid grid-cols-4">
                  <div className="text-start col-span-2">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Attendance for class{" "}
                    </Typography>
                  </div>
                  <div className="text-end">
                    <Button
                      variant="contained"
                      className="bg-dark-purple text-xs"
                      onClick={startSessionRecording}
                    >
                      {recording == true ? (
                        <RadioButtonCheckedIcon className="text-xs mx-1 text-red-500" />
                      ) : (
                        "Start "
                      )}
                      Recording
                    </Button>
                  </div>
                  <div className="text-end">
                    <Link
                      href={`/teacher/module/${getModuleName}`}
                      target="_blank"
                    >
                      <Button
                        variant="contained"
                        className="bg-dark-purple text-xs"
                      >
                        Start Module
                      </Button>
                    </Link>
                  </div>
                </div>
                {enrollStudents && (
                  <div className="my-5">
                    <AttandanceListStudent
                      type="markAttendance"
                      enrollStudents={enrollStudents}
                    />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-10">
                  <div className="col-span-1">
                    <Button
                      className="mt-5 w-full bg-yellow-600"
                      variant="contained"
                      color="error"
                      onClick={startSession}
                      endIcon={<RotateLeftIcon />}
                    >
                      Mark in Progress
                    </Button>
                  </div>
                  <div className="col-span-1">
                    <Button
                      className="mt-5 w-full bg-green-700"
                      variant="contained"
                      color="success"
                      onClick={chapterCompleted}
                      endIcon={<CheckCircleIcon />}
                    >
                      Mark as complete
                    </Button>
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default ClassDetais;
