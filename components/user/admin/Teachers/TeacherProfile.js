import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveUser from "@/components/Modules/batches/RemoveUser";
import UserDetails from "@/components/user/multiUser/UserDetails";
import Divider from "@mui/material/Divider";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BackButton from "@/components/Layout/elements/BackButton";
import { Button } from "@mui/material";
import { fetchTeachersBasedonEmail } from "@/backend/UserProfile/StudentTeacherProfileDB";
import { fetchBatchesForTeacher } from "@/backend/Batches/BatchesDB";
import BatchContext from "@/components/Context/store/batch-context";
import SuccessPrompt from "@/components/Layout/elements/SuccessPrompt";
import { deleteTeacher } from "@/backend/DeleteUser/DeleteTeacherDB";
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

const TeacherProfile = ({ email }) => {
  const [open, setOpen] = React.useState(false);

  const [profileData, setProfileData] = React.useState();
  const [batchesData, setBatchData] = React.useState();

  const batchCtx = React.useContext(BatchContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let router = useRouter();

  React.useEffect(() => {
    const studentprofile = async () => {
      const data = await fetchTeachersBasedonEmail(email);
      setProfileData(data);
    };
    studentprofile();
  }, [email, batchCtx.submitted]);

  //getting the batch data for the teachers
  React.useEffect(() => {
    const fetchTeachersBatchDetail = async () => {
      const data = await fetchBatchesForTeacher(email);
      setBatchData(data);
    };
    fetchTeachersBatchDetail();
  }, [email, batchCtx.submitted]);

  const deleteTeacherRecords = (teacherEmail) => {
    deleteTeacher(email, teacherEmail);
    deleteFromAuth(email);
    batchCtx.setSubmittedDeleteHandler(true);
    router.push("/admin/teachers");
  };

  console.log(profileData);
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
        <div className="flex-1 p-5  ">
          <div className="m-0 p-5 w-full h-fit">
            <div className="flex justify-between w-full mx-auto my-10 gap-10 ">
              <div className="">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Teacher Details
                </h1>
              </div>
              <div className="">
                <div className=" w-full  ">
                  <Button
                    variant="contained"
                    className="bg-red-600 hover:bg-red-700"
                    onClick={handleOpen}
                    startIcon={<DeleteIcon />}
                  >
                    Remove Teacher
                  </Button>
                  {/* <button
                      
                      className="px-5 py-2 bg-sky-500 text-white text-center rounded-lg hover:bg-sky-900 "
                    >
                      <ArrowBackIcon className="mb-1"  /> Back
                    </button> */}
                </div>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          {batchCtx.submitted && (
            <SuccessPrompt
              type="edit"
              title="Teachers Details Edited Successfully"
              setSubmitted={batchCtx.setSubmittedHandler}
            />
          )}
          <div className="m-0 p-10 w-full h-fit">
            {profileData && batchesData && (
              <UserDetails
                teacherEmail={email}
                batchesData={batchesData}
                profileData={profileData}
                userType="showTeacher"
                user="teacher"
                isStudent={false}
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
                  setOpen={setOpen}
                  userName={profileData[0].email}
                  deleteTeacherRecords={deleteTeacherRecords}
                  user="Teacher"
                  isReplace={true}
                  type="Teacher"
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

export default TeacherProfile;
