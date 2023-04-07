import React, { useContext, useEffect, useState } from "react";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import { Button, IconButton, TextField } from "@mui/material";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import CardLayout from "@/components/Layout/card/CardLayout";
import MarkRemarkSec from "@/components/Layout/elements/MarkRemarkSec";
import {
  fetchAssignmentSubmissionStatus,
  fetchSubmittedAssignmentBasedOnStudentBatchSubModule,
} from "@/backend/Assignment/FetchAssignmentDB";
import { markAssignment } from "@/backend/Assignment/MarkAssignmentDB";
import BatchContext from "@/components/Context/store/batch-context";
import { useRouter } from "next/router";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";

const AssignmentDetails = ({ studentId, subModule, type }) => {
  const [assignmentDetail, setAssignmentDetail] = useState();
  const [activityType, setactivityType] = useState();
  const [assessed, setAssessed] = useState();

  const [marks, setMarks] = useState([]);
  const [remark, setRemark] = useState([]);
  const batchCtx = useContext(BatchContext);
  const router = useRouter();

  const [batchId, setBatchId] = React.useState();

  //getting the batch id
  React.useEffect(() => {
    const setBatchIdData = async () => {
      const batch = localStorage.getItem("batchName");
      const idData = await fetchBatcheIdBasedOnBatchName(batch);
      if (idData[0]) {
        setBatchId(idData[0].batch_id);
      }
    };
    setBatchIdData();
  }, []);

  console.log(+batchId);
  console.log(subModule);
  console.log(+studentId);
  const handleMarksChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const handleReMarksChange = (index, value) => {
    const newReMarks = [...remark];
    newReMarks[index] = value;
    setRemark(newReMarks);
  };

  const gradeAssignment = () => {
    console.log("in");
    const updatedArray = assignmentDetail.map((obj, index) => {
      return {
        ...obj,
        mark: marks[index],
        remark: remark[index],
      };
    });
    if (batchId && studentId && subModule) {
      markAssignment(+studentId, +batchId, subModule, updatedArray);
      batchCtx.setSubmittedHandler(true);
      router.replace("/teacher/student");
    }
  };

  console.log(marks);
  console.log(remark);

  useEffect(() => {
    const assignmentDetail = async () => {
      if (studentId && batchId && subModule) {
        const data = await fetchSubmittedAssignmentBasedOnStudentBatchSubModule(
          +studentId,
          +batchId,
          subModule
        );
        console.log(data);
        if (data[0]) {
          setAssignmentDetail(data[0].submission);
        }
      }
    };
    assignmentDetail();
  }, [studentId, batchId, subModule]);

  useEffect(() => {
    const assignmentDetail = async () => {
      if (studentId && batchId && subModule) {
        const data = await fetchAssignmentSubmissionStatus(
          +studentId,
          +batchId,
          subModule
        );
        if (data[0]) {
          setAssessed(data[0].is_assesed);
        }
      }
    };
    assignmentDetail();
  }, [studentId, batchId, subModule]);

  if (assignmentDetail) {
    console.log(assignmentDetail);
  }
  if (assessed) {
    console.log(assessed);
  }

  return (
    <div>
      {assignmentDetail &&
        assignmentDetail.map((assignment, index) => (
          <div>
            {!assignment.submission.tasks &&
              !assignment.submission.question &&
              !assignment.submission.context && (
                <div>
                  <h1 className="mt-10 text-lg">Task: Tracing </h1>

                  <div className="bg-gray-50 mt-5 lg:p-5 p-2 rounded-md shadow-md">
                    <h1 className="lg:px-5 p-2">
                      Queston: Enter the words that can be traced by the
                      students
                    </h1>
                    <div className="border-2 rounded-md min-h-40 p-5 m-5">
                      {/* <h1 className="p-5 text-6xl text-gray-400"> يـ ـيـ ـي</h1> */}
                      <img
                        src={assignment.submission}
                        alt=""
                        className="mx-auto"
                      />
                    </div>
                    {assignment.mark === 0 && (
                      <div className="my-10 mx-5">
                        <CardLayout
                          isFull="true"
                          fullComp=<MarkRemarkSec
                            key={index}
                            index={index}
                            handleMarksChange={handleMarksChange}
                            handleReMarksChange={handleReMarksChange}
                          />
                        />
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
            {assignment.submission.question && (
              <div>
                <h1 className="mt-10 text-lg">
                  Task: Select the correct option{" "}
                </h1>

                <div className="bg-gray-50 mt-5 lg:p-5 p-2 rounded-md shadow-md">
                  <div className="border-2 rounded-md min-h-40 p-5 m-5">
                    <CardContent>
                      <Typography
                        className=" text-xl font-semibold  mt-8  text-gray-600"
                        variant="h5"
                      >
                        Q. {assignment.submission.question}
                      </Typography>
                      <Grid container spacing={1} mt={2} className=" mt-8">
                        {assignment.submission.selectData &&
                          assignment.submission.selectData.map(
                            (option, index) => (
                              <Grid item key={index}>
                                <div
                                  className={`bg-orange-400 shadow-lg ml-20 rounded-lg px-4 py-2 `}
                                >
                                  <Typography
                                    className=" text-black font-extrabold "
                                    variant="h6"
                                  >
                                    {option}
                                  </Typography>
                                </div>
                              </Grid>
                            )
                          )}
                      </Grid>
                      <div className=" mt-10">
                        <label className=" text-black font-semibold ">
                          Answer:{" "}
                        </label>
                        <label
                          className={`bg-green-400 shadow-lg ml-4 text-black font-extrabold rounded-lg px-4 py-2 `}
                        >
                          {assignment.submission.selectedOption}
                        </label>
                      </div>
                    </CardContent>
                  </div>
                  {assignment.mark === 0 && (
                    <div className="my-10 mx-5">
                      <CardLayout
                        isFull="true"
                        fullComp=<MarkRemarkSec
                          key={index}
                          index={index}
                          handleMarksChange={handleMarksChange}
                          handleReMarksChange={handleReMarksChange}
                        />
                      />
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
            {assignment.submission.context && (
              <div>
                <h1 className="mt-10 text-lg">Task: Match the following </h1>

                <div className="bg-gray-50 mt-5 lg:p-5 p-2 rounded-md shadow-md">
                  <div className="bg-gray-100  flex items-center justify-center">
                    <h1 className=" ml-4">Match the following</h1>

                    <div className="w-1/2 bg-white">
                      <div className="p-4">
                        <h1>Options</h1>

                        {assignment.submission.options &&
                          assignment.submission.options.map((item, index) => (
                            <div
                              key={item}
                              className="shadow-md p-2 my-2 bg-gray-200"
                            >
                              {item}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="w-1/2 bg-white">
                      <div className="p-4">
                        <h1>Options</h1>

                        {assignment.submission.context &&
                          assignment.submission.context.map((item, index) => (
                            <div
                              key={item}
                              className="shadow-md p-2 my-2 bg-gray-200"
                            >
                              {item}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  {assignment.mark === 0 && (
                    <div className="my-10 mx-5">
                      <CardLayout
                        isFull="true"
                        fullComp=<MarkRemarkSec
                          key={index}
                          index={index}
                          handleMarksChange={handleMarksChange}
                          handleReMarksChange={handleReMarksChange}
                        />
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
            {assignment.submission.tasks && (
              <div>
                <h1 className="mt-10 text-lg">Task: Drag and Drop </h1>
                <div className="bg-gray-50 mt-5 lg:p-5 p-2 rounded-md shadow-md">
                  <h1 className="p-2 lg:px-5">
                    Queston: Drag the words and drop it in Heavy or Light Ra
                    bucket:
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-10 m-5 ">
                    <div className="col-span-1 border-2 rounded-md cursor-pointer ">
                      <h1 className="text-white bg-dark-purple w-full p-2 rounded-t-md">
                        {assignment.submission.columns["column-2"].name}
                      </h1>
                      {/* {assignment.submission.columns["column-2"].name.map((col) => {
                          <p>{col}</p>;
                        })} */}
                      <div className="my-3 ">
                        {assignment.submission.columns["column-2"]
                          .taskIds[0] && (
                          <p className="p-3 bg-lime-200  rounded-md my-2">
                            {
                              assignment.submission.columns["column-2"]
                                .taskIds[0]
                            }
                          </p>
                        )}
                        {assignment.submission.columns["column-2"]
                          .taskIds[1] && (
                          <p className="p-3 bg-lime-200  rounded-md my-2">
                            {
                              assignment.submission.columns["column-2"]
                                .taskIds[1]
                            }
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-1 border-2 rounded-md cursor-pointer ">
                      <h1 className="text-white bg-dark-purple w-full p-2 rounded-t-md">
                        {assignment.submission.columns["column-3"].name}
                      </h1>
                      <div className="my-3 ">
                        {assignment.submission.columns["column-3"]
                          .taskIds[0] && (
                          <p className="p-3 bg-lime-200  rounded-md my-2">
                            {
                              assignment.submission.columns["column-3"]
                                .taskIds[0]
                            }
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-span-1 border-2 rounded-md cursor-pointer ">
                      <h1 className="text-white bg-dark-purple w-full p-2 rounded-t-md">
                        {assignment.submission.columns["column-4"].name}
                      </h1>
                      <div className="my-3 ">
                        {assignment.submission.columns["column-4"]
                          .taskIds[0] && (
                          <p className="p-3 bg-lime-200  rounded-md my-2">
                            {
                              assignment.submission.columns["column-4"]
                                .taskIds[0]
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  {assignment.mark === 0 && (
                    <div className="my-10 mx-5">
                      <CardLayout
                        isFull="true"
                        fullComp=<MarkRemarkSec
                          key={index}
                          index={index}
                          handleMarksChange={handleMarksChange}
                          handleReMarksChange={handleReMarksChange}
                        />
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
      {type !== "showAssignmentStudent" && !assessed && (
        <Button
          onClick={gradeAssignment}
          className="w-full bg-dark-purple mt-5"
          variant="contained"
        >
          Grade Assignment
        </Button>
      )}
    </div>
  );
};

export default AssignmentDetails;
