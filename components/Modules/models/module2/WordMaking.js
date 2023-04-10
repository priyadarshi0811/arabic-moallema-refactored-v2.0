import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import { Button } from "@mui/material";
import GeneralCard from "@/components/Layout/card/GeneralCard";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Fatahah from "@/components/src/img/arabic_fatha.png";

const singleLattersExamples = [
  {
    index: 0,
    fatahahInitial: "أَ",
    fatahahMiddle: "مَـ",
    fatahahFinal: "ـرَ",
    fatahahWord: "أَمَرَ",

    kasaraFinal: "ــسَ",
    kasaraMiddle: "ئِـ",
    kasaraInitial: "يَـ",
    kasaraWord: "يَئِسَ",
  },
  {
    index: 1,
    fatahahInitial: "سَـ",
    fatahahMiddle: "ـأَ",
    fatahahFinal: "لَ",
    fatahahWord: "سَأَلَ",

    kasaraFinal: "طَ",
    kasaraMiddle: "ـبِـ",
    kasaraInitial: "حَـ",
    kasaraWord: "حَبِطَ",
  },
  {
    index: 2,
    fatahahInitial: " لَـ ",
    fatahahMiddle: "ـجـَ",
    fatahahFinal: "أَ",
    fatahahWord: "لـَـجَـأ",

    kasaraFinal: "ـهَ",
    kasaraMiddle: "ـتِـ",
    kasaraInitial: "عَـ",
    kasaraWord: "عَتِهَ",
  },
  {
    index: 3,
    fatahahFinal: "ـشَ",
    fatahahMiddle: "ـطَـ",
    fatahahInitial: "بَـ",
    fatahahWord: "بَطَشَ",

    kasaraFinal: "ـقَ",
    kasaraMiddle: "ثِـ",
    kasaraInitial: "وَ",
    kasaraWord: "وَثِقَ",
  },
  {
    index: 4,
    fatahahFinal: "ـذَ",
    fatahahMiddle: "ـبَـ",
    fatahahInitial: "نَـ",
    fatahahWord: "نَبَذَ",

    kasaraFinal: "ـلَ",
    kasaraMiddle: "جِـ",
    kasaraInitial: "وَ",
    kasaraWord: "وَجِلَ",
  },
  {
    index: 5,
    fatahahFinal: "ـبَ",
    fatahahMiddle: "ـقَـ",
    fatahahInitial: "ثَـ",
    fatahahWord: "ثَقَبَ",

    kasaraFinal: "ــمَلَ",
    kasaraMiddle: "حِـ",
    kasaraInitial: "رَ",
    kasaraWord: "رَحِمَ",
  },
  {
    index: 6,
    fatahahFinal: "ـرَ",
    fatahahMiddle: "ـجَـ",
    fatahahInitial: "تَـ",
    fatahahWord: "تَجَرَ",

    kasaraFinal: "ـلَ",
    kasaraMiddle: "ـخِـ",
    kasaraInitial: "بَـ",
    kasaraWord: "بَخِلَ",
  },
  {
    index: 7,
    fatahahFinal: "ـبَ",
    fatahahMiddle: "ـتَـ",
    fatahahInitial: "كَـ",
    fatahahWord: "كَتَبَ",

    kasaraFinal: "مَ",
    kasaraMiddle: "ـدِ",
    kasaraInitial: "قَـ",
    kasaraWord: "قَدِمَ",
  },
  {
    index: 8,
    fatahahFinal: "ـتَ",
    fatahahMiddle: "ـبَـ",
    fatahahInitial: "ثَـ",
    fatahahWord: "ثَبَتَ",

    kasaraFinal: "ـظَ",
    kasaraMiddle: "ـفِـ",
    kasaraInitial: "حَـ",
    kasaraWord: "حَفِظَ",
  },
  {
    index: 9,
    fatahahFinal: "ـبَ",
    fatahahMiddle: "ـتَـ",
    fatahahInitial: "كَـ",
    fatahahWord: "كَتَدَ",

    kasaraFinal: "ـيَ",
    kasaraMiddle: "ـظِـ",
    kasaraInitial: "حَـ",
    kasaraWord: "حَظِيَ",
  },
  {
    index: 10,
    fatahahFinal: "ـرَ",
    fatahahMiddle: "ـثَـ",
    fatahahInitial: "نَـ",
    fatahahWord: "نَـثَرَ",

    kasaraFinal: "ـرَ",
    kasaraMiddle: "ـفِـ",
    kasaraInitial: "ظَـ",
    kasaraWord: "ظَفِرَ",
  },
  {
    index: 11,
    fatahahFinal: "ـثَ",
    fatahahMiddle: "ـعَـ",
    fatahahInitial: "بَـ",
    fatahahWord: "بَعَثَ",

    kasaraFinal: "ـيَ",
    kasaraMiddle: "ـقِـ",
    kasaraInitial: "بـَ",
    kasaraWord: "بَقِيَ",
  },
  {
    index: 12,
    fatahahFinal: "ـدَ",
    fatahahMiddle: "ـجَـ",
    fatahahInitial: "سَـ",
    fatahahWord: "سَجَدَ",

    kasaraFinal: "بَ",
    kasaraMiddle: "ـرِ",
    kasaraInitial: "شَـ",
    kasaraWord: "شَرِبَ",
  },
  {
    index: 13,
    fatahahFinal: "ـجَ",
    fatahahMiddle: "ـسَـ",
    fatahahInitial: "نَـ",
    fatahahWord: "نَسَجَ",

    kasaraFinal: "ـدَ",
    kasaraMiddle: "ـعِـ",
    kasaraInitial: "سَـ",
    kasaraWord: "سَعِدَ",
  },
  {
    index: 14,
    fatahahFinal: "ـسَ",
    fatahahMiddle: "ـبـَ",
    fatahahInitial: "حَـ",
    fatahahWord: "حَبَسَ",

    kasaraFinal: "ـبَ",
    kasaraMiddle: "كِـ",
    kasaraInitial: "رَ",
    kasaraWord: "رَكِبَ",
  },
  {
    index: 15,
    fatahahFinal: "ـنَ",
    fatahahMiddle: "ـحَـ",
    fatahahInitial: "طَـ",
    fatahahWord: "طَحَنَ",

    kasaraFinal: "رَ",
    kasaraMiddle: "ـوِ",
    kasaraInitial: "عَـ",
    kasaraWord: "عَوِرَ",
  },
  {
    index: 16,
    fatahahFinal: "ـحَ",
    fatahahMiddle: "ـسَـ",
    fatahahInitial: "مَـ",
    fatahahWord: "مَسَحَ",

    kasaraFinal: "ـدَ",
    kasaraMiddle: "ـهِـ",
    kasaraInitial: "عَـ",
    kasaraWord: "عَهِدَ",
  },
  {
    index: 17,
    fatahahFinal: "ـعَ",
    fatahahMiddle: "ـضَـ",
    fatahahInitial: "خَـ",
    fatahahWord: "خَضَعَ",

    kasaraFinal: "ـقَ",
    kasaraMiddle: "ـنِـ",
    kasaraInitial: "حَـ",
    kasaraWord: "حَنِقَ",
  },
  {
    index: 18,
    fatahahFinal: "ـرَ",
    fatahahMiddle: "ـخَـ",
    fatahahInitial: "نَـ",
    fatahahWord: "نَـخَـرَ",

    kasaraFinal: "ـعَ",
    kasaraMiddle: "ـمِـ",
    kasaraInitial: "سَـ",
    kasaraWord: "سَمِعَ",
  },
  {
    index: 19,
    fatahahFinal: "دَ",
    fatahahMiddle: "ـرَ",
    fatahahInitial: "ثَـ",
    fatahahWord: "ثَرَدَ",

    kasaraFinal: "ـمَ",
    kasaraMiddle: "ـلِـ",
    kasaraInitial: "عَـ",
    kasaraWord: "عَلِمَ",
  },
];

const doubleLattersExamples = [
  {
    index: 0,
    fatahahFinal: "ـدَ",
    fatahahInitial: "صَعَـ",
    fatahahWord: "صَعَدَ",

    kasaraFinal: "ـكَ",
    kasaraInitial: "ضَحِـ",
    kasaraWord: "ضَحِكَ",
  },
  {
    index: 1,
    fatahahFinal: " ـهَ  ",
    fatahahInitial: " وَلَـ ",
    fatahahWord: "وَ لَـهَ ",

    kasaraFinal: "حَ",
    kasaraInitial: "مَرِ",
    kasaraWord: "مَرِحَ",
  },
  {
    index: 2,

    fatahahFinal: "ـمَ",
    fatahahInitial: " فَطَـ ",
    fatahahWord: "فَطَمَ",

    kasaraFinal: "ـلَ",
    kasaraInitial: "عَمِـ",
    kasaraWord: "عَمِلَ",
  },
  {
    index: 3,
    fatahahFinal: "ـفَ",
    fatahahInitial: "شَغَـ",
    fatahahWord: "شَغَفَ",

    kasaraFinal: "ـلَ",
    kasaraInitial: "عَقِـ",
    kasaraWord: "عَقِلَ",
  },
  {
    index: 4,
    fatahahFinal: "ـغَ",
    fatahahInitial: "مَضَـ",
    fatahahWord: "مَضَغَ",

    kasaraFinal: "ـلَ",
    kasaraInitial: "جَهِـ",
    kasaraWord: "جَهِلَ",
  },
  {
    index: 5,
    fatahahFinal: "ـخَ",
    fatahahInitial: "نَفَـ",
    fatahahWord: "نَفَخَ",

    kasaraFinal: "ـلَ",
    kasaraInitial: "خَجِـ",
    kasaraWord: "خَجِلَ",
  },
  {
    index: 6,
    fatahahFinal: "ـعَ",
    fatahahInitial: "شَفَـ",
    fatahahWord: "شَفَعَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "غَضِـ",
    kasaraWord: "غَضِبَ",
  },
  {
    index: 7,
    fatahahFinal: "حَ",
    fatahahInitial: "شَرَ",
    fatahahWord: "شَرَحَ",

    kasaraFinal: "نَ",
    kasaraInitial: "أذِ",
    kasaraWord: "أذِنَ",
  },
  {
    index: 8,
    fatahahFinal: "ـتَ",
    fatahahInitial: "قَنَـ",
    fatahahWord: "قَنَتَ",

    kasaraFinal: "ـفَ",
    kasaraInitial: "ألِـ",
    kasaraWord: "ألِفَ",
  },
  {
    index: 9,
    fatahahFinal: "ـطَ",
    fatahahInitial: "سَقَـ",
    fatahahWord: "سَقَطَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "صَـحِـ",
    kasaraWord: "صَحِبَ",
  },
  {
    index: 10,
    fatahahFinal: "قَ",
    fatahahInitial: "خَلَـ",
    fatahahWord: "خَلَقَ",

    kasaraFinal: "ـتَ",
    kasaraInitial: "عَنِـ",
    kasaraWord: "عَنِتَ",
  },
  {
    index: 11,
    fatahahFinal: "ـرَ",
    fatahahInitial: "كَسَـ",
    fatahahWord: "كَسَرَ",

    kasaraFinal: "ـثَ",
    kasaraInitial: "شَـعِـ",
    kasaraWord: "شَعِثَ",
  },
  {
    index: 12,
    fatahahFinal: "ـرَ",
    fatahahInitial: "شَكَـ",
    fatahahWord: "شَكَرَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "رَقِـ",
    kasaraWord: "رَقِبَ",
  },
  {
    index: 13,
    fatahahFinal: "ـكَ",
    fatahahInitial: "مَلَـ",
    fatahahWord: "مَلَكَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "صَئِـ",
    kasaraWord: "صَئِبَ",
  },
  {
    index: 14,
    fatahahFinal: "ـمَ",
    fatahahInitial: "لَطَـ",
    fatahahWord: "لَطَمَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "كَئِـ",
    kasaraWord: "كَئِبَ",
  },
  {
    index: 15,
    fatahahFinal: "أَ",
    fatahahInitial: "مَلَـ",
    fatahahWord: "مَلأَ",

    kasaraFinal: "ئَ",
    kasaraInitial: "صَدِ",
    kasaraWord: "صَدِئَ",
  },
  {
    index: 16,
    fatahahFinal: "ـسَ",
    fatahahInitial: "ھَمَـ",
    fatahahWord: "ھَمَسَ",

    kasaraFinal: "ـصَ",
    kasaraInitial: "نَغِـ",
    kasaraWord: "نَغِصَ",
  },
  {
    index: 17,
    fatahahFinal: "ـعَ",
    fatahahInitial: "یَفَ",
    fatahahWord: "یَفَعَ",

    kasaraFinal: "ـجَ",
    kasaraInitial: "نَضِـ",
    kasaraWord: "نَضِجَ",
  },
  {
    index: 18,
    fatahahFinal: "ـزَ",
    fatahahInitial: "وَ عَـ",
    fatahahWord: "وَ عَزَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "لَغِـ",
    kasaraWord: "لَغِبَ",
  },
  {
    index: 19,
    fatahahFinal: "ـعَ",
    fatahahInitial: "یَنَـ",  
    fatahahWord: "یَنَعَ",

    kasaraFinal: " ـئَ",
    kasaraInitial: "دَفِـ",
    kasaraWord: "دَفِئَ",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, w: 50 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Card = ({
  word,
  initial,
  middle,
  final,
  user,
  screen,
  nextUrl,
  type,
}) => {
  console.log("Card", word, initial, middle, final);
  return (
    <div className="w-full  ">
      <div className=" w-full p-2 rounded-md  flex flex-row justify-between   pt-3">
        {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
        <h1 className="mx-2 text-white text-lg">
          Module 2: How to Make words is Arabic
        </h1>
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
      <div className=" bg-white rounded-md w-full mt-5">
        <div className=" w-full p-5 md:grid-cols-4   ">
          <div className=" w-full bg-white rounded-md  sm:col-span-3 md:px-5 lg:px-14">
            <div className=" p-3 text-center ">
              {/* <h2 className="text-lg  "></h2> */}

              <div className=" mx-0 mt-5 lg:gap-12 gap-5 xl:gap-20 ">
                <div className="">
                  <div className="items-center w-full  overflow-hidden rounded border-2 shadow-lg min:h-fit  min:w-fit  my-16">
                    <div className=" font-bold text-center bg-dark-purple text-white h-fit  ">
                      {middle ? (
                        <h2 className="text-7xl font-sans flex justify-center content-center pb-12 pt-10">
                          {initial} + {middle} + {final}
                        </h2>
                      ) : (
                        <h2 className="text-7xl font-sans flex justify-center content-center pb-12 pt-10">
                          {initial} + {final}
                        </h2>
                      )}
                    </div>
                    <div className="bg-slate-50 h-fit">
                      <h2 className="text-8xl font-sans text-dark-purple flex justify-center pb-12 pt-10">
                        {word}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full p-2 rounded-md  flex flex-row justify-center   pt-3">
        <div className="mx-5">
          <Link href={`/${user}/module/harakat/${nextUrl}`}>
            <Button variant="contained" className="text-dark-purple bg-white">
              Next Section
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function VerticalTabs({ wordType, user, type, nextUrl }) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(0);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {wordType == "single" ? (
        <Box
          sx={{ flexGrow: 1, display: "flex", height: "100vh" }}
          style={{
            backgroundImage: `url(${colorBgImg.src})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100%",
            backgroundPosition: "center top",
            widows: "100vw",
            minHeight: "100vh",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
            className="bg-dark-purple text-white"
          >
            {singleLattersExamples.map((alphabate) => (
              <Tab
                label={
                  type === "fatahah"
                    ? alphabate.fatahahWord
                    : type === "kasara"
                    ? alphabate.kasaraWord
                    : null
                }
                className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60  text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
                {...a11yProps(alphabate.index)}
              />
            ))}
            {/* {singleLattersExamples.map((alphabate) => (
           <>
           {type == "fatahah" ? (<Tab
             label={alphabate.fatahahWord}
             className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60  text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
             {...a11yProps(alphabate.index)}
           />): null }
           {type == "kasara" ? (<Tab
             label={alphabate.kasaraWord}
             className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60  text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
             {...a11yProps(alphabate.index)}
           />): null }
           
           </>
          ))} */}
            <p className={`w-80`} />
          </Tabs>
          {singleLattersExamples.map((alphabate) => (
            <TabPanel
              style={{ width: "100%" }}
              value={value}
              index={alphabate.index}
            >
              {type == "fatahah" ? (
                <Card
                  initial={alphabate.fatahahInitial}
                  middle={alphabate.fatahahMiddle}
                  final={alphabate.fatahahFinal}
                  word={alphabate.fatahahWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                />
              ) : null}
              {type == "kasara" ? (
                <Card
                  initial={alphabate.kasaraInitial}
                  middle={alphabate.kasaraMiddle}
                  final={alphabate.kasaraFinal}
                  word={alphabate.kasaraWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                />
              ) : null}
            </TabPanel>
          ))}
        </Box>
      ) : (
        <Box
          sx={{ flexGrow: 1, display: "flex", height: "100vh" }}
          style={{
            backgroundImage: `url(${colorBgImg.src})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100%",
            backgroundPosition: "center top",
            widows: "100vw",
            minHeight: "100vh",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
            className="bg-dark-purple text-white"
          >
            {doubleLattersExamples.map((alphabate) => (
              <Tab
                label={
                  type === "fatahah"
                    ? alphabate.fatahahWord
                    : type === "kasara"
                    ? alphabate.kasaraWord
                    : null
                }
                className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60  text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
                {...a11yProps(alphabate.index)}
              />
            ))}
            <p className={`w-80`} />
          </Tabs>
          {doubleLattersExamples.map((alphabate) => (
            <TabPanel
              style={{ width: "100%" }}
              value={value}
              index={alphabate.index}
            >
              {type == "fatahah" ? (
                <Card
                  initial={alphabate.fatahahInitial}
                  middle={alphabate.fatahahMiddle}
                  final={alphabate.fatahahFinal}
                  word={alphabate.fatahahWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                />
              ) : null}
              {type == "kasara" ? (
                <Card
                  initial={alphabate.kasaraInitial}
                  middle={alphabate.kasaraMiddle}
                  final={alphabate.kasaraFinal}
                  word={alphabate.kasaraWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                />
              ) : null}
            </TabPanel>
          ))}
        </Box>
      )}
    </>
  );
}
