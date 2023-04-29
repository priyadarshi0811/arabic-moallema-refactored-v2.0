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
import fatha from "@/components/src/img/arabic_fatha.png";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import { useState } from "react";
const singleLattersExamples = [
  {
    index: 0,
    fathaInitial: "أَ",
    fathaMiddle: "مَـ",
    fathaFinal: "ـرَ",
    fathaWord: "أَمَرَ",

    kasraFinal: "ــسَ",
    kasraMiddle: "ئِـ",
    kasraInitial: "يَـ",
    kasraWord: "يَئِسَ",

    dammaFinal: "  نَ",
    dammaMiddle: "ذِ",
    dammaInitial: "أُ",
    dammaWord: "أُذِنَ",
  },
  {
    index: 1,
    fathaInitial: "سَـ",
    fathaMiddle: "ـأَ",
    fathaFinal: "لَ",
    fathaWord: "سَأَلَ",

    kasraFinal: "طَ",
    kasraMiddle: "ـبِـ",
    kasraInitial: "حَـ",
    kasraWord: "حَبِطَ",

    dammaFinal: "  تَ",
    dammaMiddle: "هِ",
    dammaInitial: "بُ",
    dammaWord: "بُهِتَ",
  },
  {
    index: 2,
    fathaInitial: " لَـ ",
    fathaMiddle: "ـجـَ",
    fathaFinal: "أَ",
    fathaWord: "لـَـجَـأ",

    kasraFinal: "ـهَ",
    kasraMiddle: "ـتِـ",
    kasraInitial: "عَـ",
    kasraWord: "عَتِهَ",

    dammaInitial: "تُ",
    dammaMiddle: "لِ",
    dammaFinal: "  يَ",
    dammaWord: "تُلِيَ",
  },
  {
    index: 3,
    fathaFinal: "ـشَ",
    fathaMiddle: "ـطَـ",
    fathaInitial: "بَـ",
    fathaWord: "بَطَشَ",

    kasraFinal: "ـقَ",
    kasraMiddle: "ثِـ",
    kasraInitial: "وَ",
    kasraWord: "وَثِقَ",

    dammaInitial: "ثُ",
    dammaMiddle: "قِ",
    dammaFinal: "بَ",
    dammaWord: "ثُقِبَ",
  },
  {
    index: 4,
    fathaFinal: "ـذَ",
    fathaMiddle: "ـبَـ",
    fathaInitial: "نَـ",
    fathaWord: "نَبَذَ",

    kasraFinal: "ـلَ",
    kasraMiddle: "جِـ",
    kasraInitial: "وَ",
    kasraWord: "وَجِلَ",

    dammaInitial: "جُ",
    dammaMiddle: "مِ",
    dammaFinal: "عَ",
    dammaWord: "جُمِعَ",
  },
  {
    index: 5,
    fathaFinal: "ـبَ",
    fathaMiddle: "ـقَـ",
    fathaInitial: "ثَـ",
    fathaWord: "ثَقَبَ",

    kasraFinal: "ــمَلَ",
    kasraMiddle: "حِـ",
    kasraInitial: "رَ",
    kasraWord: "رَحِمَ",

    dammaInitial: "حُ",
    dammaMiddle: "مِ",
    dammaFinal: "دَ",
    dammaWord: "حُمِدَ",
  },
  {
    index: 6,
    fathaFinal: "ـرَ",
    fathaMiddle: "ـجَـ",
    fathaInitial: "تَـ",
    fathaWord: "تَجَرَ",

    kasraFinal: "ـلَ",
    kasraMiddle: "ـخِـ",
    kasraInitial: "بَـ",
    kasraWord: "بَخِلَ",

    dammaInitial: "خُ",
    dammaMiddle: "لِ",
    dammaFinal: "قَ",
    dammaWord: "خُلِقَ",
  },
  {
    index: 7,
    fathaFinal: "ـبَ",
    fathaMiddle: "ـتَـ",
    fathaInitial: "كَـ",
    fathaWord: "كَتَبَ",

    kasraFinal: "مَ",
    kasraMiddle: "ـدِ",
    kasraInitial: "قَـ",
    kasraWord: "قَدِمَ",

    dammaInitial: "دُ",
    dammaMiddle: "عِ",
    dammaFinal: "يَ",
    dammaWord: "دُعِيَ",
  },
  {
    index: 8,
    fathaFinal: "ـتَ",
    fathaMiddle: "ـبَـ",
    fathaInitial: "ثَـ",
    fathaWord: "ثَبَتَ",

    kasraFinal: "ـظَ",
    kasraMiddle: "ـفِـ",
    kasraInitial: "حَـ",
    kasraWord: "حَفِظَ",

    dammaInitial: "ذُ",
    dammaMiddle: "بِ",
    dammaFinal: "حَ",
    dammaWord: "ذُبِحَ",
  },
  {
    index: 9,
    fathaFinal: "ـبَ",
    fathaMiddle: "ـتَـ",
    fathaInitial: "كَـ",
    fathaWord: "كَتَبَ",

    kasraFinal: "ـيَ",
    kasraMiddle: "ـظِـ",
    kasraInitial: "حَـ",
    kasraWord: "حَظِيَ",

    dammaInitial: "رُ",
    dammaMiddle: "حِ",
    dammaFinal: "مَ",
    dammaWord: "رُحِمَ",
  },
  {
    index: 10,
    fathaFinal: "ـرَ",
    fathaMiddle: "ـثَـ",
    fathaInitial: "نَـ",
    fathaWord: "نَـثَرَ",

    kasraFinal: "ـرَ",
    kasraMiddle: "ـفِـ",
    kasraInitial: "ظَـ",
    kasraWord: "ظَفِرَ",

    dammaInitial: "زُ",
    dammaMiddle: "رِ",
    dammaFinal: "عَ",
    dammaWord: "زُرِعَ",
  },
  {
    index: 11,
    fathaFinal: "ـثَ",
    fathaMiddle: "ـعَـ",
    fathaInitial: "بَـ",
    fathaWord: "بَعَثَ",

    kasraFinal: "ـيَ",
    kasraMiddle: "ـقِـ",
    kasraInitial: "بـَ",
    kasraWord: "بَقِيَ",

    dammaInitial: "سُ",
    dammaMiddle: "ئِ",
    dammaFinal: "لَ",
    dammaWord: "سُئِلَ",
  },
  {
    index: 12,
    fathaFinal: "ـدَ",
    fathaMiddle: "ـجَـ",
    fathaInitial: "سَـ",
    fathaWord: "سَجَدَ",

    kasraFinal: "بَ",
    kasraMiddle: "ـرِ",
    kasraInitial: "شَـ",
    kasraWord: "شَرِبَ",

    dammaInitial: "شُ",
    dammaMiddle: "كِ",
    dammaFinal: "رَ",
    dammaWord: "شُكِرَ",
  },
  {
    index: 13,
    fathaFinal: "ـجَ",
    fathaMiddle: "ـسَـ",
    fathaInitial: "نَـ",
    fathaWord: "نَسَجَ",

    kasraFinal: "ـدَ",
    kasraMiddle: "ـعِـ",
    kasraInitial: "سَـ",
    kasraWord: "سَعِدَ",

    dammaInitial: "صُ",
    dammaMiddle: "عِ",
    dammaFinal: "قَ",
    dammaWord: "صُعِقَ",
  },
  {
    index: 14,
    fathaFinal: "ـسَ",
    fathaMiddle: "ـبـَ",
    fathaInitial: "حَـ",
    fathaWord: "حَبَسَ",

    kasraFinal: "ـبَ",
    kasraMiddle: "كِـ",
    kasraInitial: "رَ",
    kasraWord: "رَكِبَ",

    dammaInitial: "ضُ",
    dammaMiddle: "رِ",
    dammaFinal: "بَ",
    dammaWord: "ضُرِبَ",
  },
  {
    index: 15,
    fathaFinal: "ـنَ",
    fathaMiddle: "ـحَـ",
    fathaInitial: "طَـ",
    fathaWord: "طَحَنَ",

    kasraFinal: "رَ",
    kasraMiddle: "ـوِ",
    kasraInitial: "عَـ",
    kasraWord: "عَوِرَ",

    dammaInitial: "طُ",
    dammaMiddle: "رِ",
    dammaFinal: "حَ",
    dammaWord: "طُرِحَ",
  },
  {
    index: 16,
    fathaFinal: "ـحَ",
    fathaMiddle: "ـسَـ",
    fathaInitial: "مَـ",
    fathaWord: "مَسَحَ",

    kasraFinal: "ـدَ",
    kasraMiddle: "ـهِـ",
    kasraInitial: "عَـ",
    kasraWord: "عَهِدَ",

    dammaInitial: "ظُ",
    dammaMiddle: "لِ",
    dammaFinal: "مَ",
    dammaWord: "ظُلِمَ",
  },
  {
    index: 17,
    fathaFinal: "ـعَ",
    fathaMiddle: "ـضَـ",
    fathaInitial: "خَـ",
    fathaWord: "خَضَعَ",

    kasraFinal: "ـقَ",
    kasraMiddle: "ـنِـ",
    kasraInitial: "حَـ",
    kasraWord: "حَنِقَ",

    dammaInitial: "قُ",
    dammaMiddle: "تِ",
    dammaFinal: "لَ",
    dammaWord: "قُتِلَ",
  },
  {
    index: 18,
    fathaFinal: "ـرَ",
    fathaMiddle: "ـخَـ",
    fathaInitial: "نَـ",
    fathaWord: "نَـخَـرَ",

    kasraFinal: "ـعَ",
    kasraMiddle: "ـمِـ",
    kasraInitial: "سَـ",
    kasraWord: "سَمِعَ",

    dammaInitial: "كُ",
    dammaMiddle: "تِ",
    dammaFinal: "بَ",
    dammaWord: "كُتِبَ",
  },
  {
    index: 19,
    fathaFinal: "دَ",
    fathaMiddle: "ـرَ",
    fathaInitial: "ثَـ",
    fathaWord: "ثَرَدَ",

    kasraFinal: "ـمَ",
    kasraMiddle: "ـلِـ",
    kasraInitial: "عَـ",
    kasraWord: "عَلِمَ",

    dammaInitial: "مُ",
    dammaMiddle: "نِ",
    dammaFinal: "عَ",
    dammaWord: "مُنِعَ",
  },
];

const doubleLattersExamples = [
  {
    index: 0,
    fathaFinal: "ـدَ",
    fathaInitial: "صَعَـ",
    fathaWord: "صَعَدَ",

    kasraFinal: "ـكَ",
    kasraInitial: "ضَحِـ",
    kasraWord: "ضَحِكَ",

    dammaInitial: "نُسِ",
    dammaFinal: "  يَ",
    dammaWord: "نُسِيَ",
  },
  {
    index: 1,
    fathaFinal: " ـهَ  ",
    fathaInitial: " وَلَـ ",
    fathaWord: "وَ لَـهَ ",

    kasraFinal: "حَ",
    kasraInitial: "مَرِ",
    kasraWord: "مَرِحَ",

    dammaInitial: "هُدِ",
    dammaFinal: "  يَ",
    dammaWord: "هُدِيَ",
  },
  {
    index: 2,

    fathaFinal: "ـمَ",
    fathaInitial: " فَطَـ ",
    fathaWord: "فَطَمَ",

    kasraFinal: "ـلَ",
    kasraInitial: "عَمِـ",
    kasraWord: "عَمِلَ",

    dammaInitial: "وُجِ",
    dammaFinal: "  دَ",
    dammaWord: "وُجِدَ",
  },
  {
    index: 3,
    fathaFinal: "ـفَ",
    fathaInitial: "شَغَـ",
    fathaWord: "شَغَفَ",

    kasraFinal: "ـلَ",
    kasraInitial: "عَقِـ",
    kasraWord: "عَقِلَ",

    dammaInitial: "وُضِ",
    dammaFinal: "عَ",
    dammaWord: "وُضِعَ",
  },
  {
    index: 4,
    fathaFinal: "ـغَ",
    fathaInitial: "مَضَـ",
    fathaWord: "مَضَغَ",

    kasraFinal: "ـلَ",
    kasraInitial: "جَهِـ",
    kasraWord: "جَهِلَ",

    dammaInitial: "شُرِ",
    dammaFinal: "بَ",
    dammaWord: "شُرِبَ",
  },
  {
    index: 5,
    fathaFinal: "ـخَ",
    fathaInitial: "نَفَـ",
    fathaWord: "نَفَخَ",

    kasraFinal: "ـلَ",
    kasraInitial: "خَجِـ",
    kasraWord: "خَجِلَ",

    dammaInitial: "رُسِ",
    dammaFinal: "مَ",
    dammaWord: "رُسِمَ",
  },
  {
    index: 6,
    fathaFinal: "ـعَ",
    fathaInitial: "شَفَـ",
    fathaWord: "شَفَعَ",

    kasraFinal: "ـبَ",
    kasraInitial: "غَضِـ",
    kasraWord: "غَضِبَ",

    dammaInitial: "فُتِ",
    dammaFinal: "حَ",
    dammaWord: "فُتِحَ",
  },
  {
    index: 7,
    fathaFinal: "حَ",
    fathaInitial: "شَرَ",
    fathaWord: "شَرَحَ",

    kasraFinal: "نَ",
    kasraInitial: "أذِ",
    kasraWord: "أذِنَ",

    dammaInitial: "دُبِ",
    dammaFinal: "غَ",
    dammaWord: "دُبِغَ",
  },
  {
    index: 8,
    fathaFinal: "ـتَ",
    fathaInitial: "قَنَـ",
    fathaWord: "قَنَتَ",

    kasraFinal: "ـفَ",
    kasraInitial: "ألِـ",
    kasraWord: "ألِفَ",

    dammaInitial: "سُبُ",
    dammaFinal: "لُ",
    dammaWord: "سُبُلُ",
  },
  {
    index: 9,
    fathaFinal: "ـطَ",
    fathaInitial: "سَقَـ",
    fathaWord: "سَقَطَ",

    kasraFinal: "ـبَ",
    kasraInitial: "صَـحِـ",
    kasraWord: "صَحِبَ",

    dammaInitial: "رُسُ",
    dammaFinal: "لُ",
    dammaWord: "رُسُلُ",
  },
  {
    index: 10,
    fathaFinal: "قَ",
    fathaInitial: "خَلَـ",
    fathaWord: "خَلَقَ",

    kasraFinal: "ـتَ",
    kasraInitial: "عَنِـ",
    kasraWord: "عَنِتَ",

    dammaInitial: "أُفُ",
    dammaFinal: "قُ",
    dammaWord: "أُفُقُ",
  },
  {
    index: 11,
    fathaFinal: "ـرَ",
    fathaInitial: "كَسَـ",
    fathaWord: "كَسَرَ",

    kasraFinal: "ـثَ",
    kasraInitial: "شَـعِـ",
    kasraWord: "شَعِثَ",

    dammaInitial: "نُظُ",
    dammaFinal: "مُ",
    dammaWord: "نُظُمُ",
  },
  {
    index: 12,
    fathaFinal: "ـرَ",
    fathaInitial: "شَكَـ",
    fathaWord: "شَكَرَ",

    kasraFinal: "ـبَ",
    kasraInitial: "رَقِـ",
    kasraWord: "رَقِبَ",

    dammaInitial: "مَثَ",
    dammaFinal: "لُ",
    dammaWord: "مَثَلُ",
  },
  {
    index: 13,
    fathaFinal: "ـكَ",
    fathaInitial: "مَلَـ",
    fathaWord: "مَلَكَ",

    kasraFinal: "ـبَ",
    kasraInitial: "صَئِـ",
    kasraWord: "صَئِبَ",

    dammaInitial: "لَطُ",
    dammaFinal: "فَ",
    dammaWord: "لَطُفَ",
  },
  {
    index: 14,
    fathaFinal: "ـمَ",
    fathaInitial: "لَطَـ",
    fathaWord: "لَطَمَ",

    kasraFinal: "ـبَ",
    kasraInitial: "كَئِـ",
    kasraWord: "كَئِبَ",

    dammaInitial: "ثُلِ",
    dammaFinal: "بَ",
    dammaWord: "ثُلِبَ",
  },
  {
    index: 15,
    fathaFinal: "أَ",
    fathaInitial: "مَلَـ",
    fathaWord: "مَلأَ",

    kasraFinal: "ئَ",
    kasraInitial: "صَدِ",
    kasraWord: "صَدِئَ",

    dammaInitial: "عُقَ",
    dammaFinal: "دُ",
    dammaWord: "عُقَدُ",
  },
  {
    index: 16,
    fathaFinal: "ـسَ",
    fathaInitial: "ھَمَـ",
    fathaWord: "ھَمَسَ",

    kasraFinal: "ـصَ",
    kasraInitial: "نَغِـ",
    kasraWord: "نَغِصَ",

    dammaInitial: "حُجَ",
    dammaFinal: "رُ",
    dammaWord: "حُجَرُ",
  },
  {
    index: 17,
    fathaFinal: "ـعَ",
    fathaInitial: "یَفَ",
    fathaWord: "یَفَعَ",

    kasraFinal: "ـجَ",
    kasraInitial: "نَضِـ",
    kasraWord: "نَضِجَ",

    dammaInitial: "حُشِ",
    dammaFinal: "رَ",
    dammaWord: "حُشِرَ",
  },
  {
    index: 18,
    fathaFinal: "ـزَ",
    fathaInitial: "وَ عَـ",
    fathaWord: "وَ عَزَ",

    kasraFinal: "ـبَ",
    kasraInitial: "لَغِـ",
    kasraWord: "لَغِبَ",

    dammaInitial: "فُرَ",
    dammaFinal: "صُ",
    dammaWord: "فُرَصُ",
  },
  {
    index: 19,
    fathaFinal: "ـعَ",
    fathaInitial: "یَنَـ",
    fathaWord: "یَنَعَ",

    kasraFinal: " ـئَ",
    kasraInitial: "دَفِـ",
    kasraWord: "دَفِئَ",

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
  bgColor,
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
                    <div
                      className=" font-bold text-center  text-white h-80  "
                      style={{ backgroundColor: bgColor }}
                    >
                      {middle ? (
                        <h2
                          className="text-7xl flex justify-center content-center pb-12 pt-10"
                          style={{
                            fontFamily:
                              '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                              fontWeight:500
                          }}
                        >
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
                  <div
                    className="bg-slate-50 h-64 w-80 p-5 mx-auto rounded-3xl border-4 "
                    style={{ marginTop: -200, borderColor: bgColor }}
                  >
                    <h2
                      className="text-8xl  flex justify-center pb-12 pt-10"
                      style={{
                        color: bgColor,
                        fontFamily:
                          '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                        fontWeight: 500,
                      }}
                    >
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

  const [randomColorL, setRandomColorL] = useState("#56C3F1");
  const [randomColorR, setRandomColorR] = useState("#09DBDB");
  const [selectedOption, setSelectedOption] = useState(0);

  const bgStyle = {
    color: "blue",
    ":focus": {
      backgroundColor: randomColorL,
    },
  };

  const GenerateColor = (index) => {
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

    setSelectedOption(index);

    // selecting random color
    setRandomColorL(colors[Math.floor(Math.random() * colors.length)]),
      setRandomColorR(colors[Math.floor(Math.random() * colors.length)]),
      console.log("random_colorL", randomColorL);
    console.log("random_colorR", randomColorR);
  };

  const sliderCardSelected = {
    fontSize: 40,
    fontFamily:
    '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
    backgroundColor: randomColorL,
    borderRadius: 15,
  };
  const sliderCard = {
    fontSize: 40,
    fontFamily:
    '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
    // backgroundColor: randomColorR,
    borderRadius: 15,
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
                  type === "fatha"
                    ? alphabate.fathaWord
                    : type === "kasra"
                    ? alphabate.kasraWord
                    : alphabate.dammaWord
                }
                
                onClick={() => {
                  GenerateColor(alphabate.index);
                }}
                style={
                  selectedOption == alphabate.index
                    ? sliderCardSelected
                    : sliderCard
                }
                {...a11yProps(alphabate.index)}
              />
            ))}
            {/* {singleLattersExamples.map((alphabate) => (
           <>
           {type == "fatha" ? (<Tab
             label={alphabate.fathaWord}
             className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60  text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
             {...a11yProps(alphabate.index)}
           />): null }
           {type == "kasra" ? (<Tab
             label={alphabate.kasraWord}
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
              {type == "fatha" ? (
                <Card
                  initial={alphabate.fathaInitial}
                  middle={alphabate.fathaMiddle}
                  final={alphabate.fathaFinal}
                  word={alphabate.fathaWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
                />
              ) : null}
              {type == "kasra" ? (
                <Card
                  initial={alphabate.kasraInitial}
                  middle={alphabate.kasraMiddle}
                  final={alphabate.kasraFinal}
                  word={alphabate.kasraWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
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
                  bgColor={randomColorL}
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
                  type === "fatha"
                    ? alphabate.fathaWord
                    : type === "kasra"
                    ? alphabate.kasraWord
                    : alphabate.dammaWord
                }
                onClick={() => {
                  GenerateColor(alphabate.index);
                }}
                style={
                  selectedOption == alphabate.index
                    ? sliderCardSelected
                    : sliderCard
                }
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
              {type == "fatha" ? (
                <Card
                  initial={alphabate.fathaInitial}
                  middle={alphabate.fathaMiddle}
                  final={alphabate.fathaFinal}
                  word={alphabate.fathaWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
                />
              ) : null}
              {type == "kasra" ? (
                <Card
                  initial={alphabate.kasraInitial}
                  middle={alphabate.kasraMiddle}
                  final={alphabate.kasraFinal}
                  word={alphabate.kasraWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
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
                  bgColor={randomColorL}
                />
              ) : null}
            </TabPanel>
          ))}
        </Box>
      )}
    </>
  );
}
