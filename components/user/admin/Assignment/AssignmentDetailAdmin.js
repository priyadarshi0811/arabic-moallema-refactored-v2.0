import React, { useContext, useEffect, useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";

import CardLayout from "@/components/Layout/card/CardLayout";
import MarkRemarkSec from "@/components/Layout/elements/MarkRemarkSec";
import { fetchAssignmentBasedOnSubModule } from "@/backend/Assignment/FetchAssignmentDB";

const AssignmentDetailAdmin = ({ subModule, type }) => {
  const [assignmentDetail, setAssignmentDetail] = useState();
  const [activityType, setactivityType] = useState();

  useEffect(() => {
    const assignmentDetail = async () => {
      const data = await fetchAssignmentBasedOnSubModule(subModule);
      setAssignmentDetail(data);
    };
    assignmentDetail();
  }, []);

  if (assignmentDetail) {
    assignmentDetail.map((assignment, index) => {
      console.log(assignment.assignment_json.letter);
    });
  }
  return;
  return (
    <div>
      {assignmentDetail &&
        assignmentDetail.map((assignment, index) => (
          <div>
            {assignment[index].activity_type === "trace" && (
              <div>
                <h1 className="">Task: Tracing </h1>
                <div className="bg-gray-50 mt-5 lg:p-5 p-2 rounded-md shadow-md">
                  <h1 className="lg:px-5 p-2">
                    Queston: Enter the words that can be traced by the students
                  </h1>
                  <div className="border-2 rounded-md min-h-40 p-5 m-5">
                    <img
                      src={assignment.submission}
                      alt=""
                      className="mx-auto"
                    />
                  </div>
                  {assignment.mark === 0 && (
                    <div className="my-10 mx-5">
                      <CardLayout isFull="true" fullComp=<MarkRemarkSec /> />
                    </div>
                  )}
                </div>
                {assignment.mark !== 0 && (
                  <CardLayout
                    isFull="true"
                    fullComp=<div className="grid grid-cols-2 w-full">
                      <div className="col-span-1 text-center">
                        <label>Marks</label>

                        <span className="text-2xl"> {assignment.mark}/5</span>
                      </div>
                      <div className="col-span-1  w-full">
                        <label className="text-center">Remark</label>
                        <p>{assignment.remark}</p>
                      </div>
                    </div>
                  />
                )}
              </div>
            )}
            {assignment.letter[index].activity_type !== "trace" && (
              <div>
                <h1 className="mt-10">Task: Drag and Drop </h1>
                <div className="bg-gray-50 mt-5 lg:p-5 p-2 rounded-md shadow-md">
                  <h1 className="p-2 lg:px-5">
                    Queston: Drag the words and drop it in Heavy or Light Ra
                    bucket:
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-10 m-5">
                    <div className="col-span-1 border-2 rounded-md lg:p-3 p-2 cursor-pointer">
                      <p className="pb-3">Initial</p>
                      <div className="my-3">
                        <MUIMiniCard
                          title={assignment.submission.columns.name}
                        />
                      </div>
                    </div>
                  </div>
                  {assignment.mark === 0 && (
                    <div className="my-10 mx-5">
                      <CardLayout
                        isFull="true"
                        fullComp=<MarkRemarkSec key={index} />
                      />
                    </div>
                  )}
                  {assignment.mark !== 0 && (
                    <CardLayout
                      isFull="true"
                      fullComp=<div className="grid grid-cols-2 w-full">
                        <div className="col-span-1 text-center">
                          <label>Marks</label>

                          <span className="text-2xl"> {assignment.mark}/5</span>
                        </div>
                        <div className="col-span-1  w-full">
                          <label className="text-center">Remark</label>
                          <p>{assignment.remark}</p>
                        </div>
                      </div>
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      {type !== "showAssignmentStudent" && (
        <Button
          //   onClick={gradeAssignment}
          className="w-full bg-dark-purple mt-5"
          variant="contained"
        >
          Grade Assignment
        </Button>
      )}
    </div>
  );
};

export default AssignmentDetailAdmin;
