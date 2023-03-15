import React, { useContext, useEffect, useState } from "react";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import { Button, IconButton, TextField } from "@mui/material";
import { DevicesFoldRounded } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFieldCard from "@/components/Layout/card/TextFieldCard";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AudioBtn from "@/components/Layout/elements/AudioBtn";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import MicIcon from "@mui/icons-material/Mic";
import canvasImg from "@/components/src/img/canvas(10).png";
import CardLayout from "@/components/Layout/card/CardLayout";
import MarkRemarkSec from "@/components/Layout/elements/MarkRemarkSec";
import { fetchSubmittedAssignmentBasedOnStudentBatchSubModule } from "@/backend/Assignment/FetchAssignmentDB";
import { markAssignment } from "@/backend/Assignment/MarkAssignmentDB";
import BatchContext from "@/components/Context/store/batch-context";
import { useRouter } from "next/router";

const AssignmentDetails = ({ studentId, subModule, type }) => {
  const [assignmentDetail, setAssignmentDetail] = useState();
  const [activityType, setactivityType] = useState();

  const [marks, setMarks] = useState([]);
  const [remark, setRemark] = useState([]);
  const batchCtx = useContext(BatchContext);
  const router = useRouter();

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
    const batch = localStorage.getItem("batchName");
    markAssignment(studentId, batch, subModule, updatedArray);
    batchCtx.setSubmittedHandler(true);
    router.replace("/teacher/student");
  };

  console.log(marks);
  console.log(remark);

  useEffect(() => {
    const assignmentDetail = async () => {
      const batch = localStorage.getItem("batchName");

      const data = await fetchSubmittedAssignmentBasedOnStudentBatchSubModule(
        studentId,
        batch,
        subModule
      );
      if (data[0]) {
        setAssignmentDetail(data[0].submission);
      }
    };
    assignmentDetail();
  }, []);

  if (assignmentDetail) {
    console.log(assignmentDetail);
  }

  return (
    <div>
      {assignmentDetail &&
        assignmentDetail.map((assignment, index) => (
          <div>
            {!assignment.submission.tasks && (
              <div>
                <h1 className="">Task: Tracing </h1>
                <div className="bg-gray-50 mt-5 lg:p-5 p-2 rounded-md shadow-md">
                  <h1 className="lg:px-5 p-2">
                    Queston: Enter the words that can be traced by the students
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
            {assignment.submission.tasks && (
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
      {type !== "showAssignmentStudent" && (
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
