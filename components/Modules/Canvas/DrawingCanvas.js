import AuthContext from "@/components/Context/store/auth-context";
import supabase from "@/supabaseClient";
import { useContext, useEffect, useRef, useState } from "react";

// BgImage For Canvas
import alifV from "@/components/src/alifVector01.png";
import Baa from "@/components/src/all-letters-png/lletter(28).png";
import Ta from "@/components/src/all-letters-png/lletter(1).png";
import Thaa from "@/components/src/all-letters-png/lletter(2).png";
import Jeem from "@/components/src/all-letters-png/lletter(4).png";
import Alif from "@/components/src/all-letters-png/lletter(3).png";
import Haa from "@/components/src/all-letters-png/lletter(5).png";
import Khaa from "@/components/src/all-letters-png/lletter(6).png";
import Daal from "@/components/src/all-letters-png/lletter(7).png";
import Dhaal from "@/components/src/all-letters-png/lletter(8).png";
import Raa from "@/components/src/all-letters-png/lletter(9).png";
import Zai from "@/components/src/all-letters-png/lletter(10).png";
import Seen from "@/components/src/all-letters-png/lletter(11).png";
import Sheen from "@/components/src/all-letters-png/lletter(12).png";
import Saad from "@/components/src/all-letters-png/lletter(13).png";
import Daad from "@/components/src/all-letters-png/lletter(14).png";
import Taa from "@/components/src/all-letters-png/lletter(15).png";
import Dhaa from "@/components/src/all-letters-png/lletter(16).png";
import Ayn from "@/components/src/all-letters-png/lletter(17).png";
import Ghayn from "@/components/src/all-letters-png/lletter(18).png";
import Faa from "@/components/src/all-letters-png/lletter(19).png";
import Qaaf from "@/components/src/all-letters-png/lletter(20).png";
import Kaaf from "@/components/src/all-letters-png/lletter(21).png";
import Laam from "@/components/src/all-letters-png/lletter(22).png";
import Meem from "@/components/src/all-letters-png/lletter(23).png";
import Noon from "@/components/src/all-letters-png/lletter(24).png";
import Ha from "@/components/src/all-letters-png/lletter(25).png";
import Waaw from "@/components/src/all-letters-png/lletter(26).png";
import Ya from "@/components/src/all-letters-png/lletter(27).png";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { PhotoCamera } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Link from "next/link";

const DrawingCanvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  // const [statusData, setStatusData] = useState("");

  const authCtx = useContext(AuthContext);
  const id = authCtx.userEmail;

  const [isDrawing, setIsDrawing] = useState(false);
  const [image, setImage] = useState(false);
  console.log(image);

  //****************canvas Logic******************* */

  let canvas = canvasRef.current;
  // var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  // var width = (window.innerWidth * 3) / 5;

  let context;
  if (canvas) {
    context = canvas.getContext("2d");
  }
  useEffect(() => {
    canvas = canvasRef.current;
    canvas.width = 1120;
    canvas.height = 280;

    context = canvas.getContext("2d");
    context.lineCap = "round";

    context.font = "150px 'Ubuntu Mono', monospace";
    // context.font = "100px Arial";

    context.fillStyle = "lightgray";

    // Align the text horizontally and vertically
    context.textAlign = "center";

    context.fillText(props.symbol, 160, 180);
    context.fillText(props.symbol, 390, 180);
    context.fillText(props.symbol, 600, 180);
    context.fillText(props.symbol, 850, 180);

    context.lineWidth = 5;
    contextRef.current = context;
  }, [id, props.symbol]);
  if (context) {
    context.strokeStyle = "black";
  }
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
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

  const saveImageToLocal = (event) => {
    let link = event.currentTarget;
    link.setAttribute("download", "canvas.png");
    let image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
    setImage(event.currentTarget.href);

    console.log(id);

    if (id) {
      supabase
        .from("assignments")
        .insert({
          assignment_name: "letterPractice",
          student_id: id,
          batch_id: "Batch 1",
          submission: image,
          status: "submitted",
        })
        .then((data) => console.log(data))
        .catch((er) => console.log(er));
    }
  };

  const canvasBg = props.bgImg;
  console.log("CanVas", canvasBg);

  return (
    <>
      <div className="w-full cursor-cell flex justify-center ">
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
      <div className="mt-8 mr-14">
        <h1>{props.bgImg} </h1>

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
        {/* <button
            onClick={setToDraw}
            className="px-4 py-2 ml-4 text-white rounded-md bg-dark-purple hover:bg-dark-purple hover:shadow-lg"
          >
            Draw
          </button>
          <button
            onClick={setToErase}
            className="px-4 py-2 ml-4 text-white rounded-md bg-dark-purple hover:bg-dark-purple hover:shadow-lg"
          >
            Erase
          </button>
          <button
            onClick={setToClear}
            className="px-4 py-2 ml-4 text-white rounded-md bg-dark-purple hover:bg-dark-purple hover:shadow-lg"
          >
            Clear
          </button> */}
        <div className="mt-5">
          <a
            className="p-3 ml-4 text-white bg-red-500 rounded-md md:mt-40 hover:bg-red-600 hover:shadow-lg"
            id="download_image_link"
            href="download_link"
            onClick={saveImageToLocal}
          >
            Submit Activity
          </a>
          <Link
            href="/teacher/activity/dnd"
            className="p-3 ml-4 text-white bg-dark-purple rounded-md md:mt-40 hover:bg-blue-600 hover:shadow-lg"
          >
            {" "}
            Next Activity
          </Link>
        </div>
      </div>
    </>
  );
};

export default DrawingCanvas;
