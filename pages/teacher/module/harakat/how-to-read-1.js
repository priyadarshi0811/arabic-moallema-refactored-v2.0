import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoWithBtn from "@/components/Layout/elements/VideoWithBtn";
import ReactPlayer from "react-player";
import VideoControlBtn from "@/components/Layout/elements/VideoControlBtn";
import { useState } from "react";

const HowToRead = () => {
  const [videoIndex, setVideoIndex] = useState(1);

  const VIDEO_PATH_1 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674726/3%20letters/animation_1_ez3s0m.mp4";
  const VIDEO_PATH_2 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674722/3%20letters/animation_2_hw9njl.mp4";
  const VIDEO_PATH_3 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674722/3%20letters/animation_3_vthrl1.mp4";

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

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${colorBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        widows: "100vw",
        minHeight: "100vh",
      }}
    >
      {" "}
      <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-10">
        <h1 className="mx-5 text-white text-lg">
          Arabic Alphabets : How to Read
        </h1>
        <Link href={`/teacher/module/harakat/fatahah`} className="mx-5">
          <Button
            variant="contained"
            className="bg-white text-dark-purple"
            startIcon={<ArrowBackIcon />}
          >
            Back To Module 2
          </Button>
        </Link>
      </div>
      <div className="mx-10 rounded-md bg-white">
        <div className="w-full  ">
          <div className=" bg-white rounded-md w-full mt-5">
            {videoIndex == 1 ? (
              <div className=" w-full p-5 md:grid-cols-4 mx-auto  ">
                {/* <VideoWithBtn /> */}
                <ReactPlayer
                  className="player"
                  url={VIDEO_PATH_1}
                  width="100%"
                  height={360}
                  playing={playing}
                  muted={muted}
                  onEnded={cFunction}
                  //    onEnded={onEnded}
                />
                <VideoControlBtn
                  onPlayPause={playPauseHandler}
                  playing={playing}
                />
              </div>
            ) : null}
            {videoIndex == 2 ? (
              <div className=" w-full p-5 md:grid-cols-4 mx-auto  ">
                {/* <VideoWithBtn /> */}
                <ReactPlayer
                  className="player"
                  url={VIDEO_PATH_2}
                  width="100%"
                  height={360}
                  playing={playing}
                  muted={muted}
                  onEnded={cFunction}
                  //    onEnded={onEnded}
                />
                <VideoControlBtn
                  onPlayPause={playPauseHandler}
                  playing={playing}
                />
              </div>
            ) : null}
            {videoIndex == 3 ? (
              <div className=" w-full p-5 md:grid-cols-4 mx-auto  ">
                {/* <VideoWithBtn /> */}
                <ReactPlayer
                  className="player"
                  url={VIDEO_PATH_3}
                  width="100%"
                  height={360}
                  playing={playing}
                  muted={muted}
                  onEnded={cFunction}
                  //    onEnded={onEnded}
                />
                <VideoControlBtn
                  onPlayPause={playPauseHandler}
                  playing={playing}
                />
              </div>
            ) : null}
          </div>
          <div className=" w-full p-2 rounded-md  flex flex-row justify-center   pt-3"></div>
        </div>
      </div>
      <div className=" w-full p-5 rounded-md  flex flex-row justify-center items-center ">
        {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
        <Link href={""} className="mx-5">
          {videoIndex == 1 ? (
            <Button
              variant="contained"
              className="bg-white text-dark-purple"
              endIcon={<ArrowForwardIcon />}
              onClick={() => setVideoIndex(2)}
            >
              Next
            </Button>
          ) : null}
          {videoIndex == 2 ? (
            <>
              <Button
                variant="contained"
                className="bg-white text-dark-purple mr-3"
                startIcon={<ArrowBackIcon />}
                onClick={() => setVideoIndex(1)}
              >
                Pre
              </Button>
              <Button
                variant="contained"
                className="bg-white text-dark-purple"
                endIcon={<ArrowForwardIcon />}
                onClick={() => setVideoIndex(3)}
              >
                Next
              </Button>
            </>
          ) : null}
          {videoIndex == 3 ? (
            <>
              <Button
                variant="contained"
                className="bg-white text-dark-purple mr-3"
                startIcon={<ArrowBackIcon />}
                onClick={() => setVideoIndex(2)}
              >
                Pre
              </Button>

              <Link href="/teacher/module/harakat/word-making-1">
                <Button
                  variant="contained"
                  className="bg-white text-dark-purple"
                  endIcon={<ArrowForwardIcon />}
                  // onClick={()=>setVideoIndex(3)}
                >
                  Next
                </Button>
              </Link>
            </>
          ) : null}
        </Link>
      </div>
    </div>
  );
};

export default HowToRead;
