import React from "react";
import AttendanceListStudent from "@/components/Modules/batches/AttendanceListStudent";
import AttendanceListTeacher from "@/components/Modules/batches/AttendanceListTeacher";
import AddStudent from "@/components/user/admin/AddStudent";
import AddTeacher from "@/components/user/admin/AddTeacher";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";

const LiveBatchDetails = ({
  user,
  isStudent,
  userType,
  profileData,
  batchesData,
  studentEmail,
  teacherEmail,
}) => {
  console.log(` and isStudent = ${isStudent} `);

  function tableData(name, date, user, status) {
    return { name, date, user, status };
  }

  return (
    <div>
      <div>
        {isStudent && (
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              {batchesData && (
                <AddStudent
                  batchName={batchesData[0].batch_id}
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
              {batchesData && (
                <AttendanceListStudent
                  studentEmail={studentEmail}
                  batchName={batchesData[0].batch_id}
                  chapter="Huruf"
                  date="21/02/2023"
                  lastCol="Attended"
                />
              )}
            </div>
          </div>
        )}
        {!isStudent && (
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              {batchesData && profileData && (
                <AddTeacher
                  batchesData={batchesData}
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
                teacherEmail={teacherEmail}
                batchesData={batchesData}
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
