import React, { useState } from "react";

const BatchContext = React.createContext({
  setBatchDetail: (data) => {},
  batchDetailList: [],
  setAttendanceList: (data) => {},
  attendanceList: [],
  setSubmittedHandler: (bool) => {},
  submitted: true,
  setBatchNameHandler: (batchName) => {},
  batchName: "", 
});

export const BatchContextProvider = (props) => {
  const [bacthDetailList, setBacthDetailList] = useState();
  const [batchName, setBatchName] = useState();
  const [attendanceList, setAttendanceList] = useState();

  const [submitted, setSubmitted] = useState(false);

  const setBatchDetailHandler = (batchData) => {
    setBacthDetailList(batchData);
  };
  const setAttendanceHandler = (data) => {
    setAttendanceList(data);
  };
  const setSubmittedHandler = (bool) => {
    console.log("boll", bool);
    console.log(submitted);
    setSubmitted(bool);
  };

  const setBatchNameHandler = (batchNameData) => {
    setBatchName(batchNameData)
  }
  const ContextValue = {
    setBatchDetail: setBatchDetailHandler,
    setAttendanceList: setAttendanceHandler,
    setSubmittedHandler: setSubmittedHandler,
    submitted,
    bacthDetailList,
    attendanceList,
    setBatchNameHandler,
    batchName
  };

  return (
    <BatchContext.Provider value={ContextValue}>
      {props.children}
    </BatchContext.Provider>
  );
};
export default BatchContext;
