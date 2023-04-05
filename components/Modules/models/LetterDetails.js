import React, { useEffect, useState } from "react";
import DrawingCanvas from "@/components/Modules/Canvas/DrawingCanvas";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import teacherOverlay from "@/components/src/img/ArabicMollemaMascotR-02.png";
import BackButton from "@/components/Layout/elements/BackButton";
import { fetchActivtyStartStatus } from "@/backend/ActivityStartLog/ActivityStartStatusDB";
import WarningCard from "@/components/Layout/card/WarningCard";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const LetterDetails = (props) => {
  const [activityStatus, setActivityStatus] = useState();
  const [batchId, setBatchId] = useState();
  console.log(props.id);
  console.log(props.module);
  console.log(props.name);
  useEffect(() => {
    const getId = async () => {
      const batch = localStorage.getItem("batchName");
      const data = await fetchBatcheIdBasedOnBatchName(batch);
      if (data[0]) {
        setBatchId(data[0].batch_id);
      }
    };
    getId();
  }, []);

  console.log(batchId);
  useEffect(() => {
    const subModule = props.name;

    if (props.module) {
      const fetchActivity = async () => {
        if (batchId) {
          console.log(batchId);
          const data = await fetchActivtyStartStatus(
            props.module,
            subModule,
            batchId
          );
          if (data[0]) {
            data[0].is_open_for_activity === true
              ? setActivityStatus(true)
              : setActivityStatus(false);
          }
          if (!data[0]) {
            setActivityStatus(false);
          }
        }
      };
      fetchActivity();
    }
  }, [batchId, props.module]);

  console.log(activityStatus);

  const canvasHandler = () => {
    setShowCanvas((prev) => !prev);
    // setShowCanvas(true);
  };

  let style = document.createElement("style");
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
  console.log(style);

  return (
    <div className="p-5">
      <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-3">
        <h1 className="mx-5 text-white text-lg">
          Arabic Alphabets : How to Write "{props.name}"

        </h1>
          <Link href={`/${props.user}/module/alphabets`} className="mx-5">
            <Button variant="contained" className="bg-white text-dark-purple" startIcon={<ArrowBackIcon />}>
              Back To Module 1
            </Button>
          </Link>
      </div>
      {props.user === "student" && activityStatus === false && (
        <WarningCard title={`Asssignment not started for ${props.name}`} />
      )}
      {props.user === "student" && activityStatus === true && (
        <div className="w-full  ">
          <div className=" p-2 text-center  rounded-lg place-content-center  mx-10 ">
            <div>
             
                <div className="w-full flex flex-col justify-center my-5   ">
                  <DrawingCanvas
                    style={style}
                    user={props.user}
                    id={props.id}
                    module={props.module}
                    symbol={props.symbol}
                    newSymbol={props.newSymbol}
                    bgImg={props.name}
                  />
                </div>
             
            </div>
          </div>
        </div>
      )}
      {props.user === "teacher" && (
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
                    style={style}
                    user={props.user}
                    id={props.id}
                    module={props.module}
                    symbol={props.symbol}
                    newSymbol={props.newSymbol}
                    bgImg={props.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LetterDetails;
