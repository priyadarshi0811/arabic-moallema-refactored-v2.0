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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SelectOption from "@/components/Layout/mui-comps/assignment_builder_selector/select_option_activity";
import MatchFollowing from "@/components/Layout/mui-comps/assignment_builder_selector/match_the_folowing";

const Modules_Option = {
  alphabets: [
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
  ],
  harakat: [
    { id: 1, title: "Fatah" },
    { id: 2, title: "Dumma" },
    { id: 3, title: "Kasra" },
  ],
};

const modules = [
  { id: 1, title: "harakat" },
  { id: 2, title: "alphabets" },
  { id: 3, title: "tanveen" },
  { id: 4, title: "hamza" },
];

const ADD_ACTIVITY = "Add Activity";
const ADD_TRACING = "Add Tracing";
const ADD_SELECT = "Add Select";
const ADD_MATCH_OPTION = "Add MATCH OPTION";
const ADD_MATCH_CONTEXT = "Add MATCH CONTEXT";

const ADD_Question = "Add Select";

const ADD_DND_COLUMN = "Add DND Column";
const ADD_DND_Task = "Add DND Task";
const ADD_DATA = "Add DATA";

//Reducer function to handle/create any type of activity

const reducerFunction = (state, action) => {
  let newState = { ...state };
  if (action.type === ADD_ACTIVITY) {
    newState.letter.push(action.payload);
    return newState;
  } else if (action.type === ADD_TRACING) {
    newState.letter[action.payload.index].trace_data = action.payload.data;
    return newState;
  } else if (action.type === ADD_DATA) {
    newState.letter[action.payload.index] = action.payload.data;
    return newState;
  } else if (action.type === ADD_SELECT) {
    newState.letter[action.payload.index].select_data = action.payload.data;
    newState.letter[action.payload.index].question = action.payload.question;
    return newState;
  } else if (action.type === ADD_MATCH_OPTION) {
    newState.letter[action.payload.index].option_data =
      action.payload.option_data;
    return newState;
  } else if (action.type === ADD_MATCH_CONTEXT) {
    newState.letter[action.payload.index].context_data =
      action.payload.context_data;
    return newState;
  }
  return state;
};

const AssignmentCreator = () => {
  // STATES FOR ALL ACTIVITIES
  const [assignmentState, DispatchSetAssignment] = useReducer(reducerFunction, {
    letter: [
      // {
      //   activity_type: "trace",
      //   trace_data: [],
      // },
    ],
  });

  //match the following activity
  const [matchOptionLetters, setMatchOptionLetters] = useState([]);
  const [matchContextLetters, setMatchContextLetters] = useState([]);

  const triggerMatchOption = (tracing_letter_new) => {
    console.log("inside select: ", tracing_letter_new);
    const key = Object.keys(tracing_letter_new);
    let index;
    let values;

    if (key[0]) {
      const arr = key[0].split("_");
      index = arr[0];
      console.log("index: ", index);

      const tracingKeys = Object.keys(tracing_letter_new[key[0]]);
      values = tracingKeys.reduce((acc, currentKey) => {
        if (currentKey.includes("mto")) {
          // check if the key contains "mto"
          return [...acc, tracing_letter_new[key[0]][currentKey]];
        }
        return acc;
      }, []);

      console.log("values: ", values);

      DispatchSetAssignment({
        type: ADD_MATCH_OPTION,
        payload: {
          index,
          option_data: values,
        },
      });
    }

    console.log(questionForSelectActivity);
    setMatchOptionLetters(tracing_letter_new);
    console.log(tracingLetters);
  };

  const triggerMatchContext = (tracing_letter_new) => {
    console.log("inside select: ", tracing_letter_new);
    const key = Object.keys(tracing_letter_new);
    let index;
    let values;

    if (key[0]) {
      const arr = key[0].split("_");
      index = arr[0];
      console.log("index: ", index);

      const tracingKeys = Object.keys(tracing_letter_new[key[0]]);
      values = tracingKeys.reduce((acc, currentKey) => {
        if (currentKey.includes("mtc")) {
          // check if the key contains "mtc"
          return [...acc, tracing_letter_new[key[0]][currentKey]];
        }
        return acc;
      }, []);

      console.log("values: ", values);

      DispatchSetAssignment({
        type: ADD_MATCH_CONTEXT,
        payload: {
          index,
          context_data: values,
        },
      });
    }

    console.log(questionForSelectActivity);
    setMatchContextLetters(tracing_letter_new);
    console.log(tracingLetters);
  };

  // 1. Tracing
  const [tracingLetters, setTracingLetters] = useState({});
  const [selectLetters, setSelectedLetters] = useState({});
  const [questionForSelectActivity, setquestionForSelectActivity] = useState();

  //trigger function for trace activity and dispatching the trace data to reducer
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

  //3. select
  //trigger function for select activity and dispatching the selected data to reducer

  const triggerSelectData = (tracing_letter_new) => {
    console.log(questionForSelectActivity);
    console.log("inside select: ", tracing_letter_new);
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

    console.log(questionForSelectActivity);
    DispatchSetAssignment({
      type: ADD_SELECT,
      payload: {
        index,
        data: values,
        question: questionForSelectActivity,
      },
    });
    setSelectedLetters(tracing_letter_new);
    console.log(tracingLetters);
  };

  //setting the question
  const getQuestion = (question) => {
    console.log(question);
    setquestionForSelectActivity(question);
  };

  // 2. DnD

  //trigger function for DND activity and dispatching the DND data to reducer (dnd bucket letter)

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

  //trigger function for DND activity and dispatching the DND data to reducer (dnd option letter)

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

  const [incrementerVal, setIncrementerVal] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(0);
  const assignment_cards = [
    "Tracing",
    "Drag and Drop",
    "Select Option Activity",
    "Match the following",
  ];

  // store the
  const [activityCompList, setActivityCompList] = useState([]);

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
      select_letter_state = triggerSelectData,
      get_question = getQuestion
    ) => {
      return (
        <SelectOption
          incrementer={inc}
          setSelectedLetters={select_letter_state}
          setquestionForSelectActivity={get_question}
        />
      );
    },
    3: (
      inc,
      options_letter_state = triggerMatchOption,
      context_letter_state = triggerMatchContext
    ) => {
      return (
        <MatchFollowing
          incrementer={inc}
          setMatchOptionLetters={options_letter_state}
          setMatchContextLetters={context_letter_state}
        />
      );
    },
  };

  console.log(selectLetters);

  const handleChange = (event) => {
    setSelectedActivity(event.target.value);
    console.log(activityCompList);
    console.log("Selected activity index:" + selectedActivity);
  };

  //new activity added dispatcher (setting the activity object )
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
    } else if (selectedActivity === 2) {
      let selectActivity = {
        activity_type: "select",
        question: "",
        select_data: [],
      };
      DispatchSetAssignment({
        type: ADD_ACTIVITY,
        payload: selectActivity,
      });
    } else if (selectedActivity === 3) {
      let matchActivity = {
        activity_type: "match",
        option_data: [],
        context_data: [],
      };
      DispatchSetAssignment({
        type: ADD_ACTIVITY,
        payload: matchActivity,
      });
    }
  };

  const batchCtx = useContext(BatchContext);

  const [selectedModule, setSelectedModule] = useState();
  const [selectedSubmodule, setSelectedSubmodule] = useState();
  const [universalSubModule, setUniversalSubModule] = useState();

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
    if (submoduleArray && universalSubModule) {
      console.log("universalModule: ", universalSubModule);

      let array = Modules_Option[`${universalSubModule}`];

      const filteredArray = array.filter((alphabet) => {
        return !submoduleArray.some(
          (submodule) => submodule.sub_module === alphabet.title
        );
      });
      setResultArray(filteredArray);
    }
  }, [submoduleArray, universalSubModule]);

  console.log("module: ", selectedModule);
  console.log("sub module: ", selectedSubmodule);

  console.log("subModule: ", submoduleArray);
  console.log("result: ", resultArray);

  const router = useRouter();

  function handleModuleChange(event) {
    const module = event.target.value;
    setUniversalSubModule(module);
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
        <Card sx={{ textAlign: "left" }}>
          <CardContent className="p-5">
            <InputLabel>
              Select the activity to be added into the assignment:
            </InputLabel>

            <div className="mt-5 grid grid-cols-8 gap-10">
              <div className="col-span-3">
                <p>Module</p>
                <Select
                  labelId="demo-simple-select-label"
                  className="w-full "
                  label="Age"
                  id="module"
                  name="module"
                  value={selectedModule}
                  onChange={handleModuleChange}
                >
                  {modules.map((module) => (
                    <MenuItem
                      key={module.title}
                      value={module.title}
                      selected={true}
                    >
                      {module.title}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              {universalSubModule && (
                <div className="col-span-3">
                  <p>Submodule</p>
                  <Select
                    labelId="demo-simple-select-label"
                    className="w-full "
                    label="Age"
                    id="submodule"
                    name="submodule"
                    value={selectedSubmodule}
                    onChange={handleSubmoduleChange}
                  >
                    {resultArray &&
                      resultArray.map((submodule) => (
                        <MenuItem
                          key={submodule.title}
                          value={submodule.title}
                          selected={true}
                        >
                          {submodule.title}
                        </MenuItem>
                      ))}
                  </Select>
                </div>
              )}
            </div>
            <div className="mt-5 grid grid-cols-4 gap-10">
              <div className="col-span-3">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  className="w-full "
                  label="a"
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
              <div className="col-span-1 w-full">
                <Button
                  variant="contained"
                  className="bg-dark-purple h-full w-full"
                  onClick={addNewActivity}
                  startIcon={<AddCircleOutlineIcon />}
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
