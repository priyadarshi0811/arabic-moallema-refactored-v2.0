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

const positioning = () => {
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
          <h1 className="ml-10 pt-5 text-white">Module 5 Madd</h1>
        </div>

        <div className="grid grid-cols-2 gap-5 pt-5">
          <div className="col-span-1 ">
            <BigTitleCard  title="ا  َ" disc="When there is a fatha before alif we stretch it for two counts and it is called alif madd. An alif can also be written as a standing fatha" />
          </div>
          <div className="col-span-1 ">
            <Harkat
              heading="Examples"
              alphabet="Alif"             
              letter1="كا"
              letter2="لا"
              letter3="دا"

              
            />
          </div>
        </div>

        {/* <div className="mt-5 text-end">
            <Link href ='/student/module/harakat/discription'><Button variant="contained" className="bg-dark-purple"  endIcon={<NavigateNextIcon />} >Next</Button></Link>
        </div> */}
      </div>
    </div>
  );
};

export default positioning;
