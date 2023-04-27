import React, { useContext, useEffect } from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import { Box, Button, IconButton, Tabs } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";

import { useState } from "react";
import { useRouter } from "next/router";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import BatchContext from "@/components/Context/store/batch-context";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";
import {
  addActivityStartStatus,
  checkActivityStartStatus,
} from "@/backend/ActivityStartLog/SetActivityLogDB";

const SentenceMaking = ({ user, screenNo, nextUrl, type, module, nextM }) => {
  const [cardIndex, setCardIndex] = useState(0);

  const [assignment, setAssignment] = useState([]);
  const [activityPath, setActivityPath] = useState();
  const [batchId, setBatchId] = useState();
  const [isStarted, setIsStarted] = useState();

  const { myArray, setMyArray } = useContext(BatchContext);
  console.log(myArray);

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

  useEffect(() => {
    const getStarted = async () => {
      let data;
      if (type && batchId && module) {
        console.log("in");
        data = await checkActivityStartStatus(module, type, batchId);
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
  }, [type, batchId, module]);

  console.log("is started: ", isStarted);

  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      if (type) {
        console.log("inside");
        console.log(type);
        const data = await fetchAssignmentForLetter(type, "harakat");
        if (data[0]) {
          setAssignment(data[0].assignment_json.letter);
          setActivityPath(`${data[0].assignment_json.letter[0].activity_type}`);
        }
      }
    };
    fetchAssignment();
  }, [type]);

  console.log(type);
  console.log(assignment);

  const setActivitySubmodule = async () => {
    if (user !== "student" && isStarted === undefined) {
      console.log(isStarted);
      let data;
      if (type && batchId && module) {
        data = await addActivityStartStatus(module, type, batchId);
        if (!data) {
          console.log("already added");
        }
      }
    }

    if (user === "student" && isStarted === undefined) {
      console.log("in");
      window.location.href = `/${user}/activity/tracing/alphabets/${type}/${0}`;
      return;
    }

    if (activityPath && type === "fatahah") {
      window.location.href = `/${user}/activity/${activityPath}/harakat/fatahah/${0}`;
    }
    if (activityPath && type === "kasara") {
      console.log("inside kasra");
      window.location.href = `/${user}/activity/${activityPath}/harakat/kasara/${0}`;
    }
    console.log(activityPath);
  };

  const FatahSentenceExamples = [
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
  const KasaraSentenceExamples = [
    {
      index: 0,
      image:
        "https://t4.ftcdn.net/jpg/04/81/77/89/240_F_481778976_1d2EdHiMmiBANj4NwiRiuwyoNLjEixQT.jpg",
      word: "عَطَسَ فَحَمِدَ",
      meaning: "He sneezed and thanked",
    },
    {
      index: 1,
      image: "",
      word: "رَكَبَ ورَدِفَ",
      meaning: "rode and rump",
    },
    {
      index: 2,
      image: "",
      word: "سَكَتَ فَسَلِمَ",
      meaning: "He was silent",
    },
    {
      index: 3,
      image: "",
      word: "ذَكَرَ فَخَشِيَ",
      meaning: "Fakhshi mentioned",
    },
    {
      index: 4,
      image: "",
      word: "فَهِمَ وَ عَلِمَ",
      meaning: "He understood and learned",
    },
    {
      index: 5,
      image: "",
      word: "رَكَضَ فَتَعِبَ",
      meaning: "He ran and got tired",
    },
    {
      index: 6,
      image: "",
      word: "مَرِضَ فَصَبَرَ",
      meaning: "sick, so be patient",
    },
    {
      index: 7,
      image: "",
      word: "عَمِلَ فَرَبِحَ",
      meaning: "He worked and won",
    },
    {
      index: 8,
      image: "",
      word: "طَعِمَ فَشَبِعَ",
      meaning: "He ate and was satisfied",
    },
    {
      index: 9,
      image: "",
      word: "فَرِحَ فَضَحِكَ",
      meaning: "He rejoiced",
    },
    {
      index: 10,
      image: "",
      word: "سَهِرَ فَتَعِبَ",
      meaning: "He stayed up and got tired",
    },
    {
      index: 11,
      image: "",
      word: "كَذَبَ فَخَسِرَ",
      meaning: "He lied and lost",
    },
    {
      index: 12,
      image: "",
      word: "صَدَقَ فَرَبِحَ",
      meaning: "He believed and won",
    },
    {
      index: 13,
      image: "",
      word: "أكَلَ وشَرِبَ",
      meaning: "He ate and drank",
    },
    {
      index: 14,
      image: "",
      word: "كَرِهَ و سَخَطَ",
      meaning: "hate and indignation",
    },
  ];
  const dammaSentenceExamples = [
    {
      index: 0,
      image:
        "https://t4.ftcdn.net/jpg/01/82/18/81/240_F_182188121_dcE04I7AhXps8XZJdUAWPti0CoC4iAPC.jpg",
      word: "جَمُلَ ثَمَرُكَ",
      meaning: "Gather your fruit",
    },
    {
      index: 1,
      image: "",
      word: "قُطِفَ عِنَبُكَ فأُكِلَ",
      meaning: "Your grapes were picked and eaten",
    },
    {
      index: 2,
      image: "",
      word: "بَسَطَ فُرُشَهُ فَقَعَدَ",
      meaning: "He spread his bed and sat down",
    },
    {
      index: 3,
      image: "",
      word: "شَرِبَ فَذَهَبَ ظَمَؤُهُ",
      meaning: "He drank and his thirst went away",
    },
    {
      index: 4,
      image: "",
      word: "مَرِضَ فَضَعُفَ بَدَنُهُ",
      meaning: "Disease weakened his body",
    },
    {
      index: 5,
      image: "",
      word: "رَكِبَ جَمَلَهُ لِيَصِلَ رَحِمَهُ",
      meaning: "rode his camel to reach his womb",
    },
    {
      index: 6,
      image: "",
      word: "كَتَبَ وَرَقَهَ بِقَلَمِهِ",
      meaning: "He wrote his paper with his pen",
    },
    {
      index: 7,
      image: "",
      word: "قَرَأَ كُتُبَهَ فَعَلِمَ",
      meaning: "He read his books and learned",
    },
    {
      index: 8,
      image: "",
      word: "نَجَحَ وَلَدُهُ فَفَرِحَ",
      meaning: "His son succeeded, so he rejoiced",
    },
    {
      index: 9,
      image: "",
      word: "ظُلِمَ فَصَبَرَ فَنُصِرَ",
      meaning: "Injustice, so he was patient and victorious",
    },
    {
      index: 10,
      image: "",
      word: "كَمُلَ أَدَبُهُ فَحَسُنَ خُلُقُهُ",
      meaning: "perfected his etiquette and improved his manners",
    },
  ];

  const maxIndexFatah = 15;
  const maxIndexKasara = 14;
  const maxIndexDamma = 10;

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

  const divStyles = {
    boxShadow: 'inset 0 0 10px rgba(0,2,1,0.4)',
    backgroundColor: randomColor,
  };

  return (
    <div
      className="pt-10"
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
      <div className="mx-16 rounded-3xl bg-white ">
      <div className=" w-full p-5 rounded-md  flex flex-row justify-between   pt-10">
      
      <h1
            className="p-3 text-white bg-dark-purple rounded-lg text-lg  border-2 border-white"
            style={{ marginLeft: -60, width: 600 }}
          >
            Arabic Alphabets : How to Read
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
                className="bg-white text-dark-purple hover:bg-gray-200"
              >
                <FilterFramesIcon />
              </IconButton>
            </Link>
          ) : null}

          <Link href={`/${user}/module/harakat/${type}`} className="mx-5">
            <Button
              variant="contained"
              className="bg-white text-dark-purple"
              startIcon={<ArrowBackIcon />}
            >
              Back To Main Module
            </Button>
          </Link>
        </div>
      </div>
        <div className="w-full  ">
          <div className="  rounded-md w-full mt-5 ">
            <h1 className="text-3xl text-center pt-6 py-2 text-white">
              Read with Meaning
            </h1>

            <>
              <div className=" flex my-5 mx-20">
                {type == "fatahah"
                  ? FatahSentenceExamples.map((ex) => (
                      <>
                        {cardIndex == ex.index ? (
                          <div className=" " style={{ width: "100%" }}>
                            <div className="grid grid-cols-3   py-10 lg:px-20  shadow-lg rounded-lg mb-5" style={divStyles}>
                              <div className="col-span-1 border-r-2 border-white ">
                                <div className=" font-bold text-center lg:mx-10 py-5 lg:py-0  h-62 border-8 border-gray-100 rounded-3xl bg-gray-100 ">
                                  <img
                                    src={
                                      ex.image ||
                                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaXaItHR4BIfzC3jGoYxHBEje9KVIyHmzYA&usqp=CAU  "
                                    }
                                    alt=""
                                    className="w-full  rounded-3xl"
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
                                    setCardIndex(cardIndex - 1);
                                     GenerateColor()
                                  }}
                                >
                                  Pre
                                </Button>
                              ) : null}
                              {cardIndex < maxIndexFatah ? (
                                <Button
                                  variant="contained"
                                  className="bg-white text-dark-purple"
                                  endIcon={<ArrowForwardIcon />}
                                  onClick={() => {
                                    setCardIndex(cardIndex + 1);
                                    GenerateColor()
                                  }}
                                >
                                  Next
                                </Button>
                              ) : (
                                <>
                                  <Button
                                    onClick={setActivitySubmodule}
                                    variant="contained"
                                    className="text-dark-purple bg-white mr-3"
                                  >
                                    Activity
                                  </Button>
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
                                </>
                              )}
                            </div>
                          </div>
                        ) : null}
                      </>
                    ))
                  : type == "kasara"
                  ? KasaraSentenceExamples.map((ex) => (
                      <>
                        {cardIndex == ex.index ? (
                          <div className=" " style={{ width: "100%" }}>
                            <div className="grid grid-cols-3   py-10 lg:px-20 border-2  border-gray-400 shadow-lg rounded-lg mb-5" style={{backgroundColor: randomColor}}>
                              <div className="col-span-1 border-r-2 border-gray-400 ">
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
                                    setCardIndex(cardIndex - 1);
                                    GenerateColor()
                                  }}
                                >
                                  Pre
                                </Button>
                              ) : null}
                              {cardIndex < maxIndexKasara ? (
                                <Button
                                  variant="contained"
                                  className="bg-white text-dark-purple"
                                  endIcon={<ArrowForwardIcon />}
                                  onClick={() => {
                                    setCardIndex(cardIndex + 1);
                                    GenerateColor()
                                  }}
                                >
                                  Next
                                </Button>
                              ) : (
                                <>
                                  <Button
                                    onClick={setActivitySubmodule}
                                    variant="contained"
                                    className="text-dark-purple bg-white mr-3"
                                  >
                                    Activity
                                  </Button>
                                  <Link
                                    href={`/${user}/module/harakat/${nextM}`}
                                  >
                                    <Button
                                      variant="contained"
                                      className="text-dark-purple bg-white"
                                    >
                                      Next Module
                                    </Button>
                                  </Link>
                                </>
                              )}
                            </div>
                          </div>
                        ) : null}
                      </>
                    ))
                  : dammaSentenceExamples.map((ex) => (
                      <>
                        {cardIndex == ex.index ? (
                          <div className=" " style={{ width: "100%" }}>
                            <div className="grid grid-cols-3   py-10 lg:px-20 border-2  border-gray-400 shadow-lg rounded-lg mb-5" style={{backgroundColor: randomColor}}>
                              <div className="col-span-1 border-r-2 border-gray-400 ">
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
                                    setCardIndex(cardIndex - 1);
                                    GenerateColor()
                                  }}
                                >
                                  Pre
                                </Button>
                              ) : null}
                              {cardIndex < maxIndexDamma ? (
                                <Button
                                  variant="contained"
                                  className="bg-white text-dark-purple"
                                  endIcon={<ArrowForwardIcon />}
                                  onClick={() => {
                                    setCardIndex(cardIndex + 1);
                                    GenerateColor()
                                  }}
                                >
                                  Next
                                </Button>
                              ) : (
                                <>
                                  <Button
                                    onClick={setActivitySubmodule}
                                    variant="contained"
                                    className="text-dark-purple bg-white mr-3"
                                  >
                                    Activity
                                  </Button>
                                  <Link
                                    href={`/${user}/module/harakat/${nextM}`}
                                  >
                                    <Button
                                      variant="contained"
                                      className="text-dark-purple bg-white"
                                    >
                                      Next Module
                                    </Button>
                                  </Link>
                                </>
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
