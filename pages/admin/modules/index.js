import React, { useContext, useEffect, useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import CreateBatch from "@/components/user/admin/CreateBatch";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import BackButton from "@/components/Layout/elements/BackButton";
import Button from "@mui/material/Button";
import CardList from "@/components/user/admin/CardList";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "@/components/Context/store/auth-context";

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
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  /**************Restricting Admin Route************************* */
  const loggedIn = authCtx.isLoggedIn;
  const typeAdmin = authCtx.userType === "admin" ? true : false;

  if (!typeAdmin && loggedIn) {
    router.replace("/");
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
            <div className="grid grid-cols-4 w-full mx-auto my-5 gap-10">
              <div className="col-span-2">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Modules (Chapters)
                </h1>
              </div>
              
              <div className="col-span-2 ml-auto">
                <div className="px-2 w-full">
                  
                  <Link href='/admin/modules/create-module' >
                  <Button
                    variant="contained"
                    className="bg-dark-purple"
                    startIcon={<AddCircleOutlineIcon />}
                  >
                    Create Modules
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          <div className="m-0 p-10 w-full h-fit grid grid-cols-2 lg:grid-cols-3">
            <CardList
            title='Module'
              user='Module'
              disc="6 Sub-Sections"
              link="/admin/modules/module-details" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default index;
