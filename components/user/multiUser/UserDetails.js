import React from "react";
import AttendanceListStudent from "@/components/Modules/batches/AttendanceListStudent";
import AttendanceListTeacher from "@/components/Modules/batches/AttendanceListTeacher";
import AddStudent from "@/components/user/admin/AddStudent";
import AddTeacher from "@/components/user/admin/AddTeacher";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import { fetchBatchDataBasedOnBatchId } from "@/backend/Batches/BatchesDB";

const LiveBatchDetails = ({
  user,
  isStudent,
  userType,
  profileData,
  batchId,
  batchDataTeacher,
  studentId,
  teacherId,
}) => {
  console.log(` and isStudent = ${isStudent} `);
  const [batchName, setBatchName] = React.useState();
  const [batchesData, setBatchData] = React.useState();

  //get student batch data
  React.useEffect(() => {
    const batchData = async () => {
      if (batchId) {
        const data = await fetchBatchDataBasedOnBatchId(batchId);
        setBatchData(data);
        if (data[0]) {
          setBatchName(data[0].batch_name);
        }
      }
    };
    batchData();
  }, [batchId]);

  console.log(studentId);
  console.log(batchId);
  console.log(batchName);
  console.log(batchesData);

  return (
    <div>
      <div>
        {isStudent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="col-span-1">
              {batchId && batchName && (
                <AddStudent
                  batchName={batchName}
                  batchesData={batchesData}
                  profileData={profileData}
                  userType={userType}
                  link="/admin/students"
                  user={user}
                  isStusent={isStudent}
                />
              )}
            </div>
            <div className="col-span-1">
              {batchId && (
                <AttendanceListStudent
                  // studentEmail={studentEmail}
                  studentsId={studentId}
                  batchId={batchId}
                  chapter="Huruf"
                  date="21/02/2023"
                  lastCol="Attended"
                />
              )}
            </div>
          </div>
        )}
        {!isStudent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="col-span-1">
              {batchDataTeacher && profileData && (
                <AddTeacher
                  batchesData={batchDataTeacher}
                  profileData={profileData}
                  userType={userType}
                  link="/admin/students"
                  user={user}
                  action="edit"
                  isStusent={isStudent}
                />
              )}
            </div>
            <div className="col-span-1">
              <AttendanceListTeacher
                teacherId={teacherId}
                batchDataTeacher={batchDataTeacher}
                chapter="Huruf"
                date="21/02/2023"
                lastCol="Attended"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveBatchDetails;
