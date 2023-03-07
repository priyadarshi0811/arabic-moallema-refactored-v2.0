import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveUser from "@/components/Modules/batches/RemoveUser";
import UserDetails from "@/components/user/multiUser/UserDetails";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import BackButton from "@/components/Layout/elements/BackButton";
import { Button } from "@mui/material";
import { fetchStudentBasedonEmail } from "@/backend/UserProfile/StudentTeacherProfileDB";
import { fetchstudentBatches } from "@/backend/Batches/BatchesForTeachersStudentsDB";
import BatchContext from "@/components/Context/store/batch-context";
import SuccessPrompt from "@/components/Layout/elements/SuccessPrompt";
import { deleteStudent } from "@/backend/DeleteUser/DeleteStudentDB";
import { deleteFromAuth } from "@/backend/DeleteUser/DeleteUserFromAuth";
import { useRouter } from "next/router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StudentProfile = ({ email }) => {
  const [open, setOpen] = React.useState(false);
  const [profileData, setProfileData] = React.useState();
  const [batchesData, setBatchData] = React.useState();

  let router = useRouter();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const batchCtx = React.useContext(BatchContext);

  React.useEffect(() => {
    const studentprofile = async () => {
      const data = await fetchStudentBasedonEmail(email);
      setProfileData(data);
    };
    studentprofile();
  }, [batchCtx.submitted]);

  //getting the batch data for the student
  React.useEffect(() => {
    const fetchStudentBatchDetail = async () => {
      const data = await fetchstudentBatches(email);
      setBatchData(data);
    };
    fetchStudentBatchDetail();
  }, [email, batchCtx.submitted]);

  const deleteStudentRecords = () => {
    deleteStudent(email);
    deleteFromAuth(email);
    router.push("/admin/students");
  };
  console.log(batchesData);

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${grayBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        widows: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="flex min-h-screen h-full">
        <Sidebar nav_index={0} />
        <div className="flex-1 h-screen p-5  ">
          <div className="m-0 p-5 w-full h-fit">
            <div className="flex justify-between w-full mx-auto my-10 gap-10 ">
              <div className="">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Student Details
                </h1>
              </div>

              <div className="">
                <div className=" w-full  ">
                  {/* <button
                      className="px-5 py-2 bg-red-500 text-white text-center rounded-lg hover:bg-red-800 mx-3 "
                      onClick={handleOpen}
                    >
                      <DeleteIcon className="mb-1" /> Remove Student
                    </button> */}
                  <Button
                    variant="contained"
                    className="bg-red-600 hover:bg-red-700"
                    onClick={handleOpen}
                    startIcon={<DeleteIcon />}
                  >
                    Remove Student
                  </Button>
                </div>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          {batchCtx.submitted && (
            <SuccessPrompt
              title="Student Details Edited Successfully"
              setSubmitted={batchCtx.setSubmittedHandler}
            />
          )}
          <div className="m-0 p-10 w-full h-fit">
            {batchesData && (
              <UserDetails
                studentEmail={email}
                batchesData={batchesData}
                profileData={profileData}
                userType="EditStudent"
                user="student"
                isStudent={true}
              />
            )}
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {profileData && (
                <RemoveUser
                  deleteStudentRecords={deleteStudentRecords}
                  userName={profileData[0].name}
                  user="Student 1"
                  type="Student"
                  action="Remove"
                />
              )}
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
