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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";


const wordExapmle = [
  {
    index: 0,
    image:'https://img.freepik.com/free-photo/blue-approval-good-signal-accord_1172-538.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=sph',
    word: "سَمَحَ",
    meaning: "Allowed"
  },
  {
    index: 1,
    image:'https://img.freepik.com/free-photo/long-shot-water-stream-grassland_23-2148214226.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=sph',
    word: "نَھَرَ",
    meaning: "River"
  },
  {
    index: 2,
    image:'https://img.freepik.com/free-photo/businessman-locking-door_23-2147876768.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=ais',
    word: "وَ لَجَ",
    meaning: "And he entered"
  },
  {
    index: 3,
    image:'https://img.freepik.com/free-photo/coins-banknotes-with-growth-arrow_23-2148780593.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=ais',
    word: "رَبَأَ",
    meaning: "usury"
  },
  {
    index: 4,
    image:'https://img.freepik.com/free-photo/3d-render-hand-holding-open-gift-box-with-ribbon_107791-16374.jpg?size=626&ext=jpg&ga=GA1.1.1391325598.1678967841&semt=sph',
    word: "عَرَضَ",
    meaning: "an offer"
  },
  {
    index: 5,
    image:'',
    word: "خَلَدَ",
    meaning: "immortalize"
  },
  {
    index: 6,
    image:'https://as1.ftcdn.net/v2/jpg/00/64/07/16/1000_F_64071640_5uTO7cvPD0MiMLLmPrCaIPIXVAw61u9x.jpg',
    word: "قَنَصَ",
    meaning: "snipe"
  },
  {
    index: 7,
    image:'https://as2.ftcdn.net/v2/jpg/03/19/72/59/1000_F_319725929_WwtUaB8o5iFu9CGQRTLTrTiw2KUpB8iX.jpg',
    word: "صَھَرَ",
    meaning: "he melted"
  },
  {
    index: 8,
    image:'',
    word: "صَدَرَ",
    meaning: "released"
  },
  {
    index: 9,
    image:'',
    word: "مَقَتَ",
    meaning: "abhor"
  },
  {
    index: 10,
    image:'',
    word: "نَبَضَ",
    meaning: "to throb"
  },
  {
    index: 11,
    image:'',
    word: "طَلَقَ",
    meaning: "divorced"
  },
  {
    index: 12,
    image:'',
    word: "أَثَرَ",
    meaning: "Effect"
  },
  {
    index: 13,
    image:'',
    word: "قَنَعَ",
    meaning: "disguised"
  },
  {
    index: 14,
    image:'',
    word: "لَقَطَ",
    meaning: "clamped"
  },
  {
    index: 15,
    image:'',
    word: "نَسَفَ",
    meaning: "blow up"
  },
  {
    index: 16,
    image:'',
    word: "نَصَفَ",
    meaning: "half"
  },
  {
    index: 17,
    image:'',
    word: "فَتَنَ",
    meaning: "fascinate"
  },
  
  {
    index: 18,
    image:'',
    word: "فَطَنَ",
    meaning: "Clever"
  },
  {
    index: 19,
    image:'',
    word: "شَمَخَ",
    meaning: "sniffed"
  },
  {
    index: 20,
    image:'',
    word: "طَرَقَ",
    meaning: "Methods"
  },
  {
    index: 21,
    image:'',
    word: "تَرَكَ",
    meaning: "to leave"
  },
  {
    index: 22,
    image:'',
    word: "وَ لَدَ",
    meaning: "child"
  },
  {
    index: 23,
    image:'',
    word: "وَ رَدَ",
    meaning: "rose"
  },
  
];


const HowToRead = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-8">
        <h1 className="mx-5 text-white text-lg">
          Arabic Alphabets : Word Examples
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
          <div className=" bg-white rounded-md w-full mt-5 ">
          <h1 className="text-3xl text-center pt-6 py-2 text-dark-purple">Read with Meaning</h1>
            <Box sx={{ minWidth: "560", height:"100%" }} className="w-full  ">
              <Tabs
                // value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {/* Custome Cards  */}
                {wordExapmle.map((ex)=>(

                <div className=" flex my-5 mx-20" style={{ width: "20vw" }}>
                <div className="" style={{ width: "20vw" }}>
                  <div className="items-center w-full  overflow-hidden rounded-xl  shadow-lg min:h-fit  min:w-fit">
                    <div className=" font-bold text-center bg-slate-50 h-62 flex justify-center">
                    <img src={ex.image || "https://img.freepik.com/free-icon/browser_318-792763.jpg?size=626&ext=jpg&ga=GA1.2.1391325598.1678967841&semt=ais"} alt="" className="w-fit min-w-72 " />
                     
                    </div>
                    <div className="bg-slate-50 h-fit">
                      <h2 className="text-3xl font-sans text-dark-purple flex justify-center pb-8 pt-8">
                       {ex.word}
                      </h2>
                      <h2 className="text-2xl font-sans text-dark-purple flex justify-center pb-8">
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
        {/* <Link href={`/${user}/module/harakat/fatahah/${nextUrl}`}> */}
        <Button variant="contained" className="text-dark-purple bg-white">
          Next Section
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default HowToRead;
