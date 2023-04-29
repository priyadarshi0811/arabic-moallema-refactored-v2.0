import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import logo from "@/components/src/img/AMLogo.png";
import FullCard from "@/components/Layout/card/FullCard";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import teacherImg from "@/components/src/img/ArabicMollemaMascot-06.png";

import { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HarkatHome from "@/components/Modules/models/harkat/HarkatHome";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeActivityCard from "@/components/Layout/card/HomeActivityCard";

const positioning = () => {
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
            className="bg-white text-dark-purple mx-2"
            variant="contained"
            // startIcon={<ArrowBackIcon />}
          >
            Dashboard
          </Button>
        </Link>
        {/* <Link href="https://heyzine.com/flip-book/3a9219391d.html#page/3">
        <Button className="bg-white text-dark-purple mx-2" variant="contained" startIcon={<ArrowBackIcon />}>
          Flip Book pg:3
        </Button>
      </Link> */}
        <Link href="/student/module/alphabets">
          <Button
            className="bg-white text-dark-purple mx-2"
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Previous Module
          </Button>
        </Link>
        <Link href="/student/module/harakat">
          <Button
            className="bg-white text-dark-purple mx-2"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            Next Module
          </Button>
        </Link>
        <Link href={`/student/whiteboard`} className="mx-5 ">
          <IconButton
            aria-label=""
            size="large"
            className="bg-white text-dark-purple rounded-full hover:bg-gray-200 p-1.5 "
          >
            <FilterFramesIcon />
          </IconButton>
        </Link>
      </div>
      {/* <div className=" w-full p-2 rounded-md  flex flex-row justify-center content-center pt-5">
        <img src={logo.src} className="h-14" alt="" />{" "}
        <h1 className="ml-10 pt-5 text-white">Module 1 Arabic Alphabets</h1>
      </div> */}
      <div className="grid grid-cols-4 gap-5 ">
        <div className="col-span-1 pl-16 w-full h-fit">
          <img src={teacherImg.src} className="w-72" alt="" />
        </div>
        <div className="col-span-3 pt-10">
          <div className="my-2 mx-10 h-20"> 
          <h1 className="text-4xl text-white font-sans">Module 2 : <span className="text-5xl">Harakat</span> </h1>
          </div>
          <div className="p-5  grid grid-cols-3  w-full justify-center align-middle content-center my-auto ">
            <div className="   mt-6 rounded overflow-hidden  items-center justify-center  py-2 ">
              <Link
                href={`/student/module/harakat/fatha/discription`}
                // onClick={nameHandler}
                className="font-extrabold text-center text-dark-purple"
              >
                <div className="mx-10  bg-dark-purple border-t-2 border-x-2 hover:border-t-cyan-400 hover:border-x-cyan-400  border-white   text-center text-dark-purple h-full rounded-3xl  ">
                  <div className="bg-dark-purple  rounded-3xl">
                    <h1 className="text-9xl pb-10 text-white ">ــَـ</h1>
                    {/* <h1 className="text-3xl pt-2 my-2">Fatha</h1> */}
                  </div>
                  <div className="bg-white rounded-3xl border-b-8 border-cyan-400">
                    {" "}
                    <p className="py-5 font-medium text-2xl">
                     Fatha
                    </p>
                  </div>
                </div>
                {/* <h2 className="pt-2  text-lg">b</h2> */}
              </Link>
            </div>
            <div className="   mt-6 rounded overflow-hidden  items-center justify-center  py-2 ">
              <Link
                href={`/student/module/harakat/kasra/discription`}
                // onClick={nameHandler}
                className="font-extrabold text-center text-dark-purple"
              >
                <div className="mx-10  bg-dark-purple border-t-2 border-x-2 hover:border-t-cyan-400 hover:border-x-cyan-400  border-white   text-center text-dark-purple h-full rounded-3xl  ">
                  <div className="bg-dark-purple  rounded-3xl">
                    <h1 className="text-9xl pb-10 text-white ">ــِـ</h1>
                    {/* <h1 className="text-3xl pt-2 my-2">Fatha</h1> */}
                  </div>
                  <div className="bg-white rounded-3xl border-b-8 border-cyan-400">
                    {" "}
                    <p className="py-5 font-medium text-2xl">
                     Kasra
                    </p>
                  </div>
                </div>
                {/* <h2 className="pt-2  text-lg">b</h2> */}
              </Link>
            </div>
            <div className="   mt-6 rounded overflow-hidden  items-center justify-center  py-2 ">
              <Link
                href={`/student/module/harakat/damma/discription`}
                // onClick={nameHandler}
                className="font-extrabold text-center text-dark-purple"
              >
                <div className="mx-10  bg-dark-purple border-t-2 border-x-2 hover:border-t-cyan-400 hover:border-x-cyan-400  border-white   text-center text-dark-purple h-full rounded-3xl  ">
                  <div className="bg-dark-purple  rounded-3xl">
                    <h1 className="text-9xl pb-10 text-white ">ــُـ</h1>
                    {/* <h1 className="text-3xl pt-2 my-2">Fatha</h1> */}
                  </div>
                  <div className="bg-white rounded-3xl border-b-8 border-cyan-400">
                    {" "}
                    <p className="py-5 font-medium text-2xl">
                     Damma
                    </p>
                  </div>
                </div>
                {/* <h2 className="pt-2  text-lg">b</h2> */}
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default positioning;

{
  /* <Link href='/student/module/harakat/fatha/discription' className="bg-red-400 text-white py-2 px-5 m-5 rounded-lg">fatha</Link>
<Link href='/student/module/harakat/kasra/discription' className="bg-red-400 text-white py-2 px-5 m-5 rounded-lg">Kasra</Link>
<Link href='/student/module/harakat/damma/discription' className="bg-red-400 text-white py-2 px-5 m-5 rounded-lg">damma</Link> */
}
