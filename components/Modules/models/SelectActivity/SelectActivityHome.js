import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

const SelectActivityHome = () => {
  const [assignment, setAssignment] = useState([]);

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [selectData, setSelectData] = useState([]);

  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      const data = await fetchAssignmentForLetter("Fatah", "harkat");
      if (data[0]) {
        setAssignment(data[0].assignment_json.letter);
      }
    };
    fetchAssignment();
  }, []);

  useEffect(() => {
    if (assignment.length > 0) {
      setQuestion(assignment[index].question);
      setSelectData(assignment[index].select_data);
    }
  }, [assignment, index]);

  const handleNext = () => {
    if (assignment && index < assignment.length - 1) {
      setIndex(index + 1);
    }
  };

  console.log(assignment);
  return (
    <>
      <div className="mx-auto max-w-lg mt-44">
        <Card className="mb-4 shadow-lg" variant="outlined">
          <CardContent>
            <Typography
              className=" text-xl font-semibold  mt-8  text-gray-600"
              variant="h5"
            >
              Q.{index + 1} {question && question}
            </Typography>
            <Grid container spacing={1} mt={2} className=" mt-8">
              {selectData &&
                selectData.map((option, index) => (
                  <Grid item key={index}>
                    <Card
                      className=" bg-orange-400 shadow-lg ml-20 rounded-full px-4 py-2  "
                      variant="outlined"
                    >
                      <Typography
                        className=" text-white font-semibold"
                        variant="h6"
                      >
                        {option}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </CardContent>
          <button
            className="my-10 flex float-right mr-10 px-4 py-2 bg-orange-500 text-white rounded-sm shadow-lg hover:bg-orange-700"
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Next Question
          </button>
        </Card>
      </div>
    </>
  );
};

export default SelectActivityHome;
