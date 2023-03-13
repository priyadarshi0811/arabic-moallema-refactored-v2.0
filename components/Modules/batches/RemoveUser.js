import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Button, MenuItem, Select } from "@mui/material";
import { updateTeacher } from "@/backend/Batches/UpdateBatchTeacher";
import { fetchTeachersData } from "@/backend/Teachers/TeacherDB";
import { Box } from "@mui/system";
import BatchContext from "@/components/Context/store/batch-context";

const EditTeacher = ({
  user,
  isReplace,
  action,
  type,
  option,
  batchName,
  setOpen,
  userName,
  deleteStudentRecords,
  deleteTeacherRecords,
  operation,
}) => {
  const [teachersList, setTeachersList] = React.useState();
  const [selectedTeacher, setSelectedTeacher] = React.useState("");
  const batchCtx = React.useContext(BatchContext);

  const handleChange = () => {
    // remove user
  };

  React.useEffect(() => {
    const fetchTeachersDetail = async () => {
      const data = await fetchTeachersData();
      setTeachersList(data);
    };
    fetchTeachersDetail();
  }, []);

  console.log("selected Teacher: ", selectedTeacher);

  const submitHandlerBatchDetail = () => {
    console.log("submitted");
    updateTeacher(batchName, selectedTeacher);
    setOpen(false);
    batchCtx.setSubmittedHandler(true);
  };

  const handleDeletion = () => {
    if (type === "Batch") {
      submitHandlerBatchDetail();
    }
    if (type === "Student") {
      console.log("deleting Student");
      deleteStudentRecords();
    }
    if (type === "Teacher" && operation !== "changeTeacher") {
      deleteTeacherRecords(selectedTeacher);
    }
    // if (operation === "changeTeacher") {
    //   submitHandlerBatchDetail();
    // }
  };
  const closeHandlerBatchDetail = (e) => {
    e.preventDefault();
    closeBatchDetailPopUP(false);
  };

  const replace = isReplace || false;

  return (
    <div className="">
      {/* <form onSubmit={onclassCreateHandler}> */}
      <div className="overflow-hidden ">
        <div className=" ">
          <h1 className="text-2xl mb-2 mt-0 text-dark-purple text-center">
            {action} {type}{" "}
          </h1>
          <Stack sx={{ width: "100%" }} spacing={2} className="my-10">
            {replace && (
              <Alert severity="warning">
                {user} is Currently taking 3 Batches and 10 Assingnments
              </Alert>
            )}
            <Alert severity="error">
              Do you realy want to {action} {batchName} from the database?
            </Alert>
            {/* <Alert severity="success">
              The {user} has been {action}d Successfully
            </Alert> */}
          </Stack>

          <div className="grid grid-cols-6 gap-6 ">
            {teachersList && type !== "Student" && (
              <Box className=" inline-block mt-10">
                <div className=" -mb-20 w-44">
                  <label className=" text-gray-700">Select Teacher</label>
                </div>
                <Select
                  className=" w-80 m-6 ml-52"
                  value={selectedTeacher}
                  onChange={(e) => setSelectedTeacher(e.target.value)}
                >
                  {teachersList.map((teacher) => (
                    <MenuItem key={teacher.id} value={teacher.email}>
                      {teacher.email}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            )}
            <div className="col-span-6">
              <div className="grid grid-cols-8 gap-3">
                <div className="col-span-8 sm:col-span-3 mb-3">
                  <label
                    htmlFor="user-type"
                    className="block text-sm mt-1 py-1  font-medium text-gray-700"
                  >
                    Current {type}:
                  </label>
                </div>
                <div className="col-span-8 sm:col-span-5">
                  <label
                    htmlFor="user-type"
                    className="block text-sm  font-medium text-gray-700 border-b-2 py-1 px-3 "
                  >
                    {batchName ? batchName : userName}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center  py-3 text-right mt-5">
          <Button
            onClick={handleDeletion}
            variant="contained"
            className=" w-full bg-dark-purple  "
          >
            {action} {type}
          </Button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default EditTeacher;
