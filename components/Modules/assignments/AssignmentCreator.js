import {
  CardContent,
  Card,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import DragDropBuilder from "@/components/Layout/mui-comps/assignment_builder_selector/drag_and_drop";
import IdentifyByAudioBuilder from "@/components/Layout/mui-comps/assignment_builder_selector/identify_by_audio";
import TracingBuilder from "@/components/Layout/mui-comps/assignment_builder_selector/tracing_builder";
import CreateAssignment from "@/pages/admin/assignments/create-assignment";
import { createAssignment } from "@/backend/Assignment/CreateAssignmentDB";
import BatchContext from "@/components/Context/store/batch-context";
import { useRouter } from "next/router";
import { fetchSubModulesCreatedActivity } from "@/backend/Assignment/FetchAssignmentDB";

const Alphabates = [
  { letter: "خ", title: "Khaa" },
  { letter: "ح", title: "Haa" },
  { letter: "ج", title: "Jeem" },
  { letter: "ث", title: "Thaa" },
  { letter: "ت", title: "Ta" },
  { letter: "ب", title: "Baa" },
  { letter: "ا", title: "Alif" },
  { letter: "ص", title: "Saad" },
  { letter: "ش", title: "Sheen" },
  { letter: "س", title: "Seen" },
  { letter: "ز", title: "Zai" },
  { letter: "ر", title: "Raa" },
  { letter: "ذ", title: "Dhaal" },
  { letter: "د", title: "Daal" },
  { letter: "ق", title: "Qaaf" },
  { letter: "ف", title: "Faa" },
  { letter: "غ", title: "Ghayn" },
  { letter: "ع", title: "Ayn" },
  { letter: "ظ", title: "Dhaa" },
  { letter: "ط", title: "Taa" },
  { letter: "ض", title: "Daad" },
  { letter: "ي", title: "Yaa" },
  { letter: "و", title: "Waaw" },
  { letter: "ه", title: "Ha" },
  { letter: "ن", title: "Noon" },
  { letter: "م", title: "Meem" },
  { letter: "ل", title: "Laam" },
  { letter: "ك", title: "Kaaf" },
];

const modules = [
  { id: 1, name: "Harakat" },
  { id: 2, name: "Alphabates" },
  { id: 3, name: "Tanveen" },
  { id: 4, name: "Hamza" },
];

const ADD_ACTIVITY = "Add Activity";
const ADD_TRACING = "Add Tracing";
const ADD_DND_COLUMN = "Add DND Column";
const ADD_DND_Task = "Add DND Task";
const ADD_DATA = "Add DATA";

const reducerFunction = (state, action) => {
  let newState = { ...state };
  if (action.type === ADD_ACTIVITY) {
    newState.letter.push(action.payload);
    return newState;
  } else if (action.type === ADD_TRACING) {
    console.log(newState.letter[action.payload.index]);
    newState.letter[action.payload.index].trace_data = action.payload.data;
    return newState;
  } else if (action.type === ADD_DATA) {
    newState.letter[action.payload.index] = action.payload.data;
    return newState;
  }
  return state;
};

const AssignmentCreator = () => {
  // STATES FOR ALL ACTIVITIES
  const [assignmentState, DispatchSetAssignment] = useReducer(reducerFunction, {
    letter: [
      {
        activity_type: "trace",
        trace_data: [],
      },
    ],
  });

  // 1. Tracing
  const [tracingLetters, setTracingLetters] = useState({});
  const triggerTraceDataState = (tracing_letter_new) => {
    console.log("inside trigger: ", tracing_letter_new);
    const key = Object.keys(tracing_letter_new);
    let index;
    let values;

    if (key[0]) {
      const arr = key[0].split("_");
      index = arr[0];
      console.log("index: ", index);
      values = Object.values(tracing_letter_new[key[0]]);
      console.log("values: ", values);
    }

    DispatchSetAssignment({
      type: ADD_TRACING,
      payload: {
        index,
        data: values,
      },
    });
    setTracingLetters(tracing_letter_new);
    console.log(tracingLetters);
  };

  // 2. DnD
  const [dndBucketLetters, setDndBucketLetters] = useState([]);
  const triggerDndBucketLetters = (dnd_bucket_letters) => {
    console.log("inside triggerDndBucketLetters: ", dnd_bucket_letters);

    let key = Object.keys(dnd_bucket_letters)[0];

    let index = key.split("_")[0];
    console.log("index column: ", index);

    let values = Object.values(dnd_bucket_letters[key]);
    console.log("column values: ", values);

    let dndObject = { ...assignmentState.letter[index] };

    let columns = {};
    let columnOrder = [];

    let taskIds = [];
    if (Object.values(dndObject.dnd_data.tasks).length > 0) {
      Object.values(dndObject.dnd_data.tasks).forEach((value, index) => {
        taskIds.push(value.id);
      });
    }

    // console.log("options: ", dndOptionsLetters);
    // let optionsKey = Object.keys(dndOptionsLetters)[0];
    // let optionsValues = Object.values(dndOptionsLetters[optionsKey]);
    // console.log("options values: ", optionsValues);

    values.forEach((value, index) => {
      let columnName = `column-${index + 1}`;
      if (index === 0) {
        columns[columnName] = {
          id: columnName,
          name: value,
          taskIds: taskIds,
        };

        columnOrder.push(columnName);

        return;
      }
      columns[columnName] = {
        id: columnName,
        name: value,
        taskIds: [],
      };
      columnOrder.push(columnName);

      return;
    });
    console.log(columns);

    dndObject.dnd_data.columns = columns;
    dndObject.dnd_data.columnOrder = columnOrder;

    DispatchSetAssignment({
      type: ADD_DATA,
      payload: {
        index,
        data: dndObject,
      },
    });

    setDndBucketLetters(dnd_bucket_letters);

    console.log(dndBucketLetters);
  };
  const [dndOptionsLetters, setDndOptionsLetters] = useState([]);
  const triggerDndOptionLetters = (dnd_options_letters) => {
    console.log("tasks: ", dndOptionsLetters);

    let key = Object.keys(dnd_options_letters)[0];

    let index = key.split("_")[0];
    console.log("index option: ", index);

    let values = Object.values(dnd_options_letters[key]);

    console.log("Option values: ", values);

    let dndObject = { ...assignmentState.letter[index] };
    console.log("dnd Object: ", dndObject);

    let tasks = {};

    let tasIdsData = [];
    values.forEach((value, index) => {
      let taskName = `task-${index + 1}`;
      tasIdsData.push(taskName);
      tasks[taskName] = {
        id: taskName,
        content: value,
      };

      return;
    });

    if (dndObject.dnd_data.columns["column-1"]) {
      dndObject.dnd_data.columns["column-1"].taskIds = tasIdsData;
    }

    dndObject.dnd_data.tasks = tasks;
    DispatchSetAssignment({
      type: ADD_DATA,
      payload: {
        index,
        data: dndObject,
      },
    });

    setDndOptionsLetters(dnd_options_letters);
    console.log(dndOptionsLetters);
  };

  // 3. IdentifyByAudio
  const [audioFile, setAudioFile] = useState([]);
  const [identifyOptions, setIdentifyOptions] = useState([]);

  const [incrementerVal, setIncrementerVal] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(0);
  const assignment_cards = ["Tracing", "Drag and Drop", "Identify by audio"];

  // store the
  const [activityCompList, setActivityCompList] = useState([0]);

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

  const handleChange = (event) => {
    setSelectedActivity(event.target.value);
    console.log(activityCompList);
    console.log("Selected activity index:" + selectedActivity);
  };

  const newAddActivity = () => {
    if (selectedActivity === 0) {
      let traceActivity = {
        activity_type: "trace",
        trace_data: [],
      };
      DispatchSetAssignment({
        type: ADD_ACTIVITY,
        payload: traceActivity,
      });
    } else if (selectedActivity === 1) {
      let dndActivity = {
        activity_type: "dnd",
        identifier: "position",
        activity_ques_title:
          "Drag and drop words which have Alif at initial, middle or final position",
        dnd_data: {
          tasks: {},
          columns: {},
          columnOrder: [],
        },
      };
      DispatchSetAssignment({
        type: ADD_ACTIVITY,
        payload: dndActivity,
      });
    }
  };

  const [submoduleArray, setSubmoduleArray] = useState();
  const [resultArray, setResultArray] = useState([]);
  useEffect(() => {
    const fethSubModule = async () => {
      const data = await fetchSubModulesCreatedActivity();
      setSubmoduleArray(data);
    };
    fethSubModule();
  }, []);

  useEffect(() => {
    if (submoduleArray) {
      const filteredArray = Alphabates.filter((alphabet) => {
        return !submoduleArray.some(
          (submodule) => submodule.sub_module === alphabet.title
        );
      });
      setResultArray(filteredArray);
    }
  }, [submoduleArray]);

  console.log("subModule: ", submoduleArray);
  console.log("result: ", resultArray);

  const batchCtx = useContext(BatchContext);

  const [selectedModule, setSelectedModule] = useState();
  const [selectedSubmodule, setSelectedSubmodule] = useState();
  console.log("module: ", selectedModule);
  console.log("sub module: ", selectedSubmodule);
  const router = useRouter();

  function handleModuleChange(event) {
    setSelectedModule(event.target.value);
  }

  function handleSubmoduleChange(event) {
    setSelectedSubmodule(event.target.value);
  }

  const CreateAssignmentHandler = () => {
    createAssignment(assignmentState, selectedModule, selectedSubmodule);

    batchCtx.setSubmittedHandler(true);
    router.replace("/admin/assignments");
  };

  const addNewActivity = () => {
    setIncrementerVal(incrementerVal + 1);
    setActivityCompList([...activityCompList, [parseInt(selectedActivity)]]);
    console.log(activityCompList);
    console.log("Added activity index:" + selectedActivity);
    newAddActivity();
  };
  console.log("Assignment State: ", assignmentState);

  return (
    <div>
      <center>
        <Card sx={{ fontFamily: "Ubuntu Mono", textAlign: "left" }}>
          <CardContent className="p-5">
            <InputLabel>
              Select the activity to be added into the assignment:
            </InputLabel>
            <div className="flex mt-10">
              <div className="mr-4">
                <label
                  htmlFor="module"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Module
                </label>
                <select
                  id="module"
                  name="module"
                  className=""
                  value={selectedModule}
                  onChange={handleModuleChange}
                >
                  <option selected>Select Module</option>

                  {modules.map((module) => (
                    <option key={module.name} value={module.name}>
                      {module.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="submodule"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Submodule
                </label>
                <select
                  id="submodule"
                  name="submodule"
                  className=""
                  value={selectedSubmodule}
                  onChange={handleSubmoduleChange}
                >
                  <option selected>Select Sub-Module</option>

                  {resultArray &&
                    resultArray.map((submodule) => (
                      <option key={submodule.title} value={submodule.title}>
                        {submodule.title}
                      </option>
                    ))}
                </select>
              </div>
            </div>
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
            onClick={CreateAssignmentHandler}
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
