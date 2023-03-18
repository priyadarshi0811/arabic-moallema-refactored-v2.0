import React from "react";
import LetterDetails from "@/components/Modules/models/LetterDetails";
import LetterDetailsCopy from "@/components/Modules/models/LetterDetailsCopy";
import alphapbets1 from "@/components/src/gif/alphapbets1.gif";
import alphapbets3 from "@/components/src/gif/alphapbets3.gif";
import alphapbets4 from "@/components/src/gif/alphapbets4.gif";
import alphapbets6 from "@/components/src/gif/alphapbets6.gif";
import alphapbets2 from "@/components/src/gif/alphapbets2.gif";
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
  },
  {
    name: "Baa",
    symbol: "ب",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ba.mp3",
    description: { initial: "بـ", middle: "ـبـ", final: "ـب" },
    example: { initial: "بَدَأَ", middle: "نَبَذَ", final: "ثَقَبَ" },
    harakat: { zabar: "بَ", zer: "بِ ", pesh: "بُ" },
    gif: alphapbets6.src,
  },
  {
    name: "Ta",
    symbol: "ت",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3",
    description: { initial: "تـ", middle: "ـتـ", final: "ـت" },
    example: { initial: "تَرَكَ", middle: "فَتَحَ", final: "بَعَثَ" },
    harakat: { zabar: "تَ", zer: "تِ", pesh: "تُ" },
    gif: alphapbets2.src,
  },
  {
    name: "Thaa",
    symbol: "ث",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/tha.mp3",
    description: { initial: "ثـ", middle: "ـثـ", final: "ـث" },
    example: { initial: "ثَبَتَ", middle: "مَثَلَ", final: "بَعَثَ" },
    harakat: { zabar: "اَ", zer: "اِ", pesh: "اُ" },
    gif: alphapbets4.src,
  },
  {
    name: "Jeem",
    symbol: "ج",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/jiim.mp3",
    description: { initial: "جـ", middle: "ـجـ", final: "ـج" },
    example: { initial: "جَمَعَ", middle: "وَجَدَ", final: "مَرَجَ" },
    harakat: { zabar: "جَ", zer: "جِ", pesh: "جُ" },
    gif: alphapbets3.src,
  },
  {
    name: "Haa",
    symbol: "ح",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/hha.mp3",
    description: { initial: "حـ", middle: "ـحـ", final: "ـح" },
    example: { initial: "حَمَلَ", middle: "أَحَدَ", final: "شَرَحَ" },
    harakat: { zabar: "حَ", zer: "حِ", pesh: "حُ" },
  },
  {
    name: "Khaa",
    symbol: "خ",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/kha.mp3",
    description: { initial: "خــ", middle: "ـخـ", final: "ـخ" },
    example: { initial: "خَتَمَ", middle: "دَخَلَ", final: "صَرَخَ" },
    harakat: { zabar: "خَ", zer: "خِ", pesh: "خُ" },
  },
  {
    name: "Daal",
    symbol: "د",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3",
    description: { initial: "د", middle: "ـد", final: "ـد" },
    example: { initial: "دَخَلَ", middle: "صَدَقَ", final: "حَسَدَ" },
    harakat: { zabar: "  دَ", zer: "دِ", pesh: "دُ" },
  },
  {
    name: "Dhaal",
    symbol: "ذ",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/thaal.mp3",
    description: { initial: "ذ", middle: "ـذ", final: "ـذ" },
    example: { initial: "ذَهَبَ", middle: "كَذَبَ", final: "نَبَذَ" },
    harakat: { zabar: "  ذَ", zer: "ذِ", pesh: "ذُ" },
  },
  {
    name: "Raa",
    symbol: "ر",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ra.mp3",
    description: { initial: "ر", middle: "ـر", final: "ـر" },
    example: { initial: "رَجَعَ", middle: "تَرَكَ", final: "حَضَرَ" },
    harakat: { zabar: "  رَ", zer: "رِ", pesh: "رُ" },
  },
  {
    name: "Zai",
    symbol: "ز",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/zay.mp3",
    description: { initial: "ز", middle: "ـز", final: "ـز" },
    example: { initial: "زَعَمَ", middle: "عَزَمَ", final: "بَرَزَ" },
    harakat: { zabar: "  زَ", zer: "زِ", pesh: "زُ" },
  },
  {
    name: "Seen",
    symbol: "س",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/siin.mp3",
    description: { initial: "ســ", middle: "ـسـ", final: "ـس" },
    example: { initial: "سَرَقَ", middle: "كَسَبَ", final: "عَبَسَ" },
    harakat: { zabar: "  سَ", zer: "سِ", pesh: "سُ" },
  },
  {
    name: "Sheen",
    symbol: "ش",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/shiin.mp3",
    description: { initial: "شـ", middle: "ـشـ", final: "ـش" },
    example: { initial: "شَكَرَ", middle: "كَشَفَ", final: "بَطَشَ" },
    harakat: { zabar: "  شَ", zer: "شِ", pesh: "شُ" },
  },
  {
    name: "Saad",
    symbol: "ص",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/saad.mp3",
    description: { initial: "صــ", middle: "ـصـ", final: "ـص" },
    example: { initial: "صَدَقَ", middle: "فَصَلَ", final: "نَكَصَ" },
    harakat: { zabar: "  صَ", zer: "صِ", pesh: "صُ" },
  },
  {
    name: "Daad",
    symbol: "ض",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/daad.mp3",
    description: { initial: "ضـ", middle: "ـضـ", final: "ـض" },
    example: { initial: "ضَرَبَ", middle: "حَضَرَ", final: "فَرَضَ" },
    harakat: { zabar: "  ضَ", zer: "ضِ", pesh: "ضُ" },
  },
  {
    name: "Taa",
    symbol: "ط",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/taa.mp3",
    description: { initial: "طــ", middle: "ـطـ", final: "ـط" },
    example: { initial: "طَبَعَ", middle: "فَطَرَ", final: "بَسَطَ" },
    harakat: { zabar: "  طَ", zer: "طِ", pesh: "طُ" },
  },
  {
    name: "Dhaa",
    symbol: "ظ",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/thaa.mp3",
    description: { initial: "ظـ", middle: "ـظـ", final: "ـظ" },
    example: { initial: "ظَلَمَ", middle: "نَظَرَ", final: "وَعَظَ" },
    harakat: { zabar: "  ظَ", zer: "ظِ", pesh: "ظُ" },
  },
  {
    name: "Ayn",
    symbol: "ع",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ayn.mp3",
    description: { initial: "عــ", middle: "ـعـ", final: "ـع" },
    example: { initial: "عَبَدَ", middle: "جَعَلَ", final: "خَضَعَ" },
    harakat: { zabar: "عَ  ", zer: "عِ", pesh: "عُ" },
  },
  {
    name: "Ghayn",
    symbol: "غ",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/ghayn.mp3",
    description: { initial: "غـ", middle: "ـغـ", final: "ـغ" },
    example: { initial: "غَفَرَ", middle: "فَغَفَرَ", final: "نَزَغَ" },
    harakat: { zabar: "غَ  ", zer: "غِ", pesh: "غُ" },
  },
  {
    name: "Faa",
    symbol: "ف",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/fa.mp3",
    description: { initial: "فـ", middle: "ـفـ", final: "ـف" },
    example: { initial: "فَصَلَ", middle: "أَفَلَ", final: "صَرَفَ" },
    harakat: { zabar: "فَ  ", zer: "فِ", pesh: "فُ" },
  },
  {
    name: "Qaaf",
    symbol: "ق",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/qaf.mp3",
    description: { initial: "قـ", middle: "ـقـ", final: "ـق" },
    example: { initial: "قَطَعَ", middle: "تَقَعَ", final: "أَبَقَ" },
    harakat: { zabar: "  قَ", zer: "قِ", pesh: "قُ" },
  },
  {
    name: "Kaaf",
    symbol: "ك",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/kaf.mp3",
    description: { initial: "كـ", middle: "ـكـ", final: "ـكَ" },
    example: { initial: "كَتَبَ", middle: "أَكَلَ", final: "تَرَكَ" },
    harakat: { zabar: "  كَ", zer: "كِ", pesh: "كُ" },
  },

  {
    name: "Laam",
    symbol: "ل",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/lam.mp3",
    description: { initial: "لـ", middle: "ـلـ", final: "ـل" },
    example: { initial: "لَعَنَ", middle: "سَلَفَ", final: "نَزَلَ" },
    harakat: { zabar: "  لَ", zer: "لِ", pesh: "لُ" },
  },
  {
    name: "Meem",
    symbol: "م",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/miim.mp3",
    description: { initial: "مـ", middle: "ـمـ", final: "ـم" },
    example: { initial: "حَكَمَ", middle: "أَمَرَ", final: "مَنَعَ" },
    harakat: { zabar: "  مَ", zer: "مِ", pesh: "مُ" },
  },
  {
    name: "Noon",
    symbol: "ن",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/nuun.mp3",
    description: { initial: "نـ", middle: "ـنـ", final: "ـن" },
    example: { initial: "نَبَذَ", middle: "مَنَعَ", final: "سَكَنَ" },
    harakat: { zabar: "  نَ", zer: "نِ", pesh: "نُ" },
  },
  {
    name: "Ha",
    symbol: "هـ",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ha.mp3",
    description: { initial: "هـ", middle: "ـهـ", final: "ـه" },
    example: { initial: "هَلَكَ", middle: "جَهَرَ", final: "سَكَنَ" },
    harakat: { zabar: "  هَ", zer: "هِ", pesh: "هُ" },
  },
  {
    name: "Waaw",
    symbol: "و",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/waw.mp3",
    description: { initial: "و", middle: "ـو", final: "ـو" },
    example: { initial: "وَسَقَ", middle: "فَوَهَبَ", final: "سَكَنَ" },
    harakat: { zabar: "  وَ", zer: "وِ", pesh: "وُ" },
  },
  {
    name: "Yaa",
    symbol: "ي",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ya.mp3",
    description: { initial: "يـ", middle: "ـيـ", final: "ـي" },
    example: { initial: "يَدَكَ", middle: "وَيَذَرَكَ", final: "سَكَنَ" },
    harakat: { zabar: "  يَ", zer: "يِ", pesh: "يُ" },
  },
];

const ActivityDetail = ({ id, type, symbol, user }) => {
  console.log("user: ", user);

  console.log(id);
  console.log(symbol);
  const filteredData = AlphabatesDescription.filter((item) => item.name === id);
  // console.log(filteredData[0].description);

  return (
    <>
      {type == "LetterDetails" ? (
        <LetterDetailsCopy
          user={user}
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
      {type == "LetterTracing" && filteredData[0] && (
        <LetterDetails
          user={user}
          id={id}
          name={filteredData[0].name}
          symbol={filteredData[0].symbol}
          newSymbol={symbol}
        />
      )}
    </>
  );
};

export default ActivityDetail;
