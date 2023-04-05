import React, { useContext, useEffect } from "react";
// import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";
// import { DndWrapper } from "../../components/DndWrapper";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import logo from "@/components/src/img/AMLogo.png";
import DND from "@/components/Modules/models/DND";
import Activity from "@/components/Modules/models/DNDActivity/Activity";
import BackButton from "@/components/Layout/elements/BackButton";
import AuthContext from "@/components/Context/store/auth-context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@mui/material";

const index = ({ data }) => {
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
        
        <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-10">
          <h1 className="mx-5 text-white text-lg">
            Arabic Alphabets : Drag and Drop
          </h1>
          <Link href={`/teacher/module/alphabets`} className="mx-5">
            <Button
              variant="contained"
              className="bg-white text-dark-purple"
              startIcon={<ArrowBackIcon />}
            >
              Back To Module 1
            </Button>
          </Link>
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
