import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import { Box, Button, Tabs } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useState } from "react";

const SentenceMaking = ({ user, screenNo, nextUrl, type }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const SentenceExamples = [
    {
      index: 0,
      image:
        "https://t3.ftcdn.net/jpg/05/76/13/90/240_F_576139049_LriBxc0l7nKRc1ul4CtSbPRrg48FUbMK.jpg",
      word: "رَكَعَ و سَجَدَ",
      meaning: "Bowing and prostrating in Salah",
    },
    {
      index: 1,
      image:
        "https://t4.ftcdn.net/jpg/00/55/54/13/240_F_55541327_hV669Iopv537qBm9QSGmgdvbvCbtvEMS.jpg",
      word: "دَخَلَ و جَلَس    ",
      meaning: "He entered and sat down",
    },
    {
      index: 2,
      image: "",
      word: "مَسَكَ فَنَظَرَ",
      meaning: "caught and looked",
    },
    {
      index: 3,
      image: "",
      word: "قَنَتَ فَذَكَرَ",
      meaning: "He said it",
    },
    {
      index: 4,
      image: "",
      word: "زَرَعَ و حَصَدَ",
      meaning: "sowed and reaped",
    },
    {
      index: 5,
      image: "",
      word: "عَرَفَ و كَتَمَ",
      meaning: "Araf and Katam",
    },
    {
      index: 6,
      image: "",
      word: "حَلَفَ فَصَدَقَ",
      meaning: "He swore and was true",
    },
    {
      index: 7,
      image: "",
      word: "سَأَلَ فَعَرَفَ",
      meaning: "He asked, and he knew",
    },
    {
      index: 8,
      image: "",
      word: "غَرَسَ فَنَبَتَ",
      meaning: "He planted and sprouted",
    },
    {
      index: 9,
      image: "",
      word: "خَلَقَ فَرَزَقَ",
      meaning: "He was created and provided",
    },
    {
      index: 10,
      image: "",
      word: "عَبَدَ و شَكَرَ",
      meaning: "He worshiped and thanked",
    },
    {
      index: 11,
      image: "",
      word: "قَفَزَ فَوَقَعَ",
      meaning: "He jumped and fell",
    },
    {
      index: 12,
      image: "",
      word: "قَرَأَ و كَتَبَ فَنَجَحَ",
      meaning: "He read and wrote and succeeded",
    },
    {
      index: 13,
      image: "",
      word: "حَكَمَ و عَدَلَ فَصَدَقَ",
      meaning: "Judgment and justice, so believe",
    },
    {
      index: 14,
      image: "",
      word: "قَطَعَ و نَشَرَ فَصَنَعَ",
      meaning: "He cut and sawed and made",
    },
    {
      index: 15,
      image: "",
      word: "طَحَنَ و نَخَلَ فَعَجَنَ",
      meaning: "He grinded and sifted and kneaded",
    },
  ];

   const maxIndex = 15;

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
        <Link href={`/${user}/module/harakat/fatahah`} className="mx-5">
          <Button
            variant="contained"
            className="bg-white text-dark-purple"
            startIcon={<ArrowBackIcon />}
          >
            Back To Main Module
          </Button>
        </Link>
      </div>
      <div className="mx-10 rounded-md bg-white">
        <div className="w-full  ">
          <div className=" bg-white rounded-md w-full mt-5 ">
            <h1 className="text-3xl text-center pt-6 py-2 text-dark-purple">
              Read with Meaning
            </h1>

            <>
            <div className=" flex my-5 mx-20">
              {SentenceExamples.map((ex) => (
                <>
                  {cardIndex == ex.index ? (
                    <div className=" " style={{ width: "100%" }}>
                      <div className="grid grid-cols-3   py-10 lg:px-20">
                        <div className="col-span-1">
                          <div className=" font-bold text-center lg:mx-10 py-10 lg:py-0  h-62 ">
                            <img
                              src={
                                ex.image ||
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaXaItHR4BIfzC3jGoYxHBEje9KVIyHmzYA&usqp=CAU  "
                              }
                              alt=""
                              className="w-full  "
                            />
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className=" h-fit p-10 ">
                            <h2 className="text-5xl font-sans text-dark-purple  py-8">
                              {ex.word}
                            </h2>
                            <h2 className="text-3xl font-sans text-dark-purple  pb-8">
                              {ex.meaning}
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="w-full my-3 flex justify-center">
                        {cardIndex > 0 ? (
                          <Button
                            variant="contained"
                            className="bg-white text-dark-purple mr-3"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => {
                              setCardIndex(cardIndex - 1)
                            }}
                          >
                            Pre
                          </Button>
                        ) : null}
                        {cardIndex < maxIndex ? (
                          <Button
                            variant="contained"
                            className="bg-white text-dark-purple"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => {
                              setCardIndex(cardIndex + 1)
                            }}
                          >
                            Next
                          </Button>
                        ) : (
                          <Link
                            href={`/${user}/module/harakat/${type}`}
                          >
                            <Button
                              variant="contained"
                              className="text-dark-purple bg-white"
                            >
                              Back To Main Module
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  ) : null}
                </>
              ))}
              </div>
            </>
          </div>
        </div>
      </div>
      <div className=" w-full p-5 rounded-md  flex flex-row justify-center items-center ">
        {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
        {/* <Link href={""} className="mx-5"> */}

        {/* <>
          {cardIndex > 0 ? (
            <Button
              variant="contained"
              className="bg-white text-dark-purple mr-3"
              startIcon={<ArrowBackIcon />}
              onClick={() => {
                setCardIndex(cardIndex - 1), console.log(cardIndex);
              }}
            >
              Pre
            </Button>
          ) : null}
          <Button
            variant="contained"
            className="bg-white text-dark-purple"
            endIcon={<ArrowForwardIcon />}
            onClick={() => {
              setCardIndex(cardIndex + 1), console.log(cardIndex);
            }}
          >
            Next
          </Button>
        </> */}

        {/* </Link> */}
      </div>
    </div>
  );
};

export default SentenceMaking;
