import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import logo from "@/components/src/img/AMLogo.png";
import FullCard from "@/components/Layout/card/FullCard";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import Link from "next/link";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TypeInDiscCard from "@/components/Modules/models/TypeInDiscCard";
import { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
      <div className="p-10">
        <div className=" min-h-20 w-full p-2 rounded-md  flex flex-row justify-center content-center mb-10">
          <img src={logo.src} className="h-14" alt="" />{" "}
          <h1 className="ml-10 pt-5 text-white">Module 3 Tanveen</h1>
        </div>
        <FullCard
          disc="Tanween is one of the vowels that are used to vocalize constants, it is added to the end of the word so it’s called “end of word vowels”. When it is added to the end of the word, we pronounce it by adding the ‘N’ sound.
          "
          title2="Tanween"
          comp=<TypeInDiscCard
            title="Types of Tanween"
            disc="There are three types of tanween: The names of those three types in Arabic is tanween with Fathatain, Kasratain, and with Dammatain."
            initial=" ً"
            middle=" ٍ"
            final=" ٌ"
          />
          btn=<AudioButton url="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" />
        />
        <div className="mt-5 text-end">
          <Link href="/student/module/tanveen/tanveen-details">
            <Button
              variant="contained"
              className="bg-dark-purple"
              endIcon={<NavigateNextIcon />}
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default positioning;
