import React from "react";
import BatchDetailsMin from "@/components/Modules/batches/BatchDetaisMin";
import AttendanceListStudent from "@/components/Modules/batches/AttendanceListStudent";
import AttendanceListTeacher from "@/components/Modules/batches/AttendanceListTeacher";
import CardLayout from "@/components/Layout/card/CardLayout";
import AddStudent from "@/components/user/admin/AddStudent";
import AddTeacher from "@/components/user/admin/AddTeacher";

const LiveBatchDetails = ({ user, isStudent }) => {
  console.log(` and isStudent = ${isStudent} `);
  return (
    <div>
      <div >
        {isStudent && (
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <AddStudent
                link="/admin/students"
                user={user}
                isStusent={isStudent}
              />
            </div>
            <div className="col-span-1">
              {/* {isStudent && (<AttendanceListStudent chapter="Huruf" date="21/02/2023" lastCol="Attended" />)}
            {!isStudent && (<AttendanceListTeacher chapter="Huruf" date="21/02/2023" lastCol="Attended" />)} */}
              <AttendanceListStudent
                chapter="Huruf"
                date="21/02/2023"
                lastCol="Attended"
              />
            </div>
          </div>
        )}
        {!isStudent && (
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <AddTeacher
                link="/admin/students"
                user={user}
                action='edit'
                isStusent={isStudent}
              />
            </div>
            <div className="col-span-1">
              {/* {isStudent && (<AttendanceListStudent chapter="Huruf" date="21/02/2023" lastCol="Attended" />)}
            {!isStudent && (<AttendanceListTeacher chapter="Huruf" date="21/02/2023" lastCol="Attended" />)} */}
              <AttendanceListTeacher
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
