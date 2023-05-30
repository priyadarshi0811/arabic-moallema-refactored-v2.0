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
    alifInitial: "أَ",
    alifMiddle: "مَـ",
    alifFinal: "ـرَ",
    alifWord: "أَمَرَ",

    yaaFinal: "ــسَ",
    yaaMiddle: "ئِـ",
    yaaInitial: "يَـ",
    yaaWord: "يَئِسَ",

    wawFinal: "  نَ",
    wawMiddle: "ذِ",
    wawInitital: "أُ",
    wawWord: "أُذِنَ",
  },
  {
    index: 1,
    alifInitial: "سَـ",
    alifMiddle: "ـأَ",
    alifFinal: "لَ",
    alifWord: "سَأَلَ",

    yaaFinal: "طَ",
    yaaMiddle: "ـبِـ",
    yaaInitial: "حَـ",
    yaaWord: "حَبِطَ",

    wawFinal: "  تَ",
    wawMiddle: "هِ",
    wawInitital: "بُ",
    wawWord: "بُهِتَ",
  },
  {
    index: 2,
    alifInitial: " لَـ ",
    alifMiddle: "ـجـَ",
    alifFinal: "أَ",
    alifWord: "لـَـجَـأ",

    yaaFinal: "ـهَ",
    yaaMiddle: "ـتِـ",
    yaaInitial: "عَـ",
    yaaWord: "عَتِهَ",

    wawInitital: "تُ",
    wawMiddle: "لِ",
    wawFinal: "  يَ",
    wawWord: "تُلِيَ",
  },
  {
    index: 3,
    alifFinal: "ـشَ",
    alifMiddle: "ـطَـ",
    alifInitial: "بَـ",
    alifWord: "بَطَشَ",

    yaaFinal: "ـقَ",
    yaaMiddle: "ثِـ",
    yaaInitial: "وَ",
    yaaWord: "وَثِقَ",

    wawInitital: "ثُ",
    wawMiddle: "قِ",
    wawFinal: "بَ",
    wawWord: "ثُقِبَ",
  },
  {
    index: 4,
    alifFinal: "ـذَ",
    alifMiddle: "ـبَـ",
    alifInitial: "نَـ",
    alifWord: "نَبَذَ",

    yaaFinal: "ـلَ",
    yaaMiddle: "جِـ",
    yaaInitial: "وَ",
    yaaWord: "وَجِلَ",

    wawInitital: "جُ",
    wawMiddle: "مِ",
    wawFinal: "عَ",
    wawWord: "جُمِعَ",
  },
  {
    index: 5,
    alifFinal: "ـبَ",
    alifMiddle: "ـقَـ",
    alifInitial: "ثَـ",
    alifWord: "ثَقَبَ",

    yaaFinal: "ــمَلَ",
    yaaMiddle: "حِـ",
    yaaInitial: "رَ",
    yaaWord: "رَحِمَ",

    wawInitital: "حُ",
    wawMiddle: "مِ",
    wawFinal: "دَ",
    wawWord: "حُمِدَ",
  },
  {
    index: 6,
    alifFinal: "ـرَ",
    alifMiddle: "ـجَـ",
    alifInitial: "تَـ",
    alifWord: "تَجَرَ",

    yaaFinal: "ـلَ",
    yaaMiddle: "ـخِـ",
    yaaInitial: "بَـ",
    yaaWord: "بَخِلَ",

    wawInitital: "خُ",
    wawMiddle: "لِ",
    wawFinal: "قَ",
    wawWord: "خُلِقَ",
  },
  {
    index: 7,
    alifFinal: "ـبَ",
    alifMiddle: "ـتَـ",
    alifInitial: "كَـ",
    alifWord: "كَتَبَ",

    yaaFinal: "مَ",
    yaaMiddle: "ـدِ",
    yaaInitial: "قَـ",
    yaaWord: "قَدِمَ",

    wawInitital: "دُ",
    wawMiddle: "عِ",
    wawFinal: "يَ",
    wawWord: "دُعِيَ",
  },
  {
    index: 8,
    alifFinal: "ـتَ",
    alifMiddle: "ـبَـ",
    alifInitial: "ثَـ",
    alifWord: "ثَبَتَ",

    yaaFinal: "ـظَ",
    yaaMiddle: "ـفِـ",
    yaaInitial: "حَـ",
    yaaWord: "حَفِظَ",

    wawInitital: "ذُ",
    wawMiddle: "بِ",
    wawFinal: "حَ",
    wawWord: "ذُبِحَ",
  },
  {
    index: 9,
    alifFinal: "ـبَ",
    alifMiddle: "ـتَـ",
    alifInitial: "كَـ",
    alifWord: "كَتَبَ",

    yaaFinal: "ـيَ",
    yaaMiddle: "ـظِـ",
    yaaInitial: "حَـ",
    yaaWord: "حَظِيَ",

    wawInitital: "رُ",
    wawMiddle: "حِ",
    wawFinal: "مَ",
    wawWord: "رُحِمَ",
  },
  {
    index: 10,
    alifFinal: "ـرَ",
    alifMiddle: "ـثَـ",
    alifInitial: "نَـ",
    alifWord: "نَـثَرَ",

    yaaFinal: "ـرَ",
    yaaMiddle: "ـفِـ",
    yaaInitial: "ظَـ",
    yaaWord: "ظَفِرَ",

    wawInitital: "زُ",
    wawMiddle: "رِ",
    wawFinal: "عَ",
    wawWord: "زُرِعَ",
  },
  {
    index: 11,
    alifFinal: "ـثَ",
    alifMiddle: "ـعَـ",
    alifInitial: "بَـ",
    alifWord: "بَعَثَ",

    yaaFinal: "ـيَ",
    yaaMiddle: "ـقِـ",
    yaaInitial: "بـَ",
    yaaWord: "بَقِيَ",

    wawInitital: "سُ",
    wawMiddle: "ئِ",
    wawFinal: "لَ",
    wawWord: "سُئِلَ",
  },
  {
    index: 12,
    alifFinal: "ـدَ",
    alifMiddle: "ـجَـ",
    alifInitial: "سَـ",
    alifWord: "سَجَدَ",

    yaaFinal: "بَ",
    yaaMiddle: "ـرِ",
    yaaInitial: "شَـ",
    yaaWord: "شَرِبَ",

    wawInitital: "شُ",
    wawMiddle: "كِ",
    wawFinal: "رَ",
    wawWord: "شُكِرَ",
  },
  {
    index: 13,
    alifFinal: "ـجَ",
    alifMiddle: "ـسَـ",
    alifInitial: "نَـ",
    alifWord: "نَسَجَ",

    yaaFinal: "ـدَ",
    yaaMiddle: "ـعِـ",
    yaaInitial: "سَـ",
    yaaWord: "سَعِدَ",

    wawInitital: "صُ",
    wawMiddle: "عِ",
    wawFinal: "قَ",
    wawWord: "صُعِقَ",
  },
  {
    index: 14,
    alifFinal: "ـسَ",
    alifMiddle: "ـبـَ",
    alifInitial: "حَـ",
    alifWord: "حَبَسَ",

    yaaFinal: "ـبَ",
    yaaMiddle: "كِـ",
    yaaInitial: "رَ",
    yaaWord: "رَكِبَ",

    wawInitital: "ضُ",
    wawMiddle: "رِ",
    wawFinal: "بَ",
    wawWord: "ضُرِبَ",
  },
  {
    index: 15,
    alifFinal: "ـنَ",
    alifMiddle: "ـحَـ",
    alifInitial: "طَـ",
    alifWord: "طَحَنَ",

    yaaFinal: "رَ",
    yaaMiddle: "ـوِ",
    yaaInitial: "عَـ",
    yaaWord: "عَوِرَ",

    wawInitital: "طُ",
    wawMiddle: "رِ",
    wawFinal: "حَ",
    wawWord: "طُرِحَ",
  },
  {
    index: 16,
    alifFinal: "ـحَ",
    alifMiddle: "ـسَـ",
    alifInitial: "مَـ",
    alifWord: "مَسَحَ",

    yaaFinal: "ـدَ",
    yaaMiddle: "ـهِـ",
    yaaInitial: "عَـ",
    yaaWord: "عَهِدَ",

    wawInitital: "ظُ",
    wawMiddle: "لِ",
    wawFinal: "مَ",
    wawWord: "ظُلِمَ",
  },
  {
    index: 17,
    alifFinal: "ـعَ",
    alifMiddle: "ـضَـ",
    alifInitial: "خَـ",
    alifWord: "خَضَعَ",

    yaaFinal: "ـقَ",
    yaaMiddle: "ـنِـ",
    yaaInitial: "حَـ",
    yaaWord: "حَنِقَ",

    wawInitital: "قُ",
    wawMiddle: "تِ",
    wawFinal: "لَ",
    wawWord: "قُتِلَ",
  },
  {
    index: 18,
    alifFinal: "ـرَ",
    alifMiddle: "ـخَـ",
    alifInitial: "نَـ",
    alifWord: "نَـخَـرَ",

    yaaFinal: "ـعَ",
    yaaMiddle: "ـمِـ",
    yaaInitial: "سَـ",
    yaaWord: "سَمِعَ",

    wawInitital: "كُ",
    wawMiddle: "تِ",
    wawFinal: "بَ",
    wawWord: "كُتِبَ",
  },
  {
    index: 19,
    alifFinal: "دَ",
    alifMiddle: "ـرَ",
    alifInitial: "ثَـ",
    alifWord: "ثَرَدَ",

    yaaFinal: "ـمَ",
    yaaMiddle: "ـلِـ",
    yaaInitial: "عَـ",
    yaaWord: "عَلِمَ",

    wawInitital: "مُ",
    wawMiddle: "نِ",
    wawFinal: "عَ",
    wawWord: "مُنِعَ",
  },
];

const doubleLattersExamples = [
  {
    index: 0,
    alifFinal: "ـدَ",
    alifInitial: "صَعَـ",
    alifWord: "صَعَدَ",

    yaaFinal: "ـكَ",
    yaaInitial: "ضَحِـ",
    yaaWord: "ضَحِكَ",

    wawInitital: "نُسِ",
    wawFinal: "  يَ",
    wawWord: "نُسِيَ",
  },
  {
    index: 1,
    alifFinal: " ـهَ  ",
    alifInitial: " وَلَـ ",
    alifWord: "وَ لَـهَ ",

    yaaFinal: "حَ",
    yaaInitial: "مَرِ",
    yaaWord: "مَرِحَ",

    wawInitital: "هُدِ",
    wawFinal: "  يَ",
    wawWord: "هُدِيَ",
  },
  {
    index: 2,

    alifFinal: "ـمَ",
    alifInitial: " فَطَـ ",
    alifWord: "فَطَمَ",

    yaaFinal: "ـلَ",
    yaaInitial: "عَمِـ",
    yaaWord: "عَمِلَ",

    wawInitital: "وُجِ",
    wawFinal: "  دَ",
    wawWord: "وُجِدَ",
  },
  {
    index: 3,
    alifFinal: "ـفَ",
    alifInitial: "شَغَـ",
    alifWord: "شَغَفَ",

    yaaFinal: "ـلَ",
    yaaInitial: "عَقِـ",
    yaaWord: "عَقِلَ",

    wawInitital: "وُضِ",
    wawFinal: "عَ",
    wawWord: "وُضِعَ",
  },
  {
    index: 4,
    alifFinal: "ـغَ",
    alifInitial: "مَضَـ",
    alifWord: "مَضَغَ",

    yaaFinal: "ـلَ",
    yaaInitial: "جَهِـ",
    yaaWord: "جَهِلَ",

    wawInitital: "شُرِ",
    wawFinal: "بَ",
    wawWord: "شُرِبَ",
  },
  {
    index: 5,
    alifFinal: "ـخَ",
    alifInitial: "نَفَـ",
    alifWord: "نَفَخَ",

    yaaFinal: "ـلَ",
    yaaInitial: "خَجِـ",
    yaaWord: "خَجِلَ",

    wawInitital: "رُسِ",
    wawFinal: "مَ",
    wawWord: "رُسِمَ",
  },
  {
    index: 6,
    alifFinal: "ـعَ",
    alifInitial: "شَفَـ",
    alifWord: "شَفَعَ",

    yaaFinal: "ـبَ",
    yaaInitial: "غَضِـ",
    yaaWord: "غَضِبَ",

    wawInitital: "فُتِ",
    wawFinal: "حَ",
    wawWord: "فُتِحَ",
  },
  {
    index: 7,
    alifFinal: "حَ",
    alifInitial: "شَرَ",
    alifWord: "شَرَحَ",

    yaaFinal: "نَ",
    yaaInitial: "أذِ",
    yaaWord: "أذِنَ",

    wawInitital: "دُبِ",
    wawFinal: "غَ",
    wawWord: "دُبِغَ",
  },
  {
    index: 8,
    alifFinal: "ـتَ",
    alifInitial: "قَنَـ",
    alifWord: "قَنَتَ",

    yaaFinal: "ـفَ",
    yaaInitial: "ألِـ",
    yaaWord: "ألِفَ",

    wawInitital: "سُبُ",
    wawFinal: "لُ",
    wawWord: "سُبُلُ",
  },
  {
    index: 9,
    alifFinal: "ـطَ",
    alifInitial: "سَقَـ",
    alifWord: "سَقَطَ",

    yaaFinal: "ـبَ",
    yaaInitial: "صَـحِـ",
    yaaWord: "صَحِبَ",

    wawInitital: "رُسُ",
    wawFinal: "لُ",
    wawWord: "رُسُلُ",
  },
  {
    index: 10,
    alifFinal: "قَ",
    alifInitial: "خَلَـ",
    alifWord: "خَلَقَ",

    yaaFinal: "ـتَ",
    yaaInitial: "عَنِـ",
    yaaWord: "عَنِتَ",

    wawInitital: "أُفُ",
    wawFinal: "قُ",
    wawWord: "أُفُقُ",
  },
  {
    index: 11,
    alifFinal: "ـرَ",
    alifInitial: "كَسَـ",
    alifWord: "كَسَرَ",

    yaaFinal: "ـثَ",
    yaaInitial: "شَـعِـ",
    yaaWord: "شَعِثَ",

    wawInitital: "نُظُ",
    wawFinal: "مُ",
    wawWord: "نُظُمُ",
  },
  {
    index: 12,
    alifFinal: "ـرَ",
    alifInitial: "شَكَـ",
    alifWord: "شَكَرَ",

    yaaFinal: "ـبَ",
    yaaInitial: "رَقِـ",
    yaaWord: "رَقِبَ",

    wawInitital: "مَثَ",
    wawFinal: "لُ",
    wawWord: "مَثَلُ",
  },
  {
    index: 13,
    alifFinal: "ـكَ",
    alifInitial: "مَلَـ",
    alifWord: "مَلَكَ",

    yaaFinal: "ـبَ",
    yaaInitial: "صَئِـ",
    yaaWord: "صَئِبَ",

    wawInitital: "لَطُ",
    wawFinal: "فَ",
    wawWord: "لَطُفَ",
  },
  {
    index: 14,
    alifFinal: "ـمَ",
    alifInitial: "لَطَـ",
    alifWord: "لَطَمَ",

    yaaFinal: "ـبَ",
    yaaInitial: "كَئِـ",
    yaaWord: "كَئِبَ",

    wawInitital: "ثُلِ",
    wawFinal: "بَ",
    wawWord: "ثُلِبَ",
  },
  {
    index: 15,
    alifFinal: "أَ",
    alifInitial: "مَلَـ",
    alifWord: "مَلأَ",

    yaaFinal: "ئَ",
    yaaInitial: "صَدِ",
    yaaWord: "صَدِئَ",

    wawInitital: "عُقَ",
    wawFinal: "دُ",
    wawWord: "عُقَدُ",
  },
  {
    index: 16,
    alifFinal: "ـسَ",
    alifInitial: "ھَمَـ",
    alifWord: "ھَمَسَ",

    yaaFinal: "ـصَ",
    yaaInitial: "نَغِـ",
    yaaWord: "نَغِصَ",

    wawInitital: "حُجَ",
    wawFinal: "رُ",
    wawWord: "حُجَرُ",
  },
  {
    index: 17,
    alifFinal: "ـعَ",
    alifInitial: "یَفَ",
    alifWord: "یَفَعَ",

    yaaFinal: "ـجَ",
    yaaInitial: "نَضِـ",
    yaaWord: "نَضِجَ",

    wawInitital: "حُشِ",
    wawFinal: "رَ",
    wawWord: "حُشِرَ",
  },
  {
    index: 18,
    alifFinal: "ـزَ",
    alifInitial: "وَ عَـ",
    alifWord: "وَ عَزَ",

    yaaFinal: "ـبَ",
    yaaInitial: "لَغِـ",
    yaaWord: "لَغِبَ",

    wawInitital: "فُرَ",
    wawFinal: "صُ",
    wawWord: "فُرَصُ",
  },
  {
    index: 19,
    alifFinal: "ـعَ",
    alifInitial: "یَنَـ",
    alifWord: "یَنَعَ",

    yaaFinal: " ـئَ",
    yaaInitial: "دَفِـ",
    yaaWord: "دَفِئَ",

    wawInitital: "شُحِ",
    wawFinal: "ذَ",
    wawWord: "شُحِذَ",
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
  preM,
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
            Module 3: How to Make words with Alif Madd
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

            <Link href={`/${user}/module/almadood`} className="mx-3 ">
              <Button
                variant="contained"
                className="bg-cyan-200 text-dark-purple h-10"
                startIcon={<ArrowBackIcon />}
              >
                Home Module
              </Button>
            </Link>

            <Link href={`/${user}/module/almadood/${preM}`} className="mx-2 ">
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
                            fontWeight: 500,
                          }}
                        >
                          <span className="mx-10">{final}</span>
                          <span className="mx-10">{middle}</span>
                          <span className="mx-10">{initial}</span>
                        </h2>
                      ) : (
                        <h2
                          className="text-7xl flex justify-center content-center pb-12 pt-10"
                          style={{
                            fontFamily:
                              '"Geeza Pro", "Nadeem", "Al Bayan", "DecoType Naskh", "DejaVu Serif", "STFangsong", "STHeiti", "STKaiti", "STSong", "AB AlBayan", "AB Geeza", "AB Kufi", "DecoType Naskh", "Aldhabi", "Andalus", "Sakkal Majalla", "Simplified Arabic", "Traditional Arabic", "Arabic Typesetting", "Urdu Typesetting", "Droid Naskh", "Droid Kufi", "Roboto", "Tahoma", "Times New Roman", "Arial", serif',
                            fontWeight: 500,
                          }}
                        >
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
          <Link href={`/${user}/module/almadood/${nextUrl}`}>
            <Button variant="contained" className="text-dark-purple bg-white">
              Next Section
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function VerticalTabs({ wordType, user, type, nextUrl, preM }) {
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
                  type === "alif"
                    ? alphabate.alifWord
                    : type === "yaa"
                    ? alphabate.yaaWord
                    : alphabate.wawWord
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
          {singleLattersExamples.map((alphabate) => (
            <TabPanel
              style={{ width: "100%" }}
              value={value}
              index={alphabate.index}
            >
              {type == "alif" ? (
                <Card
                  initial={alphabate.alifInitial}
                  middle={alphabate.alifMiddle}
                  final={alphabate.alifFinal}
                  word={alphabate.alifWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
                  preM={preM}
                />
              ) : null}
              {type == "yaa" ? (
                <Card
                  initial={alphabate.yaaInitial}
                  middle={alphabate.yaaMiddle}
                  final={alphabate.yaaFinal}
                  word={alphabate.yaaWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
                  preM={preM}
                />
              ) : null}
              {type == "waw" ? (
                <Card
                  initial={alphabate.wawInitital}
                  middle={alphabate.wawMiddle}
                  final={alphabate.wawFinal}
                  word={alphabate.wawWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
                  preM={preM}
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
                  type === "alif"
                    ? alphabate.alifWord
                    : type === "yaa"
                    ? alphabate.yaaWord
                    : alphabate.wawWord
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
              {type == "alif" ? (
                <Card
                  initial={alphabate.alifInitial}
                  middle={alphabate.alifMiddle}
                  final={alphabate.alifFinal}
                  word={alphabate.alifWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
                  preM={preM}
                />
              ) : null}
              {type == "yaa" ? (
                <Card
                  initial={alphabate.yaaInitial}
                  middle={alphabate.yaaMiddle}
                  final={alphabate.yaaFinal}
                  word={alphabate.yaaWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
                  preM={preM}
                />
              ) : null}
              {type == "waw" ? (
                <Card
                  initial={alphabate.wawInitital}
                  middle={alphabate.wawMiddle}
                  final={alphabate.wawFinal}
                  word={alphabate.wawWord}
                  user={user}
                  screen="double"
                  nextUrl={nextUrl}
                  type={type}
                  bgColor={randomColorL}
                  preM={preM}
                />
              ) : null}
            </TabPanel>
          ))}
        </Box>
      )}
    </>
  );
}
