import InProgress from "@/components/Layout/screen/InProgress";
import React, { useContext, useEffect } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import teacherImg from "@/components/src/img/ArabicMollemaMascot-06.png";
import AddUser from "@/components/user/admin/AddStudent";
import TopTitleWithImg from "@/components/Layout/section/TopTitleWithImg";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import AuthContext from "@/components/Context/store/auth-context";

const index = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  /**************Restricting Teachers Route************************* */
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

  /**************Restricting Teachers Route************************* */
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
      <div className="grid grid-cols-4 gap-5 pt-20">
        <div className="col-span-1 pl-16 w-full h-fit">
          <img src={teacherImg.src} className="w-72" alt="" />
        </div>
        <div className="col-span-3 pt-10">
          <TopTitleWithImg title="Harakat" />
          <div className="p-5 m-5 flex justify-center">
            <Link href="/teacher/module/alphabets">
              <Button
                className="border-2 m-5 border-white bg-dark-purple"
                variant="contained"
              >
                Module 1
              </Button>
            </Link>
            <Link href="/teacher/module/harakat/discription">
              <Button
                className="border-2 m-5 border-white bg-dark-purple"
                variant="contained"
              >
                Module 2
              </Button>
            </Link>
            <Link href="/teacher/module/tanveen/discription">
              <Button
                className="border-2 m-5 border-white bg-dark-purple"
                variant="contained"
              >
                Module 3
              </Button>
            </Link>
            <Link href="/teacher/module/hamza/hamza-details">
              <Button
                className="border-2 m-5 border-white bg-dark-purple"
                variant="contained"
              >
                Module 4
              </Button>
            </Link>
            <Link href="/teacher/module/madd/madd-details">
              <Button
                className="border-2 m-5 border-white bg-dark-purple"
                variant="contained"
              >
                Module 5
              </Button>
            </Link>
          </div>
          \
        </div>
      </div>
    </div>
  );
};

export default index;
