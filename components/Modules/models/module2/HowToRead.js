import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import WhiteBG from "@/components/src/img/WhiteBG.png";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoWithBtn from "@/components/Layout/elements/VideoWithBtn";
import ReactPlayer from "react-player";
import VideoControlBtn from "@/components/Layout/elements/VideoControlBtn";
import { useState } from "react";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";

const HowToRead = ({ user, screenNo, nextUrl, harakatType, preM }) => {
  const [videoIndex, setVideoIndex] = useState(1);

  /* --------------------------------- fathaa --------------------------------- */
  const HFRFST_V1 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674726/3%20letters/animation_1_ez3s0m.mp4";
  const HFRFST_V2 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674722/3%20letters/animation_2_hw9njl.mp4";
  const HFRFST_V3 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674722/3%20letters/animation_3_vthrl1.mp4";
  const HFRSND_V1 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674723/2%20letter%20joint/animation_1_revuyu.mp4";
  const HFRSND_V2 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674723/2%20letter%20joint/animation_2_risa7e.mp4";
  const HFRSND_V3 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674722/2%20letter%20joint/animation_3_kx6dz7.mp4";

  /* --------------------------------- kasara --------------------------------- */

  const HKFST_V1 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176787/kasra/3%20word/animation_1_oajmc7.mp4";
  const HKFST_V2 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176784/kasra/3%20word/animation_2_w6zuyl.mp4";
  const HKFST_V3 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176786/kasra/3%20word/animation_3_t1d9ib.mp4";
  const HKSND_V1 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176784/kasra/2%20word/animation_3_xnopjn.mp4";
  const HKSND_V2 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176786/kasra/2%20word/animation_1_ihu36m.mp4";
  const HKSND_V3 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176784/kasra/2%20word/animation_2_aj9esu.mp4";

  /* --------------------------------- Damma --------------------------------- */

  const HDFST_V1 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176788/damma/3%20words/Animation_1_mx3lbl.mp4";
  const HDFST_V2 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176788/damma/3%20words/Animation_2_wnoh1x.mp4";
  const HDFST_V3 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1683176785/damma/3%20words/Animation_3_jjx2mr.mp4";
  const HDSND_V1 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674723/2%20letter%20joint/animation_1_revuyu.mp4";
  const HDSND_V2 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674723/2%20letter%20joint/animation_2_risa7e.mp4";
  const HDSND_V3 =
    "https://res.cloudinary.com/daftxtnxw/video/upload/v1680674722/2%20letter%20joint/animation_3_kx6dz7.mp4";

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

  const cardBg = {
    // background: 'rgba(225, 225, 225, 0.9)',
    background: `url(${WhiteBG.src})`,
    // opacity: '0.95',
    filter: "drop-shadow(0px 4px 53px rgba(0, 52, 73, 0.25))",
    borderRadius: "70px",
    backgroundColor: "#F5F5F5",
    backgroundRepeat: "repeat",
  };

  return (
    <div
      className="pt-8"
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
      <div className="mx-10 pt-2 rounded-3xl bg-white " style={cardBg}>
        <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-10">
          <h1
            className="p-3 text-white bg-dark-purple rounded-lg text-lg  border-2 border-white"
            style={{ marginLeft: -40, width: 600 }}
          >
            Arabic Alphabets : How to Read
            {/* <span className="p-2 bg-green-200 text-dark-purple rounded-md">
            {props.name} " {props.symbol} "
          </span> */}
          </h1>
          <div className="flex content-center">
            <Link href={`/teacher/whiteboard`} className="mx-3 ">
              <IconButton
                aria-label="delete"
                size="large"
                className="bg-cyan-200 text-dark-purple rounded-full hover:bg-gray-200 p-2 "
              >
                <FilterFramesIcon />
              </IconButton>
            </Link>

            <Link href={`/${user}/module/harakat`} className="mx-3 ">
              <Button
                variant="contained"
                className="bg-cyan-200 text-dark-purple h-10"
                startIcon={<ArrowBackIcon />}
              >
                Home Module
              </Button>
            </Link>
            <Link href={`/${user}/module/harakat/${preM}`} className="mx-2 ">
              <Button
                variant="contained"
                className="bg-cyan-200 text-dark-purple h-10"
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full  ">
          <div className="  rounded-md w-full mt-5 ">
            {videoIndex == 1 ? (
              <div className="  p-5 md:grid-cols-4 mx-auto flex flex-wrap flex-col justify-center content-center	 ">
                {/* <VideoWithBtn /> */}
                <ReactPlayer
                  className="player"
                  url={
                    harakatType == "fatha" && screenNo == "fst"
                      ? HFRFST_V1
                      : harakatType == "fatha" && screenNo == "snd"
                      ? HFRSND_V1
                      : harakatType == "kasra" && screenNo == "fst"
                      ? HKFST_V1
                      : harakatType == "kasra" && screenNo == "snd"
                      ? HKSND_V1
                      : harakatType == "damma" && screenNo == "fst"
                      ? HDFST_V1
                      : harakatType == "damma" && screenNo == "snd"
                      ? HDSND_V1
                      : null
                  }
                  // width="100%"
                  height={360}
                  playing={playing}
                  muted={muted}
                  onEnded={cFunction}
                  //    onEnded={onEnded}
                  style={{
                    borderColor: "#AEAEAE",
                    borderWidth: 10,
                    borderRadius: 15,
                    borderClip: "padding-box",
                    boxShadow:
                      "-50px -50px 0 -40px var(--red), 50px 50px 0 -40px var(--red)",
                    backgroundColor: "white",
                  }}
                />
                <VideoControlBtn
                  onPlayPause={playPauseHandler}
                  playing={playing}
                />
              </div>
            ) : null}
            {videoIndex == 2 ? (
              <div className="  p-5 md:grid-cols-4 mx-auto flex flex-wrap flex-col justify-center content-center    ">
                {/* <VideoWithBtn /> */}
                <ReactPlayer
                  className="player"
                  url={harakatType == "fatha" && screenNo == "fst"
                  ? HFRFST_V2
                  : harakatType == "fatha" && screenNo == "snd"
                  ? HFRSND_V2
                  : harakatType == "kasra" && screenNo == "fst"
                  ? HKFST_V2
                  : harakatType == "kasra" && screenNo == "snd"
                  ? HKSND_V2
                  : harakatType == "damma" && screenNo == "fst"
                  ? HDFST_V2
                  : harakatType == "damma" && screenNo == "snd"
                  ? HDSND_V2
                  : null}
                  // width="100%"
                  height={360}
                  playing={playing}
                  muted={muted}
                  onEnded={cFunction}
                  //    onEnded={onEnded}
                  style={{
                    borderColor: "#AEAEAE",
                    borderWidth: 10,
                    borderRadius: 15,
                    borderClip: "padding-box",
                    boxShadow:
                      "-50px -50px 0 -40px var(--red), 50px 50px 0 -40px var(--red)",
                    backgroundColor: "white",
                  }}
                />
                <VideoControlBtn
                  onPlayPause={playPauseHandler}
                  playing={playing}
                />
              </div>
            ) : null}
            {videoIndex == 3 ? (
              <div className="  p-5 md:grid-cols-4 mx-auto flex flex-wrap flex-col justify-center content-center  ">
                {/* <VideoWithBtn /> */}
                <ReactPlayer
                  className="player"
                  url={harakatType == "fatha" && screenNo == "fst"
                  ? HFRFST_V3
                  : harakatType == "fatha" && screenNo == "snd"
                  ? HFRSND_V3
                  : harakatType == "kasra" && screenNo == "fst"
                  ? HKFST_V3
                  : harakatType == "kasra" && screenNo == "snd"
                  ? HKSND_V3
                  : harakatType == "damma" && screenNo == "fst"
                  ? HDFST_V3
                  : harakatType == "damma" && screenNo == "snd"
                  ? HDSND_V3
                  : null}
                  // width="100%"
                  height={360}
                  playing={playing}
                  muted={muted}
                  onEnded={cFunction}
                  //    onEnded={onEnded}
                  style={{
                    borderColor: "#AEAEAE",
                    borderWidth: 10,
                    borderRadius: 15,
                    borderClip: "padding-box",
                    boxShadow:
                      "-50px -50px 0 -40px var(--red), 50px 50px 0 -40px var(--red)",
                    backgroundColor: "white",
                  }}
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

              <Link href={`/${user}/module/harakat/${nextUrl}`}>
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
