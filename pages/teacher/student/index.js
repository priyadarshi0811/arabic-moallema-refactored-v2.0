import React, { useContext, useEffect } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";

import ClassList from "@/components/user/teacher/BatchList";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import StudentList from "@/components/user/teacher/StudentList";
import BatchList from "@/components/user/teacher/BatchList";
import BackButton from "@/components/Layout/elements/BackButton";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";
import AuthContext from "@/components/Context/store/auth-context";
// import InProgress from "@/components/Layout/screen/InProgress";
// import MiniCard from "@/components/Layout/card/MiniCard";

const index = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  
  /**************Restricting Teachers Route************************* */
  const loggedIn = authCtx.isLoggedIn;
  const typeTeacher = authCtx.userType === "instructor" ? true : false;
  if (!typeTeacher && loggedIn) {
    router.replace("/");
  }

  useEffect(() => {
    console.log("in");
    if (typeTeacher && loggedIn) {
      if (!typeTeacher && !loggedIn) {
        console.log("second in");
        router.replace("/");
      }
    }
    const localType = localStorage.getItem("type");
    if (localType !== "instructor") {
      console.log("second in");
      router.replace("/");
    }
  }, [loggedIn, typeTeacher]);

  /**************Restricting Teachers Route************************* */

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
        <Sidebar nav_index={1} />
        <div className="flex-1  px-5">
          <div className="m-0 p-2 lg:p-5   w-full h-fit">
            {/* <MUIBreadcrumbs /> */}
            <div className="grid grid-cols-1 w-full mx-auto my-10 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Assignmets
                </h1>
              </div>

              <Divider variant="middle" />
              <div className="col-span-1">
                <StudentList user="teacher" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
