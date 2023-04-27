import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoWithBtn from "@/components/Layout/elements/VideoWithBtn";
import ReactPlayer from "react-player";
import VideoControlBtn from "@/components/Layout/elements/VideoControlBtn";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import wordExampleForHarakat from "@/components/Modules/data/wordExampleForHarakat";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";

const fatahahWordExapmle = [
  {
    index: 0,
    image:
      "https://img.freepik.com/free-photo/blue-approval-good-signal-accord_1172-538.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=sph",
    word: "سَمَحَ",
    meaning: "Allowed",
  },
  {
    index: 1,
    image:
      "https://img.freepik.com/free-photo/long-shot-water-stream-grassland_23-2148214226.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=sph",
    word: "نَھَرَ",
    meaning: "River",
  },
  {
    index: 2,
    image:
      "https://img.freepik.com/free-photo/businessman-locking-door_23-2147876768.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=ais",
    word: "وَ لَجَ",
    meaning: "And he entered",
  },
  {
    index: 3,
    image:
      "https://img.freepik.com/free-photo/coins-banknotes-with-growth-arrow_23-2148780593.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=ais",
    word: "رَبَأَ",
    meaning: "usury",
  },
  {
    index: 4,
    image:
      "https://img.freepik.com/free-photo/3d-render-hand-holding-open-gift-box-with-ribbon_107791-16374.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=sph",
    word: "عَرَضَ",
    meaning: "an offer",
  },
  {
    index: 5,
    image: "",
    word: "خَلَدَ",
    meaning: "immortalize",
  },
  {
    index: 6,
    image:
      "https://as1.ftcdn.net/v2/jpg/00/64/07/16/1000_F_64071640_5uTO7cvPD0MiMLLmPrCaIPIXVAw61u9x.jpg",
    word: "قَنَصَ",
    meaning: "snipe",
  },
  {
    index: 7,
    image:
      "https://as2.ftcdn.net/v2/jpg/03/19/72/59/1000_F_319725929_WwtUaB8o5iFu9CGQRTLTrTiw2KUpB8iX.jpg",
    word: "صَھَرَ",
    meaning: "he melted",
  },
  {
    index: 8,
    image: "",
    word: "صَدَرَ",
    meaning: "released",
  },
  {
    index: 9,
    image: "",
    word: "مَقَتَ",
    meaning: "abhor",
  },
  {
    index: 10,
    image: "",
    word: "نَبَضَ",
    meaning: "to throb",
  },
  {
    index: 11,
    image: "",
    word: "طَلَقَ",
    meaning: "divorced",
  },
  {
    index: 12,
    image: "",
    word: "أَثَرَ",
    meaning: "Effect",
  },
  {
    index: 13,
    image: "",
    word: "قَنَعَ",
    meaning: "disguised",
  },
  {
    index: 14,
    image: "",
    word: "لَقَطَ",
    meaning: "clamped",
  },
  {
    index: 15,
    image: "",
    word: "نَسَفَ",
    meaning: "blow up",
  },
  {
    index: 16,
    image: "",
    word: "نَصَفَ",
    meaning: "half",
  },
  {
    index: 17,
    image: "",
    word: "فَتَنَ",
    meaning: "fascinate",
  },

  {
    index: 18,
    image: "",
    word: "فَطَنَ",
    meaning: "Clever",
  },
  {
    index: 19,
    image: "",
    word: "شَمَخَ",
    meaning: "sniffed",
  },
  {
    index: 20,
    image: "",
    word: "طَرَقَ",
    meaning: "Methods",
  },
  {
    index: 21,
    image: "",
    word: "تَرَكَ",
    meaning: "to leave",
  },
  {
    index: 22,
    image: "",
    word: "وَ لَدَ",
    meaning: "child",
  },
  {
    index: 23,
    image: "",
    word: "وَ رَدَ",
    meaning: "rose",
  },
];
const kasaraWordExapmle = [
  {
    index: 0,
    image:
      "https://t4.ftcdn.net/jpg/03/36/98/49/240_F_336984953_OLUkwitRZXtd4rxYIprCxLIclGKYLGhZ.jpg",
    word: "مِئَةَ",
    meaning: "one hundred",
  },
  {
    index: 1,
    image: "",
    word: "هِبَةَ",
    meaning: "A gift",
  },
  {
    index: 2,
    image: "",
    word: "وَذَرِ",
    meaning: "and leave",
  },
  {
    index: 3,
    image: "",
    word: "إِرَمَ",
    meaning: "toss",
  },
  {
    index: 4,
    image: "",
    word: "فِئَةَ",
    meaning: "category",
  },
  {
    index: 5,
    image: "",
    word: "صِفَةَ",
    meaning: "characteristic",
  },
  {
    index: 6,
    image: "",
    word: "وَهِمَ",
    meaning: "delusion",
  },
  {
    index: 7,
    image: "",
    word: "هَلِعَ",
    meaning: "panic",
  },
  {
    index: 8,
    image: "",
    word: "دَلِةَ",
    meaning: "coffee pot",
  },
  {
    index: 9,
    image: "",
    word: "بَرِقَ",
    meaning: "Lightning",
  },
  {
    index: 10,
    image: "",
    word: "حَمِدَ",
    meaning: "He praised",
  },
  {
    index: 11,
    image: "",
    word: "نَشِطَ",
    meaning: "active",
  },
  {
    index: 12,
    image: "",
    word: "صَحِبَكَ",
    meaning: "your company",
  },
  {
    index: 13,
    image: "",
    word: "بِيَدِهِ",
    meaning: "with his hand",
  },
  {
    index: 14,
    image: "",
    word: "قِبَلَكَ",
    meaning: "before you",
  },
  {
    index: 15,
    image: "",
    word: "فَطَفِقَ",
    meaning: "So he did",
  },
  {
    index: 16,
    image: "",
    word: "وَقَعَتِ",
    meaning: "Occurred",
  },
  {
    index: 17,
    image: "",
    word: "فَفَزِعَ",
    meaning: "So he panicked",
  },

  {
    index: 18,
    image: "",
    word: "تَبِعَكَ",
    meaning: "follow you",
  },
  {
    index: 19,
    image: "",
    word: "وَوَرِثَ",
    meaning: "and inherited",
  },
  {
    index: 20,
    image: "",
    word: "عَقِبِهِ",
    meaning: "obstacle",
  },
  {
    index: 21,
    image: "",
    word: "لَحَبِطَ",
    meaning: "to frustrate",
  },
  {
    index: 22,
    image: "",
    word: "قَدَمِكَ",
    meaning: "your foot",
  },
  {
    index: 23,
    image: "",
    word: "وَعَنَتِ",
    meaning: "And you meant",
  },
];
const dammaWordExapmle = [
  {
    index: 0,
    image:
      "https://t3.ftcdn.net/jpg/04/82/31/48/240_F_482314886_gpFeuRzpaFLMMgVfJfLDGIkmvQ5sFnlx.jpg",
    word: "قَرَأَ كُتُبَهُ",
    meaning: "He read his books",
  },
  {
    index: 1,
    image: "",
    word: "تُلِيَ فَفَهِمَ",
    meaning: "Follow them",
  },
  {
    index: 2,
    image: "",
    word: "قُرِئَ و كُتِبَ",
    meaning: "He read and wrote",
  },
  {
    index: 3,
    image: "",
    word: "وَقَفَ و يَقِفُ",
    meaning: "He stood and stood",
  },
  {
    index: 4,
    image: "",
    word: "لُبِسَ و خُلِعَ",
    meaning: "He put on and took off",
  },
  {
    index: 5,
    image: "",
    word: "جُرِحَ و شُفِيَ",
    meaning: "He was wounded and healed",
  },
  {
    index: 6,
    image: "",
    word: "جُمِعَ و قُسِمَ",
    meaning: "collected and divided",
  },
  {
    index: 7,
    image: "",
    word: "بُعِثَ و حُشِرَ",
    meaning: "He was resurrected",
  },
  {
    index: 8,
    image: "",
    word: "قُطِعَ فَوَصَلَ",
    meaning: "cut off",
  },
  {
    index: 9,
    image: "",
    word: "رُزِقَ فَحَمِدَ",
    meaning: "Rizq Fahamed",
  },
  {
    index: 10,
    image: "",
    word: "رَضِيَ و فَرَحَ",
    meaning: "Satisfied and happy",
  },
  {
    index: 11,
    image: "",
    word: "كُتِبَ وَرَقُكَ",
    meaning: "write your paper",
  },
  {
    index: 12,
    image: "",
    word: "حَسُنَ عَمَلُكَ",
    meaning: "do well",
  },
  {
    index: 13,
    image: "",
    word: "خَلُصَ عَسَلُكَ",
    meaning: "save your honey",
  },
  {
    index: 14,
    image: "",
    word: "أُكِلَ بَلَحُكَ",
    meaning: "I eat dates",
  },
  {
    index: 15,
    image: "",
    word: "فُقِدَ وَوُجِدَ",
    meaning: "Lost and found",
  },
  {
    index: 16,
    image: "",
    word: "شَكَرَ و شُكِرَ",
    meaning: "Thanks and thanks",
  },
];

console.log("wordExampleForHarakat", wordExampleForHarakat);

const HowToRead = ({ type, nextUrl, user }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [randomColor, setRandomColor] = useState("#ECABE1");

  const GenerateColor = () => {
    var colors = [
      "#09DBDB",
      "#FD5678",
      "#ECABE1",
      "#56C3F1",
      "#05DBB4",
      "#F56C40",
      "#865658",
      "#7fc254",
      "#B780FE",
      "#BD5DBF",
      "#FF7C60",
    ];

    // selecting random color
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]),
      console.log("random_color", randomColor);
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
      <div className="mx-10 rounded-3xl bg-white">
        <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-8">
          <h1
            className="p-3 text-white bg-dark-purple rounded-lg text-lg  border-2 border-white"
            style={{ marginLeft: -40, width: 600 }}
          >
            Arabic Alphabets : Word Examples
            {/* <span className="p-2 bg-green-200 text-dark-purple rounded-md">
            {props.name} " {props.symbol} "
          </span> */}
          </h1>
          <div>
            {user == "teacher" ? (
              <Link href={`/teacher/whiteboard`} className="">
                <IconButton
                  aria-label="delete"
                  size="large"
                  className="bg-cyan-200 text-dark-purple hover:bg-gray-200" 
                >
                  <FilterFramesIcon />
                </IconButton>
              </Link>
            ) : null}

            <Link href={`/${user}/module/harakat/${type}`} className="mx-5">
              <Button
                variant="contained"
                className="bg-cyan-200 text-dark-purple"
                startIcon={<ArrowBackIcon />}
              >
                Back To Main Module
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full  ">
          <div className=" bg-white rounded-md w-full mt-2 ">
            <h1 className="text-3xl text-center pt-3 py-2 text-dark-purple">
              Read with Meaning
            </h1>
            <Box sx={{ minWidth: "560", height: "100%" }} className="w-full  ">
              <Tabs
                // value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {/* Custome Cards  */}

                {console.log(type)}
                {type === "fatahah"
                  ? fatahahWordExapmle.map((ex) => (
                      <div
                        className=" flex my-5 mx-20"
                        style={{ width: "20vw" }}
                      >
                        <div className="" style={{ width: "20vw" }}>
                          <div className="items-center w-full  overflow-hidden rounded-2xl  shadow-lg min:h-fit  min:w-fit">
                            <div className=" font-bold text-center bg-purple-400 h-62 flex justify-center p-3 ">
                              <img
                                src={
                                  ex.image ||
                                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaXaItHR4BIfzC3jGoYxHBEje9KVIyHmzYA&usqp=CAU"
                                }
                                alt=""
                                className="  w-full border-8 border-white rounded-3xl "
                              />
                            </div>
                            <div className="bg-purple-400 h-fit">
                              <h2 className="text-3xl font-sans text-white flex justify-center pb-5 pt-5">
                                {ex.word}
                              </h2>
                              <h2 className="text-2xl font-sans text-white flex justify-center pb-8">
                                {ex.meaning}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : type === "damma"
                  ? dammaWordExapmle.map((ex) => (
                      <div
                        className=" flex my-5 mx-20"
                        style={{ width: "20vw" }}
                      >
                        <div className="" style={{ width: "20vw" }}>
                          <div className="items-center w-full  overflow-hidden rounded-2xl  shadow-lg min:h-fit  min:w-fit">
                            <div className=" font-bold text-center bg-purple-400 h-62 flex justify-center p-3 ">
                              <img
                                src={
                                  ex.image ||
                                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaXaItHR4BIfzC3jGoYxHBEje9KVIyHmzYA&usqp=CAU"
                                }
                                alt=""
                                className="  w-full border-8 border-white rounded-3xl "
                              />
                            </div>
                            <div className="bg-purple-400 h-fit">
                              <h2 className="text-3xl font-sans text-white flex justify-center pb-5 pt-5">
                                {ex.word}
                              </h2>
                              <h2 className="text-2xl font-sans text-white flex justify-center pb-8">
                                {ex.meaning}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : kasaraWordExapmle.map((ex) => (
                      <div
                        className=" flex my-5 mx-20"
                        style={{ width: "20vw" }}
                      >
                        <div className="" style={{ width: "20vw" }}>
                          <div className="items-center w-full  overflow-hidden rounded-2xl  shadow-lg min:h-fit  min:w-fit">
                            <div className=" font-bold text-center bg-purple-400 h-62 flex justify-center p-3 ">
                              <img
                                src={
                                  ex.image ||
                                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaXaItHR4BIfzC3jGoYxHBEje9KVIyHmzYA&usqp=CAU"
                                }
                                alt=""
                                className="  w-full border-8 border-white rounded-3xl "
                              />
                            </div>
                            <div className="bg-purple-400 h-fit">
                              <h2 className="text-3xl font-sans text-white flex justify-center pb-5 pt-5">
                                {ex.word}
                              </h2>
                              <h2 className="text-2xl font-sans text-white flex justify-center pb-8">
                                {ex.meaning}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </Tabs>
            </Box>
          </div>
          <div className=" w-full p-2 rounded-md  flex flex-row justify-center   pt-3"></div>
        </div>
      </div>
      <div className=" w-full p-5 rounded-md  flex flex-row justify-center items-center ">
        <Link href={`/${user}/module/harakat/${nextUrl}`}>
          <Button variant="contained" className="text-dark-purple bg-white">
            Next Section
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HowToRead;
