import React from "react";
import logo from "@/components/src/img/AMLogo.png";
import PlayCard from "@/components/Layout/card/PlayCard";
import AudioBtn from "@/components/Layout/elements/AudioBtn";

const HarakatTransliterationMeaningفيفِي = ({
  alphabet,
  disc,
  title,
  letter1,
  letter2,
  letter3,
  letter4,
  heading,
}) => {
  // const zabar = letter

  return (
    <div>
      <div className=" h-full w-full flex flex-col">
        <div className="bg-white  p-5  rounded-sm mb-5 grow ">
          <h1 className="pb-5 border-b-2 w-full">{heading}</h1>
          <div className="grid grid-cols-3 gap-5 py-5  ">
            <div className="col-span-1 my- w-full h-full text-center text-white">
              <PlayCard title={letter1} isBtn="true" btnText=<AudioBtn url="https://www.arabicreadingcourse.com/audio/alif.mp3" /> />
            </div>
            {!letter2 == '' ? (
              <div className="col-span-1 my- w-full h-full text-center text-white">
                <PlayCard title={letter2} isBtn="true" btnText=<AudioBtn url="https://www.arabicreadingcourse.com/audio/alif.mp3" /> />
              </div>
            ) : (
              ""
            )}
            {!letter3 == "" ? (
              <div className="col-span-1 my- w-full h-full text-center text-white">
                <PlayCard title={letter3} isBtn="true" btnText=<AudioBtn url="https://www.arabicreadingcourse.com/audio/alif.mp3" /> />
              </div>
            ) : (
              ""
            )}
            {!letter4 == "" ? (
              <div className="col-span-1 my- w-full h-full text-center text-white">
                <PlayCard title={letter4} isBtn="true" btnText=<AudioBtn url="https://www.arabicreadingcourse.com/audio/alif.mp3" /> />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarakatTransliterationMeaningفيفِي;
