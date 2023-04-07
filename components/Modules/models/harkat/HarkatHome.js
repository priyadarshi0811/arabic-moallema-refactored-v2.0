import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HarkatHome = () => {
  const [assignment, setAssignment] = useState([]);
  const [activityPath, setActivityPath] = useState();

  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      const data = await fetchAssignmentForLetter("Fatah", "harakat");
      if (data[0]) {
        setAssignment(data[0].assignment_json.letter);
        if (data[0].assignment_json.letter[0].activity_type === "trace") {
          setActivityPath("tracing");
        }
        if (data[0].assignment_json.letter[0].activity_type === "dnd") {
          setActivityPath("dnd");
        }
        if (data[0].assignment_json.letter[0].activity_type === "select") {
          setActivityPath("select");
        }
        if (data[0].assignment_json.letter[0].activity_type === "match") {
          setActivityPath("match");
        }
      }
    };
    fetchAssignment();
  }, []);

  console.log(assignment);

  const setActivitySubmodule = async () => {
    if (activityPath) {
      window.location.href = `/teacher/activity/${activityPath}/harakat/Fatah/${0}`;
    }
  };

  return (
    <div>
      <Button
        onClick={setActivitySubmodule}
        className=" bg-red-500 text-white p-4"
      >
        Activity
      </Button>
    </div>
  );
};

export default HarkatHome;
