import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";

import ClassList from "@/components/user/teacher/BatchList";
import Sidebar from "@/components/Layout/navigation/Sidebar";
// import InProgress from "@/components/Layout/screen/InProgress";
// import MiniCard from "@/components/Layout/card/MiniCard";




const index = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${grayBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        widows: "100vw",
        minHeight : "100vh",
      }}
    >
      <div className="flex min-h-screen h-full">
      <Sidebar nav_index={1} />
        <div className="flex-1 h-screen p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <ClassList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
