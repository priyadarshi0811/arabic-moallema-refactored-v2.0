import React, { useContext, useEffect } from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import { Box, Button, IconButton, Tabs } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";

import { useState } from "react";
import { useRouter } from "next/router";
import {
  checkAssignmentSubmitionStatus,
  fetchAssignmentForLetter,
} from "@/backend/Assignment/FetchAssignmentDB";
import BatchContext from "@/components/Context/store/batch-context";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";
import {
  addActivityStartStatus,
  checkActivityStartStatus,
} from "@/backend/ActivityStartLog/SetActivityLogDB";
import AuthContext from "@/components/Context/store/auth-context";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const SentenceMaking = ({ user, screenNo, nextUrl, type, module, nextM, preM }) => {
  const [cardIndex, setCardIndex] = useState(0);

  const [assignment, setAssignment] = useState([]);
  const [activityPath, setActivityPath] = useState();
  const [batchId, setBatchId] = useState();
  const [isStarted, setIsStarted] = useState();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmissionWarning, setShowSubmissionWarning] = useState(false);
  const [studentId, setStudentId] = useState();

  const { myArray, setMyArray } = useContext(BatchContext);
  console.log(myArray);

  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.userEmail;

  useEffect(() => {
    const getId = async () => {
      if (userEmail) {
        const data = await fetchStudentIdBasedOnEmail(userEmail);
        if (data[0]) {
          setStudentId(data[0].student_id);
        }
      }
    };
    getId();
  }, [userEmail]);

  useEffect(() => {
    const getSubmittedAssignment = async () => {
      if (batchId && "harakat" && type && studentId) {
        const data = await checkAssignmentSubmitionStatus(
          "harakat",
          type,
          batchId,
          studentId
        );
        if (data) {
          if (data[0]) {
            setIsSubmitted(true);
          } else {
            setIsSubmitted(false);
          }
          console.log(data);
        }
      }
    };
    getSubmittedAssignment();
  }, [batchId, type, studentId]);

  console.log(isSubmitted);

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

  console.log("batch id: ", batchId);
  console.log("module : ", module);
  console.log("type:  ", type);

  useEffect(() => {
    console.log("is there");
    const getStarted = async () => {
      let data;
      if (type && batchId) {
        console.log("in");
        data = await checkActivityStartStatus("harakat", type, batchId);
        console.log(data[0]);
        if (data) {
          console.log("in data");
          if (data[0]) {
            setIsStarted(true);
          }
        } else {
          setIsStarted(false);
        }
      }
    };
    getStarted();
  }, [type, batchId]);

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

    if (isSubmitted) {
      setShowSubmissionWarning(true);
    }

    if (user === "student" && isStarted === undefined) {
      console.log("in");
      window.location.href = `/${user}/activity/tracing/alphabets/${type}/${0}`;
      return;
    }

    if (activityPath && type && !isSubmitted) {
      setShowSubmissionWarning(false);

      console.log("in type");
      window.location.href = `/${user}/activity/${activityPath}/harakat/${type}/${0}`;
    }

    console.log(activityPath);
  };

  const fathaSentenceExamples = [
    {
      index: 0,
      image:
        "https://t3.ftcdn.net/jpg/05/76/13/90/240_F_576139049_LriBxc0l7nKRc1ul4CtSbPRrg48FUbMK.jpg",
      word: "رَكَعَ و سَجَدَ",
      meaning: "Bowed and prostrated",
    },
    {
      index: 1,
      image:
        "https://t4.ftcdn.net/jpg/00/55/54/13/240_F_55541327_hV669Iopv537qBm9QSGmgdvbvCbtvEMS.jpg",
      word: "دَخَلَ و جَلَس    ",
      meaning: "Entered and sat",
    },
    {
      index: 2,
      image: "",
      word: "مَسَكَ فَنَظَرَ",
      meaning: "Held and looked",
    },
    {
      index: 3,
      image: "",
      word: "قَنَتَ فَذَكَرَ",
      meaning: "Remained devout and remembered",
    },
    {
      index: 4,
      image: "",
      word: "زَرَعَ و حَصَدَ",
      meaning: "Planted and harvested",
    },
    {
      index: 5,
      image: "",
      word: "عَرَفَ و كَتَمَ",
      meaning: "Knew and kept secret",
    },
    {
      index: 6,
      image: "",
      word: "حَلَفَ فَصَدَقَ",
      meaning: "Swore and kept his word",
    },
    {
      index: 7,
      image: "",
      word: "سَأَلَ فَعَرَفَ",
      meaning: "Asked and knew",
    },
    {
      index: 8,
      image: "",
      word: "غَرَسَ فَنَبَتَ",
      meaning: "Planted and grew",
    },
    {
      index: 9,
      image: "",
      word: "خَلَقَ فَرَزَقَ",
      meaning: "Created and provided",
    },
    {
      index: 10,
      image: "",
      word: "عَبَدَ و شَكَرَ",
      meaning: "Worshiped and thanked",
    },
    {
      index: 11,
      image: "",
      word: "قَفَزَ فَوَقَعَ",
      meaning: "Jumped and fell",
    },
    {
      index: 12,
      image: "",
      word: "قَرَأَ و كَتَبَ فَنَجَحَ",
      meaning: "Read and wrote",
    },
    {
      index: 13,
      image: "",
      word: "حَكَمَ و عَدَلَ فَصَدَقَ",
      meaning: "Judged and was just",
    },
    {
      index: 14,
      image: "",
      word: "قَطَعَ و نَشَرَ فَصَنَعَ",
      meaning: "Cut and spread out",
    },
    {
      index: 15,
      image: "",
      word: "طَحَنَ و نَخَلَ فَعَجَنَ",
      meaning: "Ground and kneaded",
    },
  ];
  const KasraSentenceExamples = [
    {
      index: 0,
      image:
        "https://t4.ftcdn.net/jpg/04/81/77/89/240_F_481778976_1d2EdHiMmiBANj4NwiRiuwyoNLjEixQT.jpg",
      word: "عَطَسَ فَحَمِدَ",
      meaning: "He sneezed, so Hamid praised (God)",
    },
    {
      index: 1,
      image: "",
      word: "رَكَبَ ورَدِفَ",
      meaning: "He rode and supported/backed",
    },
    {
      index: 2,
      image: "",
      word: "سَكَتَ فَسَلِمَ",
      meaning: "He remained silent and then greeted (said Salam)",
    },
    {
      index: 3,
      image: "",
      word: "ذَكَرَ فَخَشِيَ",
      meaning: "He mentioned, so he feared",
    },
    {
      index: 4,
      image: "",
      word: "فَهِمَ وَ عَلِمَ",
      meaning: "understood and knew",
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
      meaning: "He became ill and endured patiently",
    },
    {
      index: 7,
      image: "",
      word: "عَمِلَ فَرَبِحَ",
      meaning: "He worked and made a profit",
    },
    {
      index: 8,
      image: "",
      word: "طَعِمَ فَشَبِعَ",
      meaning: "He tasted and became full",
    },
    {
      index: 9,
      image: "",
      word: "فَرِحَ فَضَحِكَ",
      meaning: "He rejoiced and laughed",
    },
    {
      index: 10,
      image: "",
      word: "سَهِرَ فَتَعِبَ",
      meaning: "He stayed up late and got tired",
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
      meaning: "He was truthful, so he profited/gained",
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
      meaning: "He hated and angered",
    },
  ];
  const dammaSentenceExamples = [
    {
      index: 0,
      image:
        "https://t4.ftcdn.net/jpg/01/82/18/81/240_F_182188121_dcE04I7AhXps8XZJdUAWPti0CoC4iAPC.jpg",
      word: "جَمُلَ ثَمَرُكَ",
      meaning: "Your camel was loaded with fruit",
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
      meaning: "He spread out his mat and sat down",
    },
    {
      index: 3,
      image: "",
      word: "شَرِبَ فَذَهَبَ ظَمَؤُهُ",
      meaning: "He drank and his thirst was quenched",
    },
    {
      index: 4,
      image: "",
      word: "مَرِضَ فَضَعُفَ بَدَنُهُ",
      meaning: "He got sick and his body became weak",
    },
    {
      index: 5,
      image: "",
      word: "رَكِبَ جَمَلَهُ لِيَصِلَ رَحِمَهُ",
      meaning: "He rode his camel to reach his destination",
    },
    {
      index: 6,
      image: "",
      word: "كَتَبَ وَرَقَهَ بِقَلَمِهِ",
      meaning: "He wrote a paper with his pen",
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
      meaning: "His son succeeded and he was happy",
    },
    {
      index: 9,
      image: "",
      word: "ظُلِمَ فَصَبَرَ فَنُصِرَ",
      meaning: "He was wronged, but he was patient and then he was helped",
    },
    {
      index: 10,
      image: "",
      word: "كَمُلَ أَدَبُهُ فَحَسُنَ خُلُقُهُ",
      meaning: "His manners were completed, so his character became good",
    },
  ];

  const maxIndexfatha = 15;
  const maxIndexKasra = 14;
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
    boxShadow: "inset 0 0 10px rgba(0,2,1,0.4)",
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
        <Dialog
          open={showSubmissionWarning}
          onClose={(e) => setShowSubmissionWarning(false)}
        >
          <DialogTitle>Assignment Already submitted</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You have already submitted the assignment
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={(e) => setShowSubmissionWarning(false)}
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
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

            <Link
              href={`/${user}/module/harakat/${preM}`}
              className="mx-2 "
            >
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
            <h1 className="text-3xl text-center pt-6 py-2 text-white">
              Read with Meaning
            </h1>

            <>
              <div className=" flex my-5 mx-20">
                {type == "fatha"
                  ? fathaSentenceExamples.map((ex) => (
                      <>
                        {cardIndex == ex.index ? (
                          <div className=" " style={{ width: "100%" }}>
                            <div
                              className="grid grid-cols-3   py-10 lg:px-20  shadow-lg rounded-lg mb-5"
                              style={divStyles}
                            >
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
                                  <h2 className="text-5xl  text-dark-purple  py-8" style={{
                            fontFamily:
                              '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                            fontWeight: 500,
                          }}>
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
                                    GenerateColor();
                                  }}
                                >
                                  Pre
                                </Button>
                              ) : null}
                              {cardIndex < maxIndexfatha ? (
                                <Button
                                  variant="contained"
                                  className="bg-white text-dark-purple"
                                  endIcon={<ArrowForwardIcon />}
                                  onClick={() => {
                                    setCardIndex(cardIndex + 1);
                                    GenerateColor();
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
                  : type == "kasra"
                  ? KasraSentenceExamples.map((ex) => (
                      <>
                        {cardIndex == ex.index ? (
                      <div className=" " style={{ width: "100%" }}>
                      <div
                        className="grid grid-cols-3   py-10 lg:px-20  shadow-lg rounded-lg mb-5"
                        style={divStyles}
                      >
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
                            <h2 className="text-5xl  text-dark-purple  py-8" style={{
                      fontFamily:
                        '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                      fontWeight: 500,
                    }}>
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
                              GenerateColor();
                            }}
                          >
                            Pre
                          </Button>
                        ) : null}
                        {cardIndex < maxIndexfatha ? (
                          <Button
                            variant="contained"
                            className="bg-white text-dark-purple"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => {
                              setCardIndex(cardIndex + 1);
                              GenerateColor();
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
                      <div className=" " style={{ width: "100%" }}>
                            <div
                              className="grid grid-cols-3   py-10 lg:px-20  shadow-lg rounded-lg mb-5"
                              style={divStyles}
                            >
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
                                  <h2 className="text-5xl  text-dark-purple  py-8" style={{
                            fontFamily:
                              '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                            fontWeight: 500,
                          }}>
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
                                    GenerateColor();
                                  }}
                                >
                                  Pre
                                </Button>
                              ) : null}
                              {cardIndex < maxIndexfatha ? (
                                <Button
                                  variant="contained"
                                  className="bg-white text-dark-purple"
                                  endIcon={<ArrowForwardIcon />}
                                  onClick={() => {
                                    setCardIndex(cardIndex + 1);
                                    GenerateColor();
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
