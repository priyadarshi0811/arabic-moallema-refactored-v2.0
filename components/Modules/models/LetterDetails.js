import React, { useState } from "react";
import DrawingCanvas from "@/components/Modules/Canvas/DrawingCanvas";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import teacherOverlay from "@/components/src/img/ArabicMollemaMascotR-02.png";

const LetterDetails = (props) => {
  // const [getColor, setColor] = useState("red");
  // const changeColorPri = (colorData) => {
  //   //console.log(getColor);
  //   setColor(colorData);
  // };
  // console.log(getColor);

  const canvasHandler = () => {
    setShowCanvas((prev) => !prev);
    // setShowCanvas(true);
  };

  console.log(props.name, "Props.name");

  return (
    <div className="p-5">
      <h1 className=" p-5 text-3xl text-center text-white">Module1</h1>
      <div className="w-full  ">
        <div className=" p-3 text-center  rounded-lg place-content-center bg-white mx-10 ">
          <h2 className="text-2xl">How to Write "{props.name}"</h2>
          <div>
            <h2 className="my-10 pb-5 text-2xl font-extrabold border-b text-dark-purple pc-2 ">
              Start Drawing
            </h2>

            <div className=" mx-0 mt-5 ">
              <div className=" p-5 mt-15 "></div>
              <div className="w-full flex flex-col justify-center my-5   ">
                <DrawingCanvas
                  symbol={props.symbol}
                  newSymbol={props.newSymbol}
                  bgImg={props.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterDetails;
