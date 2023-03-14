import React, { useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import CreateBatch from "@/components/user/admin/CreateBatch";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import BackButton from "@/components/Layout/elements/BackButton";
import Button from "@mui/material/Button";
import ModuleDetailsCard from "@/components/Modules/assignments/ModuleDetails";
import Link from "next/link";

const ModuleDetails= () => {
  return (
    <div
    style={{
      backgroundImage: `url(${grayBgImg.src})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center top",
      backgroundSize: "100%",
      widows: "100vw",
      minHeight: "100vh",
    }}
  >
    <div className="flex min-h-screen h-full">
      <Sidebar nav_index={0} />
      <div className="flex-1  p-7  ">
        <div className="m-0 p-10 w-full h-fit">
          <div className="grid grid-cols-2 w-full mx-auto my-5 gap-10">
            <div className="col-span-2">
              <h1 className=" my-auto text-2xl mt-3 ">
                <BackButton /> Module Details
              </h1>
            </div>
            
          </div>
          <Divider variant="middle" />
        </div>
        <div className="m-0 p-10 w-full h-fit">
          <ModuleDetailsCard />
        </div>
        <div className="m-0 p-10 w-full h-fit">
          <ModuleDetailsCard />
        </div>
      </div>
    </div>

  </div>
  )
}

export default ModuleDetails