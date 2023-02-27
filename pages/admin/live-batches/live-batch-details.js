import Sidebar from "@/components/Layout/navigation/Sidebar";
import React from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import BatchDetaisMin from "@/components/Modules/batches/BatchDetaisMin";
import LiveBatchDetails from "@/components/user/admin/LiveBatchDetails";
import Divider from '@mui/material/Divider';
import BackButton from "@/components/Layout/elements/BackButton";

const liveClasses = () => {
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
            <div className="grid grid-cols-5 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
              <h1 className=" my-auto text-2xl mt-3 "><BackButton /> Live Details</h1>

              </div>
              <div className="col-span-2">
                <div className="px-5 w-full">
                  <SelectDropdown type="Batch" lable="Select Batch" />
                </div>
              </div>
              <div className="col-span-2">
                <div className="px-5 w-full">
                  <SelectDropdown type="student" lable="Select student" />
                </div>
              </div>
            </div>
          <Divider variant="middle" />
          </div>
          <div className="m-0 p-10 w-full h-fit">
            <LiveBatchDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default liveClasses;
