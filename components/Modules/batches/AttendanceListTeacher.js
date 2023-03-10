import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import { MenuItem, Select } from "@mui/material";
import { Label } from "@mui/icons-material";
import { fetchTeachersAttendance } from "@/backend/Students/StudentAttendanceDB";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange, chapter, date, lastCol } =
    props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  // createData({chapter}, {date}, {lastCol}),
  createData("Huruf", "02/03/2023", "Batch 1"),
  createData("Huruf", "02/03/2023", "Batch 2"),
  createData("Huruf", "02/03/2023", "Batch 3"),
  createData("Huruf", "01/03/2023", "Batch 1"),
  createData("Huruf", "01/03/2023", "Batch 2"),
  createData("Huruf", "01/03/2023", "Batch 3"),
  createData("Huruf", "28/02/2023", "Batch 1"),
  createData("Huruf", "28/02/2023", "Batch 2"),
  createData("Huruf", "28/02/2023", "Batch 3"),
  createData("Huruf", "29/02/2023", "Batch 1"),
  createData("Huruf", "29/02/2023", "Batch 2"),
  createData("Huruf", "29/02/2023", "Batch 3"),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));


export default function CustomPaginationActionsTable({
  teacherEmail,
  batchesData,
}) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const [selectedOption, setSelectedOption] = React.useState("Select Batch");
  const [attendaceList, setAttendanceList] = React.useState();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - attendaceList.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    const fetchAttendance = async () => {
      const data = await fetchTeachersAttendance(selectedOption, teacherEmail);
      setAttendanceList(data);
    };
    fetchAttendance();
  }, [selectedOption]);
  
  console.log(attendaceList);

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className=" border-b-2 p-3 ">
        <h1 className="text-2xl pt-2">Teacher Attendance History</h1>
      </div>

      {batchesData && (
        <Box>
          <div className="col-span-1 mt-3">
            <label className=" mt-3 ml-4 p-4 text-gray-700">Select Batch</label>
          </div>
          <Select
            className=" w-96 m-6"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {batchesData.map((batch) => (
              <MenuItem key={batch.id} value={batch.batch_name}>
                {batch.batch_name}
              </MenuItem>

            ))}
          </Select>
        </Box>
      )}
      {attendaceList && (
        <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                ? attendaceList.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((attendance) => (
                <TableRow key={attendance.session_id}>
                  <TableCell component="th" scope="row">
                    {attendance.chapter_name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {attendance.starting_time.substring(0, 10)}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {attendance.batch_id}
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[
                    5,
                    6,
                    10,
                    25,
                    { label: "All", value: -1 },
                  ]}
                  colSpan={3}
                  count={attendaceList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
