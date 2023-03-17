import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import BatchContext from "@/components/Context/store/batch-context";

export default function CheckboxListSecondary({
  value,
  presentStudentsArray,
  absentStudents,
  type,
  enrollStudents,
}) {
  const [checked, setChecked] = React.useState([]);
  const batchCtx = React.useContext(BatchContext);


  batchCtx.setAttendanceList(checked);

  console.log(checked);

  let attendanceArray =
    type === "present" ? presentStudentsArray : absentStudents;

  if (type === "markAttendance") {
    attendanceArray = enrollStudents;
  }

  return (
   <>
    {attendanceArray &&
      attendanceArray.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <>
          <p className="px-2 py-3 w-full">{`${type === "present" ? value : value.student_id}`}</p>
          </>
        );
      })}</>
  );
}
