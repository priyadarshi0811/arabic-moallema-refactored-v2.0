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

export default function AccessibleTable() {
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
                    <Chip label="Mon" color="success" />
                    <Chip label="Tue" color="success" />
                    <Chip label="Wed" color="success" />
                    <Chip label="Thus" color="success" />
                    <Chip label="Fri" color="success" />
                    <Chip label="Sat" color="success" />
                    <Chip label="Sun" color="info" />
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
              <TableCell style={{ padding: "20px 10px" }}>07:30 am</TableCell>
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
              <TableCell style={{ padding: "20px 10px" }}>
                Intesar Mamon
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
