import * as React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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

  const [batchDetail, setBatchDetail] = React.useState([]);
  const [enrollStudents, setEnrollStudents] = React.useState([]);
  const [scheduleDetail, setScheduleDetail] = React.useState();
  const [chapters, setChapters] = React.useState([]);

  const [isDisabled, setIsDisabled] = React.useState(false);


  const batchCtx = React.useContext(BatchContext);
  const attendanceList = batchCtx.attendanceList;
  let newAttendance;
  if (attendanceList) {
    newAttendance = attendanceList.map((obj) => obj.student_id);
  }
  console.log(newAttendance);
  console.log(attendanceList);
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
  //getting the student for the selected batch
  React.useEffect(() => {
    const studentBatch = async () => {
      const data = await fetchEnrolledStudentsInBatch(batchName);
      setEnrollStudents(data);
    };
    studentBatch();
  }, [batchName]);

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
        let batchId = detail[0].batch_name;

        if (detail[0].chapter_completed != null) {
          console.log("not null");
          const chapterData = await fetchChapters();
          if (chapters) {
            const data2 = await fetchIndividualBatch(batchId);
            console.log(data2[0].chapter_completed);
            console.log(chapterData);

            console.log("inside");

            const nextChapter = chapterData.filter(
              (value) =>
                !data2[0].chapter_completed.includes(value.chapter_name)
            );
            console.log(chapters);

            setChapters(nextChapter[0].chapter_name);
            console.log(nextChapter);
          }
        } else {
          console.log("yes null");
          const data = await fetchChapters();
          setChapters(data[0].chapter_name);
        }
      }
    };
    fetchChaptersData();
  }, [detail[0], chapters[0]]);


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

  const chapterCompleted = async () => {
    let batchId = detail[0].batch_name;
    let chapterName = chapters;

    const data2 = await fetchIndividualBatch(batchId);
    console.log(data2);

    let array = [];
    console.log(chapterName);
    if (data2[0].chapter_completed) {
      data2[0].chapter_completed.map((chapter) => array.push(chapter));
    }
    array.push(chapterName);
    console.log(array);

    chapterCompletedBatch(array, batchId);

    let currentTime = new Date();
    let currTime = currentTime.toLocaleString();
    let moduleName = detail[0].book_name;
    let teacherId = detail[0].teacher_email;
    let status = "Completed";

    deleteLiveClass(batchId);

    postSessionData(
      currTime,
      moduleName,
      newAttendance,
      batchId,
      teacherId,
      chapterName,
      status
    );
    setOpen(false);
  };

  const startSession = async () => {
    let currentTime = new Date();
    let currTime = currentTime.toLocaleString();
    let moduleName = detail[0].book_name;
    let batchId = detail[0].batch_name;
    let teacherId = detail[0].teacher_email;
    let chapterName = chapters;
    let status = "In Progress ";

    deleteLiveClass(batchId);
    console.log("in progress");

    postSessionData(
      currTime,
      moduleName,
      newAttendance,
      batchId,
      teacherId,
      chapterName,
      status
    );
    setOpen(false);
  };

  const startingLiveClass = () => {
    setOpen(true);

    let batchId = detail[0].batch_name;
    let chapterName = chapters;
    postLiveClassData(batchId, chapterName);
  };
  console.log(enrollStudents);
  return (
    <>
      {detail[0] && sheduleData && (
        <div className="">
          <div className="">
            <div className="px-20 w-full grid grid-cols-2 xl:grid-cols-3 gap-5 ">
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
              <div className="col-span-2 xl:col-span-1  bg-white rounded-md">
                <h1 className="p-5 border-b-2">Students List</h1>
                <List sx={{ width: "200%", maxWidth: 360 }}>
                  {enrollStudents &&
                    enrollStudents.map((student) => (
                      <ListItem key={student.id}>
                        <ListItemText primary={student.student_id} />
                      </ListItem>
                    ))}
                </List>
              </div>
              <div className="col-span-3 bg-white rounded-md">
                <h1 className="p-5 border-b-2">Batch Details</h1>
                <div className="w-full grid grid-cols-5 gap-20 rounded-lg overflow-hidden shadow-lg  items-center justify-center bg-slate-50 ">
                  <div className=" m-10 w-full  col-span-3">
                    <InputWithLable
                      lable="G Meet"
                      type="text"
                      placeholder={detail[0].g_meet}
                    />
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
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="bg-white rounded-md">
              <div className="my-2 grid grid-cols-2">
                <div className="text-start">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Attendance for class{" "}
                  </Typography>
                </div>
                <div className="text-end">
                  <Link href="/teacher/module" target="_blank">
                    <Button variant="contained" className="bg-dark-purple">
                      Start Module
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="my-5">
                <AttandanceListStudent
                  type="markAttendance"
                  enrollStudents={enrollStudents}
                />
              </div>
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
        </div>
      )}
    </>
  );
};

export default ClassDetais;
