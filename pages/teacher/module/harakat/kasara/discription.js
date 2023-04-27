import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import logo from "@/components/src/img/AMLogo.png";
import FullCard from "@/components/Layout/card/FullCard";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import Link from "next/link";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
      className="p-10 "
      style={{
        backgroundImage: `url(${colorBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        widows: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="bg-white rounded-3xl">
        <div className=" w-full p-5 rounded-md  flex flex-row justify-between    pt-10">
          <h1
            className="p-3 text-white bg-dark-purple rounded-lg text-lg  border-2 border-white"
            style={{ marginLeft: -40, width: 600 }}
          >
            Kasra: Discription
            {/* <span className="p-2 bg-green-200 text-dark-purple rounded-md">
            {props.name} " {props.symbol} "
          </span> */}
          </h1>
          <div>
            <Link href="" className="mx-5">
              <Button
                variant="contained"
                className="bg-cyan-200 text-dark-purple"
                // startIcon={<ArrowBackIcon />}
              >
                Back To Main Module
              </Button>
            </Link>
          </div>
        </div>
        <div className="p-10">
          <div className="mx-10  bg-dark-purple   text-center text-dark-purple h-full rounded-3xl  ">
            <div className="bg-dark-purple rounded-3xl">
              <h1 className="text-9xl pb-10 text-white ">ــِـ</h1>
              {/* <h1 className="text-3xl pt-2 my-2">Fatha</h1> */}
            </div>
            <div className="bg-white rounded-3xl border-b-8 border-cyan-400">
              {" "}
              <p className="py-5 text-lg font-medium">
                The kasra in phonics is the short /i/ sound. It looks exactly
                like the fatha but is under the consonant. The word “sit”
                represents this vowel perfectly. The Arabic kasra is كسرة and is
                it presented like this under its consonant: ِ The word kasra
                refers to something being broken or has broken. Similarly, this
                short Arabic vowel does the same for a word in the sense that it
                takes it down, or almost breaks it. For example, the letter فis
                pronounced /fa’/, however, with the kasra it becomes فِ
                pronounced /fi/. It took the letter down. The kasra is taken
                from the long vowel ي pronounced /ya/, such as the case in the
                word “sleep.” Let’s look at an example: WordWith
                HarakatTransliterationMeaningفيفِي/fi/in
              </p>
            </div>
          </div>

          <div className="mt-5 w-full flex justify-center">
            <Link href="/teacher/module/harakat/kasara">
              <Button
                variant="contained"
                className="bg-white text-dark-purple"
                endIcon={<NavigateNextIcon />}
              >
                Start
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default positioning;
