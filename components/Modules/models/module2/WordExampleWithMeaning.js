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

const fathaWordExapmle = [
  {
    index: 0,
    image:
      "",
    word: "سَمَحَ",
    meaning: "Forgave",
  },
  {
    index: 1,
    image:
      "",
    word: "نَھَرَ",
    meaning: "Flowed",
  },
  {
    index: 2,
    image:
      "",
    word: "وَ لَجَ",
    meaning: "Entered",
  },
  {
    index: 3,
    image:
      "",
    word: "رَبَأَ",
    meaning: "Raised",
  },
  {
    index: 4,
    image:
      "",
    word: "عَرَضَ",
    meaning: "Presented",
  },
  {
    index: 5,
    image: "",
    word: "خَلَدَ",
    meaning: "Persevered",
  },
  {
    index: 6,
    image:
      "",
    word: "قَنَصَ",
    meaning: "Hunted",
  },
  {
    index: 7,
    image:
      "",
    word: "صَھَرَ",
    meaning: "Melted",
  },
  {
    index: 8,
    image: "",
    word: "صَدَرَ",
    meaning: "Appeared",
  },
  {
    index: 9,
    image: "",
    word: "مَقَتَ",
    meaning: "Hated",
  },
  {
    index: 10,
    image: "",
    word: "نَبَضَ",
    meaning: "Pulsed",
  },
  {
    index: 11,
    image: "",
    word: "طَلَقَ",
    meaning: "Divorced",
  },
  {
    index: 12,
    image: "",
    word: "أَثَرَ",
    meaning: "Left a mark",
  },
  {
    index: 13,
    image: "",
    word: "قَنَعَ",
    meaning: "Convinced",
  },
  {
    index: 14,
    image: "",
    word: "لَقَطَ",
    meaning: "Picked up",
  },
  {
    index: 15,
    image: "",
    word: "نَسَفَ",
    meaning: "Demolished",
  },
  {
    index: 16,
    image: "",
    word: "نَصَفَ",
    meaning: "Halved",
  },
  {
    index: 17,
    image: "",
    word: "فَتَنَ",
    meaning: "Tempted",
  },

  {
    index: 18,
    image: "",
    word: "فَطَنَ",
    meaning: "Was clever",
  },
  {
    index: 19,
    image: "",
    word: "شَمَخَ",
    meaning: "Rose high",
  },
  {
    index: 20,
    image: "",
    word: "طَرَقَ",
    meaning: "Knocked",
  },
  {
    index: 21,
    image: "",
    word: "تَرَكَ",
    meaning: "Left",
  },
  {
    index: 22,
    image: "",
    word: "وَ لَدَ",
    meaning: "Gave birth",
  },
  {
    index: 23,
    image: "",
    word: "وَ رَدَ",
    meaning: "Responded",
  },
];
const kasraWordExapmle = [
  {
    index: 0,
    image:
      "",
    word: "مِئَةَ",
    meaning: "Hundred",
  },
  {
    index: 1,
    image: "",
    word: "هِبَةَ",
    meaning: "Gift",
  },
  {
    index: 2,
    image: "",
    word: "وَذَرِ",
    meaning: "Particle",
  },
  {
    index: 3,
    image: "",
    word: "إِرَمَ",
    meaning: "Iram (an ancient city)",
  },
  {
    index: 4,
    image: "",
    word: "فِئَةَ",
    meaning: "Category",
  },
  {
    index: 5,
    image: "",
    word: "صِفَةَ",
    meaning: "Attribute",
  },
  {
    index: 6,
    image: "",
    word: "وَهِمَ",
    meaning: "Delusion",
  },
  {
    index: 7,
    image: "",
    word: "هَلِعَ",
    meaning: "Panic",
  },
  {
    index: 8,
    image: "",
    word: "دَلِةَ",
    meaning: "Guide",
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
    meaning: "Praised",
  },
  {
    index: 11,
    image: "",
    word: "نَشِطَ",
    meaning: "Active",
  },
  {
    index: 12,
    image: "",
    word: "صَحِبَكَ",
    meaning: "Your friend",
  },
  {
    index: 13,
    image: "",
    word: "بِيَدِهِ",
    meaning: "In his hand",
  },
  {
    index: 14,
    image: "",
    word: "قِبَلَكَ",
    meaning: "Towards you",
  },
  {
    index: 15,
    image: "",
    word: "فَطَفِقَ",
    meaning: "Struggling",
  },
  {
    index: 16,
    image: "",
    word: "وَقَعَتِ",
    meaning: "Fell",
  },
  {
    index: 17,
    image: "",
    word: "فَفَزِعَ",
    meaning: "Startled",
  },

  {
    index: 18,
    image: "",
    word: "تَبِعَكَ",
    meaning: "Followed you",
  },
  {
    index: 19,
    image: "",
    word: "وَوَرِثَ",
    meaning: "Inherited",
  },
  {
    index: 20,
    image: "",
    word: "عَقِبِهِ",
    meaning: "His aftermath",
  },
  {
    index: 21,
    image: "",
    word: "لَحَبِطَ",
    meaning: "Withered",
  },
  {
    index: 22,
    image: "",
    word: "قَدَمِكَ",
    meaning: "Your foot",
  },
  {
    index: 23,
    image: "",
    word: "وَعَنَتِ",
    meaning: "Weary",
  },
];
const dammaWordExapmle = [
  {
    index: 0,
    image:
      "",
    word: "نُسِيَ ",
    meaning: "was forgotten",
  },
  {
    index: 1,
    image: "",
    word: "هُدِيَ ",
    meaning: "was guided",
  },
  {
    index: 2,
    image: "",
    word: "وُجِدَ",
    meaning: "was found",
  },
  {
    index: 3,
    image: "",
    word: "وُضِعَ",
    meaning: "was placed",
  },
  {
    index: 4,
    image: "",
    word: "شُرِبَ ",
    meaning: "was drunk",
  },
  {
    index: 5,
    image: "",
    word: "رُسِمَ",
    meaning: "was drawn",
  },
  {
    index: 6,
    image: "",
    word: "فُتِحَ",
    meaning: "was opened",
  },
  {
    index: 7,
    image: "",
    word: "دُبِغَ",
    meaning: "was dyed",
  },
  {
    index: 8,
    image: "",
    word: "سُبُلُ",
    meaning: "paths",
  },
  {
    index: 9,
    image: "",
    word: "رُسُلُ",
    meaning: "messengers",
  },
  {
    index: 10,
    image: "",
    word: "أُفُقُ",
    meaning: "horizons",
  },
  {
    index: 11,
    image: "",
    word: "نُظُمُ",
    meaning: "systems",
  },
  {
    index: 12,
    image: "",
    word: "مَثَلُ",
    meaning: "example",
  },
  {
    index: 13,
    image: "",
    word: "لَطُفَ",
    meaning: "kindness",
  },
  {
    index: 14,
    image: "",
    word: "ثُلِبَ",
    meaning: "was blamed",
  },
  {
    index: 15,
    image: "",
    word: "عُقَدُ",
    meaning: "a contract",
  },
  {
    index: 16,
    image: "",
    word: "حُجَرُ",
    meaning: "stones",
  },
  {
    index: 17,
    image: "",
    word: "غُرَفُ",
    meaning: "rooms",
  },

  {
    index: 18,
    image: "",
    word: "فُرَصُ",
    meaning: "opportunities",
  },
  {
    index: 19,
    image: "",
    word: "نُقِلَ",
    meaning: "was transported",
  },
  {
    index: 20,
    image: "",
    word: "كَمُلَ",
    meaning: "was completed",
  },
  {
    index: 21,
    image: "",
    word: "حُشِرَ",
    meaning: "was gathered",
  },
  {
    index: 22,
    image: "",
    word: "زَمَنُ",
    meaning: "time/era",
  },
  {
    index: 23,
    image: "",
    word: "شُحِذَ",
    meaning: "was sharpened",
  },
];

console.log("wordExampleForHarakat", wordExampleForHarakat);

const HowToRead = ({ type, nextUrl, user, preM }) => {
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
                {type === "fatha"
                  ? fathaWordExapmle.map((ex) => (
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
                              <h2 className="text-3xl text-white flex justify-center pb-5 pt-5" style={{
                            fontFamily:
                              '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                            fontWeight: 500,
                          }}>
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
                              <h2 className="text-3xl  text-white flex justify-center pb-5 pt-5" style={{
                            fontFamily:
                              '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                            fontWeight: 500,
                          }}>
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
                  : kasraWordExapmle.map((ex) => (
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
                              <h2 className="text-3xl  text-white flex justify-center pb-5 pt-5" style={{
                            fontFamily:
                              '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                            fontWeight: 500,
                          }}>
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
