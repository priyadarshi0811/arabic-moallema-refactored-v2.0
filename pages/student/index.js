import InProgress from "@/components/Layout/screen/InProgress";
import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png"
import AddUser from "@/components/user/admin/AddStudent";


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
        height: "100vh",
      }}
    >
      <h1 className="text-center p-10 text-3xl">Student Page</h1>
      <InProgress />

      
    </div>
  );
};

export default index;
