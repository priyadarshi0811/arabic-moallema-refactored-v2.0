import React, { useContext, useEffect } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";

import ClassList from "@/components/user/teacher/BatchList";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import BatchHistory from "@/components/Modules/batches/BatchHistory";
import BatchList from "@/components/user/teacher/BatchList";
import BackButton from "@/components/Layout/elements/BackButton";
import { Divider } from "@mui/material";
import BatchDetails from "@/pages/admin/batch-details";
import AttandanceList from "@/components/user/teacher/AttandanceList";
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";
// import InProgress from "@/components/Layout/screen/InProgress";
// import MiniCard from "@/components/Layout/card/MiniCard";

const index = () => {

  const authCtx = useContext(AuthContext);

  const router = useRouter();
  const type = authCtx.userType;

  const loggedIn = authCtx.isLoggedIn;

  const typeStudent = authCtx.userType === "student" ? true : false;

  if (!typeStudent && loggedIn) {
    router.replace("/");
  }

  useEffect(() => {
    console.log("in");
    if (typeStudent && loggedIn) {
      if (!typeStudent && !loggedIn) {
        console.log("second in");
        router.replace("/");
      }
    }

    if (!typeStudent && !loggedIn) {
      console.log("second in");
      router.replace("/");
    }
  }, [loggedIn, typeStudent]);

  function tableData(name, date, user, status) {
    return { name, date, user, status };
  }
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
        <Sidebar nav_index={2} />
        <div className="flex-1  px-5">
          <div className="m-0 p-5  w-full h-fit">
            {/* <MUIBreadcrumbs /> */}
            <div className="grid grid-cols-1 w-full mx-auto my-10 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Class: Hurf
                </h1>
              </div>

              <Divider variant="middle" />
              <div className="col-span-1">
                <BatchHistory
                  title="Class History"
                  action='btn'
                  data={[
                    // createData({chapter}, {date}, {totalStudents}, {Status}),
                    tableData(
                      "Huruf",
                      "02/03/2023 at 9:30 Am",
                      "24 Students",
                      "Attendance"
                    ),
                    tableData(
                      "Huruf",
                      "01/03/2023 at 9:30 Am",
                      "24 Students",
                      "Attendance"
                    ),
                    tableData(
                      "Hamza",
                      "28/02/2023 at 9:30 Am",
                      "24 Students",
                      "Attendance"
                    ),
                    tableData(
                      "Hamza",
                      "27/02/2023 at 9:30 Am",
                      "24 Students",
                      "Attendance"
                    ),
                  ]}
                />
              </div>
              <div className="col-span-1 ">
                <div className="bg-white rounded-md p-5 ">
                  <h1 className="py-2 border-b-2">Attendance</h1>
                  <AttandanceList value="Student" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
