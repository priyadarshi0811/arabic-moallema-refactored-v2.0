import React, { useEffect, useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";

import ClassList from "@/components/user/teacher/BatchList";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import BatchHistory from "@/components/Modules/batches/BatchHistory";
import BatchList from "@/components/user/teacher/BatchList";
import BackButton from "@/components/Layout/elements/BackButton";
import { Divider } from "@mui/material";
import AttandanceList from "@/components/user/teacher/AttandanceList";
import { fetchEnrolledStudentsInBatch } from "@/backend/Batches/BatchesDB";
import { fetchBatchesData } from "@/backend/Announcement/AnnouncementDB";
import { fetchSessionData } from "@/backend/Session/SessionDB";
import { fetchSessionAttendance } from "@/backend/Session/SessionDB";
// import InProgress from "@/components/Layout/screen/InProgress";
// import MiniCard from "@/components/Layout/card/MiniCard";

const ChapterDetailHome = ({ chapterName, batchName }) => {
  console.log(chapterName, " ", batchName);
  const [presentStudent, setPresentStudent] = useState();
  const [allStudentsInBatch, setAllStudentsInBatch] = useState([]);

  const [addAbsentStudent, setaddAbsentStudent] = useState([]);
  const [chapterDetail, setchapterDetail] = useState();
  const [presentStudentsArray, setpresentStudentsArray] = useState();
  const [absentStudents, setabsentStudents] = useState([]);

  //get all students for the batch
  useEffect(() => {
    const getStudents = async () => {
      const data = await fetchEnrolledStudentsInBatch(batchName);
      setAllStudentsInBatch(data);
    };
    getStudents();
  }, [batchName, addAbsentStudent]);

  //present students
  useEffect(() => {
    let arr;
    if (presentStudent) {
      arr = JSON.parse(presentStudent);
      setpresentStudentsArray(arr[0].students_present.students);
    }
    console.log("present: ", presentStudentsArray);
  }, [presentStudent, addAbsentStudent]);
  console.log("present: ", presentStudentsArray);
  console.log(absentStudents);
  //get abasent students

  useEffect(() => {
    let absent;
    if (allStudentsInBatch && presentStudentsArray) {
      console.log("allStudents: ", allStudentsInBatch);
      absent = allStudentsInBatch.filter(
        (allStudent) => !presentStudentsArray.includes(allStudent.student_id)
      );
      setabsentStudents(absent);
      console.log("absent: ", absentStudents);
    }
  }, [presentStudentsArray, addAbsentStudent, presentStudent]);

  useEffect(() => {
    const fetchSession = async () => {
      const data = await fetchSessionData(batchName, chapterName);
      setchapterDetail(data);
    };
    fetchSession();
  }, []);

  const getAttandanceSelectedSession = async (value) => {
    const sessionId = value;
    const data = await fetchSessionAttendance(
      batchName,
      sessionId,
      chapterName
    );
    setPresentStudent(JSON.stringify(data, null, 2));
  };

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
                    title="Class History"
                    action="btn"
                    type="chapterDetail"
                    batchHistory={chapterDetail}
                    getAttandanceSelectedSession={getAttandanceSelectedSession}
                  />
                )}
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetailHome;
