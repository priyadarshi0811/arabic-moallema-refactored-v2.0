import React, { useEffect, useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";

import ClassList from "@/components/user/teacher/BatchList";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import BatchHistory from "@/components/Modules/batches/BatchHistory";
import BatchList from "@/components/user/teacher/BatchList";
import BackButton from "@/components/Layout/elements/BackButton";
import { Divider } from "@mui/material";
import AttandanceList from "@/components/user/teacher/AttandanceList";
import {
  fetchBatcheIdBasedOnBatchName,
  fetchEnrolledStudentsInBatch,
} from "@/backend/Batches/BatchesDB";
import { fetchBatchesData } from "@/backend/Announcement/AnnouncementDB";
import {
  fetchSessionData,
  fetchSessionRecording,
} from "@/backend/Session/SessionDB";
import { fetchSessionAttendance } from "@/backend/Session/SessionDB";
import { fetchChapterIdBasedOnChapterName } from "@/backend/Chapters/GetChaptersDB";
import { fetchStudentsData } from "@/backend/Students/StudentDB";
import WarningCard from "@/components/Layout/card/WarningCard";
// import InProgress from "@/components/Layout/screen/InProgress";
// import MiniCard from "@/components/Layout/card/MiniCard";

const ChapterDetailHome = ({ chapterName, batchName, user }) => {
  console.log(chapterName, " ", batchName);
  const [presentStudent, setPresentStudent] = useState();
  const [sessionRecording, setSessionRecording] = useState();

  const [allStudentsInBatch, setAllStudentsInBatch] = useState([]);
  const [allStudentsInBatchData, setAllStudentsInBatchData] = useState([]);

  const [batchId, setBatchId] = useState();
  const [chapterId, setChapterId] = useState();

  const [addAbsentStudent, setaddAbsentStudent] = useState([]);
  const [chapterDetail, setchapterDetail] = useState();
  const [presentStudentsArray, setpresentStudentsArray] = useState();
  const [absentStudents, setabsentStudents] = useState([]);

  React.useEffect(() => {
    const setBatchIdData = async () => {
      const idData = await fetchBatcheIdBasedOnBatchName(batchName);
      if (idData[0]) {
        setBatchId(idData[0].batch_id);
      }
    };
    setBatchIdData();
  }, [batchName]);
  console.log(batchId);

  React.useEffect(() => {
    const setBatchIdData = async () => {
      const idData = await fetchChapterIdBasedOnChapterName(chapterName);
      if (idData[0]) {
        setChapterId(idData[0].chapter_id);
      }
    };
    setBatchIdData();
  }, [chapterName]);
  console.log(chapterId);

  //get all students for the batch
  useEffect(() => {
    const getStudents = async () => {
      if (batchId) {
        const data = await fetchEnrolledStudentsInBatch(batchId);
        setAllStudentsInBatch(data);
      }
    };
    getStudents();
  }, [batchId, addAbsentStudent]);

  //present students
  useEffect(() => {
    let arr;
    if (presentStudent) {
      arr = JSON.parse(presentStudent);
      setpresentStudentsArray(arr[0].students_present.students);
    }
  }, [presentStudent, addAbsentStudent]);

  //get abasent students
  useEffect(() => {
    let absent;
    if (allStudentsInBatchData && presentStudentsArray) {
      absent = allStudentsInBatchData.filter(
        (allStudent) => !presentStudentsArray.includes(allStudent)
      );
      setabsentStudents(absent);
    }
  }, [presentStudentsArray, addAbsentStudent, presentStudent]);

  console.log("present: ", presentStudentsArray);
  console.log("Total Batch Student: ", allStudentsInBatch);
  console.log("All: ", allStudentsInBatchData);
  console.log("absent: ", absentStudents);

  //get all students for the batch
  useEffect(() => {
    const getAllStudents = async () => {
      const data = await fetchStudentsData();
      console.log(data);

      if (allStudentsInBatch) {
        console.log(allStudentsInBatch);
        let getStudentsDetail = data
          .filter((item1) =>
            allStudentsInBatch.some(
              (item2) => item1.student_id === item2.student_id
            )
          )
          .map((item) => item.email);

        console.log(getStudentsDetail);
        setAllStudentsInBatchData(getStudentsDetail);
      }
    };
    getAllStudents();
  }, [batchId, allStudentsInBatch, presentStudent]);

  useEffect(() => {
    const fetchSession = async () => {
      if (batchId && chapterId) {
        const data = await fetchSessionData(batchId, chapterId);
        setchapterDetail(data);
      }
    };
    fetchSession();
  }, [batchId, chapterId]);

  const getAttandanceSelectedSession = async (value) => {
    const sessionId = value;
    if (batchId && chapterId) {
      const data = await fetchSessionAttendance(batchId, sessionId, chapterId);
      setPresentStudent(JSON.stringify(data, null, 2));
    }
  };

  const getRecordedVideo = async (value) => {
    const sessionId = value;

    console.log(sessionId);

    if (batchId && chapterId) {
      const data = await fetchSessionRecording(batchId, sessionId, chapterId);
      console.log(data);
      if (data) {
        setSessionRecording(data[0].recorded_video);
      }
    }
  };

  console.log(sessionRecording);

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${grayBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        widows: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="flex min-h-screen w-full h-full">
        <Sidebar nav_index={1} batchName={batchName} />
        <div className="flex-1  px-5">
          <div className="m-0 p-5  w-full h-fit">
            {/* <MUIBreadcrumbs /> */}
            <div className="grid grid-cols-1 w-full mx-auto my-10 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Class: {batchName}
                </h1>
              </div>

              <Divider variant="middle" />
              <div className="col-span-1">
                {chapterDetail && (
                  <BatchHistory
                    user={user}
                    title="Class History"
                    action="btn"
                    type="chapterDetail"
                    batchHistory={chapterDetail}
                    getAttandanceSelectedSession={getAttandanceSelectedSession}
                    getRecordedVideo={getRecordedVideo}
                  />
                )}
              </div>
              {user !== "student" && (
                <div className="col-span-1 ">
                  <div className="bg-white rounded-md p-5 ">
                    <h1 className="py-2 border-b-2 ">Attendance</h1>
                    <div className=" flex  justify-around mt-10">
                      <div className="w-full px-2">
                        <h1 className="py-2 border-b-2 ">Present Students</h1>
                        {presentStudentsArray && (
                          <AttandanceList
                            presentStudentsArray={presentStudentsArray}
                            value="Student"
                            type="present"
                          />
                        )}
                      </div>
                      <div className="w-full px-2">
                        <h1 className="py-2 border-b-2 ">Absent Students</h1>
                        {absentStudents && (
                          <AttandanceList
                            absentStudents={absentStudents}
                            value="Student"
                            type="absent"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {user === "student" && sessionRecording && (
                <div className=" items-center justify-center ">
                  <label className=" border-b-2 flex items-center justify-center text-2xl font-semibold mb-10">
                    Session Recording
                  </label>
                  <div className=" flex justify-center">
                    <video
                      className=" flex items-center justify-center bg-slate-400 rounded-lg shadow-lg h-96 "
                      src={sessionRecording}
                      controls
                    />
                  </div>
                </div>
              )}
              {user === "student" && sessionRecording == null && (
                <WarningCard title="No Session Recording" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetailHome;
