import React from "react";
import LetterDetails from "@/components/Modules/models/LetterDetails";
import LetterDetailsCopy from "@/components/Modules/models/LetterDetailsCopy";

// GIF
import alphapbets1 from "@/components/src/gif/animatesAlphabetsGifs/1.gif";
import alphapbets2 from "@/components/src/gif/animatesAlphabetsGifs/2.gif";
import alphapbets3 from "@/components/src/gif/animatesAlphabetsGifs/3.gif";
import alphapbets4 from "@/components/src/gif/animatesAlphabetsGifs/4.gif";
import alphapbets5 from "@/components/src/gif/animatesAlphabetsGifs/5.gif";
import alphapbets6 from "@/components/src/gif/animatesAlphabetsGifs/6.gif";
import alphapbets7 from "@/components/src/gif/animatesAlphabetsGifs/7.gif";
import alphapbets8 from "@/components/src/gif/animatesAlphabetsGifs/8.gif";
import alphapbets9 from "@/components/src/gif/animatesAlphabetsGifs/9.gif";
import alphapbets10 from "@/components/src/gif/animatesAlphabetsGifs/10.gif";
import alphapbets11 from "@/components/src/gif/animatesAlphabetsGifs/11.gif";
import alphapbets12 from "@/components/src/gif/animatesAlphabetsGifs/12.gif";
import alphapbets13 from "@/components/src/gif/animatesAlphabetsGifs/13.gif";
import alphapbets14 from "@/components/src/gif/animatesAlphabetsGifs/14.gif";
import alphapbets15 from "@/components/src/gif/animatesAlphabetsGifs/15.gif";
import alphapbets16 from "@/components/src/gif/animatesAlphabetsGifs/16.gif";
import alphapbets17 from "@/components/src/gif/animatesAlphabetsGifs/17.gif";
import alphapbets18 from "@/components/src/gif/animatesAlphabetsGifs/18.gif";
import alphapbets19 from "@/components/src/gif/animatesAlphabetsGifs/19.gif";
import alphapbets20 from "@/components/src/gif/animatesAlphabetsGifs/20.gif";
import alphapbets21 from "@/components/src/gif/animatesAlphabetsGifs/21.gif";
import alphapbets22 from "@/components/src/gif/animatesAlphabetsGifs/22.gif";
import alphapbets23 from "@/components/src/gif/animatesAlphabetsGifs/23.gif";
import alphapbets24 from "@/components/src/gif/animatesAlphabetsGifs/24.gif";
import alphapbets25 from "@/components/src/gif/animatesAlphabetsGifs/25.gif";
import alphapbets26 from "@/components/src/gif/animatesAlphabetsGifs/26.gif";
import alphapbets27 from "@/components/src/gif/animatesAlphabetsGifs/27.gif";
import alphapbets28 from "@/components/src/gif/animatesAlphabetsGifs/28.gif";

// Speaking Gif
// import potrail1 from "@/components/src/gif/portrait/1.mp4";

const Alif =
  "https://res.cloudinary.com/daftxtnxw/video/upload/v1680592002/1_ux9sp8.mp4";

const Baa =
  "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/2_sqg5aa.mp4";
const Ta =
  "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602813/3_odytdz.mp4";

import HarakatDetails from "./HarakatDetails";
const AlphabatesDescription = [
  {
    name: "Alif",
    symbol: "ا",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3",
    description: { initial: "أ", middle: "ـا", final: "ـا" },
    example: { initial: "أَخَذَ", middle: "سَأَلَ", final: "ذَرَأَ" },
    harakat: { zabar: "اَ", zer: "اِ", pesh: "اُ" },
    gif: alphapbets1.src,
    mp4: Alif,
  },
  {
    name: "Baa",
    symbol: "ب",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ba.mp3",
    description: { initial: "بـ", middle: "ـبـ", final: "ـب" },
    example: { initial: "بَدَأَ", middle: "نَبَذَ", final: "ثَقَبَ" },
    harakat: { zabar: "بَ", zer: "بِ ", pesh: "بُ" },
    gif: alphapbets2.src,
    mp4: Baa,
  },
  {
    name: "Ta",
    symbol: "ت",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3",
    description: { initial: "تـ", middle: "ـتـ", final: "ـت" },
    example: { initial: "تَرَكَ", middle: "فَتَحَ", final: "بَعَثَ" },
    harakat: { zabar: "تَ", zer: "تِ", pesh: "تُ" },
    gif: alphapbets3.src,
    mp4: Ta,
  },
  {
    name: "Thaa",
    symbol: "ث",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/tha.mp3",
    description: { initial: "ثـ", middle: "ـثـ", final: "ـث" },
    example: { initial: "ثَبَتَ", middle: "مَثَلَ", final: "بَعَثَ" },
    harakat: { zabar: "اَ", zer: "اِ", pesh: "اُ" },
    gif: alphapbets4.src,
    mp4: "https://res.cloudinary.com/daftxtnxw/video/upload/v1680602813/4_ghvrnp.mp4"
  },
  {
    name: "Jeem",
    symbol: "ج",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/jiim.mp3",
    description: { initial: "جـ", middle: "ـجـ", final: "ـج" },
    example: { initial: "جَمَعَ", middle: "وَجَدَ", final: "مَرَجَ" },
    harakat: { zabar: "جَ", zer: "جِ", pesh: "جُ" },
    gif: alphapbets5.src,
    mp4: 'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602812/5_ipxpfa.mp4'
  },
  {
    name: "Haa",
    symbol: "ح",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/hha.mp3",
    description: { initial: "حـ", middle: "ـحـ", final: "ـح" },
    example: { initial: "حَمَلَ", middle: "أَحَدَ", final: "شَرَحَ" },
    harakat: { zabar: "حَ", zer: "حِ", pesh: "حُ" },
    gif: alphapbets6.src,
    mp4: 'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602816/6_e35a8h.mp4'
  },
  {
    name: "Khaa",
    symbol: "خ",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/kha.mp3",
    description: { initial: "خــ", middle: "ـخـ", final: "ـخ" },
    example: { initial: "خَتَمَ", middle: "دَخَلَ", final: "صَرَخَ" },
    harakat: { zabar: "خَ", zer: "خِ", pesh: "خُ" },
    gif: alphapbets7.src,
    mp4: 'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602813/7_zcpvsv.mp4'
  },
  {
    name: "Daal",
    symbol: "د",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3",
    description: { initial: "د", middle: "ـد", final: "ـد" },
    example: { initial: "دَخَلَ", middle: "صَدَقَ", final: "حَسَدَ" },
    harakat: { zabar: "  دَ", zer: "دِ", pesh: "دُ" },
    gif: alphapbets8.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602813/8_ptf6j3.mp4'
  },
  {
    name: "Dhaal",
    symbol: "ذ",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/thaal.mp3",
    description: { initial: "ذ", middle: "ـذ", final: "ـذ" },
    example: { initial: "ذَهَبَ", middle: "كَذَبَ", final: "نَبَذَ" },
    harakat: { zabar: "  ذَ", zer: "ذِ", pesh: "ذُ" },
    gif: alphapbets9.src,
    mp4:"https://res.cloudinary.com/daftxtnxw/video/upload/v1680602814/9_lkcop8.mp4"
  },
  {
    name: "Raa",
    symbol: "ر",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ra.mp3",
    description: { initial: "ر", middle: "ـر", final: "ـر" },
    example: { initial: "رَجَعَ", middle: "تَرَكَ", final: "حَضَرَ" },
    harakat: { zabar: "  رَ", zer: "رِ", pesh: "رُ" },
    gif: alphapbets10.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/10_hdle8t.mp4'
  },
  {
    name: "Zai",
    symbol: "ز",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/zay.mp3",
    description: { initial: "ز", middle: "ـز", final: "ـز" },
    example: { initial: "زَعَمَ", middle: "عَزَمَ", final: "بَرَزَ" },
    harakat: { zabar: "  زَ", zer: "زِ", pesh: "زُ" },
    gif: alphapbets11.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680603421/11_sbhwrl.mp4'
  },
  {
    name: "Seen",
    symbol: "س",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/siin.mp3",
    description: { initial: "ســ", middle: "ـسـ", final: "ـس" },
    example: { initial: "سَرَقَ", middle: "كَسَبَ", final: "عَبَسَ" },
    harakat: { zabar: "  سَ", zer: "سِ", pesh: "سُ" },
    gif: alphapbets12.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602806/12_x1fxcl.mp4'
  },
  {
    name: "Sheen",
    symbol: "ش",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/shiin.mp3",
    description: { initial: "شـ", middle: "ـشـ", final: "ـش" },
    example: { initial: "شَكَرَ", middle: "كَشَفَ", final: "بَطَشَ" },
    harakat: { zabar: "  شَ", zer: "شِ", pesh: "شُ" },
    gif: alphapbets13.src,
    mp4:"https://res.cloudinary.com/daftxtnxw/video/upload/v1680602806/13_p6wied.mp4"
  },
  {
    name: "Saad",
    symbol: "ص",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/saad.mp3",
    description: { initial: "صــ", middle: "ـصـ", final: "ـص" },
    example: { initial: "صَدَقَ", middle: "فَصَلَ", final: "نَكَصَ" },
    harakat: { zabar: "  صَ", zer: "صِ", pesh: "صُ" },
    gif: alphapbets14.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602807/14_kt5dig.mp4'
  },

  {
    name: "Daad",
    symbol: "ض",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/daad.mp3",
    description: { initial: "ضـ", middle: "ـضـ", final: "ـض" },
    example: { initial: "ضَرَبَ", middle: "حَضَرَ", final: "فَرَضَ" },
    harakat: { zabar: "  ضَ", zer: "ضِ", pesh: "ضُ" },
    gif: alphapbets15.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/15_t3kbn1.mp4'
  },
  {
    name: "Taa",
    symbol: "ط",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/taa.mp3",
    description: { initial: "طــ", middle: "ـطـ", final: "ـط" },
    example: { initial: "طَبَعَ", middle: "فَطَرَ", final: "بَسَطَ" },
    harakat: { zabar: "  طَ", zer: "طِ", pesh: "طُ" },
    gif: alphapbets16.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/16_o04nv7.mp4'
  },
  {
    name: "Dhaa",
    symbol: "ظ",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/thaa.mp3",
    description: { initial: "ظـ", middle: "ـظـ", final: "ـظ" },
    example: { initial: "ظَلَمَ", middle: "نَظَرَ", final: "وَعَظَ" },
    harakat: { zabar: "  ظَ", zer: "ظِ", pesh: "ظُ" },
    gif: alphapbets17.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/17_jz4qwd.mp4'
  },
  {
    name: "Ayn",
    symbol: "ع",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ayn.mp3",
    description: { initial: "عــ", middle: "ـعـ", final: "ـع" },
    example: { initial: "عَبَدَ", middle: "جَعَلَ", final: "خَضَعَ" },
    harakat: { zabar: "عَ  ", zer: "عِ", pesh: "عُ" },
    gif: alphapbets18.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/18_vnxp2u.mp4'
  },
  {
    name: "Ghayn",
    symbol: "غ",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/ghayn.mp3",
    description: { initial: "غـ", middle: "ـغـ", final: "ـغ" },
    example: { initial: "غَفَرَ", middle: "فَغَفَرَ", final: "نَزَغَ" },
    harakat: { zabar: "غَ  ", zer: "غِ", pesh: "غُ" },
    gif: alphapbets19.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/19_haqcg0.mp4'
  },
  {
    name: "Faa",
    symbol: "ف",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/fa.mp3",
    description: { initial: "فـ", middle: "ـفـ", final: "ـف" },
    example: { initial: "فَصَلَ", middle: "أَفَلَ", final: "صَرَفَ" },
    harakat: { zabar: "فَ  ", zer: "فِ", pesh: "فُ" },
    gif: alphapbets20.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602808/20_j9mgfu.mp4'
  },
  {
    name: "Qaaf",
    symbol: "ق",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/qaf.mp3",
    description: { initial: "قـ", middle: "ـقـ", final: "ـق" },
    example: { initial: "قَطَعَ", middle: "تَقَعَ", final: "أَبَقَ" },
    harakat: { zabar: "  قَ", zer: "قِ", pesh: "قُ" },
    gif: alphapbets21.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602809/21_kprfgm.mp4'
  },
  {
    name: "Kaaf",
    symbol: "ك",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/kaf.mp3",
    description: { initial: "كـ", middle: "ـكـ", final: "ـكَ" },
    example: { initial: "كَتَبَ", middle: "أَكَلَ", final: "تَرَكَ" },
    harakat: { zabar: "  كَ", zer: "كِ", pesh: "كُ" },
    gif: alphapbets22.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/22_yzgf0i.mp4'
  },

  {
    name: "Laam",
    symbol: "ل",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/lam.mp3",
    description: { initial: "لـ", middle: "ـلـ", final: "ـل" },
    example: { initial: "لَعَنَ", middle: "سَلَفَ", final: "نَزَلَ" },
    harakat: { zabar: "  لَ", zer: "لِ", pesh: "لُ" },
    gif: alphapbets23.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602810/23_hmnvkv.mp4'
  },
  {
    name: "Meem",
    symbol: "م",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/miim.mp3",
    description: { initial: "مـ", middle: "ـمـ", final: "ـم" },
    example: { initial: "حَكَمَ", middle: "أَمَرَ", final: "مَنَعَ" },
    harakat: { zabar: "  مَ", zer: "مِ", pesh: "مُ" },
    gif: alphapbets24.src,
    mp4:"https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/24_ri90rk.mp4"
  },
  {
    name: "Noon",
    symbol: "ن",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/nuun.mp3",
    description: { initial: "نـ", middle: "ـنـ", final: "ـن" },
    example: { initial: "نَبَذَ", middle: "مَنَعَ", final: "سَكَنَ" },
    harakat: { zabar: "  نَ", zer: "نِ", pesh: "نُ" },
    gif: alphapbets25.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/25_tmxx8e.mp4'
  },
  {
    name: "Ha",
    symbol: "هـ",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ha.mp3",
    description: { initial: "هـ", middle: "ـهـ", final: "ـه" },
    example: { initial: "هَلَكَ", middle: "جَهَرَ", final: "سَكَنَ" },
    harakat: { zabar: "  هَ", zer: "هِ", pesh: "هُ" },
    gif: alphapbets26.src,
    mp4:"https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/26_eoceqd.mp4"
  },
  {
    name: "Waaw",
    symbol: "و",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/waw.mp3",
    description: { initial: "و", middle: "ـو", final: "ـو" },
    example: { initial: "وَسَقَ", middle: "فَوَهَبَ", final: "سَكَنَ" },
    harakat: { zabar: "  وَ", zer: "وِ", pesh: "وُ" },
    gif: alphapbets27.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602811/27_gxsixg.mp4'
  },
  {
    name: "Yaa",
    symbol: "ي",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ya.mp3",
    description: { initial: "يـ", middle: "ـيـ", final: "ـي" },
    example: { initial: "يَدَكَ", middle: "وَيَذَرَكَ", final: "سَكَنَ" },
    harakat: { zabar: "  يَ", zer: "يِ", pesh: "يُ" },
    gif: alphapbets28.src,
    mp4:'https://res.cloudinary.com/daftxtnxw/video/upload/v1680602812/28_z2f6ml.mp4'
  },
];

const ActivityDetail = ({ id, type, symbol, user, module }) => {
  console.log("user: ", user);
  console.log("type: ", type);
  console.log(module);
  console.log(id);
  console.log(symbol);
  const filteredData = AlphabatesDescription.filter((item) => item.name === id);
  // console.log(filteredData[0].description);

  return (
    <>
      {type == "LetterDetails" ? (
        <LetterDetailsCopy
          user={user}
          module={module}
          name={filteredData[0].name}
          symbol={filteredData[0].symbol}
          initial={filteredData[0].description.initial}
          middle={filteredData[0].description.middle}
          final={filteredData[0].description.final}
          exInitial={filteredData[0].harakat.zabar}
          exMiddle={filteredData[0].harakat.zer}
          exFinal={filteredData[0].harakat.pesh}
          audioUrl={filteredData[0].audio}
          gif={filteredData[0].gif}
          mp4={filteredData[0].mp4}
        />
      ) : (
        ""
      )}
      {type == "LetterTracing" && filteredData[0] && (
        <LetterDetails
          user={user}
          id={id}
          module={module}
          name={filteredData[0].name}
          symbol={filteredData[0].symbol}
          newSymbol={symbol}
        />
      )}

      {/* module 2 */}
      {type == "harakat" ? (
        <HarakatDetails
          user={user}
          module={module}
          name={filteredData[0].name}
          symbol={filteredData[0].symbol}
          initial={filteredData[0].description.initial}
          middle={filteredData[0].description.middle}
          final={filteredData[0].description.final}
          exInitial={filteredData[0].harakat.zabar}
          exMiddle={filteredData[0].harakat.zer}
          exFinal={filteredData[0].harakat.pesh}
          audioUrl={filteredData[0].audio}
          gif={filteredData[0].gif}
        />
      ) : (
        ""
      )}
      {/* {type == "harakat" && filteredData[0] && (
        <LetterDetails
          user={user}
          id={id}
          module={module}
          name={filteredData[0].name}
          symbol={filteredData[0].symbol}
          newSymbol={symbol}
        />
      )} */}
    </>
  );
};

export default ActivityDetail;
