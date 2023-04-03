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
        <FullCard
          disc="The kasra in phonics is the short /i/ sound. It looks exactly like the fatha but is under the consonant. The word “sit” represents this vowel perfectly. The Arabic kasra is كسرة and is it presented like this under its consonant: ِ
                The word kasra refers to something being broken or has broken. Similarly, this short Arabic vowel does the same for a word in the sense that it takes it down, or almost breaks it. For example, the letter فis pronounced /fa’/, however, with the kasra it becomes فِ pronounced /fi/. It took the letter down.
                The kasra is taken from the long vowel ي pronounced /ya/, such as the case in the word “sleep.” Let’s look at an example:

                WordWith HarakatTransliterationMeaningفيفِي/fi/in"
          title="َ"
          title2="Kasra"
          btn=<AudioButton url="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" />
        />
        <div className="mt-5 text-end">
            <Link href ='/student/module/harakat/harkat-details'><Button variant="contained" className="bg-dark-purple"  endIcon={<NavigateNextIcon />} >Next</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default positioning;
