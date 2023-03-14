import React, { useState } from "react";
import ColorOptions from "@/components/Modules/Canvas/ColorOptions";
import colorBgImg from "@/components/src/img/MouthImg.png";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import Link from "next/link";
import { Button } from "@mui/material";
import logo from "@/components/src/img/AMLogo.png";

const LetterDetails = (props) => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [getColor, setColor] = useState("red");

  const changeColorPri = (colorData) => {
    //console.log(getColor);
    setColor(colorData);
  };
  console.log(getColor);

  const canvasHandler = () => {
    setShowCanvas((prev) => !prev);
    // setShowCanvas(true);
  };

  return (
    <>
      <div className=" w-full p-2 rounded-md  flex flex-row justify-center content-center pt-5">
        <img src={logo.src} className="h-14" alt="" />{" "}
        <h1 className="ml-10 pt-5 text-white text-lg">
          Arabic Alphabets :{" "}
          <span className="p-2 bg-green-200 text-dark-purple rounded-md">
            {props.name} " {props.symbol} "
          </span>
        </h1>
      </div>
      <div className=" bg-white rounded-md w-full">
        <div className="grid w-full grid-cols-2  p-5 md:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="h-full gap-3 p-5 text-center text-dark-purple rounded-md  place-content-center ">
              <h2 className="text-2xl">How to speak</h2>
              <img src={colorBgImg.src} className="w-4/5 m-5 " alt="letter" />

              <button className="p-2 mx-2 my-5 font-bold text-black bg-green-200 rounded-md border-1">
                {props.name} "{props.symbol}"{" "}
                <AudioButton url={props.audioUrl} />
              </button>
              <div className="mx-5">
                <Link href="/teacher/module/alphabets" className="mx-3">
                  <Button variant="contained" className="bg-dark-purple">
                    Back
                  </Button>
                </Link>
                <Link
                  href={`/teacher/activity/tracing/${props.name}`}
                  className="mx-3"
                >
                  <Button variant="contained" className="bg-dark-purple">
                    Activity
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-md  sm:col-span-3">
            <div className="h-full p-3 text-center">
              <h2 className="text-lg  ">
                How to Write "{props.name || "Mim"}"
              </h2>
              <div className="bg-gray-400 p-4 w-96  ml-64 mt-2 flex  items-center ">
                <img
                  src={props.gif}
                  alt="Example GIF"
                  className="h-96 object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="grid grid-cols-3 py-5 mx-0 mt-5 text-white rounded-md   bg-cyan-900">
                  <div className="m-3 span-cols-2 ">
                    <span>Initial Form</span>
                    <h1
                      className="mt-5 text-5xl text-gray-300 "
                      dir="rtl"
                      lang="ar"
                    >
                      {props.initial || مـ}
                    </h1>
                  </div>
                  <div className="m-3 span-cols-2 ">
                    <span>Medial Form</span>
                    <h1
                      className="mt-5 text-5xl text-gray-300 "
                      dir="rtl"
                      lang="ar"
                    >
                      {props.middle || ـمـ}
                    </h1>
                  </div>
                  <div className="m-3 span-cols-2  h-fit">
                    <span>Final Form</span>
                    <h1
                      className="mt-5 text-5xl text-gray-300 "
                      dir="rtl"
                      lang="ar"
                    >
                      {props.final || ـم}
                    </h1>
                  </div>
                </div>

                <div className="grid grid-cols-3 py-5 mx-0 mt-5 text-white rounded-md bg-cyan-900">
                  <div className="m-3 span-cols-2 ">
                    <span>Zabar</span>
                    <h1 className="mt-5 text-5xl " dir="rtl" lang="ar">
                      {props.exInitial || ﻳَﻮﻡ}
                    </h1>
                  </div>
                  <div className="m-3 span-cols-2 ">
                    <span>Zer</span>
                    <h1 className="mt-5 text-5xl " dir="rtl" lang="ar">
                      {props.exMiddle || ﻳَﻮﻡ}
                    </h1>
                  </div>
                  <div className="m-3 span-cols-2  h-fit">
                    <span>Pesh</span>
                    <h1 className="mt-5 text-5xl " dir="rtl" lang="ar">
                      {props.exFinal || ﻋَﺎﻡ}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterDetails;
