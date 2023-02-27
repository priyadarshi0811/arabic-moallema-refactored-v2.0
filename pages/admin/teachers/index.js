import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddTeacher from "@/components/user/admin/AddTeacher";
import Divider from '@mui/material/Divider';

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BackButton from "@/components/Layout/elements/BackButton";
import { Button } from "@mui/material";
import CardList from "@/components/user/admin/CardList";

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


const teachers = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
        <Sidebar
          nav_index={0}
        /> 
        <div className="flex-1 h-screen p-7  ">
        <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-5 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
              <h1 className=" my-auto text-2xl mt-3 "><BackButton /> Teachers</h1>
              </div>
              <div className="col-span-3">
                <div className="px-5 w-full">
                  <SelectDropdown value="Batch" lable="Select Batch" />
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
          <div className="m-0 p-10 w-full h-fit">
            <CardList user="Teacher" link="/admin/teachers/teacher-details" disc="In 3 Batches" />
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
          <AddTeacher link="/admin/teachers" title='Add New Teacher'  user="Teacher" />
        </Box>
      </Modal>
    </div>
  );
};

export default teachers;
