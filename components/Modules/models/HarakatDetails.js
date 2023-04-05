import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GeneralCard from "@/components/Layout/card/GeneralCard";
import Fatahah  from "@/components/src/img/arabic_fatha.png";
 
const AlphabatesDescription = [
  {
    name: "Alif",
    symbol: "ا",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3",
    description: { initial: "أ", middle: "ـا", final: "ـا" },
    example: { initial: "أَخَذَ", middle: "سَأَلَ", final: "ذَرَأَ" },
    harakat: { zabar: "اَ", zer: "اِ", pesh: "اُ" },
  },
];

const LetterCardL = ({ label, name, audioUrl }) => {
  console.log("Harakat Details", label, "label");
  return (
    <div className="items-center w-full  overflow-hidden rounded shadow-lg min:h-fit justify-cente min:w-fit h-80 my-16">
      <div className=" font-bold text-center bg-dark-purple text-white h-64   content-center ">
        <h2 className="text-9xl font-sans flex justify-center content-center py-8 ">
          ا
        </h2>
      </div>
      <div className="bg-slate-50 h-fit">
        <div></div>

        <div>
          <Button className="bg-teal-300 my-3">
            "ا"
            <AudioButton url="https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3" />
          </Button>
        </div>
      </div>
    </div>
  );
};
const LetterCardR = ({ label, name, audioUrl }) => {
  console.log(label, "label");
  return (
    <div className="items-center w-full  overflow-hidden rounded shadow-lg min:h-fit justify-cente min:w-fit h-80 my-16">
      <div className=" font-bold text-center text-dark-purple  h-64   content-center ">
        <image src={Fatahah} className="w-40 h-40" />
        <h2 className="text-9xl font-sans flex justify-center content-center py-8 ">
          ا
        </h2>
      </div>
      <div className="bg-slate-50 h-fit">

        <div>
          <Button className="bg-teal-300 my-3">
            "ا"
            <AudioButton url="https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const HarakatDetails = () => {
  return (
    <div className="">
      <div className="w-full  ">
        <div className=" w-full p-2 rounded-md  flex flex-row justify-between   pt-3">
          {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
          <h1 className="mx-2 text-white text-lg">Fataha Harakat</h1>
          <image src="https://www.i2symbol.com/images/cool-letters/arabic/arabic_fatha_isolated_form_uFE76_icon_256x256.png" className="w-20 h-20" />
          <Link href={""} className="mx-5">
            <Button
              variant="contained"
              className="bg-white text-dark-purple"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </Link>
        </div>
        <div className=" bg-white rounded-md w-full mt-5">
          <div className=" w-full p-5 md:grid-cols-4   ">
            <div className=" w-full bg-white rounded-md  sm:col-span-3 md:px-5 lg:px-14">
              <div className="h-full p-3 text-center">
                <div className="grid grid-cols-1 gap-5 ">
                  <div className="grid grid-cols-3 mx-0 mt-5 gap-20">
                    <LetterCardL
                      label={AlphabatesDescription.symbol}
                      name={AlphabatesDescription.symbol}
                      audioUrl={AlphabatesDescription.audio}
                    />
                    <LetterCardR
                      label={AlphabatesDescription.symbol}
                      name={AlphabatesDescription.symbol}
                      audioUrl={AlphabatesDescription.audio}
                    />
                    <div className="">
                      <div className="grid grid-cols-1 mx-0 mt-5 gap-4">
                        <GeneralCard disc="Final Form" title="أ" />
                        <GeneralCard disc="Medial Form" title="ـا"/>
                        <GeneralCard
                          disc="Initial Form"
                          title="ـا"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full p-2 rounded-md  flex flex-row justify-center   pt-3">
          <div className="mx-5">
            <Link href="/student/module/alphabets/similar-writing-letters">
              <Button variant="contained" className="text-dark-purple bg-white">
                Next Section
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarakatDetails;
