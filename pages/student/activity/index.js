import React, { useContext, useEffect, useState } from "react";
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
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";

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

const index = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const authCtx = useContext(AuthContext);

  const type = authCtx.userType;

  const router = useRouter();

  const loggedIn = authCtx.isLoggedIn;

  const typeStudent = authCtx.userType === "student" ? true : false;

  if (!typeStudent && loggedIn) {
    console.log("first in");
    router.replace("/");
  }
  console.log("log", loggedIn);
  console.log("stu", typeStudent);

  useEffect(() => {
    console.log("in");
    if (typeStudent && loggedIn) {
      if (!typeStudent && !loggedIn) {
        console.log("second in");
        router.replace("/");
      }
    }
    const localType = localStorage.getItem("type");

    if (localType !== "student") {
      console.log("second in");
      router.replace("/");
    }
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
        <Sidebar nav_index={2} />
        <div className="flex-1 h-screen p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-5 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Assignmets
                </h1>
              </div>
              <div className="col-span-2">
                <div className="px-2 w-full ">
                  {/* <SelectDropdown value="class" lable="Select Batch" /> */}
                </div>
              </div>
              {type !== "student" && (
                <div className="col-span-2 ml-auto">
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
              )}
            </div>
            <Divider variant="middle" />
          </div>
          <div className="grid grid-cols-4 gap-10">
            <div className="m-0 p-10 w-fit h-fit">
              <MUIMiniCard
                minTitle="Assigment for "
                title="Alphabets"
                isBtn="true"
                btnText="View"
                link="/student/module/alphabets"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
