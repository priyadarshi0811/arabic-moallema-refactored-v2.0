import InProgress from "@/components/Layout/screen/InProgress";
import React, { useContext, useEffect, useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import teacherImg from "@/components/src/img/ArabicMollemaMascot-03.png";
import AddUser from "@/components/user/admin/AddStudent";
import TopTitleWithImg from "@/components/Layout/section/TopTitleWithImg";
import Link from "next/link";
import HomeActivityCard from "@/components/Layout/card/HomeActivityCard";
import logo from "@/components/src/img/AMLogo.png";
import HomeActivityCardStudent from "@/components/Layout/card/HomeActivityCardStudent";
import BatchContext from "@/components/Context/store/batch-context";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";

const Alphabates = [
  { letter: "خ", title: "Khaa" },
  { letter: "ح", title: "Haa" },
  { letter: "ج", title: "Jeem" },
  { letter: "ث", title: "Thaa" },
  { letter: "ت", title: "Ta" },
  { letter: "ب", title: "Baa" },
  { letter: "ا", title: "Alif" },
  { letter: "ص", title: "Saad" },
  { letter: "ش", title: "Sheen" },
  { letter: "س", title: "Seen" },
  { letter: "ز", title: "Zai" },
  { letter: "ر", title: "Raa" },
  { letter: "ذ", title: "Dhaal" },
  { letter: "د", title: "Daal" },
  { letter: "ق", title: "Qaaf" },
  { letter: "ف", title: "Faa" },
  { letter: "غ", title: "Ghayn" },
  { letter: "ع", title: "Ayn" },
  { letter: "ظ", title: "Dhaa" },
  { letter: "ط", title: "Taa" },
  { letter: "ض", title: "Daad" },
  { letter: "ي", title: "Yaa" },
  { letter: "و", title: "Waaw" },
  { letter: "ه", title: "Ha" },
  { letter: "ن", title: "Noon" },
  { letter: "م", title: "Meem" },
  { letter: "ل", title: "Laam" },
  { letter: "ك", title: "Kaaf" },
];

const index = () => {
  const [letterName, setLetterName] = useState();
  const { myArray, setMyArray } = useContext(BatchContext);

  const authCtx = useContext(AuthContext);
  const router = useRouter();

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

  console.log("obj: ", myArray);
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
          <Button className="bg-white text-dark-purple" variant="contained" startIcon={<ArrowBackIcon />}>
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="ml-10 pt-2 text-white">Activity 1: Letter Tracing</h1>
      </div>
      <div className="grid grid-cols-4 gap-5 ">
        <div className="col-span-1 pl-16 w-full h-fit">
          <img src={teacherImg.src} className="w-72" alt="" />
        </div>
        <div className="col-span-3 pt-10">
          <div className="p-5  grid grid-cols-7 m-4 justify-center ">
            {Alphabates.map((alphabate) => (
              <HomeActivityCardStudent
                name={alphabate.letter}
                title={alphabate.title}
                letter={setLetterName}
                link="tracing"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
