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
    initial: "أَ",
    middle: "مَـ",
    final: "ـرَ",
    word: "أَمَرَ",
  },
  {
    index: 1,
    initial: "سَـ",
    middle: "ـأَ",
    final: "لَ",
    word: "سَأَلَ",
  },
  {
    index: 2,
    initial: " لَـ ",
    middle: "ـجـَ",
    final: "أَ",
    word: "لـَـجَـأ",
  },
  {
    index: 3,
    final: "ـشَ",
    middle: "ـطَـ",
    initial: "بَـ",
    word: "بَطَشَ",
  },
  {
    index: 4,
    final: "ـذَ",
    middle: "ـبَـ",
    initial: "نَـ",
    word: "نَبَذَ",
  },
  {
    index: 5,
    final: "ـبَ",
    middle: "ـقَـ",
    initial: "ثَـ",
    word: "ثَقَبَ",
  },
  {
    index: 6,
    final: "ـرَ",
    middle: "ـجَـ",
    initial: "تَـ",
    word: "تَجَرَ",
  },
  {
    index: 7,
    final: "ـبَ",
    middle: "ـتَـ",
    initial: "كَـ",
    word: "كَتَبَ",
  },
  {
    index: 8,
    final: "ـتَ",
    middle: "ـبَـ",
    initial: "ثَـ",
    word: "ثَبَتَ",
  },
  {
    index: 9,
    final: "ـبَ",
    middle: "ـتَـ",
    initial: "كَـ",
    word: "كَتَدَ",
  },
  {
    index: 10,
    final: "ـرَ",
    middle: "ـثَـ",
    initial: "نَـ",
    word: "نَـثَرَ",
  },
  {
    index: 11,
    final: "ـثَ",
    middle: "ـعَـ",
    initial: "بَـ",
    word: "بَعَثَ",
  },
  {
    index: 12,
    final: "ـدَ",
    middle: "ـجَـ",
    initial: "سَـ",
    word: "سَجَدَ",
  },
  {
    index: 13,
    final: "ـجَ",
    middle: "ـسَـ",
    initial: "نَـ",
    word: "نَسَجَ",
  },
  {
    index: 14,
    final: "ـسَ",
    middle: "ـبـَ",
    initial: "حَـ",
    word: "حَبَسَ",
  },
  {
    index: 15,
    final: "ـنَ",
    middle: "ـحَـ",
    initial: "طَـ",
    word: "طَحَنَ",
  },
  {
    index: 16,
    final: "ـحَ",
    middle: "ـسَـ",
    initial: "مَـ",
    word: "مَسَحَ",
  },
  {
    index: 17,
    final: "ـعَ",
    middle: "ـضَـ",
    initial: "خَـ",
    word: "خَضَعَ",
  },
  {
    index: 18,
    final: "ـرَ",
    middle: "ـخَـ",
    initial: "نَـ",
    word: "نَـخَـرَ",
  },
  {
    index: 19,
    final: "دَ",
    middle: "ـرَ",
    initial: "ثَـ",
    word: "ثَرَدَ",
  },
];

const doubleLattersExamples = [

  {
    index: 0,
    final: "ـدَ",
    initial: "صَعَـ",
    word: "صَعَدَ",
  },
  {
    index: 1,
    final: " ـهَ  ",
    initial: " وَلَـ ",
    word: "وَ لَـهَ ",
  },
  {
    index: 2,
    
    final: "ـمَ",
    initial: " فَطَـ ",
    word: "فَطَمَ",
  },
  {
    index: 3,
    final: "ـفَ",
    
    initial: "شَغَـ",
    word: "شَغَفَ",
  },
  {
    index: 4,
    final: "ـغَ",
    
    initial: "مَضَـ",
    word: "مَضَغَ",
  },
  {
    index: 5,
    final: "ـخَ",
    
    initial: "نَفَـ",
    word: "نَفَخَ",
  },
  {
    index: 6,
    final: "ـعَ",
    
    initial: "شَفَـ",
    word: "شَفَعَ",
  },
  {
    index: 7,
    final: "حَ",
    
    initial: "شَرَ",
    word: "شَرَحَ",
  },
  {
    index: 8,
    final: "ـتَ",
    
    initial: "قَنَـ",
    word: "قَنَتَ",
  },
  {
    index: 9,
    final: "ـطَ",
    
    initial: "سَقَـ",
    word: "سَقَطَ",
  },
  {
    index: 10,
    final: "قَ",
    
    initial: "خَلَـ",
    word: "خَلَقَ",
  },
  {
    index: 11,
    final: "ـرَ",
    
    initial: "كَسَـ",
    word: "كَسَرَ",
  },
  {
    index: 12,
    final: "ـرَ",
    
    initial: "شَكَـ",
    word: "شَكَرَ",
  },
  {
    index: 13,
    final: "ـكَ",
    
    initial: "مَلَـ",
    word: "مَلَكَ",
  },
  {
    index: 14,
    final: "ـمَ",
    
    initial: "لَطَـ",
    word: "لَطَمَ",
  },
  {
    index: 15,
    final: "أَ",
    
    initial: "مَلَـ",
    word: "مَلأَ",
  },
  {
    index: 16,
    final: "ـسَ",
    
    initial: "ھَمَـ",
    word: "ھَمَسَ",
  },
  {
    index: 17,
    final: "ـعَ",
    
    initial: "یَفَ",
    word: "یَفَعَ",
  },
  {
    index: 18,
    final: "ـزَ",
    
    initial: "وَ عَـ",
    word: "وَ عَزَ",
  },
  {
    index: 19,
    final: "ـعَ",
        initial: "یَنَـ",
    word: "یَنَعَ",
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

const Card = ({ word, initial, middle, final, user, screen,nextUrl}) => {
  console.log("Card", word, initial, middle, final);
  return (
    <div className="w-full  ">
      <div className=" w-full p-2 rounded-md  flex flex-row justify-between   pt-3">
        {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
        <h1 className="mx-2 text-white text-lg">
          Module 2: How to Make words is Arabic
        </h1>
        <Link href={`/${user}/module/harakat/fatahah`} className="mx-5">
          <Button
            variant="contained"
            className="bg-white text-dark-purple"
            startIcon={<ArrowBackIcon />}
          >
            Back to Module 2
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
                    {middle ? ( <h2 className="text-7xl font-sans flex justify-center content-center pb-12 pt-10">
                        
                        {initial} + {middle} + {final}
                      </h2>): ( <h2 className="text-7xl font-sans flex justify-center content-center pb-12 pt-10">
                        
                        {initial} + {final}
                      </h2>)}
                     
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
            
          <Link href={`/${user}/module/harakat/fatahah/${nextUrl}`}>
            <Button variant="contained" className="text-dark-purple bg-white">
              Next Section
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function VerticalTabs({wordType, user, nextUrl}) {
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
              label={alphabate.word}
              className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60  text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
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
            <Card
              initial={alphabate.initial}
              middle={alphabate.middle}
              final={alphabate.final}
              word={alphabate.word}
              user={user}
              screen="single"
              nextUrl={nextUrl}
            />
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
            label={alphabate.word}
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
          <Card
            initial={alphabate.initial}
            middle={alphabate.middle}
            final={alphabate.final}
            word={alphabate.word}
            user={user}
            screen="double"
            nextUrl={nextUrl}
          />
        </TabPanel>
      ))}
    </Box>
    )}
    
    </>
  );
}
