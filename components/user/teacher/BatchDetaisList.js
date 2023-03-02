import * as React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Button,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import InputWithLable from "@/components/Layout/elements/InputWithLable";
import AttandanceListStudent from "@/components/user/teacher/AttandanceList";
import { LinkOff } from "@mui/icons-material";

import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ClassDetais = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="">
      <div className="">
        <div className="px-20 w-full grid grid-cols-3 gap-5 ">
          <div className="col-span-2 bg-white rounded-md">
            <h1 className="p-5 border-b-2">Batch Details</h1>
            <div className="px-5 w-full grid grid-cols-2 gap-5">
              <div className="col-span-1 p-3">
                <span className="text-lg font-bold mr-10">Name </span>
                <span className="font-light">BatchName</span>
              </div>
              <div className="col-span-1 p-3 ">
                <span className="text-lg font-bold mr-10">Select Type </span>
                <span className="font-light">BatchName</span>
              </div>
              <div className="col-span-1 p-3">
                <span className="text-lg font-bold mr-10">Start Date </span>
                <span className="font-light">BatchName</span>
              </div>
              <div className="col-span-1 p-3">
                <span className="text-lg font-bold mr-10">Start Time </span>
                <span className="font-light">BatchName</span>
              </div>
              <div className="col-span-2 p-3">
                <span className="text-lg font-bold mr-10">Days </span>
                <span className="font-light">BatchName</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white rounded-md">
            <h1 className="p-5 border-b-2">Students List</h1>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Student@Email" />
              </ListItem>
            </List>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Student@Email" />
              </ListItem>
            </List>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Student@Email" />
              </ListItem>
            </List>
          </div>
          <div className="col-span-3 bg-white rounded-md">
            <h1 className="p-5 border-b-2">Batch Details</h1>
            <div className="w-full grid grid-cols-5 gap-20 rounded-lg overflow-hidden shadow-lg  items-center justify-center bg-slate-50 ">
              <div className=" m-10 w-full  col-span-3">
                <InputWithLable
                  lable="G Meet"
                  type="text"
                  placeholder="https://meet.google.com/"
                />
              </div>
              <div className=" mx-10 my-5 col-span-2">
                <div className="flex items-center justify-end ">
                  <Link
                    href="https://meet.google.com/"
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      variant="contained"
                      className=" w-full bg-dark-purple "
                      onClick={handleOpen}
                    >
                      Join Class
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-white rounded-md">
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Attendance for class
          </Typography>
          <div className="my-5">
            <AttandanceListStudent />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <Button
                className="mt-5 w-full bg-yellow-600"
                variant="contained"
                color="error"
                onClick={handleClose}
                endIcon={<RotateLeftIcon />}
              >
                Mark in Progress
              </Button>
            </div>
            <div className="col-span-1">
              <Button
                className="mt-5 w-full bg-green-700"
                variant="contained"
                color="success"
                onClick={handleClose}
                endIcon={<CheckCircleIcon />}
              >
                Mark as complete
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ClassDetais;
