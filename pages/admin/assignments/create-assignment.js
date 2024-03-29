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
import CreateAssignments from "@/components/Modules/assignments/CreateAssignments";
import AssignmentCreator from "@/components/Modules/assignments/AssignmentCreator";
import { useRouter } from "next/router";
import AuthContext from "@/components/Context/store/auth-context";

const CreateAssignment = () => {
  const router = useRouter();

  const authCtx = useContext(AuthContext);

  /**************Restricting Admin Route************************* */
  const loggedIn = authCtx.isLoggedIn;
  const typeAdmin = authCtx.userType === "admin" ? true : false;

  if (!typeAdmin && loggedIn) {
    router.replace("/login");
  }

  useEffect(() => {
    console.log("in");
    if (typeAdmin && loggedIn) {
      if (!typeAdmin && !loggedIn) {
        console.log("second in");
        router.replace("/");
      }
    }
    const localType = localStorage.getItem("type");
    if (localType !== "admin") {
      console.log("second in");
      router.replace("/");
    }
  }, [loggedIn, typeAdmin]);

  /**************Restricting Admin Route************************* */
  return (
    <div
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
        <div className="flex-1  p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-5 w-full mx-auto my-5 gap-10">
              <div className="col-span-2">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Create Assignmets
                </h1>
              </div>
              <div className="col-span-1">
                <div className="px-2 w-full ">
                  {/* <SelectDropdown value="class" lable="Select Batch" /> */}
                </div>
              </div>
              <div className="col-span-2 ml-auto">
                <div className="px-2 w-full"></div>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          <div className="m-0 p-10 w-full h-fit">
            {/* <CreateAssignments /> */}
            <AssignmentCreator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
