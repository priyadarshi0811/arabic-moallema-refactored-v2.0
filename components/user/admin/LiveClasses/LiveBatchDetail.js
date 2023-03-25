import Sidebar from "@/components/Layout/navigation/Sidebar";
import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import BatchDetaisMin from "@/components/Modules/batches/BatchDetaisMin";
import LiveBatchDetails from "@/components/user/admin/LiveBatchDetails";
import Divider from "@mui/material/Divider";
import BackButton from "@/components/Layout/elements/BackButton";
import { fetchBatchesData } from "@/backend/Announcement/AnnouncementDB";
import {
  fetchBatchesSchedule,
  fetchEnrolledStudentsInBatch,
} from "@/backend/Batches/BatchesDB";
import { useRouter } from "next/router";
import { fetchStudentsData } from "@/backend/Students/StudentDB";

const LiveBatchDetail = ({ batchId }) => {
  //user management hooks for batch
  const [showUserList, setshowUserList] = React.useState(false);
  const [batchDetail, setBatchDetail] = React.useState([]);
  const [enrollStudents, setEnrollStudents] = React.useState([]);
  const [scheduleDetail, setScheduleDetail] = React.useState();
  const [allStudentsInBatchData, setAllStudentsInBatchData] = React.useState(
    []
  );

  console.log(batchId);
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
      if (batchId) {
        const data = await fetchEnrolledStudentsInBatch(+batchId);
        setEnrollStudents(data);
      }
    };
    studentBatch();
  }, [+batchId]);

  //get all students email for the current batch based on their id's
  React.useEffect(() => {
    const getAllStudents = async () => {
      const data = await fetchStudentsData();
      if (enrollStudents) {
        let getStudentsDetail = data
          .filter((item1) =>
            enrollStudents.some(
              (item2) => item1.student_id === item2.student_id
            )
          )
          .map((item) => item.email);

        setAllStudentsInBatchData(getStudentsDetail);
      }
    };
    getAllStudents();
  }, [batchId, enrollStudents]);

  //filtering the bathches data
  const detail = batchDetail.filter((batch) => batch.batch_id === +batchId);

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
  console.log("batch detail: ", detail);
  console.log("batch schedule: ", sheduleData);
  console.log("enroll students : ", enrollStudents);
  console.log("enroll students1 : ", allStudentsInBatchData);

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
      <div className="flex min-h-screen h-full">
        <Sidebar nav_index={0} />
        <div className="flex-1  p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-1 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Live Details
                </h1>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          <div className="m-0 p-10 w-full h-fit">
            {enrollStudents && detail && (
              <LiveBatchDetails
                batchId={batchId}
                detail={detail}
                sheduleData={sheduleData}
                enrollStudents={allStudentsInBatchData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBatchDetail;
