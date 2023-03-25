import React, { useContext, useEffect } from "react";
// import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";
// import { DndWrapper } from "../../components/DndWrapper";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import logo from "@/components/src/img/AMLogo.png";
import DND from "@/components/Modules/models/DND";
import Link from "next/link";
import Activity from "@/components/Modules/models/DNDActivity/Activity";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";

const index = ({ data }) => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

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
    const localType = localStorage.getItem("type");

    if (localType !== "student") {
      console.log("second in");
      router.replace("/");
    }
  }, [loggedIn, typeStudent]);
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
        <div className=" w-full p-2 rounded-md  flex flex-row justify-center content-center pt-5">
          <Link href="/student">
            <Button
              className="bg-white text-dark-purple"
              variant="contained"
              startIcon={<ArrowBackIcon />}
            >
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="ml-10 pt-2 text-white">Activity 2: Drag and Drop</h1>
        </div>
        <div className="mx-10 rounded-md">
          {/* <DND /> */}
          <Activity />
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
