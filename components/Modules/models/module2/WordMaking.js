import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import GeneralCard from "@/components/Layout/card/GeneralCard";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Fatahah from "@/components/src/img/arabic_fatha.png";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import { useState } from "react";
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

    dammaFinal: "  نَ",
    dammaMiddle: "ذِ",
    dammaInitial: "أُ",
    dammaWord: "أُذِنَ",
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

    dammaFinal: "  تَ",
    dammaMiddle: "هِ",
    dammaInitial: "بُ",
    dammaWord: "بُهِتَ",
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

    dammaInitial: "تُ",
    dammaMiddle: "لِ",
    dammaFinal: "  يَ",
    dammaWord: "تُلِيَ",
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

    dammaInitial: "ثُ",
    dammaMiddle: "قِ",
    dammaFinal: "بَ",
    dammaWord: "ثُقِبَ",
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

    dammaInitial: "جُ",
    dammaMiddle: "مِ",
    dammaFinal: "عَ",
    dammaWord: "جُمِعَ",
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

    dammaInitial: "حُ",
    dammaMiddle: "مِ",
    dammaFinal: "دَ",
    dammaWord: "حُمِدَ",
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

    dammaInitial: "خُ",
    dammaMiddle: "لِ",
    dammaFinal: "قَ",
    dammaWord: "خُلِقَ",
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

    dammaInitial: "دُ",
    dammaMiddle: "عِ",
    dammaFinal: "يَ",
    dammaWord: "دُعِيَ",
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

    dammaInitial: "ذُ",
    dammaMiddle: "بِ",
    dammaFinal: "حَ",
    dammaWord: "ذُبِحَ",
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

    dammaInitial: "رُ",
    dammaMiddle: "حِ",
    dammaFinal: "مَ",
    dammaWord: "رُحِمَ",
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

    dammaInitial: "زُ",
    dammaMiddle: "رِ",
    dammaFinal: "عَ",
    dammaWord: "زُرِعَ",
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

    dammaInitial: "سُ",
    dammaMiddle: "ئِ",
    dammaFinal: "لَ",
    dammaWord: "سُئِلَ",
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

    dammaInitial: "شُ",
    dammaMiddle: "كِ",
    dammaFinal: "رَ",
    dammaWord: "شُكِرَ",
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

    dammaInitial: "صُ",
    dammaMiddle: "عِ",
    dammaFinal: "قَ",
    dammaWord: "صُعِقَ",
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

    dammaInitial: "ضُ",
    dammaMiddle: "رِ",
    dammaFinal: "بَ",
    dammaWord: "ضُرِبَ",
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

    dammaInitial: "طُ",
    dammaMiddle: "رِ",
    dammaFinal: "حَ",
    dammaWord: "طُرِحَ",
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

    dammaInitial: "ظُ",
    dammaMiddle: "لِ",
    dammaFinal: "مَ",
    dammaWord: "ظُلِمَ",
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

    dammaInitial: "قُ",
    dammaMiddle: "تِ",
    dammaFinal: "لَ",
    dammaWord: "قُتِلَ",
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

    dammaInitial: "كُ",
    dammaMiddle: "تِ",
    dammaFinal: "بَ",
    dammaWord: "كُتِبَ",
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

    dammaInitial: "مُ",
    dammaMiddle: "نِ",
    dammaFinal: "عَ",
    dammaWord: "مُنِعَ",
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

    dammaInitial: "نُسِ",
    dammaFinal: "  يَ",
    dammaWord: "نُسِيَ",
  },
  {
    index: 1,
    fatahahFinal: " ـهَ  ",
    fatahahInitial: " وَلَـ ",
    fatahahWord: "وَ لَـهَ ",

    kasaraFinal: "حَ",
    kasaraInitial: "مَرِ",
    kasaraWord: "مَرِحَ",

    dammaInitial: "هُدِ",
    dammaFinal: "  يَ",
    dammaWord: "هُدِيَ",
  },
  {
    index: 2,

    fatahahFinal: "ـمَ",
    fatahahInitial: " فَطَـ ",
    fatahahWord: "فَطَمَ",

    kasaraFinal: "ـلَ",
    kasaraInitial: "عَمِـ",
    kasaraWord: "عَمِلَ",

    dammaInitial: "وُجِ",
    dammaFinal: "  دَ",
    dammaWord: "وُجِدَ",
  },
  {
    index: 3,
    fatahahFinal: "ـفَ",
    fatahahInitial: "شَغَـ",
    fatahahWord: "شَغَفَ",

    kasaraFinal: "ـلَ",
    kasaraInitial: "عَقِـ",
    kasaraWord: "عَقِلَ",

    dammaInitial: "وُضِ",
    dammaFinal: "عَ",
    dammaWord: "وُضِعَ",
  },
  {
    index: 4,
    fatahahFinal: "ـغَ",
    fatahahInitial: "مَضَـ",
    fatahahWord: "مَضَغَ",

    kasaraFinal: "ـلَ",
    kasaraInitial: "جَهِـ",
    kasaraWord: "جَهِلَ",

    dammaInitial: "شُرِ",
    dammaFinal: "بَ",
    dammaWord: "شُرِبَ",
  },
  {
    index: 5,
    fatahahFinal: "ـخَ",
    fatahahInitial: "نَفَـ",
    fatahahWord: "نَفَخَ",

    kasaraFinal: "ـلَ",
    kasaraInitial: "خَجِـ",
    kasaraWord: "خَجِلَ",

    dammaInitial: "رُسِ",
    dammaFinal: "مَ",
    dammaWord: "رُسِمَ",
  },
  {
    index: 6,
    fatahahFinal: "ـعَ",
    fatahahInitial: "شَفَـ",
    fatahahWord: "شَفَعَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "غَضِـ",
    kasaraWord: "غَضِبَ",

    dammaInitial: "فُتِ",
    dammaFinal: "حَ",
    dammaWord: "فُتِحَ",
  },
  {
    index: 7,
    fatahahFinal: "حَ",
    fatahahInitial: "شَرَ",
    fatahahWord: "شَرَحَ",

    kasaraFinal: "نَ",
    kasaraInitial: "أذِ",
    kasaraWord: "أذِنَ",

    dammaInitial: "دُبِ",
    dammaFinal: "غَ",
    dammaWord: "دُبِغَ",
  },
  {
    index: 8,
    fatahahFinal: "ـتَ",
    fatahahInitial: "قَنَـ",
    fatahahWord: "قَنَتَ",

    kasaraFinal: "ـفَ",
    kasaraInitial: "ألِـ",
    kasaraWord: "ألِفَ",

    dammaInitial: "سُبُ",
    dammaFinal: "لُ",
    dammaWord: "سُبُلُ",
  },
  {
    index: 9,
    fatahahFinal: "ـطَ",
    fatahahInitial: "سَقَـ",
    fatahahWord: "سَقَطَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "صَـحِـ",
    kasaraWord: "صَحِبَ",

    dammaInitial: "رُسُ",
    dammaFinal: "لُ",
    dammaWord: "رُسُلُ",
  },
  {
    index: 10,
    fatahahFinal: "قَ",
    fatahahInitial: "خَلَـ",
    fatahahWord: "خَلَقَ",

    kasaraFinal: "ـتَ",
    kasaraInitial: "عَنِـ",
    kasaraWord: "عَنِتَ",

    dammaInitial: "أُفُ",
    dammaFinal: "قُ",
    dammaWord: "أُفُقُ",
  },
  {
    index: 11,
    fatahahFinal: "ـرَ",
    fatahahInitial: "كَسَـ",
    fatahahWord: "كَسَرَ",

    kasaraFinal: "ـثَ",
    kasaraInitial: "شَـعِـ",
    kasaraWord: "شَعِثَ",

    dammaInitial: "نُظُ",
    dammaFinal: "مُ",
    dammaWord: "نُظُمُ",
  },
  {
    index: 12,
    fatahahFinal: "ـرَ",
    fatahahInitial: "شَكَـ",
    fatahahWord: "شَكَرَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "رَقِـ",
    kasaraWord: "رَقِبَ",

    dammaInitial: "مَثَ",
    dammaFinal: "لُ",
    dammaWord: "مَثَلُ",
  },
  {
    index: 13,
    fatahahFinal: "ـكَ",
    fatahahInitial: "مَلَـ",
    fatahahWord: "مَلَكَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "صَئِـ",
    kasaraWord: "صَئِبَ",

    dammaInitial: "لَطُ",
    dammaFinal: "فَ",
    dammaWord: "لَطُفَ",
  },
  {
    index: 14,
    fatahahFinal: "ـمَ",
    fatahahInitial: "لَطَـ",
    fatahahWord: "لَطَمَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "كَئِـ",
    kasaraWord: "كَئِبَ",

    dammaInitial: "ثُلِ",
    dammaFinal: "بَ",
    dammaWord: "ثُلِبَ",
  },
  {
    index: 15,
    fatahahFinal: "أَ",
    fatahahInitial: "مَلَـ",
    fatahahWord: "مَلأَ",

    kasaraFinal: "ئَ",
    kasaraInitial: "صَدِ",
    kasaraWord: "صَدِئَ",

    dammaInitial: "عُقَ",
    dammaFinal: "دُ",
    dammaWord: "عُقَدُ",
  },
  {
    index: 16,
    fatahahFinal: "ـسَ",
    fatahahInitial: "ھَمَـ",
    fatahahWord: "ھَمَسَ",

    kasaraFinal: "ـصَ",
    kasaraInitial: "نَغِـ",
    kasaraWord: "نَغِصَ",

    dammaInitial: "حُجَ",
    dammaFinal: "رُ",
    dammaWord: "حُجَرُ",
  },
  {
    index: 17,
    fatahahFinal: "ـعَ",
    fatahahInitial: "یَفَ",
    fatahahWord: "یَفَعَ",

    kasaraFinal: "ـجَ",
    kasaraInitial: "نَضِـ",
    kasaraWord: "نَضِجَ",

    dammaInitial: "حُشِ",
    dammaFinal: "رَ",
    dammaWord: "حُشِرَ",
  },
  {
    index: 18,
    fatahahFinal: "ـزَ",
    fatahahInitial: "وَ عَـ",
    fatahahWord: "وَ عَزَ",

    kasaraFinal: "ـبَ",
    kasaraInitial: "لَغِـ",
    kasaraWord: "لَغِبَ",

    dammaInitial: "فُرَ",
    dammaFinal: "صُ",
    dammaWord: "فُرَصُ",
  },
  {
    index: 19,
    fatahahFinal: "ـعَ",
    fatahahInitial: "یَنَـ",
    fatahahWord: "یَنَعَ",

    kasaraFinal: " ـئَ",
    kasaraInitial: "دَفِـ",
    kasaraWord: "دَفِئَ",

    dammaInitial: "شُحِ",
    dammaFinal: "ذَ",
    dammaWord: "شُحِذَ",
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
  bgColor
}) => {
  console.log("Card", word, initial, middle, final);
  return (
    <div className="w-full  ">
      <div className=" bg-white rounded-3xl w-full mt-5">
      <div className=" w-full p-2 rounded-md  flex flex-row justify-between   pt-8">
        {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
        
        <h1
            className="p-3 text-white bg-dark-purple rounded-lg text-lg  border-2 border-white"
            style={{ marginLeft: -30, width: 600 }}
          >
             Module 2: How to Make words is Arabic
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
        <div className=" w-full p-5 md:grid-cols-4   ">
          <div className=" w-full bg-white rounded-md  sm:col-span-3 md:px-5 lg:px-14">
            <div className=" p-3 text-center ">
              {/* <h2 className="text-lg  "></h2> */}

              <div className=" mx-0 mt-5 lg:gap-12 gap-5 xl:gap-20 ">
                <div className=" ">
                  <div className="items-center w-full bg-dark-purple overflow-hidden rounded-3xl border-2 shadow-lg min:h-fit  min:w-fit  my-16">
                    <div className=" font-bold text-center  text-white h-80  " style={{backgroundColor: bgColor}}>
                      {middle ? (
                        <h2 className="text-7xl font-sans flex justify-center content-center pb-12 pt-10">
                          <span className="mx-10">{final}</span>
                          <span className="mx-10">{middle}</span>
                          <span className="mx-10">{initial}</span>
                        </h2>
                      ) : (
                        <h2 className="text-7xl font-sans flex justify-center content-center pb-12 pt-10">
                          <span className="mx-10">{final}</span>
                          <span className="mx-10">{initial}</span>
                        </h2>
                      )}
                    </div>
                  </div>
                    <div className="bg-slate-50 h-64 w-80 p-5 mx-auto rounded-3xl border-4 " style={{marginTop: -200, borderColor: bgColor}} >
                      <h2 className="text-8xl font-sans  flex justify-center pb-12 pt-10" style={{color: bgColor}}>
                        {word}
                      </h2>
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

  console.log(type, "type");

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
                    : alphabate.dammaWord
                }
                onClick={()=>GenerateColor()}
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
                  bgColor={randomColor}
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
                  bgColor={randomColor}
                />
              ) : null}
              {type == "damma" ? (
                <Card
                  initial={alphabate.dammaInitial}
                  middle={alphabate.dammaMiddle}
                  final={alphabate.dammaFinal}
                  word={alphabate.dammaWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColor}
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
                    : alphabate.dammaWord
                }
                onClick={() => {
                   GenerateColor()
                }}
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
                  bgColor={randomColor}
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
              {type == "damma" ? (
                <Card
                  initial={alphabate.dammaInitial}
                  middle={alphabate.dammaMiddle}
                  final={alphabate.dammaFinal}
                  word={alphabate.dammaWord}
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
