import SelectActivityHome from "@/components/Modules/models/SelectActivity/SelectActivityHome";
import { useRouter } from "next/router";
import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

const index = () => {
  const router = useRouter();

  let id;
  let module;
  let activityIndex;

  if (router.query.select_id) {
    id = router.query.select_id[1];
    module = router.query.select_id[0];
    activityIndex = router.query.select_id[2];
  }

  console.log(id);
  console.log(module);

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${colorBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        widows: "100vw",
        minHeight: "100vh",
      }}
    >
      {" "}
      <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-10">
        <h1 className="mx-5 text-white text-lg">
           Select The Right one
        </h1>
        <Link href={`/teacher/module/harakat/fatahah`} className="mx-5">
          <Button
            variant="contained"
            className="bg-white text-dark-purple"
            startIcon={<ArrowBackIcon />}
          >
            Back To Main Module
          </Button>
        </Link>
      </div>
      <div className=" bg-white rounded-md  m-10">
        <div className=" w-full p-5    ">
          <div className="  rounded-md md:px-5 lg:px-14">
            <div className=" p-3 text-center ">
              {id && module && activityIndex && (
                <SelectActivityHome
                  subModule={id}
                  module={module}
                  activityIndex={activityIndex}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
