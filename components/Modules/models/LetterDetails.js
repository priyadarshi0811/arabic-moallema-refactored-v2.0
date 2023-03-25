import React, { useEffect, useState } from "react";
import DrawingCanvas from "@/components/Modules/Canvas/DrawingCanvas";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import teacherOverlay from "@/components/src/img/ArabicMollemaMascotR-02.png";
import BackButton from "@/components/Layout/elements/BackButton";
import { fetchActivtyStartStatus } from "@/backend/ActivityStartLog/ActivityStartStatusDB";
import WarningCard from "@/components/Layout/card/WarningCard";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";

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

  return (
    <div className="p-5">
      <div className="">
        <h1 className=" my-auto p-5 text-3xl  text-white mx-3 ">
          <span className="bg-white rounded-full p-0 h-fit">
            <BackButton />
          </span>{" "}
          Assignmets
        </h1>
      </div>
      {props.user === "student" && activityStatus === false && (
        <WarningCard title={`Asssignment not started for ${props.name}`} />
      )}
      {props.user === "student" && activityStatus === true && (
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
