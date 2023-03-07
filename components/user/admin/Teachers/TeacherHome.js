import React, { useContext, useEffect } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddTeacher from "@/components/user/admin/AddTeacher";
import Divider from "@mui/material/Divider";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BackButton from "@/components/Layout/elements/BackButton";
import { Button } from "@mui/material";
import CardList from "@/components/user/admin/CardList";
import AuthContext from "@/components/Context/store/auth-context";
import { getStudentTeacherList } from "@/backend/ManageUser/ManageStudentTeacher";
import { fetchBatchesData } from "@/backend/Announcement/AnnouncementDB";
import { fetchBatchesForTeacherBasedOnBatchName } from "@/backend/Batches/BatchesDB";
import BatchContext from "@/components/Context/store/batch-context";
import SuccessPrompt from "@/components/Layout/elements/SuccessPrompt";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TeacherHome = () => {
  const [open, setOpen] = React.useState(false);
  const [filteredTeacher, setfilteredTeacher] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const authCtx = useContext(AuthContext);
  const batchCtx = useContext(BatchContext);

  useEffect(() => {
    const fetchBatches = async () => {
      const data = await fetchBatchesData();
      authCtx.setBatchesData(data);
    };
    fetchBatches();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const data = await getStudentTeacherList("teachers");
      authCtx.setTeachersData(data);
    };
    getUser();
  }, [batchCtx.submitted]);

  //get the filtered value
  const handleSelectedItem = (batchData) => {
    console.log("batchData", batchData);
    const fetchStudentBatch = async () => {
      const data = await fetchBatchesForTeacherBasedOnBatchName(batchData);

      let selectedTeacher = authCtx.teachersList.filter((obj1) =>
        data.some((obj2) => obj1.email === obj2.teacher_email)
      );
      setfilteredTeacher(selectedTeacher);
    };
    fetchStudentBatch();
  };

  const dataToDisplay =
    filteredTeacher.length > 0 ? filteredTeacher : authCtx.teachersList;

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
        <div className="flex-1 h-screen p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-5 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Teachers
                </h1>
              </div>
              <div className="col-span-3">
                <div className="px-5 w-full">
                  <SelectDropdown
                    handleSelectedItem={handleSelectedItem}
                    allItems={authCtx.batchesList}
                    value="Batch"
                    lable="Select Batch"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="px-0 mt-2 w-full">
                  <Button
                    variant="contained"
                    className="bg-dark-purple"
                    onClick={handleOpen}
                    startIcon={<AddCircleOutlineIcon />}
                  >
                    Add Teacher
                  </Button>
                </div>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          {batchCtx.submitted && (
            <SuccessPrompt
              title="Teacher Added Successfully"
              setSubmitted={batchCtx.setSubmittedHandler}
            />
          )}
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-3 w-full mx-auto my-10 gap-10">
              {dataToDisplay.map((teacher) => (
                <CardList
                  title={teacher.name}
                  subTitle={teacher.email}
                  link={`/admin/teachers/teacherprofile/${teacher.email}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddTeacher
            setOpen={setOpen}
            userType="addTeacher"
            link="/admin/teachers"
            title="Add New Teacher"
            user="Teacher"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default TeacherHome;
