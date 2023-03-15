import React, { useEffect, useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";

import ClassList from "@/components/user/teacher/BatchList";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import StudentList from "@/components/user/teacher/StudentList";
import BatchList from "@/components/user/teacher/BatchList";
import BackButton from "@/components/Layout/elements/BackButton";
import { Divider } from "@mui/material";
import BatchDetaisList from "@/components/user/teacher/BatchDetaisList";
import { useRouter } from "next/router";
// import InProgress from "@/components/Layout/screen/InProgress";
// import MiniCard from "@/components/Layout/card/MiniCard";

const index = () => {
  const [batch, setBatch] = useState();
  const router = useRouter();

  useEffect(() => {
    const batch = localStorage.getItem("batchName");
    setBatch(batch);
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
      <div className="flex min-h-screen w-full h-full">
        {batch && <Sidebar nav_index={1} batchName={batch} />}
        <div className="flex-1  px-5">
          <div className="m-0 p-5  w-full h-fit">
            {/* <MUIBreadcrumbs /> */}
            <div className="grid grid-cols-1 w-full mx-auto my-10 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Class
                </h1>
              </div>

              <Divider variant="middle" />
              <div className="col-span-1">
                <BatchDetaisList user="teacher" batchName={batch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
