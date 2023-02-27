import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import TeacherSidebar from "@/components/user/teacher/TeacherSidebar";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import ClassList from "@/components/user/teacher/BatchList";
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
        minHeight: "100vh",        
        height: "100%",
        width: "100%",
      }}
    >
      <div className="flex min-h-screen h-full">
        <TeacherSidebar />
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
