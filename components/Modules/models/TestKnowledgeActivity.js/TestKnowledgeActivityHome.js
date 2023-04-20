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

function StudentWordsData({
  studentData,
  setSelectedAnswers,
  selectedAnswers,
  finalAnswers,
}) {
  const [wordIndex, setWordIndex] = useState(0);

  const handleAnswerClick = (answer, index) => {
    const newSelectedAnswers = { ...selectedAnswers, [index]: answer };
    setSelectedAnswers(newSelectedAnswers);
  };

  console.log(selectedAnswers);
  return (
    <div className="flex flex-col items-center mt-10">
      <h3 className="text-2xl mb-4">{studentData.name}</h3>
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

function TestKnowledge() {
  const [currentStudent, setCurrentStudent] = useState("student1");
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [finalAnswers, setFinalAnswers] = useState([]);
  const [assignment, setAssignment] = useState([]);

  const [transformedTestData, setTransformedTestData] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (assignment) {
      const updatedTestData = [...assignment];

      finalAnswers.forEach((answer, index) => {
        const studentIndex = index + 1;
        const studentKey = `student${studentIndex}`;

        if (updatedTestData[0][studentKey]) {
          updatedTestData[0][studentKey].marks = answer.marks;
        }
      });

      setTransformedTestData(updatedTestData);
    }
  }, [finalAnswers, assignment]);
  console.log(transformedTestData);

  const handleNextClick = () => {
    if (assignment) {
      const studentKeys = Object.keys(assignment[0]).filter((key) =>
        key.startsWith("student")
      );
      const currentIndex = studentKeys.indexOf(currentStudent);
      const trueAnswersCount = Object.values(selectedAnswers).filter(
        (answer) => answer === true
      ).length;

      const obj = {
        name: "",
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
  useEffect(() => {
    const fetchAssignment = async () => {
      const data = await fetchAssignmentForLetter("kasara", "harakat");
      if (data[0]) {
        setAssignment(data[0].assignment_json.letter);
      }
    };

    fetchAssignment();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {assignment && assignment[0] && (
        <StudentWordsData
          studentData={assignment[0][currentStudent]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          finalAnswers={finalAnswers}
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
        <Dialog open={open} onClose={() => setOpen(false)} className="w-96">
          <div className="flex items-center justify-center py-4">
            <DialogTitle>Success!</DialogTitle>
          </div>
          <DialogContent className=" p-16">
            <p className="text-gray-700 text-base">XYZ Student have Won</p>
            <p className="text-gray-700 text-base">Maximum marks: 5</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} className="text-red-500">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default TestKnowledge;
