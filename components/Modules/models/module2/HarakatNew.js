import React, { useContext, useEffect, useState } from "react";
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
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import Fatahah from "@/components/src/img/arabic_fatha.png";
import BatchContext from "@/components/Context/store/batch-context";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
import ReactPlayer from "react-player";
import VideoControlBtn from "@/components/Layout/elements/VideoControlBtn";
import Ractangle from "@/components/src/img/Rectangle.png";
import Teacher from "@/components/src/img/Teacher.png";

const Alphabates = [
  {
    index: 0,
    letter: "ا",
    title: "Alif",
    harakat: { zabar: "اَ", zer: "اِ", pesh: "اُ" },

    gif:'https://res.cloudinary.com/daftxtnxw/image/upload/v1682420500/Gifs/ezgif.com-video-to-gif_4_m1bj8c.gif ',
    
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680592002/1_ux9sp8.mp4",
  },
  {
    index: 1,
    letter: "ب",
    gif: "https://res.cloudinary.com/daftxtnxw/image/upload/v1682420500/Gifs/ezgif.com-video-to-gif_5_dvngc6.gif",

    harakat: { zabar: "بَ", zer: "بِ ", pesh: "بُ" },
    title: "Baa",
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/2_sqg5aa.mp4",
  },
  {
    index: 2,
    letter: "ت",
    title: "Ta",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3",

    example: { initial: "تَرَكَ", middle: "فَتَحَ", final: "بَعَثَ" },
    harakat: { zabar: "تَ", zer: "تِ", pesh: "تُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602813/3_odytdz.mp4",
  },
  {
    index: 3,
    letter: "ث",
    title: "Thaa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/tha.mp3",

    example: { initial: "ثَبَتَ", middle: "مَثَلَ", final: "بَعَثَ" },
    harakat: "اَ",
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602813/4_ghvrnp.mp4",
  },
  {
    index: 4,
    letter: "ج",
    title: "Jeem",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/jiim.mp3",

    example: { initial: "جَمَعَ", middle: "وَجَدَ", final: "مَرَجَ" },
    harakat: { zabar: "جَ", zer: "جِ", pesh: "جُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602812/5_ipxpfa.mp4",
  },
  {
    index: 5,
    letter: "ح",
    title: "Haa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/hha.mp3",

    example: { initial: "حَمَلَ", middle: "أَحَدَ", final: "شَرَحَ" },
    harakat: { zabar: "حَ", zer: "حِ", pesh: "حُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602816/6_e35a8h.mp4",
  },
  {
    index: 6,
    letter: "خ",
    title: "Khaa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/kha.mp3",

    example: { initial: "خَتَمَ", middle: "دَخَلَ", final: "صَرَخَ" },
    harakat: { zabar: "خَ", zer: "خِ", pesh: "خُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602813/7_zcpvsv.mp4",
  },
  {
    index: 7,
    letter: "د",
    title: "Daal",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3",

    example: { initial: "دَخَلَ", middle: "صَدَقَ", final: "حَسَدَ" },
    harakat: { zabar: "  دَ", zer: "دِ", pesh: "دُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602813/8_ptf6j3.mp4",
  },
  {
    index: 8,
    letter: "ذ",
    title: "Dhaal",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/thaal.mp3",

    example: { initial: "ذَهَبَ", middle: "كَذَبَ", final: "نَبَذَ" },
    harakat: { zabar: "  ذَ", zer: "ذِ", pesh: "ذُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602814/9_lkcop8.mp4",
  },
  {
    index: 9,
    letter: "ر",
    title: "Raa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ra.mp3",

    example: { initial: "رَجَعَ", middle: "تَرَكَ", final: "حَضَرَ" },
    harakat: { zabar: "  رَ", zer: "رِ", pesh: "رُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/10_hdle8t.mp4",
  },
  {
    index: 10,
    letter: "ز",
    title: "Zai",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/zay.mp3",

    example: { initial: "زَعَمَ", middle: "عَزَمَ", final: "بَرَزَ" },
    harakat: { zabar: "  زَ", zer: "زِ", pesh: "زُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680603421/11_sbhwrl.mp4",
  },
  {
    index: 11,
    letter: "س",
    title: "Seen",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/siin.mp3",

    example: { initial: "سَرَقَ", middle: "كَسَبَ", final: "عَبَسَ" },
    harakat: { zabar: "  سَ", zer: "سِ", pesh: "سُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602806/12_x1fxcl.mp4",
  },
  {
    index: 12,
    letter: "ش",
    title: "Sheen",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/shiin.mp3",

    example: { initial: "شَكَرَ", middle: "كَشَفَ", final: "بَطَشَ" },
    harakat: { zabar: "  شَ", zer: "شِ", pesh: "شُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602806/13_p6wied.mp4",
  },
  {
    index: 13,
    letter: "ص",
    title: "Saad",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/saad.mp3",

    example: { initial: "صَدَقَ", middle: "فَصَلَ", final: "نَكَصَ" },
    harakat: { zabar: "  صَ", zer: "صِ", pesh: "صُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602807/14_kt5dig.mp4",
  },
  {
    index: 14,
    letter: "ض",
    title: "Daad",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/daad.mp3",

    example: { initial: "ضَرَبَ", middle: "حَضَرَ", final: "فَرَضَ" },
    harakat: { zabar: "  ضَ", zer: "ضِ", pesh: "ضُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/15_t3kbn1.mp4",
  },
  {
    index: 15,
    letter: "ط",
    title: "Taa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/taa.mp3",

    example: { initial: "طَبَعَ", middle: "فَطَرَ", final: "بَسَطَ" },
    harakat: { zabar: "  طَ", zer: "طِ", pesh: "طُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/16_o04nv7.mp4",
  },
  {
    index: 16,
    letter: "ظ",
    title: "Dhaa",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/thaa.mp3",

    example: { initial: "ظَلَمَ", middle: "نَظَرَ", final: "وَعَظَ" },
    harakat: { zabar: "  ظَ", zer: "ظِ", pesh: "ظُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/17_jz4qwd.mp4",
  },
  {
    index: 17,
    letter: "ع",
    title: "Ayn",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ayn.mp3",

    example: { initial: "عَبَدَ", middle: "جَعَلَ", final: "خَضَعَ" },
    harakat: { zabar: "عَ  ", zer: "عِ", pesh: "عُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/18_vnxp2u.mp4",
  },
  {
    index: 18,
    letter: "غ",
    title: "Ghayn",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/ghayn.mp3",

    example: { initial: "غَفَرَ", middle: "فَغَفَرَ", final: "نَزَغَ" },
    harakat: { zabar: "غَ  ", zer: "غِ", pesh: "غُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/19_haqcg0.mp4",
  },
  {
    index: 19,
    letter: "ف",
    title: "Faa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/fa.mp3",

    example: { initial: "فَصَلَ", middle: "أَفَلَ", final: "صَرَفَ" },
    harakat: { zabar: "فَ  ", zer: "فِ", pesh: "فُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/20_j9mgfu.mp4",
  },
  {
    index: 20,
    letter: "ق",
    title: "Qaaf",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/qaf.mp3",

    example: { initial: "قَطَعَ", middle: "تَقَعَ", final: "أَبَقَ" },
    harakat: { zabar: "  قَ", zer: "قِ", pesh: "قُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602809/21_kprfgm.mp4",
  },
  {
    index: 21,
    letter: "ك",
    title: "Kaaf",
    symbol: "ك",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/kaf.mp3",

    example: { initial: "كَتَبَ", middle: "أَكَلَ", final: "تَرَكَ" },
    harakat: { zabar: "  كَ", zer: "كِ", pesh: "كُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/22_yzgf0i.mp4",
  },
  {
    index: 22,
    letter: "ل",
    title: "Laam",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/lam.mp3",

    example: { initial: "لَعَنَ", middle: "سَلَفَ", final: "نَزَلَ" },
    harakat: { zabar: "  لَ", zer: "لِ", pesh: "لُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/23_hmnvkv.mp4",
  },
  {
    index: 23,
    letter: "م",
    title: "Meem",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/miim.mp3",

    example: { initial: "حَكَمَ", middle: "أَمَرَ", final: "مَنَعَ" },
    harakat: { zabar: "  مَ", zer: "مِ", pesh: "مُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/24_ri90rk.mp4",
  },
  {
    index: 24,
    letter: "ن",
    title: "Noon",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/nuun.mp3",

    example: { initial: "نَبَذَ", middle: "مَنَعَ", final: "سَكَنَ" },
    harakat: { zabar: "  نَ", zer: "نِ", pesh: "نُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/25_tmxx8e.mp4",
  },
  {
    index: 25,
    letter: "ه",
    title: "Ha",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ha.mp3",

    example: { initial: "هَلَكَ", middle: "جَهَرَ", final: "سَكَنَ" },
    harakat: { zabar: "  هَ", zer: "هِ", pesh: "هُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/26_eoceqd.mp4",
  },
  {
    index: 26,
    letter: "و",
    title: "Waaw",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/waw.mp3",

    example: { initial: "وَسَقَ", middle: "فَوَهَبَ", final: "سَكَنَ" },
    harakat: { zabar: "  وَ", zer: "وِ", pesh: "وُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/27_gxsixg.mp4",
  },
  {
    index: 27,
    letter: "ي",
    title: "Yaa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ya.mp3",

    example: { initial: "يَدَكَ", middle: "وَيَذَرَكَ", final: "سَكَنَ" },
    harakat: { zabar: "  يَ", zer: "يِ", pesh: "يُ" },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602812/28_z2f6ml.mp4",
  },
];

const fatahahWordExample = [
  {
    initial: "أَمَرَ",
    middle: "سَأَلَ",
    final: "مَلَأَ",
  },
  {
    initial: "بَدَأَ",
    middle: "نَبَذَ",
    final: "ثَقَبَ",
  },
];
const kasraWordExample = [
  {
    initial: "أذِنَ",
    middle: "ضِاَبَ",
    final: "خَمَاِ",
  },
  {
    initial: "بَغِظِ",
    middle: "ضِاَبَ",
    final: "فَتَعِبَ",
  },
];
const dammaWordExample = [
  {
    initial: "اُظِفَ",
    middle: "ثَاُثَ",
    final: "فُغِاَ",
  },
  {
    initial: "بَقُيَ",
    middle: "عِبَلُ",
    final: "مُنِبَ",
  },
];

const letterForm = [
  { initial: "ا", middle: "ـا", final: "ـا" },
  { initial: "بـ", middle: "ـبـ", final: "ـب" },
  { initial: "تـ", middle: "ـتـ", final: "ـت" },
  { initial: "ثـ", middle: "ـثـ", final: "ـث" },
  { initial: "جـ", middle: "ـجـ", final: "ـج" },
  { initial: "حـ", middle: "ـحـ", final: "ـح" },
  { initial: "خــ", middle: "ـخـ", final: "ـخ" },
  { initial: "د", middle: "ـد", final: "ـد" },
  { initial: "ذ", middle: "ـذ", final: "ـذ" },
  { initial: "ر", middle: "ـر", final: "ـر" },
  { initial: "ز", middle: "ـز", final: "ـز" },
  { initial: "ســ", middle: "ـسـ", final: "ـس" },
  { initial: "شـ", middle: "ـشـ", final: "ـش" },
  { initial: "صــ", middle: "ـصـ", final: "ـص" },
  { initial: "ضـ", middle: "ـضـ", final: "ـض" },
  { initial: "طــ", middle: "ـطـ", final: "ـط" },
  { initial: "ظـ", middle: "ـظـ", final: "ـظ" },
  { initial: "عــ", middle: "ـعـ", final: "ـع" },
  { initial: "غـ", middle: "ـغـ", final: "ـغ" },
  { initial: "فـ", middle: "ـفـ", final: "ـف" },
  { initial: "قـ", middle: "ـقـ", final: "ـق" },
  { initial: "كـ", middle: "ـكـ", final: "ـكَ" },
  { initial: "لـ", middle: "ـلـ", final: "ـل" },
  { initial: "مـ", middle: "ـمـ", final: "ـم" },
  { initial: "نـ", middle: "ـنـ", final: "ـن" },
  { initial: "هـ", middle: "ـهـ", final: "ـه" },
  { initial: "و", middle: "ـو", final: "ـو" },
  { initial: "يـ", middle: "ـيـ", final: "ـي" },
];

/* -------------------------------------------------------------------------- */
/*                                  Function                                  */
/* -------------------------------------------------------------------------- */

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

// Array containing colors
// var colors = ["#000", "#004042", "#035124", "#043f38", "#865658", "#7fc254"];

// // selecting random color
// var random_color = colors[Math.floor(Math.random() * colors.length)];

// var x = document.getElementById('pick');
// x.style.color = random_color;

const GeneralCardSm = ({
  disc,
  title,
  btnText,
  link,
  btnProp,
  color,
  ex,
  harakatType,
}) => {
  // const [randomColor, setRandomColor] = useState("#035124")

  // var colors = [
  //   "#000",
  //   "#004042",
  //   "#035124",
  //   "#043f38",
  //   "#865658",
  //   "#7fc254",
  // ];

  // // selecting random color
  // setRandomColor( colors[Math.floor(Math.random() * colors.length)])

  return (
    <div>
      <div
        className="items-center w-full  overflow-hidden border-l-8 border-y-2 grid grid-cols-3  rounded-3xl shadow-lg min:h-fit justify-cente min:w-fit h-full"
        style={{ borderColor: color }}
      >
        <div
          className="grid content-between border-y-8  font-bold text-center   min-h-64  "
          style={{ borderColor: color }}
        >
          {harakatType == "fatahah" ? (
            <div className="grid content-between grid-cols-1  font-bold text-center text-gray-600 min-h-64  ">
              <img
                src={Fatahah.src}
                className="w-8 mx-auto mb-0 pt-3 flex"
                alt=""
                style={{ filter: "invert(40%)" }}
              />
              <h2 className="text-5xl pb-5 font-sans">{title}</h2>
            </div>
          ) : harakatType == "damma" ? (
            <div className="grid content-between grid-cols-1  font-bold text-center text-gray-600 min-h-64  ">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAAKCgq9vb0fHx/4+Pi1tbUmJibZ2dn7+/tTU1M7Ozvy8vL19fXj4+OHh4cuLi6Tk5N2dnZZWVm4uLhpaWnd3d1NTU3IyMjn5+fBwcEZGRk0NDRvb2+dnZ2jo6M/Pz+Xl5dlZWXR0dFGRkZ9fX0TExOLi4vxcMwpAAACW0lEQVR4nO3a2bKiMBSFYSKCICqIIzi2irz/G7ZDGwewr3JqV+/+vztztVYRSCB6HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8I+I4uIhj6Rw/ZDjy00mSZft+Ph0NpNP8gGPaMU+zUl3HMDHv8rl0JLfCs/nUj6RDuVT2GgWNORXSsdwpFi0FL1dROpc7aWtBY7bSwVxZfj5lrKF0NEe23wqaWjqaG8Xs5dZLx+np+XOvY3tzXNtGaRR4QVTbpaO3lA7nRGkLLu7rQ5A/Bjq/hLO54duG4Z+Rwo5Uoslcmdo+dhfTfYxsJIM54zcb7h8jM8lgzjwb2rsu0dVwaTelvcdFXOmapaOJvYiT421kaAdy4WyOjF+W+PG1Y2hXi7F0NjeWzyXfmOSwG9qL2p1KZ3Pk/d2i83xZTLR8yxhMTLt+PLiSzudAdPpS8U46ngvHv1XsSKdzItpob+gV27avUZoaenGUK2947dg+VfU0fNnMKG0Y7L5MU+lgrgzq17OZc5Jkve7VKpNO5sjHTZgvl/40vPGlo7kRvn/Z74+kAzk2yN9Xw0zVwdPFdG/eKTs8jBqvFqqm6LC5lVkoOjj0imNjG9OtNLwP3o3K3aGxui9CHUdqg3m5qw/dRj+TKniIzquqyg+LdbPdZRU8apihflu1+x0Yauj3veF5rKPft4brVEu/1oadRaVpjW80PB+2mvo1Gia1r2kLc/XacLWZRjoW+Fe24boqVf6P9HZsnx3qchjo+LMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP/Pb9k/FqiL9x8sAAAAAElFTkSuQmCC"
                className="w-12 mx-auto mb-0 pt-0 flex"
                alt=""
                // style={{ filter: "invert(100%)" }}
              />
              <h2 className="text-5xl pb-2 font-sans">{title}</h2>
            </div>
          ) : (
            <div className="grid content-between grid-cols-1  font-bold text-center text-gray-600 min-h-64  ">
              <h2 className="text-5xl pt-5 font-sans">{title}</h2>
              <img
                src={Fatahah.src}
                className="w-8 mx-auto mb-0 pb-3 flex"
                alt=""
                style={{ filter: "invert(30%)" }}
              />
            </div>
          )}

          {/* <h2 className="text-5xl py-5 font-sans">{title}</h2> */}
          <h2 className="py-2 text-sm text-dark-purple">{disc}</h2>
        </div>
        <div className="col-span-2">
          <h2 className="py-2  text-dark-purple text-7xl">{ex}</h2>
        </div>
        {/* <div className="">
          <h2 className="py-2 text-sm text-dark-purple">{disc}</h2>
        </div>
        <div className="">
          <h2 className="py-2 text-sm text-dark-purple">{disc}</h2>
        </div> */}

        <div className=" h-fit">
          {link ? (
            <div>
              <Link
                href={link}
                className="px-10 py-1 m-2 text-white rounded-md bg-dark-purple"
              >
                {btnText}
              </Link>
            </div>
          ) : null}
          {btnText ? (
            <div>
              <Button className="bg-teal-300">
                {btnText}
                {btnProp}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  index,
  labelL,
  labelR,
  audioUrl,
  nameR,
  nameL,
  audioR,
  audioL,
  initial,
  middle,
  final,
  user,
  nextUrl,
  harakatType,
  randomColorL,
  randomColorR,
  mp4,
  exI,
  exM,
  exF,
  gif,
}) => {
  const [assignment, setAssignment] = useState([]);
  const [activityPath, setActivityPath] = useState();
  const [isStarted, setIsStarted] = useState();

  const { myArray, setMyArray } = useContext(BatchContext);
  console.log(myArray);

  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      const data = await fetchAssignmentForLetter("Fatah", "harakat");
      if (data[0]) {
        setAssignment(data[0].assignment_json.letter);
        if (data[0].assignment_json.letter[0].activity_type === "trace") {
          setActivityPath("tracing");
        }
        if (data[0].assignment_json.letter[0].activity_type === "dnd") {
          setActivityPath("dnd");
        }
        if (data[0].assignment_json.letter[0].activity_type === "select") {
          setActivityPath("select");
        }
        if (data[0].assignment_json.letter[0].activity_type === "match") {
          setActivityPath("match");
        }
      }
    };
    fetchAssignment();
  }, [harakatType]);

  console.log(assignment);

  const setActivitySubmodule = async () => {
    if (activityPath && harakatType === "fatahah") {
      window.location.href = `/${user}/activity/${activityPath}/harakat/fatahah/${0}`;
    }
    if (activityPath && harakatType === "kasara") {
      console.log("inside kasra");
      window.location.href = `/${user}/activity/${activityPath}/harakat/kasara/${0}`;
    }
    console.log(activityPath);
  };

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    // volume: 0.5,
    played: 0,
    seeking: false,

    Buffer: true,
  });

  const {
    playing,
    muted,
    volume,
    playbackRate,
    played,
    seeking,
    buffer,
    onEnded,
  } = videoState;

  console.log("HTP Play", playing, onEnded);

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const cFunction = () => {
    setVideoState({
      playing: false,
    });
  };

  console.log("ex1");

  return (
    <div className="w-full  ">
      <>
        <div className=" bg-white rounded-3xl  mt-5 ml-5">
          <div className=" w-full p-2 rounded-3xl  flex flex-row justify-between pt-6">
            {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
            <h1
              className="p-3 text-white  rounded-lg text-lg  border-2 border-white bg-dark-purple"
              style={{
                marginLeft: -40,
                width: 600,
                backgroundImage: `url(${Ractangle})`,
              }}
            >
              Harakat : {harakatType}
              {/* <span className="p-2 bg-green-200 text-dark-purple rounded-md">
            {props.name} " {props.symbol} "
          </span> */}
            </h1>
            <div className="flex content-center">
              <Link href={`/${user}/whiteboard`} className="mx-5 ">
                <IconButton
                  aria-label="delete"
                  size="large"
                  className="bg-cyan-200 text-dark-purple rounded-full hover:bg-gray-200 p-1.5 "
                >
                  <FilterFramesIcon />
                </IconButton>
              </Link>

              <Link href={`/${user}/module`} className="mx-5 ">
                <Button
                  variant="contained"
                  className="bg-cyan-200 text-dark-purple"
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2  p-5 md:grid-cols-3 lg:ml-5 gap-4">
            <div className="col-span-2 sm:col-span-1 shadow-md rounded-3xl">
              <div className="h-full gap-3 p-5 text-center text-dark-purple rounded-lg  place-content-center ">
                <h2 className="text-xl w-full text-white bg-dark-purple p-2 rounded-lg">
                  {nameL}: "{harakatType}"
                </h2>
                {/* <ReactPlayer
                  className="player"
                  url={mp4}
                  width={240}
                  height={320}
                  playing={playing}
                  muted={muted}
                  onEnded={cFunction}
                  //    onEnded={onEnded}
                />
                <VideoControlBtn
                  onPlayPause={playPauseHandler}
                  playing={playing}
                /> */}

                <div className="w-full align-middle mx-auto" style={{position: "relative"}}>
                  
                  <div className="w-80 h-80 mt-8 rounded-3xl bg-cyan-300  mx-auto" >
                      <img className="rounded-3xl" src={Teacher.src} alt="" />
                  
                  <div className="w-32">
                    <img
                      className="w-full"
                      style={{
                        position: "relative",
                        // display: "none",
                        width: "100%",
                        height: "100%",
                        top: -250,
                        left: 145,
                        right: 50,
                        bottom: 50,
                        backgroundColor: "red",
                        cursor: "pointer",
                        zIndex:100,
                      }}
                      src={gif}
                      alt=""
                    />
                  </div>
                  </div>
                </div>

                {/* <button className="p-2 mx-2 my-5 font-bold text-black bg-green-200 rounded-md border-1" >
                {props.name} "{props.symbol}"{" "}
                <AudioButton url={props.audioUrl} />
              </button> */}
              </div>
            </div>
            <div className="col-span-2 bg-white rounded-3xl shadow-md  sm:col-span-2 md:px-2 lg:px-8">
              <div className="h-full p-3 text-center">
                {/* <h2 className="text-xl  ">
                How to Write: {props.name} "{props.symbol}"
              </h2> */}

                <div className="grid grid-cols-1 gap-5 ">
                  <div className="grid grid-cols-1 mx-0 mt-5 gap-2">
                    <GeneralCardSm
                      disc="Initial For"
                      harakatType={harakatType}
                      title={letterForm[index].initial}
                      color="#09DBDB"
                      ex={
                        harakatType == "fatahah"
                          ? fatahahWordExample[index].initial
                          : harakatType == "kasara"
                          ? kasraWordExample[index].initial
                          : dammaWordExample[index].initial
                      }
                    />
                    <GeneralCardSm
                      disc="Medial Form"
                      harakatType={harakatType}
                      title={letterForm[index].final}
                      color="#FD5678"
                      ex={
                        harakatType == "fatahah"
                          ? fatahahWordExample[index].middle
                          : harakatType == "kasara"
                          ? kasraWordExample[index].middle
                          : dammaWordExample[index].middle
                      }
                    />
                    <GeneralCardSm
                      disc="Final Form"
                      harakatType={harakatType}
                      title={letterForm[index].final}
                      color="#ECABE1"
                      ex={
                        harakatType == "fatahah"
                          ? fatahahWordExample[index].final
                          : harakatType == "kasara"
                          ? kasraWordExample[index].final
                          : dammaWordExample[index].final
                      }
                    />
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
          {/* <div className="mx-5">
            <Button
              onClick={setActivitySubmodule}
              variant="contained"
              className="text-dark-purple bg-white"
            >
              Activity
            </Button>
          </div> */}
        </div>
      </>
    </div>
  );
};

export default function VerticalTabs(props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const colorGenerate =()=> {

  //   var colors = [
  //     "#000",
  //     "#004042",
  //     "#035124",
  //     "#043f38",
  //     "#865658",
  //     "#7fc254",
  //   ];

  //   // selecting random color
  //   var random_color = colors[Math.floor(Math.random() * colors.length)];

  //   console.log("random_color",random_color)

  // }

  const [randomColorL, setRandomColorL] = useState("#035124");
  const [randomColoR, setRandomColorR] = useState("#7fc254");

  const bgStyle = {
    color: "blue",
    ":focus": {
      backgroundColor: randomColorL,
    },
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/2_sqg5aa.mp4",
  };

  return (
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
        {Alphabates.map((alphabate) => (
          <Tab
            label={alphabate.letter}
            onClick={() => {
              var colors = [
                "#000",
                "#004042",
                "#035124",
                "#043f38",
                "#865658",
                "#7fc254",
              ];

              // selecting random color
              setRandomColorL(
                colors[Math.floor(Math.random() * colors.length)]
              ),
                setRandomColorR(
                  colors[Math.floor(Math.random() * colors.length)]
                ),
                console.log("random_colorL", randomColorL);
              console.log("random_colorR", randomColoR);
            }}
            className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60  text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
            {...a11yProps(alphabate.index)}
            // style={bgStyle}
          />
        ))}
        <p className={`w-80`} />
      </Tabs>
      {Alphabates.map((alphabate) => (
        <TabPanel
          style={{ width: "100%" }}
          value={value}
          index={alphabate.index}
        >
          <Card
            index={alphabate.index}
            labelR={alphabate.letter}
            labelL={alphabate.letter}
            nameR={alphabate.title}
            nameL={alphabate.title}
            audioR={alphabate.audio}
            audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/kaf.mp3"
            // initial={alphabate.description.initial}
            // middle={alphabate.description.middle}
            // final={alphabate.description.final}
            // exI={alphabate.exampleInitial}
            // exM={alphabate.exampleMiddle}
            // exF={alphabate.exampleFinal}
            user={props.user}
            nextUrl={props.nextUrl}
            harakatType={props.harakatType}
            randomColorL={randomColorL}
            randomColorR={randomColoR}
            mp4={alphabate.mp4}
            gif={alphabate.gif}
          />
        </TabPanel>
      ))}
    </Box>
  );
}
