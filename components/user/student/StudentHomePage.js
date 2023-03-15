import React, { useContext, useEffect, useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import TeacherSidebar from "@/components/user/teacher/TeacherSidebar";
import BackButton from "@/components/Layout/elements/BackButton";
import { Link } from "react-router-dom";
import { Button, Divider } from "@mui/material";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import BatchDetaisCards from "@/components/user/teacher/BatchDetaisCards";
import AuthContext from "@/components/Context/store/auth-context";
import { fetchBatchNameForStudent } from "@/backend/Batches/BatchesForTeachersStudentsDB";
import BatchContext from "@/components/Context/store/batch-context";

const StudentHomePage = () => {
  const [batchName, setBatchName] = useState();
  const authCtx = useContext(AuthContext);
  const batchCtx = useContext(BatchContext);

  const email = authCtx.userEmail;

  useEffect(() => {
    const fetchBatch = async () => {
      const data = await fetchBatchNameForStudent(email);
      if (data[0]) {
        setBatchName(data[0].batch_id);
        batchCtx.setBatchNameHandler(data[0].batch_id);
      }
    };
    fetchBatch();
  }, [email]);

  console.log(batchName);
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${grayBgImg.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "100%",
          backgroundPosition: "center top",
          minHeight: "100vh",
          height: "100%",
          MaxWidth: "100%",
          MaxHeight: "100%",
        }}
      >
        <div className="flex min-h-screen h-full">
          <Sidebar nav_index={2} />
          <div className="flex-1  px-5">
            <div className="m-0 p-5  w-full h-fit">
              {/* <MUIBreadcrumbs /> */}
              <div className="grid grid-cols-1 w-full mx-auto my-10 gap-10">
                <div className="col-span-1">
                  <h1 className=" my-auto text-2xl mt-3 ">
                    <BackButton /> Classes
                  </h1>
                </div>

                <Divider variant="middle" />
                <div className="col-span-1">
                  {batchName && (
                    <BatchDetaisCards batchName={batchName} user="student" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHomePage;
