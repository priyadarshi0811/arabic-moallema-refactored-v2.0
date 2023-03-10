import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function AccessibleTable({ detail, sheduleData }) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="w-full border-b-2 p-3 border-dark-black">
        <h1 className="text-2xl">Live Batch Details</h1>
      </div>

      <TableContainer>
        <Table aria-label="caption table">
          <TableBody>
            <TableRow className="">
              <TableCell
                component="th"
                scope="row"
                className="w-fit mon-w-54 "
                style={{ padding: "22px 10px" }}
              >
                Days
              </TableCell>
              <TableCell style={{ padding: "22px 10px" }}>
                <Stack spacing={1} alignItems="left">
                  <Stack direction="row" spacing={1}>
                    {sheduleData &&
                      sheduleData[0].schedule.days.map((day) => (
                        <Chip label={day} color="success" />
                      ))}
                  </Stack>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                className="w-fit"
                style={{ padding: "20px 10px" }}
              >
                Time
              </TableCell>
              {sheduleData && (
                <TableCell style={{ padding: "20px 10px" }}>
                  {" "}
                  {sheduleData[0].schedule.time}
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                className="w-fit"
                style={{ padding: "20px 10px" }}
              >
                Teacher
              </TableCell>
              {detail[0] && (
                <TableCell style={{ padding: "20px 10px" }}>
                  {detail[0].teacher_email}
                </TableCell>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
