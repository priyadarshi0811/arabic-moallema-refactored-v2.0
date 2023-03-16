import React, { useEffect, useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import CreateBatch from "@/components/user/admin/CreateBatch";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import BackButton from "@/components/Layout/elements/BackButton";
import Button from "@mui/material/Button";
import CardList from "@/components/user/admin/CardList";
import Link from "next/link";
import { fetchAllAssignments } from "@/backend/Assignment/FetchAssignmentDB";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AssignmentHome = () => {
  const [open, setOpen] = React.useState(false);
  const [assignment, setAssignments] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchActivity = async () => {
      const data = await fetchAllAssignments();
      setAssignments(data);
    };
    fetchActivity();
  }, []);

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
        <div className="flex-1 p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-2 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Assignmets
                </h1>
              </div>

              <div className="col-span-1 ml-auto">
                <div className="px-2 w-full">
                  <Link href="/admin/assignments/create-assignment">
                    <Button
                      variant="contained"
                      className="bg-dark-purple"
                      onClick={handleOpen}
                      startIcon={<AddCircleOutlineIcon />}
                    >
                      Create Assignemts
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          <div className="m-0 p-10 w-full h-fit grid grid-cols-2 lg:grid-cols-3  ">
            {assignment &&
              assignment.map((activity) => (
                <div className=" w-full m-4 p-4">
                  <CardList
                    disc={activity.sub_module}
                    title={activity.module}
                    user="Module"
                    minTitle="Activity for"
                    link={`/admin/assignments/`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentHome;
