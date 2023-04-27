import React, { useEffect, useState } from "react";
import ColorOptions from "@/components/Modules/Canvas/ColorOptions";
import colorBgImg from "@/components/src/img/MouthImg.png";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import Link from "next/link";
import { Button } from "@mui/material";
import logo from "@/components/src/img/AMLogo.png";
import {
  addActivityStartStatus,
  checkActivityStartStatus,
} from "@/backend/ActivityStartLog/SetActivityLogDB";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReactPlayer from "react-player";
import VideoControlBtn from "@/components/Layout/elements/VideoControlBtn";
import GeneralCard from "@/components/Layout/card/GeneralCard";
import { IconButton } from "@mui/joy";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";

import Ractangle from "@/components/src/img/Rectangle.png"

const LetterDetails = (props) => {
  console.log("user: ", props.user);
  const [showCanvas, setShowCanvas] = useState(false);
  const [activityPath, setActivityPath] = useState();

  const [getColor, setColor] = useState("red");
  const [batchId, setBatchId] = useState();
  const [assignment, setAssignment] = useState([]);
  const [isStarted, setIsStarted] = useState();

  const changeColorPri = (colorData) => {
    //console.log(getColor);
    setColor(colorData);
  };
  console.log(getColor);

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
  console.log(props.module);
  console.log(props.name);

  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      if (props.name && props.module) {
        const data = await fetchAssignmentForLetter(props.name, props.module);
        if (data) {
          if (data[0]) {
            setAssignment(data[0].assignment_json.letter);
            setActivityPath(
              `${data[0].assignment_json.letter[0].activity_type}`
            );
          }
        }
      }
    };
    fetchAssignment();
  }, [props.module, props.name]);

  console.log(assignment);
  console.log(activityPath);

  useEffect(() => {
    const getStarted = async () => {
      let data;
      if (props.name && batchId && props.module) {
        console.log("in");
        data = await checkActivityStartStatus(
          props.module,
          props.name,
          batchId
        );
        console.log(data[0]);
        if (data) {
          if (data[0]) {
            setIsStarted(true);
          }
        } else {
          setIsStarted(false);
        }
      }
    };
    getStarted();
  }, [props.name, batchId, props.module]);

  const setActivitySubmodule = async () => {
    if (props.user !== "student" && isStarted === undefined) {
      let data;
      const subModule = props.name;
      if (subModule && batchId && props.module) {
        data = await addActivityStartStatus(props.module, subModule, batchId);
        if (!data) {
          console.log("already added");
        }
      }
    }
    if (activityPath) {
      window.location.href = `/${
        props.user
      }/activity/${activityPath}/alphabets/${props.name}/${0}`;
    }
    if (isStarted === undefined) {
      window.location.href = `/${props.user}/activity/tracing/alphabets/${
        props.name
      }/${0}`;
    }
  };

  const canvasHandler = () => {
    setShowCanvas((prev) => !prev);
    // setShowCanvas(true);
  };

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    // volume: 0.5,
    played: 0,
    seeking: false,

    Buffer: true,
  });

  const {
    playing,
    muted,
    volume,
    playbackRate,
    played,
    seeking,
    buffer,
    onEnded,
  } = videoState;

  console.log("HTP Play", playing, onEnded);

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const cFunction = () => {
    setVideoState({
      playing: false,
    });
  };

  console.log("mp4", props.mp4);



  return (
    <>
      <div className=" bg-white rounded-3xl w-full mt-5 ml-5">
        <div className=" w-full p-2 rounded-3xl  flex flex-row justify-between pt-6">
          {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
          <h1
            className="p-3 text-white  rounded-lg text-lg  border-2 border-white bg-dark-purple"
            style={{ marginLeft: -40, width: 600, backgroundImage: `url(${Ractangle})`,  }}
          >
            Arabic Alphabets : {props.name}
            {/* <span className="p-2 bg-green-200 text-dark-purple rounded-md">
            {props.name} " {props.symbol} "
          </span> */}
          </h1>
          <div className="flex content-center">
            <Link href={`/teacher/whiteboard`} className="mx-5 ">
              <IconButton
                aria-label="delete"
                size="large"
                className="bg-cyan-200 text-dark-purple rounded-full hover:bg-gray-200 p-1.5 "
              >
                <FilterFramesIcon />
              </IconButton>
            </Link>

            <Link href={`/${props.user}/module/alphabets`} className="mx-5 ">
              <Button
                variant="contained"
                className="bg-cyan-200 text-dark-purple"
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2  p-5 md:grid-cols-4 lg:ml-5 gap-4">
          <div className="col-span-2 sm:col-span-1 shadow-md rounded-3xl">
            <div className="h-full gap-3 p-5 text-center text-dark-purple rounded-lg  place-content-center ">
              <h2 className="text-xl w-full text-white bg-dark-purple p-2 rounded-lg">
                How to speak: "{props.symbol}"
              </h2>
              <ReactPlayer
                className="player"
                url={props.mp4}
                width={240}
                height={320}
                playing={playing}
                muted={muted}
                onEnded={cFunction}
                  //  onEnded={onEnded}
              />
              <VideoControlBtn
                onPlayPause={playPauseHandler}
                playing={playing}
              />

              {/* <button className="p-2 mx-2 my-5 font-bold text-black bg-green-200 rounded-md border-1" >
                {props.name} "{props.symbol}"{" "}
                <AudioButton url={props.audioUrl} />
              </button> */}
            </div>
          </div>
          <div className="col-span-2 bg-white rounded-3xl shadow-md  sm:col-span-3 md:px-2 lg:px-8">
            <div className="h-full p-3 text-center">
              {/* <h2 className="text-xl  ">
                How to Write: {props.name} "{props.symbol}"
              </h2> */}
              <div className=" p-4 w-full border-2 rounded-3xl    mt-2 flex  items-center font-sans">
                <img
                  src={
                    props.gif ||
                    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjA2ZWUyMGYxNWMwODZlZTJiYWE3YTk5MTUxMWQwMzRmM2U4NGU2MyZjdD1z/Qhg5vbmLB0iszYoktc/giphy.gif"
                  }
                  alt="Example GIF"
                  className="h-72 object-cover mx-auto "
                />
              </div>

              <div className="grid grid-cols-1 gap-5 ">
                <div className="grid grid-cols-3 mx-0 mt-5 gap-4">
                  <GeneralCard
                    disc="Final Form"
                    title={props.final}
                    color="#09DBDB"
                  />
                  <GeneralCard
                    disc="Medial Form"
                    title={props.middle}
                    color="#FD5678"
                  />
                  <GeneralCard
                    disc="Initial Form"
                    title={props.initial}
                    color="#ECABE1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full p-2 rounded-md  flex flex-row justify-center   pt-3">
        <div className="mx-5">
          <Link
            href={`/${props.user}/module/alphabets/similar-sounding-letters`}
          >
            <Button variant="contained" className="text-dark-purple bg-white">
              Next Seciton
            </Button>
          </Link>
        </div>
        <div className="mx-5">
          <Button
            onClick={setActivitySubmodule}
            variant="contained"
            className="text-dark-purple bg-white"
          >
            Activity
          </Button>
        </div>
      </div>
    </>
  );
};

export default LetterDetails;
