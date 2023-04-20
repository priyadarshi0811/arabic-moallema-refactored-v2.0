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
          Damma : Discription
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
          disc="The damma in phonics is the short /u/ sound. It is an exact replica of the letterو /waaw/, but smaller. The damma in Arabic is ضمة and it looks like this on top of the consonant: ُ
          One of the many meanings of damma is to piece together in a cuddle-like way, and this is what it does to a letter. For example, the letter ك is pronounced /saf/. With the addition of the damma, it becomes كُ pronounced /ku/. It feels like it has been cuddled in.
          You probably already guessed it, but the Arabic damma comes from the long vowel و pronounced ū/ as in “soon.” Let’s look at an example:
          
          WordWith HarakatTransliterationMeaningكتبكُتُب/kotob/Books"
          title="ــُـ"
          title2="Damma"  
          
        />
        <div className="mt-5 w-full flex justify-center">
            <Link href ='/student/module/harakat/damma'><Button variant="contained" className="bg-white text-dark-purple"  endIcon={<NavigateNextIcon />} >Start</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default positioning;
