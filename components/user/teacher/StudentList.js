import * as React from "react";
import Link from "next/link";
import CardLayout from "@/components/Layout/card/CardLayout";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import MUISlider from "@/components/Layout/slider/MUISlider";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import { Chip, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import LoadingSpinner from "@/components/Layout/spinner/LoadingSpinner";
import { fetchEnrolledStudentsInBatch } from "@/backend/Batches/BatchesDB";
import {
  fetchSubmittedAssignment,
  fetchSubmittedAssignmentBasedOnStudent,
} from "@/backend/Assignment/FetchAssignmentDB";
import BatchContext from "@/components/Context/store/batch-context";
import SuccessPrompt from "@/components/Layout/elements/SuccessPrompt";
import WarningCard from "@/components/Layout/card/WarningCard";

const ClassDetais = () => {
  const [loading, setLoading] = React.useState(false);
  const [allAssignments, setAllAssignments] = React.useState([]);
  const [enrolledStudent, setEnrollStudents] = React.useState();
  const [error, setError] = React.useState();
  const [selectedStudent, setSelectedStudent] = React.useState();

  const [filteredAssignment, setFilteredAssignment] = React.useState([]);

  const batchCtx = React.useContext(BatchContext);

  //getting the student for the selected batch
  React.useEffect(() => {
    const studentBatch = async () => {
      const batch = localStorage.getItem("batchName");

      const data = await fetchEnrolledStudentsInBatch(batch);
      setEnrollStudents(data);
    };
    studentBatch();
  }, []);

  //getting the student for the selected batch
  React.useEffect(() => {
    const allAssignments = async () => {
      const batch = localStorage.getItem("batchName");

      const data = await fetchSubmittedAssignment(batch);
      if (data[0]) {
        setSelectedStudent(data[0].student_id);
      }

      setAllAssignments(data);
    };
    allAssignments();
  }, []);

  const handleSelectedItem = (studentId) => {
    setSelectedStudent(studentId);
    const batch = localStorage.getItem("batchName");

    const fetchStudentBatch = async () => {
      const data = await fetchSubmittedAssignmentBasedOnStudent(
        studentId,
        batch
      );

      let selectedAssignments = allAssignments.filter((obj1) =>
        data.some((obj2) => obj1.student_id === obj2.student_id)
      );
      if (studentId) {
        selectedAssignments.length === 0 ? setError(true) : setError(false);
      }
      setFilteredAssignment(selectedAssignments);
    };
    fetchStudentBatch();
  };

  console.log("student: ", selectedStudent);

  const dataToDisplay =
    filteredAssignment.length > 0 ? filteredAssignment : allAssignments;

  return (
    <div className="">
      <div className="px-3 lg:px-8 ">
        {batchCtx.submitted && (
          <SuccessPrompt
            type="edit"
            title="Student graded successfully"
            setSubmitted={batchCtx.setSubmittedHandler}
          />
        )}

        <div className="">
          <CardLayout
            firstComp=<div>
              <h1 className="text-2xl lg:text-3xl text-dark-purple">
                Fakhruddin Ezzey
              </h1>
            </div>
            secondComp=<div>
              <h1 className="mb-3">Batches attended 3/5</h1>
              <h1>Assignment completed 4/5</h1>
            </div>
          />
        </div>
        <div className="col-span-3 lg:col-span-1 mt-10 w-96 flex float-right">
          <div className="px-2 w-full ">
            <SelectDropdown
              handleSelectedItem={handleSelectedItem}
              allItems={enrolledStudent}
              value="class"
              type="studentList"
              lable="Select Student"
            />
          </div>
        </div>
        <h1 className="text-lg  mt-20">Completed Assignments</h1>
        {error && (
          <p className="text-red-500 justify-center items-center flex text-xl font-bold mt-16">
            No Assignment for the selected Student
          </p>
        )}
        {dataToDisplay && (
          <div>
            <MUISlider
              card={
                !error &&
                dataToDisplay &&
                dataToDisplay.map((assignment) => (
                  <div className="px-2">
                    <MUIMiniCard
                      title={assignment.sub_module}
                      disc="15/02/23"
                      isBtn={true}
                      btnText="View"
                      link={`/teacher/student/${selectedStudent}/${assignment.sub_module}`}
                    />
                  </div>
                ))
              }
            />
          </div>
        )}

        {dataToDisplay && dataToDisplay.length === 0 && (
          <WarningCard title={`No Assignment submitted in this batch`} />
        )}
        <h1 className="text-lg  mt-10">Unchecked Assignments</h1>
        <MUISlider
          card=<MUIMiniCard
            title="Assignment 1"
            disc="Un-Checked"
            // isBtn=""
            // btnText="Check"
            // link=""
          />
        />
      </div>
    </div>
  );
};

export default ClassDetais;
