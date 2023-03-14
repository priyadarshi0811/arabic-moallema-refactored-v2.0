import {
  CardContent,
  Card,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import DragDropBuilder from "@/components/Layout/mui-comps/assignment_builder_selector/drag_and_drop";
import IdentifyByAudioBuilder from "@/components/Layout/mui-comps/assignment_builder_selector/identify_by_audio";
import TracingBuilder from "@/components/Layout/mui-comps/assignment_builder_selector/tracing_builder";

const AssignmentCreator = () => {
  // STATES FOR ALL ACTIVITIES
  const [assignment, setAssignment] = useState([]);

  // 1. Tracing
  const [tracingLetters, setTracingLetters] = useState({});
  const triggerTraceDataState = (tracing_letter_new) => {
    setTracingLetters(tracing_letter_new);
    console.log(tracingLetters);
  };

  // 2. DnD
  const [dndBucketLetters, setDndBucketLetters] = useState([]);
  const triggerDndBucketLetters = (dnd_bucket_letters) => {
    setDndBucketLetters(dnd_bucket_letters);
    console.log(dndBucketLetters);
  };
  const [dndOptionsLetters, setDndOptionsLetters] = useState([]);
  const triggerDndOptionLetters = (dnd_options_letters) => {
    setDndOptionsLetters(dnd_options_letters);
    console.log(dndOptionsLetters);
  };

  // 3. IdentifyByAudio
  const [audioFile, setAudioFile] = useState([]);
  const [identifyOptions, setIdentifyOptions] = useState([]);

  const assignment_cards = ["Tracing", "Drag and Drop", "Identify by audio"];

  const assignment_component_map = {
    0: (inc, trace_letter_state = triggerTraceDataState) => {
      return (
        <TracingBuilder
          incrementer={inc}
          setTracingLetters={trace_letter_state}
        />
      );
    },

    1: (
      inc,
      bucket_letter_state = triggerDndBucketLetters,
      options_letter_state = triggerDndOptionLetters
    ) => {
      return (
        <DragDropBuilder
          incrementer={inc}
          setDndBucketLetters={bucket_letter_state}
          setDndOptionsLetters={options_letter_state}
        />
      );
    },

    2: (
      inc,
      audio_file = audioFile,
      audio_file_state = setAudioFile,
      identify_options_letter = identifyOptions,
      identify_options_letter_state = setIdentifyOptions
    ) => {
      return (
        <IdentifyByAudioBuilder
          incrementer={audio_file}
          setAudioFile={audio_file_state}
          identifyOptions={identify_options_letter}
          setIdentifyOptions={identify_options_letter_state}
        />
      );
    },
  };

  const [incrementerVal, setIncrementerVal] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState("0");

  // store the
  const [activityCompList, setActivityCompList] = useState([0]);

  const handleChange = (event) => {
    setSelectedActivity(event.target.value);
    console.log(activityCompList);
    console.log("Selected activity index:" + selectedActivity);
  };

  const addNewActivity = () => {
    setIncrementerVal(incrementerVal + 1);
    setActivityCompList([...activityCompList, [parseInt(selectedActivity)]]);
    console.log(activityCompList);
    console.log("Added activity index:" + selectedActivity);
  };

  return (
    <div>
      <center>
        <Card sx={{ fontFamily: "Ubuntu Mono", textAlign: "left" }}>
          <CardContent className="p-5">
            <InputLabel>
              Select the activity to be added into the assignment:
            </InputLabel>
            <div className="mt-5 grid grid-cols-4 gap-10">
              <div className="col-span-3">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="w-full"
                  label="Age"
                  value={selectedActivity}
                  onChange={handleChange}
                >
                  {assignment_cards.map((asg, key) => {
                    return (
                      <MenuItem value={key} selected={true}>
                        {asg}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
              <div className="col-span-1">
                <Button
                  variant="contained"
                  className="bg-dark-purple h-full"
                  onClick={addNewActivity}
                >
                  Add New Activity
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {activityCompList.map((comp, key) => {
          return (
            <div>
              <br />
              <br />
              <Card
                sx={{
                  marginTop: "10px",
                  fontFamily: "Ubuntu Mono",
                  textAlign: "left",
                }}
              >
                <CardContent>{assignment_component_map[comp](key)}</CardContent>
              </Card>
            </div>
          );
        })}
        <Card
          sx={{
            marginTop: "20px",
            fontFamily: "Ubuntu Mono",
            textAlign: "left",
          }}
        >
          <Button
            variant="outlined"
            className="w-full h-full bg-dark-purple  text-white hover:bg-cyan-800"
          >
            Finalize and Submit Assignment
          </Button>
        </Card>
      </center>
    </div>
  );
};

export default AssignmentCreator;
