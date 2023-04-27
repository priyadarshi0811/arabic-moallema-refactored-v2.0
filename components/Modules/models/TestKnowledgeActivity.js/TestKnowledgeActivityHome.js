import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { CheckCircleOutline, HighlightOffOutlined } from "@mui/icons-material";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  fetchBatcheIdBasedOnBatchName,
  fetchEnrolledStudentsInBatch,
} from "@/backend/Batches/BatchesDB";
import { fetchStudentsData } from "@/backend/Students/StudentDB";

function StudentWordsData({
  studentData,
  setSelectedAnswers,
  selectedAnswers,
  finalAnswers,
  currentName,
}) {
  const [wordIndex, setWordIndex] = useState(0);

  const handleAnswerClick = (answer, index) => {
    const newSelectedAnswers = { ...selectedAnswers, [index]: answer };
    setSelectedAnswers(newSelectedAnswers);
  };

  console.log(selectedAnswers);
  return (
    <div className="flex flex-col items-center mt-10">
      <h3 className="text-2xl mb-4">{currentName}</h3>
      <div className="flex justify-between w-full">
        {studentData.words_data.map((word, index) => (
          <div
            className={`flex flex-col items-center justify-center w-28 h-24 rounded-md shadow-md ${
              index === wordIndex ? "bg-green-300" : "bg-gray-200"
            } mx-2`}
            key={index}
            onClick={() => setWordIndex(index)}
          >
            <div className="text-lg font-bold">{word}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full mt-2">
        {studentData.words_data.map((word, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="flex items-center mt-2">
              <div
                className="mr-1"
                onClick={() => handleAnswerClick(true, index)}
              >
                {selectedAnswers === true ? (
                  <CheckCircleOutline color="primary" />
                ) : (
                  <CheckCircleOutline color="disabled" />
                )}
              </div>
              <div onClick={() => handleAnswerClick(true, index)}>Correct</div>
            </div>
            <div className="flex items-center mt-2">
              <div
                className="mr-1"
                onClick={() => handleAnswerClick(false, index)}
              >
                {selectedAnswers === false ? (
                  <HighlightOffOutlined color="error" />
                ) : (
                  <HighlightOffOutlined color="disabled" />
                )}
              </div>
              <div onClick={() => handleAnswerClick(false, index)}>
                Incorrect
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestKnowledge({ user, subModule, module, activityIndex }) {
  const [currentStudent, setCurrentStudent] = useState("student1");
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [finalAnswers, setFinalAnswers] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const [transformedTestData, setTransformedTestData] = useState([]);

  const [open, setOpen] = useState(false);

  //batch part
  const [batchId, setBatchId] = useState();
  const [enrollStudentsId, setEnrollStudentsId] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [winner, setWinner] = useState("");

  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    if (currentIndex > assignment.length - 1 && user === "teacher") {
      window.location.href = `/teacher/module/${module}/${subModule}`;
    }
  }, [currentIndex, assignment]);

  useEffect(() => {
    const setBatchIdData = async () => {
      const batchName = localStorage.getItem("batchName");
      const idData = await fetchBatcheIdBasedOnBatchName(batchName);
      if (idData[0]) {
        setBatchId(idData[0].batch_id);
      }
    };
    setBatchIdData();
  }, []);

  const handleNextButtonClick = () => {
    setOpen(false);
    setCurrentIndex(+currentIndex + 1);
    console.log("clicked");
  };
  console.log(batchId);

  //getting the students ids
  useEffect(() => {
    const enrollStudents = async () => {
      if (batchId) {
        const data = await fetchEnrolledStudentsInBatch(batchId);
        setEnrollStudentsId(data);
      }
    };
    enrollStudents();
  }, [batchId]);

  console.log(enrollStudentsId);

  //getting the students email
  useEffect(() => {
    const allStudents = async () => {
      const data = await fetchStudentsData();
      setAllStudents(data);
    };
    allStudents();
  }, [batchId]);

  const [enrollStudentsData, setEnrollStudentsData] = useState();
  const [dataUpdated, setDataUpdated] = useState(false);

  let enrollStudents;

  useEffect(() => {
    if (allStudents && enrollStudentsId) {
      enrollStudents = allStudents
        .filter((item1) =>
          enrollStudentsId.some(
            (item2) => item1.student_id === item2.student_id
          )
        )
        .map((item) => item.name);
    }
    setEnrollStudentsData(enrollStudents);
    setDataUpdated((prev) => !prev);
  }, [allStudents, enrollStudentsId]);

  useEffect(() => {
    if (enrollStudentsData) {
      const randomIndex = Math.floor(Math.random() * enrollStudentsData.length);
      const selectedName = enrollStudentsData[randomIndex];

      setEnrollStudentsData(
        enrollStudentsData.filter((name) => name !== selectedName)
      );
      setCurrentName(selectedName);
    }
  }, [dataUpdated]);

  //////////////////////////////////////////////////
  useEffect(() => {
    if (assignment) {
      const updatedTestData = [...assignment];

      finalAnswers.forEach((answer, index) => {
        const studentIndex = index + 1;
        const studentKey = `student${studentIndex}`;

        if (updatedTestData[activityIndex][studentKey]) {
          updatedTestData[activityIndex][studentKey].marks = answer.marks;
          updatedTestData[activityIndex][studentKey].name = answer.name;
        }
      });

      setTransformedTestData(updatedTestData);
    }
  }, [finalAnswers, assignment]);
  console.log("transformed data: ", transformedTestData);

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * enrollStudentsData.length);
    const selectedName = enrollStudentsData[randomIndex];

    setEnrollStudentsData(
      enrollStudentsData.filter((name) => name !== selectedName)
    );
    setCurrentName(selectedName);

    if (assignment) {
      const studentKeys = Object.keys(assignment[activityIndex]).filter((key) =>
        key.startsWith("student")
      );
      const currentIndex = studentKeys.indexOf(currentStudent);
      const trueAnswersCount = Object.values(selectedAnswers).filter(
        (answer) => answer === true
      ).length;

      const obj = {
        name: currentName,
        marks: trueAnswersCount,
      };
      console.log(currentIndex);

      setFinalAnswers([...finalAnswers, obj]);
      if (currentIndex < studentKeys.length - 1) {
        setCurrentStudent(studentKeys[currentIndex + 1]);
        setSelectedAnswers({});
      }
      if (currentIndex === studentKeys.length - 1) {
        console.log("done");
        setOpen(true);
      }
    }
  };

  let maxMarks = 0;
  let topStudent = null;
  useEffect(() => {
    // Iterate through the data array

    for (const key in transformedTestData[activityIndex]) {
      if (key.startsWith("student")) {
        const student = transformedTestData[activityIndex][key];
        if (student.marks > maxMarks) {
          maxMarks = student.marks;
          topStudent = student;
        }
      }
    }
    setWinner(topStudent);
  }, [transformedTestData]);

  console.log("winer: ", winner);
  useEffect(() => {
    const fetchAssignment = async () => {
      if (subModule && module) {
        const data = await fetchAssignmentForLetter(subModule, module);
        if (data[0]) {
          setAssignment(data[0].assignment_json.letter);
          setCurrentIndex(activityIndex);
        }
      }
    };

    fetchAssignment();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {assignment && assignment[0] && (
        <StudentWordsData
          studentData={assignment[activityIndex][currentStudent]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          finalAnswers={finalAnswers}
          currentName={currentName}
        />
      )}
      <div className="flex justify-center mt-10">
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextClick}
          className="w-32"
        >
          Next
        </Button>
      </div>
      {}
      <div className="flex justify-center ">
        {winner && (
          <Dialog open={open} onClose={() => setOpen(false)} className="w-96">
            <div className="flex items-center justify-center py-4">
              <DialogTitle>Success!</DialogTitle>
            </div>
            <DialogContent className=" p-16">
              <p className="text-gray-700 text-base">
                {winner.name} Student have Won
              </p>
              <p className="text-gray-700 text-base">
                Maximum marks: {winner.marks}
              </p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleNextButtonClick} className="text-red-500">
                Done
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default TestKnowledge;
