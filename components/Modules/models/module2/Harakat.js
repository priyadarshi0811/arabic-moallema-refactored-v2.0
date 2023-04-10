import React, { useContext, useState, useEffect } from "react";
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
import BatchContext from "@/components/Context/store/batch-context";
import { fetchAssignmentForLetter } from "@/backend/Assignment/FetchAssignmentDB";
const Alphabates = [
  {
    index: 0,
    letter: "ا",
    title: "Alif",
    harakat: { zabar: "اَ", zer: "اِ", pesh: "اُ" },
    description: {
      initial: "ا",
      middle: "ـا",
      final: "ـا",
    },
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3",
  },
  {
    index: 1,
    letter: "ب",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ba.mp3",
    description: { initial: "بـ", middle: "ـبـ", final: "ـب" },
    example: { initial: "بَدَأَ", middle: "نَبَذَ", final: "ثَقَبَ" },
    harakat: { zabar: "بَ", zer: "بِ ", pesh: "بُ" },
    title: "Baa",
  },
  {
    index: 2,
    letter: "ت",
    title: "Ta",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3",
    description: { initial: "تـ", middle: "ـتـ", final: "ـت" },
    example: { initial: "تَرَكَ", middle: "فَتَحَ", final: "بَعَثَ" },
    harakat: { zabar: "تَ", zer: "تِ", pesh: "تُ" },
  },
  {
    index: 3,
    letter: "ث",
    title: "Thaa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/tha.mp3",
    description: { initial: "ثـ", middle: "ـثـ", final: "ـث" },
    example: { initial: "ثَبَتَ", middle: "مَثَلَ", final: "بَعَثَ" },
    harakat: { zabar: "اَ", zer: "اِ", pesh: "اُ" },
  },
  {
    index: 4,
    letter: "ج",
    title: "Jeem",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/jiim.mp3",
    description: { initial: "جـ", middle: "ـجـ", final: "ـج" },
    example: { initial: "جَمَعَ", middle: "وَجَدَ", final: "مَرَجَ" },
    harakat: { zabar: "جَ", zer: "جِ", pesh: "جُ" },
  },
  {
    index: 5,
    letter: "ح",
    title: "Haa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/hha.mp3",
    description: { initial: "حـ", middle: "ـحـ", final: "ـح" },
    example: { initial: "حَمَلَ", middle: "أَحَدَ", final: "شَرَحَ" },
    harakat: { zabar: "حَ", zer: "حِ", pesh: "حُ" },
  },
  {
    index: 6,
    letter: "خ",
    title: "Khaa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/kha.mp3",
    description: { initial: "خــ", middle: "ـخـ", final: "ـخ" },
    example: { initial: "خَتَمَ", middle: "دَخَلَ", final: "صَرَخَ" },
    harakat: { zabar: "خَ", zer: "خِ", pesh: "خُ" },
  },
  {
    index: 7,
    letter: "د",
    title: "Daal",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3",
    description: { initial: "د", middle: "ـد", final: "ـد" },
    example: { initial: "دَخَلَ", middle: "صَدَقَ", final: "حَسَدَ" },
    harakat: { zabar: "  دَ", zer: "دِ", pesh: "دُ" },
  },
  {
    index: 8,
    letter: "ذ",
    title: "Dhaal",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/thaal.mp3",
    description: { initial: "ذ", middle: "ـذ", final: "ـذ" },
    example: { initial: "ذَهَبَ", middle: "كَذَبَ", final: "نَبَذَ" },
    harakat: { zabar: "  ذَ", zer: "ذِ", pesh: "ذُ" },
  },
  {
    index: 9,
    letter: "ر",
    title: "Raa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ra.mp3",
    description: { initial: "ر", middle: "ـر", final: "ـر" },
    example: { initial: "رَجَعَ", middle: "تَرَكَ", final: "حَضَرَ" },
    harakat: { zabar: "  رَ", zer: "رِ", pesh: "رُ" },
  },
  {
    index: 10,
    letter: "ز",
    title: "Zai",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/zay.mp3",
    description: { initial: "ز", middle: "ـز", final: "ـز" },
    example: { initial: "زَعَمَ", middle: "عَزَمَ", final: "بَرَزَ" },
    harakat: { zabar: "  زَ", zer: "زِ", pesh: "زُ" },
  },
  {
    index: 11,
    letter: "س",
    title: "Seen",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/siin.mp3",
    description: { initial: "ســ", middle: "ـسـ", final: "ـس" },
    example: { initial: "سَرَقَ", middle: "كَسَبَ", final: "عَبَسَ" },
    harakat: { zabar: "  سَ", zer: "سِ", pesh: "سُ" },
  },
  {
    index: 12,
    letter: "ش",
    title: "Sheen",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/shiin.mp3",
    description: { initial: "شـ", middle: "ـشـ", final: "ـش" },
    example: { initial: "شَكَرَ", middle: "كَشَفَ", final: "بَطَشَ" },
    harakat: { zabar: "  شَ", zer: "شِ", pesh: "شُ" },
  },
  {
    index: 13,
    letter: "ص",
    title: "Saad",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/saad.mp3",
    description: { initial: "صــ", middle: "ـصـ", final: "ـص" },
    example: { initial: "صَدَقَ", middle: "فَصَلَ", final: "نَكَصَ" },
    harakat: { zabar: "  صَ", zer: "صِ", pesh: "صُ" },
  },
  {
    index: 14,
    letter: "ض",
    title: "Daad",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/daad.mp3",
    description: { initial: "ضـ", middle: "ـضـ", final: "ـض" },
    example: { initial: "ضَرَبَ", middle: "حَضَرَ", final: "فَرَضَ" },
    harakat: { zabar: "  ضَ", zer: "ضِ", pesh: "ضُ" },
  },
  {
    index: 15,
    letter: "ط",
    title: "Taa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/taa.mp3",
    description: { initial: "طــ", middle: "ـطـ", final: "ـط" },
    example: { initial: "طَبَعَ", middle: "فَطَرَ", final: "بَسَطَ" },
    harakat: { zabar: "  طَ", zer: "طِ", pesh: "طُ" },
  },
  {
    index: 16,
    letter: "ظ",
    title: "Dhaa",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/thaa.mp3",
    description: { initial: "ظـ", middle: "ـظـ", final: "ـظ" },
    example: { initial: "ظَلَمَ", middle: "نَظَرَ", final: "وَعَظَ" },
    harakat: { zabar: "  ظَ", zer: "ظِ", pesh: "ظُ" },
  },
  {
    index: 17,
    letter: "ع",
    title: "Ayn",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ayn.mp3",
    description: { initial: "عــ", middle: "ـعـ", final: "ـع" },
    example: { initial: "عَبَدَ", middle: "جَعَلَ", final: "خَضَعَ" },
    harakat: { zabar: "عَ  ", zer: "عِ", pesh: "عُ" },
  },
  {
    index: 18,
    letter: "غ",
    title: "Ghayn",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/ghayn.mp3",
    description: { initial: "غـ", middle: "ـغـ", final: "ـغ" },
    example: { initial: "غَفَرَ", middle: "فَغَفَرَ", final: "نَزَغَ" },
    harakat: { zabar: "غَ  ", zer: "غِ", pesh: "غُ" },
  },
  {
    index: 19,
    letter: "ف",
    title: "Faa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/fa.mp3",
    description: { initial: "فـ", middle: "ـفـ", final: "ـف" },
    example: { initial: "فَصَلَ", middle: "أَفَلَ", final: "صَرَفَ" },
    harakat: { zabar: "فَ  ", zer: "فِ", pesh: "فُ" },
  },
  {
    index: 20,
    letter: "ق",
    title: "Qaaf",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/qaf.mp3",
    description: { initial: "قـ", middle: "ـقـ", final: "ـق" },
    example: { initial: "قَطَعَ", middle: "تَقَعَ", final: "أَبَقَ" },
    harakat: { zabar: "  قَ", zer: "قِ", pesh: "قُ" },
  },
  {
    index: 21,
    letter: "ك",
    title: "Kaaf",
    symbol: "ك",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/kaf.mp3",
    description: { initial: "كـ", middle: "ـكـ", final: "ـكَ" },
    example: { initial: "كَتَبَ", middle: "أَكَلَ", final: "تَرَكَ" },
    harakat: { zabar: "  كَ", zer: "كِ", pesh: "كُ" },
  },
  {
    index: 22,
    letter: "ل",
    title: "Laam",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/lam.mp3",
    description: { initial: "لـ", middle: "ـلـ", final: "ـل" },
    example: { initial: "لَعَنَ", middle: "سَلَفَ", final: "نَزَلَ" },
    harakat: { zabar: "  لَ", zer: "لِ", pesh: "لُ" },
  },
  {
    index: 23,
    letter: "م",
    title: "Meem",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/miim.mp3",
    description: { initial: "مـ", middle: "ـمـ", final: "ـم" },
    example: { initial: "حَكَمَ", middle: "أَمَرَ", final: "مَنَعَ" },
    harakat: { zabar: "  مَ", zer: "مِ", pesh: "مُ" },
  },
  {
    index: 24,
    letter: "ن",
    title: "Noon",
    audio:
      "https://www.arabicreadingcourse.com/audio/isolated-letters/nuun.mp3",
    description: { initial: "نـ", middle: "ـنـ", final: "ـن" },
    example: { initial: "نَبَذَ", middle: "مَنَعَ", final: "سَكَنَ" },
    harakat: { zabar: "  نَ", zer: "نِ", pesh: "نُ" },
  },
  {
    index: 25,
    letter: "ه",
    title: "Ha",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ha.mp3",
    description: { initial: "هـ", middle: "ـهـ", final: "ـه" },
    example: { initial: "هَلَكَ", middle: "جَهَرَ", final: "سَكَنَ" },
    harakat: { zabar: "  هَ", zer: "هِ", pesh: "هُ" },
  },
  {
    index: 26,
    letter: "و",
    title: "Waaw",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/waw.mp3",
    description: { initial: "و", middle: "ـو", final: "ـو" },
    example: { initial: "وَسَقَ", middle: "فَوَهَبَ", final: "سَكَنَ" },
    harakat: { zabar: "  وَ", zer: "وِ", pesh: "وُ" },
  },
  {
    index: 27,
    letter: "ي",
    title: "Yaa",
    audio: "https://www.arabicreadingcourse.com/audio/isolated-letters/ya.mp3",
    description: { initial: "يـ", middle: "ـيـ", final: "ـي" },
    example: { initial: "يَدَكَ", middle: "وَيَذَرَكَ", final: "سَكَنَ" },
    harakat: { zabar: "  يَ", zer: "يِ", pesh: "يُ" },
  },
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

const LetterCardL = ({ label, name, audioUrl, harakatType }) => {
  console.log("Harkat", harakatType);
  console.log("Harakat Details", label, "label");
  return (
    <div className="items-center w-full  overflow-hidden rounded border-2 shadow-lg min:h-fit justify-cente min:w-fit  my-16">
      {harakatType != "kasara" ? (
        <div className=" font-bold text-center bg-dark-purple text-white h-72   content-center ">
          <img
            src={Fatahah.src}
            className="w-0 mx-auto mb-0 flex pt-10"
            alt=""
          />
          <h2 className="text-9xl font-sans flex justify-center content-center pb-5 pt-10">
            {label}
          </h2>
        </div>
      ) : (
        <div className=" font-bold text-center bg-dark-purple text-white h-72   content-center ">
          <h2 className="text-9xl font-sans flex justify-center content-center pb-5 pt-10">
            {label}
          </h2>
          <img
            src={Fatahah.src}
            className="w-0 mx-auto mb-0 flex pt-10"
            alt=""
          />
        </div>
      )}
      <div className="bg-slate-50 h-fit">
        <div></div>

        <div>
          <Button className="bg-teal-300 my-3">
            {name}
            <AudioButton url={audioUrl} />
          </Button>
        </div>
      </div>
    </div>
  );
};
const LetterCardR = ({ label, name, audioUrl, harakatType }) => {
  console.log(label, "label");
  return (
    <div className="items-center w-full  overflow-hidden border-2 rounded shadow-lg min:h-fit justify-cente min:w-fit  my-16">
      {harakatType != "kasara" ? (
        <div className=" font-bold text-center text-dark-purple  h-72  justify-center content-center w-full">
          <img
            src={Fatahah.src}
            className="w-20 mx-auto mb-0 flex pt-10"
            alt=""
            style={{ filter: "opacity(50%)", color: "purple" }}
          />
          <h2 className="text-9xl font-sans flex justify-center content-center pb-5 ">
            {label}
          </h2>
        </div>
      ) : (
        <div className=" font-bold text-center text-dark-purple  h-72  justify-center content-center w-full">
          <h2 className="text-9xl font-sans flex justify-center content-center pt-10 ">
            {label}
          </h2>
          <img
            src={Fatahah.src}
            className="w-20 mx-auto mb-0 flex pb-3"
            alt=""
            style={{ filter: "opacity(50%)", color: "purple" }}
          />
        </div>
      )}

      <div className="bg-slate-50 h-fit">
        <div>
          <Button className="bg-teal-300 my-3">
            {name}
            <AudioButton url={audioUrl} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const SmallCard = ({ disc, title, btnText, link, btnProp, harakatType }) => {
  console.log("small Harakat ", harakatType);
  return (
    <div>
      <div className="items-center max-w-80 border-2 overflow-hidden rounded shadow-lg min:h-fit justify-cente min:w-fit h-full">
        {harakatType != "kasara" ? (
          <div className="grid content-between grid-cols-1  font-bold text-center bg-dark-purple text-white min-h-64  ">
            <img
              src={Fatahah.src}
              className="w-8 mx-auto mb-0 pt-3 flex"
              alt=""
              style={{ filter: "invert(100%)" }}
            />
            <h2 className="text-5xl pb-5 font-sans">{title}</h2>
          </div>
        ) : (
          <div className="grid content-between grid-cols-1  font-bold text-center bg-dark-purple text-white min-h-64  ">
            <h2 className="text-5xl pt-5 font-sans">{title}</h2>
            <img
              src={Fatahah.src}
              className="w-8 mx-auto mb-0 pb-3 flex"
              alt=""
              style={{ filter: "invert(100%)" }}
            />
          </div>
        )}
        <div className="bg-slate-50 h-fit">
          <div>
            <h2 className="py-2 text-sm text-dark-purple">{disc}</h2>
          </div>
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
}) => {
  const [assignment, setAssignment] = useState([]);
  const [activityPath, setActivityPath] = useState();
  const { myArray, setMyArray } = useContext(BatchContext);
  console.log(myArray);

  //get the assignment for the selected activity
  useEffect(() => {
    const fetchAssignment = async () => {
      if (harakatType) {
        console.log("inside");
        console.log(harakatType);
        const data = await fetchAssignmentForLetter(harakatType, "harakat");
        if (data[0]) {
          setAssignment(data[0].assignment_json.letter);
          setActivityPath(`${data[0].assignment_json.letter[0].activity_type}`);
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

  return (
    <div className="w-full  ">
      <div className=" w-full p-2 rounded-md  flex flex-row justify-between   pt-3">
        {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
        <h1 className="mx-2 text-white text-lg">
          Module 2: {harakatType} of Harakat
          {/* Module 2: {harakatType.charAt(0).toUpperCase() + harakatType.slice(1)} of Harakat */}
        </h1>
        <Link href={`/${user}/module`} className="mx-5">
          <Button
            variant="contained"
            className="bg-white text-dark-purple"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Link>
      </div>
      <div className=" bg-white rounded-md w-full mt-5">
        <div className=" w-full p-5 md:grid-cols-4   ">
          <div className=" w-full bg-white rounded-md  sm:col-span-3 md:px-5 lg:px-14">
            <div className=" p-3 text-center ">
              {/* <h2 className="text-lg  "></h2> */}

              <div className="grid grid-cols-2 lg:grid-cols-3 mx-0 mt-5 lg:gap-12 gap-5 xl:gap-20 ">
                <div className="col-span-1">
                  <LetterCardL
                    label={labelL}
                    name={nameL}
                    audioUrl={audioR}
                    harakatType={harakatType}
                  />
                </div>
                <div className="col-span-1">
                  <LetterCardR
                    label={labelR}
                    name={nameR}
                    audioUrl={audioR}
                    harakatType={harakatType}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className="grid grid-cols-3 lg:grid-cols-1 mx-0 mt-5 gap-4 lg:gap-2">
                    <SmallCard
                      disc="Initial Form"
                      title={initial}
                      harakatType={harakatType}
                    />
                    <SmallCard
                      disc="Medial Form"
                      title={middle}
                      harakatType={harakatType}
                    />
                    <SmallCard
                      disc="Final Form"
                      title={final}
                      harakatType={harakatType}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full p-2 rounded-md  flex flex-row justify-center   pt-3">
        <div className="mx-5">
          {/* <Link href={`/${user}/activity/match/harakat/Fatah/4`}>
            <Button
              variant="contained"
              className="text-dark-purple bg-white "
              style={{ marginRight: 10 }}
            >
              Activity
            </Button>
          </Link> */}

          <Button
            variant="contained"
            onClick={setActivitySubmodule}
            className="text-dark-purple bg-white "
            style={{ marginRight: 10 }}
          >
            Activity
          </Button>

          {/* <Button
              variant="contained"
              onClick={setActivitySubmodule}
              className="text-dark-purple bg-white "
              style={{ marginRight: 10 }}
            >
              Activity
            </Button> */}

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

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(0);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60  text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
            {...a11yProps(alphabate.index)}
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
            labelR={alphabate.letter}
            labelL={alphabate.letter}
            nameR={alphabate.title}
            nameL={alphabate.title}
            audioR={alphabate.audio}
            audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/kaf.mp3"
            initial={alphabate.description.initial}
            middle={alphabate.description.middle}
            final={alphabate.description.final}
            user={props.user}
            nextUrl={props.nextUrl}
            harakatType={props.harakatType}
          />
        </TabPanel>
      ))}
    </Box>
  );
}
