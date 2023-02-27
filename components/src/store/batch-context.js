import React, { useState } from "react";

const BatchContext = React.createContext({
  setBatchDetail: (data) => {},
  batchDetailList: [],
  setAttendanceList: (data) => {},
  attendanceList: [],
});

export const BatchContextProvider = (props) => {
  const [bacthDetailList, setBacthDetailList] = useState();
  const [attendanceList, setAttendanceList] = useState();

  const setBatchDetailHandler = (batchData) => {
    setBacthDetailList(batchData);
  };
  const setAttendanceHandler = (data) => {
    setAttendanceList(data);
  };

  const ContextValue = {
    setBatchDetail: setBatchDetailHandler,
    setAttendanceList: setAttendanceHandler,
    bacthDetailList,
    attendanceList,
  };

  return (
    <BatchContext.Provider value={ContextValue}>
      {props.children}
    </BatchContext.Provider>
  );
};
export default BatchContext;
