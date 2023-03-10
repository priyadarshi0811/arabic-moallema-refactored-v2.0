import React from "react";
import logo from "@/components/src/img/AMLogo.png";
import PlayCard from "@/components/Layout/card/PlayCard";
import AudioBtn from "@/components/Layout/elements/AudioBtn";

const PositioningSec = ({
  disc,
  initial,
  middle,
  final,
  egInitial,
  egMiddle,
  egFinal,
}) => {
  return (
    <div>
      
      <div className=" h-full w-full flex flex-col">
            <div className="bg-white  p-5  rounded-sm mb-5 ">
              <h1 className="pb-5 border-b-2 w-full">Positioning</h1>
              <div className="grid grid-cols-3 gap-5 py-5 ">
                <div className="col-span-1 my- w-full h-full text-center text-white">
                  <span className="text-dark-purple">Initial</span>
                  <PlayCard
                    title={initial}
                    isBtn="true"
                    disc="Example"
                    disc2={egInitial}
                    btnText=<AudioBtn url="https://www.arabicreadingcourse.com/audio/alif.mp3" />
                  />
                </div>
                <div className="col-span-1  w-full h-full text-center text-white">
                  <span className="text-dark-purple">Middle</span>
                  <PlayCard
                    title={middle}
                    isBtn="true"
                    disc="Example"
                    disc2={egMiddle}
                    btnText=<AudioBtn url="https://www.arabicreadingcourse.com/audio/alif.mp3" />
                  />
                </div>
                <div className="col-span-1  w-full h-full text-center text-white">
                  <span className="text-dark-purple">Final</span>
                  <PlayCard
                    title={final}
                    isBtn="true"
                    disc='Example'
                    disc2={egFinal}
                    btnText=<AudioBtn url="https://www.arabicreadingcourse.com/audio/alif.mp3" />
                  />
                </div>
              </div>
            </div>
           {!disc == '' ? ( <div className="bg-dark-purple min-h-40 w-full  p-5 rounded-md grow text-white ">
              <h1 className=" ">{disc}</h1>
              <div className="p-5 text-center">
                <AudioBtn url="https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3" />
              </div>
            </div>) : ''}
          </div>
    </div>
  );
};

export default PositioningSec;
