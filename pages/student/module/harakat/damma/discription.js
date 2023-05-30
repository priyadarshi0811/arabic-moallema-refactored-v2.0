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
            Damma: Description
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
            <h1 className="text-9xl py-5 text-white "
          style={{
            fontFamily:
              '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
            fontWeight: 500,
          }}>ــُـ</h1>
              {/* <h1 className="text-3xl pt-2 my-2">Fatha</h1> */}
            </div>
            <div className="bg-white rounded-3xl border-b-8 border-cyan-400">
              {" "}
              <p className="py-5 text-lg font-medium">
          The damma in phonics is the short /u/ sound. It is an exact
          replica of the letterو /waaw/, but smaller. The damma in Arabic
          is ضمة and it looks like this on top of the consonant: ُ One of
          the many meanings of damma is to piece together in a cuddle-like
          way, and this is what it does to a letter. For example, the
          letter ك is pronounced /saf/. With the addition of the damma, it
          becomes كُ pronounced /ku/. It feels like it has been cuddled
          in. You probably already guessed it, but the Arabic damma comes
          from the long vowel و pronounced ū/ as in “soon.” Let’s look at
          an example: WordWith
          HarakatTransliterationMeaningكتبكُتُب/kotob/Books
        </p>
            </div>
          </div>

          <div className="mt-5 w-full flex justify-center">
            <Link href="/student/module/harakat/damma/how-to-read-1">
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

