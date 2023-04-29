import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ActivityDetail from "./ActivityDetail";
import { useRouter } from "next/router";
import Link from "next/link";
import { width } from "@mui/system";
import { useState } from "react";
import index from "@/pages/admin";

const Alphabates = [
  { letter: "ا", title: "Alif" },
  { letter: "ب", title: "Baa" },
  { letter: "ت", title: "Ta" },
  { letter: "ث", title: "Thaa" },
  { letter: "ج", title: "Jeem" },
  { letter: "ح", title: "Haa" },
  { letter: "خ", title: "Khaa" },
  { letter: "د", title: "Daal" },
  { letter: "ذ", title: "Dhaal" },
  { letter: "ر", title: "Raa" },
  { letter: "ز", title: "Zai" },
  { letter: "س", title: "Seen" },
  { letter: "ش", title: "Sheen" },
  { letter: "ص", title: "Saad" },
  { letter: "ض", title: "Daad" },
  { letter: "ط", title: "Taa" },
  { letter: "ظ", title: "Dhaa" },
  { letter: "ع", title: "Ayn" },
  { letter: "غ", title: "Ghayn" },
  { letter: "ف", title: "Faa" },
  { letter: "ق", title: "Qaaf" },
  { letter: "ك", title: "Kaaf" },
  { letter: "ل", title: "Laam" },
  { letter: "م", title: "Meem" },
  { letter: "ن", title: "Noon" },
  { letter: "ه", title: "Ha" },
  { letter: "و", title: "Waaw" },
  { letter: "ي", title: "Yaa" },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  console.log("Harakat", props.type, "Type");
  console.log("Harakat", props.user, "User");
  console.log("Harakat", props.module, "module");
  console.log("Harakat", props.title, "title");

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

function a11yProps(id) {
  return {
    id: `vertical-tab-${id}`,
  };
}

export default function VerticalTabs(props) {
  console.log("user: ", props.user);

  const [value, setValue] = React.useState(0);
  const [symbol, setSymbol] = React.useState();

  // const [letterName, setLetterName] = useState();
  const [styleBg, setStyleBg] = useState("bg-black");
  const [selectedOption, setSelectedOption] = useState(0);

  const changeStyle = () => {
    if (props.id == props.id) {
      setStyleBg("bg-blue-300");
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getSymbol = (symbolValue) => {
    console.log(symbolValue);
    setSymbol(symbolValue);
  };

  const sliderStyle = {
    fontSize: 40,
    padding: 15,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 100,
    
  };
  const sliderStyleSelected = {
    fontSize: 40,
    padding: 15,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 100,
    backgroundColor: 'cyan'
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Module: 1 */}
      {props.type == "tracing" ? (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          // aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            background: "rgb(0 79 112)",
            color: "white",
            width: "240px",
          }}
        >
          {Alphabates.map((alphabate) => (
            <Link
              href={`/${props.user}/activity/tracing/${alphabate.title}`}
              className=" p-0 my-2 rounded-full text-center"
            >
              <Tab
                value={alphabate.letter}
                onChange={() => getSymbol(alphabate.letter)}
                className={`text-3xl  py-3 px-0 mx-0 text-white font-bold rounded-full font-sans  focus:bg-cyan-400 bg-black`} // ${styleBg}
                label={alphabate.letter}
                id={props.id}
                sx={{ border: "2px solid white" }}
                //  onClick={changeStyle}
              />
            </Link>
          ))}
        </Tabs>
      ) : null}
      {props.type == "alphabets" ? (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          // aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            background: "rgb(0 79 112)",
            color: "white",
            width: "240px",
          }}
        >
          {Alphabates.map((alphabate) => (
            <Link
              href={`/${props.user}/module/${props.type}/${alphabate.title}`}
              className=" p-0 my-2 rounded-full text-center "
            >
              <Tab
              onClick={()=>setSelectedOption(alphabate.letter)}
                // className={`text-3xl  py-3 px-0 mx-0 text-white font-bold rounded-full font-sans  focus:bg-cyan-400 bg-black`} // ${styleBg}
                style={selectedOption == alphabate.letter ? sliderStyleSelected : sliderStyle}
                label={alphabate.letter}
                id={props.id}
                sx={{ border: "2px solid white" }}
                //  onClick={changeStyle}
              />
            </Link>
          ))}
        </Tabs>
      ) : null}
      {props.type == "alphabets" ? (
        <TabPanel value={value} index={0}>
          {props.id && (
            <ActivityDetail
              id={props.id}
              user={props.user}
              type="LetterDetails"
              module={props.module}
            />
          )}
        </TabPanel>
      ) : null}
      {props.type == "tracing" ? (
        <ActivityDetail symbol={symbol} id={props.id} type="LetterTracing" />
      ) : null}

      {/* Module: 2 */}

      {props.type == "harakat" ? (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          // aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            background: "rgb(0 79 112)",
            color: "white",
            width: "240px",
          }}
        >
          {Alphabates.map((alphabate) => (
            <Link
              href={`/${props.user}/module/${props.type}/${alphabate.title}`}
              className=" p-0 my-2 rounded-full text-center"
            >
              <Tab
                className={`text-3xl  py-3 px-0 mx-0 text-white font-bold rounded-full font-sans  focus:bg-cyan-400 bg-black`} // ${styleBg}
                label={alphabate.letter}
                id={props.id}
                sx={{ border: "2px solid white" }}
                //  onClick={changeStyle}
              />
            </Link>
          ))}
        </Tabs>
      ) : null}
      {props.type == "harakat" ? (
        <TabPanel value={value} index={0}>
          {props.id && (
            <ActivityDetail
              id={props.id}
              user={props.user}
              type="harakat"
              module={props.module}
            />

            // <h1 className="bg-white w-full h-full">Harakat</h1>
          )}
        </TabPanel>
      ) : null}

      {/* {props.type == "tracing" ? (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          // aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            background: "rgb(0 79 112)",
            color: "white",
            width: "240px",
          }}
        >
          {Alphabates.map((alphabate) => (
            <Link
              href={`/${props.user}/activity/tracing/${alphabate.title}`}
              className=" p-0 my-2 rounded-full text-center"
            >
              <Tab
                value={alphabate.letter}
                onChange={() => getSymbol(alphabate.letter)}
                className={`text-3xl  py-3 px-0 mx-0 text-white font-bold rounded-full font-sans  focus:bg-cyan-400 bg-black`} // ${styleBg}
                label={alphabate.letter}
                id={props.id}
                sx={{ border: "2px solid white" }}
                //  onClick={changeStyle}
              />
            </Link>
          ))}
        </Tabs>
      ) : (
        null
      )} */}

      {/* {props.type == "tracing" ? (
        <ActivityDetail symbol={symbol} id={props.id} type="LetterTracing" />
      ) : (
        null
      )} */}
    </Box>
  );
}
