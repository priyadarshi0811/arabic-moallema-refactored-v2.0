import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import logo from "@/components/src/img/AMLogo.png";
import FullCard from "@/components/Layout/card/FullCard";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import Link from "next/link";
import { Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
       <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-10">
        <h1 className="mx-5 text-white text-lg">
          Fatha : Discription
        </h1>
        <div>
         

          <Link href="" className="mx-5">
            <Button
              variant="contained" 
              className="bg-white text-dark-purple"
              // startIcon={<ArrowBackIcon />}
            >
              Back To Main Module
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-10">
       
        <FullCard
          disc="The fatha in phonics is the short /a/ sound. It is a short line reaching to the sky. It is the same sound as in the word “cut”. In Arabic, you would write it as فتحة and it looks like this َ
          The word fatha meanings opening and this is what it literally does. It opens up the word, elevating it. For example, the letter س is pronounced /seen/. With the addition of the fatha, it becomes سَ pronounced /sa/. It is as if the sound went up.
          Originally, each short vowel originates, if you wish, from an original long vowel. The Arabic fatha comes from the alif long vowel آ pronounced /ā/ as in “cat.” Let’s look at an example:
          
          WordWith HarakatTransliterationMeaningسكنسَكَنَ/sakana/(he) lived
          "
          title="ــَـ"
          title2="Fatha"
          
        />
        <div className="mt-5 w-full flex justify-center">
            <Link href ='/student/module/harakat/fatahah'><Button variant="contained" className="bg-white text-dark-purple"  endIcon={<NavigateNextIcon />} >Start</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default positioning;
