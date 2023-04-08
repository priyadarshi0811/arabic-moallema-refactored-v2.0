import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { useState } from "react";
import ColorOptions from "./ColorOptions";
const CanvasForWords = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [update, setUpdate] = useState();

  const [getColor, setColor] = useState("red");

  const changeColorPri = (colorData) => {
    //console.log(getColor);
    setColor(colorData);
  };

  let style;
  useEffect(() => {
    style = document.createElement("style");
    style.innerHTML = `
    @font-face {
      font-family: 'Noto Sans Arabic';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      src: url(https://fonts.gstatic.com/s/notosansarabic/v18/nwpxtLGrOAZMl5nJ_wfgRg3DrWFZWsnVBJ_sS6tlqHHFlhQ5l3sQWIHPqzCfyGyfuXqA.woff2) format('woff2');
      unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Ubuntu Mono';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/ubuntumono/v15/KFOjCneDtsqEr0keqCMhbCc3CsTKlA.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    `;
    document.head.appendChild(style);
  }, []);

  console.log(style);
  let canvas = canvasRef.current;

  let context;
 
  useEffect(() => {
    if (context) {
      console.log("in");
      setUpdate((prev) => !prev);
      context.font = "100px Noto Sans Arabic";
    }
  }, [canvas, context]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1120;
    canvas.height = 350;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.fillStyle = "lightgray";
    context.font = "100px Noto Sans Arabic";

    // Align the text horizontally and vertically
    context.textAlign = "center";
    context.lineWidth = 8;
    context.strokeText("بجد تب بر", 320, 120);
    context.strokeText("ذر سش نم", 550, 280);
    context.strokeText("صص طع غف", 770, 120);

    context.fillStyle = "white";
    context.fillText("بجد تب بر", 320, 120);
    context.fillText("ذر سش نم", 550, 280);

    context.fillText("صص طع غف", 770, 120);

    contextRef.current = context;
  }, [update]);

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = getColor;
    }
  }, [getColor]);

  console.log(getColor);
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    canvasRef.current.strokeStyle = getColor;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const setToDraw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };

  const setToErase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };
  const setToClear = () => {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    var w = canvas.width;
    canvas.width = 1;
    canvas.width = w;
    context.lineWidth = 5;
  };

  return (
    <>
      <div>
        <div className="bg-white py-10 rounded-xl">
          <h2 className="my-5 pb-5 text-2xl font-extrabold border-b text-dark-purple flex justify-center items-center ">
            Start Drawing
          </h2>
          <div className="w-full cursor-cell flex justify-center pt-5 ">
            <canvas
              className="bg-white border-2 rounded-lg shadow-lg border-1"
              style={{
                // backgroundImage: `url(${alifV.src})`,
                backgroundRepeat: "repeat-x",
              }}
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            ></canvas>
          </div>
          <div className="mt-8 flex justify-center items-center mb-10">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={setToDraw}
                className="bg-dark-purple"
                startIcon={<EditIcon />}
              >
                Draw
              </Button>
              <Button
                onClick={setToErase}
                className="bg-dark-purple"
                startIcon={<CleaningServicesIcon />}
              >
                Erase
              </Button>
              <Button
                onClick={setToClear}
                className="bg-dark-purple"
                startIcon={<DeleteForeverIcon />}
              >
                Clear
              </Button>
            </ButtonGroup>
          </div>
          <ColorOptions finalColor={changeColorPri} />
        </div>
      </div>
    </>
  );
};

export default CanvasForWords;
