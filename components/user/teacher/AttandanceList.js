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

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  batchCtx.setAttendanceList(checked);

  console.log(checked);

  let attendanceArray =
    type === "present" ? presentStudentsArray : absentStudents;

  if (type === "markAttendance") {
    attendanceArray = enrollStudents;
  }

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 480, bgcolor: "background.paper" }}
    >
      {attendanceArray &&
        attendanceArray.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Student`}
                    src={`/static/images/avatar/User.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={`${type === "present" ? value : value.student_id}`}
                />{" "}
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}
