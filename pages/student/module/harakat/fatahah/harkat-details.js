import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import logo from "@/components/src/img/AMLogo.png";
import Harkat from "@/components/Modules/models/SimpleLetterCard";
import FullCard from "@/components/Layout/card/FullCard";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import Link from "next/link";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BigTitleCard from "@/components/Modules/models/BigTitleCard";

import { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";


const positioning = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  /**************Restricting Students Route************************* */
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

  /**************Restricting Students Route************************* */
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
      <div className="p-10">
        <div className=" min-h-20 w-full p-2 rounded-md  flex flex-row justify-center content-center mb-10">
          <img src={logo.src} className="h-14" alt="" />{" "}
          <h1 className="ml-10 pt-5 text-white">Module 2 Harakat</h1>
        </div>

        <div className="grid grid-cols-2 gap-5 pt-5">
          <div className="col-span-1 ">
            <BigTitleCard  title="َ" disc="The fatha in phonics is the short /a/ sound. It is a short line reaching to the sky. It is the same sound as in the word “cut”. In Arabic, you would write it as فتحة and it looks like this َ
          The word fatha meanings opening and this is what it literally does. It opens up the word, elevating it. For example, the letter س is pronounced /seen/. With the addition of the fatha, it becomes سَ pronounced /sa/. It is as if the sound went up." />
          </div>
          <div className="col-span-1 ">
            <Harkat
              heading="Examples"
              alphabet="Alif"             
              letter1="اَ"
              letter2="بَ"
              letter3="تَ"
              letter4="ثَ"
              
            />
          </div>
        </div>

        {/* <div className="mt-5 text-end">
            <Link href ='/student/module/harakat/fatahahdiscription'><Button variant="contained" className="bg-dark-purple"  endIcon={<NavigateNextIcon />} >Next</Button></Link>
        </div> */}
      </div>
    </div>
  );
};

export default positioning;
