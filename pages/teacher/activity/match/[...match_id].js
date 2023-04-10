import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import MatchDndHome from "@/components/Modules/models/MatchDnd/MatchDndHome";
import { resetServerContext } from "react-beautiful-dnd";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const index = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  let id;
  let module;
  let activityIndex;
  if (router.query.match_id) {
    id = router.query.match_id[1];
    module = router.query.match_id[0];
    activityIndex = router.query.match_id[2];
  }

  console.log(id);
  console.log(module);

  return (
    <>
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
            Drag and Match
          </h1>
          <Link href={`/student/module/harakat/fatahah`} className="mx-5">
            <Button
              variant="contained"
              className="bg-white text-dark-purple"
              startIcon={<ArrowBackIcon />}
            >
              Back To Module 2
            </Button>
          </Link>
        </div>
        <div className=" bg-white rounded-md  m-10">
          <div className=" w-full p-5    ">
            <div className="  rounded-md md:px-5 lg:px-14">
              <div className=" p-3 text-center ">
                {/* <h2 className="text-lg  "></h2> */}
                {id && module && activityIndex && (
                  <MatchDndHome
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
    </>
  );
};

export default index;

export async function getServerSideProps({ query }) {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
}
