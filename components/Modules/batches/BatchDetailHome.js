import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import EditIcon from "@mui/icons-material/Edit";
import BatchEdit from "@/components/Modules/batches/BatchEdit";
import RemoveUser from "@/components/Modules/batches/RemoveUser";
import BatchHistory from "@/components/Modules/batches/BatchHistory";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import BackButton from "@/components/Layout/elements/BackButton";
import { Button } from "@mui/material";
import { fetchEnrolledStudentsInBatch } from "@/backend/Batches/BatchesDB";
import UserList from "@/components/Modules/batches/UserList";
import { fetchSessionDataForBatch } from "@/backend/Session/SessionDB";

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

const BatchDetailHome = ({ batchName }) => {
  const [open, setOpen] = React.useState(false);
  const [enrollStudents, setEnrollStudents] = React.useState([]);
  const [batchHistory, setBatchHistory] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function tableData( name, date, user, status) {
    return { name, date, user, status };
  } 
  //getting the student for the selected batch
  React.useEffect(() => {
    const studentBatch = async () => {
      const data = await fetchEnrolledStudentsInBatch(batchName);
      setEnrollStudents(data);
    };
    studentBatch();
  }, []);

  //getting the batch history for the selected batch
  React.useEffect(() => {
    const studentBatch = async () => {
      const data = await fetchSessionDataForBatch(batchName);
      setBatchHistory(data);
    };
    studentBatch();
  }, []);

  console.log(batchHistory);

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
        <div className="flex-1  p-5  ">
          <div className="m-0 p-5 w-full ">
            <div className="flex justify-between w-full mx-auto my-10 gap-10 ">
              <div className="">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Batch Details.
                </h1>
              </div>
              <div className="">
                <div className=" w-full  ">
                  <Button
                    variant="contained"
                    className="bg-dark-purple"
                    onClick={handleOpen}
                    startIcon={<EditIcon />}
                  >
                    Change Teacher
                  </Button>
                </div>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          <div className="m-0 p-10 w-full bg-white h-fit border-4 border-white rounded-xl">
            <BatchEdit batchName={batchName} actionBtn="Edit Batch" link="" />

          </div>
          <div className="bg-white p-0 my-5 h-fit">
            <BatchHistory batchHistory={batchHistory} />
          </div>
          <div className=" mt-10">
            <UserList batchName={batchName} enrollStudents={enrollStudents} />
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <RemoveUser
                userName={"Teacher Name"}
                operation="changeTeacher"
                user="Teacher 1"
                isReplace={true}
                type="Teacher"
                action="Change"
              />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BatchDetailHome;
