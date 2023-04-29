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
import { useState } from "react";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

const LetterCard = ({ label, name, audioUrl, bg }) => {
  const divStyles = {
    boxShadow: "inset 0 0 10px rgba(0,2,1,0.4)",
    backgroundColor: bg,
  };
  return (
    <div className="items-center w-full  overflow-hidden rounded-3xl shadow-lg min:h-fit justify-cente min:w-fit h-80 my-16">
      <div
        className=" font-bold text-center text-white h-full   content-center "
        style={divStyles}
      >
        <h2 className="text-9xl font-sans flex justify-center content-center py-8 ">
          {label}
        </h2>
        <div className="mt-10">
          <AudioButton url={audioUrl} size="large" />
        </div>
      </div>

      {/* <div className="bg-slate-50 h-fit">
        <div></div>

        <div>
          <Button className="bg-teal-300 my-3">
            {name}
            <AudioButton url={audioUrl} />
          </Button>
        </div>
      </div> */}
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
  user,
  bgL,
  bgR,
}) => {
  return (
    <div className="w-full  ">
      <div className=" bg-white rounded-3xl w-full mt-5 ml-5">
        <div className=" w-full p-2 rounded-3xl  flex flex-row justify-between pt-6">
          {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
          <h1
            className="p-3 text-white bg-dark-purple rounded-lg text-lg  border-2 border-white"
            style={{ marginLeft: -40, width: 600 }}
          >
            Similar Sounding Letters
            {/* <span className="p-2 bg-green-200 text-dark-purple rounded-md">
            {props.name} " {props.symbol} "
          </span> */}
          </h1>
          <div className="flex content-center">
            <Link href={`/teacher/whiteboard`} className="mx-5 ">
              <IconButton
                aria-label="delete"
                size="large"
                className="bg-cyan-200 text-dark-purple rounded-full hover:bg-gray-200 p-1.5 "
              >
                <FilterFramesIcon />
              </IconButton>
            </Link>

            <Link href={`/${user}/module/alphabets`} className="mx-5 ">
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
        <div className=" w-full p-5 md:grid-cols-4   ">
          <div className=" w-full bg-white rounded-md  sm:col-span-3 md:px-5 lg:px-14">
            <div className="h-full p-3 text-center">
              <div className="grid grid-cols-1 gap-5 ">
                <div className="grid grid-cols-7 mx-0 mt-5 gap-10">
                  <div className="col-span-3">
                    <LetterCard
                      label={labelR}
                      name={nameR}
                      audioUrl={audioR}
                      bg={bgR}
                    />
                  </div>
                  <div className="h-full flex-1 align-middle self-center ">
                    <div className="my-auto self-center mt-48">
                      <IconButton aria-label="delete" size="large">
                        <ArrowForwardIcon fontSize="inherit" color={bgL} />
                      </IconButton>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <LetterCard
                      label={labelL}
                      name={nameL}
                      audioUrl={audioL}
                      bg={bgL}
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
          <Link href={`/${user}/module/alphabets/similar-writing-letters`}>
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [randomColorL, setRandomColorL] = useState("#09DBDB");
  const [randomColorR, setRandomColorR] = useState("#ECABE1");
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
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
    backgroundColor: randomColorR,
    borderRadius: 15,
  };
  const sliderCard = {
    fontSize: 40,
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
    // backgroundColor: randomColorR,
    borderRadius: 15,
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
        <Tab
          onClick={() => {
            GenerateColor(0);
          }}
          label="ق- ك"
          style={selectedOption == 0 ? sliderCardSelected : sliderCard}
          {...a11yProps(0)}
        />
        <Tab
          onClick={() => GenerateColor(1)}
          label="ز-ذ"
          style={selectedOption == 1 ? sliderCardSelected : sliderCard}
          {...a11yProps(1)}
        />
        <Tab
          onClick={() => GenerateColor(2)}
          label="ث-س"
          style={selectedOption == 2 ? sliderCardSelected : sliderCard}
          {...a11yProps(2)}
        />
        <Tab
          onClick={() => GenerateColor(3)}
          label="ظ-ذ"
          style={selectedOption == 3 ? sliderCardSelected : sliderCard}
          {...a11yProps(3)}
        />
        <Tab
          onClick={() => GenerateColor(4)}
          label="ة-د"
          style={selectedOption == 4 ? sliderCardSelected : sliderCard}
          {...a11yProps(4)}
        />
        <Tab
          onClick={() => GenerateColor(5)}
          label="ض-د"
          style={selectedOption == 5 ? sliderCardSelected : sliderCard}
          {...a11yProps(5)}
        />
        <Tab
          onClick={() => GenerateColor(6)}
          label="س-ص"
          style={selectedOption == 6 ? sliderCardSelected : sliderCard}
          {...a11yProps(6)}
        />
        <Tab
          onClick={() => GenerateColor(7)}
          label="ف- ث"
          style={selectedOption == 7 ? sliderCardSelected : sliderCard}
          {...a11yProps(8)}
        />
        <Tab
          onClick={() => GenerateColor(8)}
          label="ط-ة"
          style={selectedOption == 8 ? sliderCardSelected : sliderCard}
          {...a11yProps(9)}
        />
        <Tab
          onClick={() => GenerateColor(9)}
          label="ل-ر"
          style={selectedOption == 9 ? sliderCardSelected : sliderCard}
          {...a11yProps(10)}
        />
        <Tab
          onClick={() => GenerateColor(10)}
          label="ظ-ز"
          style={selectedOption == 10 ? sliderCardSelected : sliderCard}
          {...a11yProps(11)}
        />
        <Tab
          onClick={() => GenerateColor(11)}
          label="غــ  - خــ"
          style={selectedOption == 11 ? sliderCardSelected : sliderCard}
          {...a11yProps(12)}
        />
        <Tab
          onClick={() => GenerateColor(12)}
          label="أ -  ـــھـــ"
          style={selectedOption == 12 ? sliderCardSelected : sliderCard}
          {...a11yProps(13)}
        />
        <Tab
          onClick={() => GenerateColor(14)}
          label="ذ - ث"
          style={selectedOption == 14 ? sliderCardSelected : sliderCard}
          {...a11yProps(14)}
        />
        <Tab
          onClick={() => GenerateColor(15)}
          label="ـــھ - ح"
          style={selectedOption == 15 ? sliderCardSelected : sliderCard}
          {...a11yProps(15)}
        />
        <Tab
          onClick={() => GenerateColor(16)}
          label="عــ - ــحـــ"
          style={selectedOption == 16 ? sliderCardSelected : sliderCard}
          {...a11yProps(16)}
        />
        <p className={`w-80`} />
      </Tabs>
      <TabPanel style={{ width: "100%" }} value={value} index={0}>
        <Card
          labelR="ق"
          labelL="ك"
          nameR="Qaaf"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Kaaf"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/qaf.mp3"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/kaf.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={1}>
        <Card
          labelR="ز"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          labelL="ذ"
          nameR="Zai"
          nameL="Dhaal"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/thaal.mp3"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/zay.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={2}>
        <Card
          labelL="ثــ"
          labelR="س"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Tha"
          nameR="Seen"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/tha.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/siin.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={3}>
        <Card
          labelL="ظ"
          labelR="ذ"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Dhaa"
          nameR="Dhaal"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/thaa.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/thaal.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={4}>
        <Card
          labelL="ة"
          labelR="د"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Ta"
          nameR="Daal"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={5}>
        <Card
          labelR="ض"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          labelL="د"
          nameR="daad"
          nameL="Daal"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/daad.mp3"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={6}>
        <Card
          labelL="س"
          labelR="ص"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Seen"
          nameR="Saad"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/siin.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/saad.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={7}>
        <Card
          labelL="ف"
          labelR="ث"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Faa"
          nameR="Thaa"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/fa.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/tha.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={8}>
        <Card
          labelL="ة"
          labelR=" ط"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Ta"
          nameR="Taa"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/taa.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={9}>
        <Card
          labelL="ل"
          labelR="ر"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Laam"
          nameR="Raa"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/lam.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ra.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={10}>
        <Card
          labelL="ظ"
          labelR="ز"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Dhaa"
          nameR="Zay"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/thaa.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/zay.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={11}>
        <Card
          labelL=" غ"
          labelR="خ"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          nameL="Ghayn"
          nameR="Khaa"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ghayn.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/kha.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={12}>
        <Card
          nameL="Alif"
          nameR="Ha"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          labelL=" أ"
          labelR="هـ"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ha.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={13}>
        <Card
          nameL="Thaa"
          nameR="Daal"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          labelL="ث "
          labelR="ذ"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/tha.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={14}>
        <Card
          nameL="Haa"
          nameR="Ha"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          labelL=" ح"
          labelR="هـ"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/hha.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ha.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={15}>
        <Card
          nameL="Haa"
          nameR="Ayn"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          labelL=" ح"
          labelR="ع"
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/hha.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ayn.mp3"
        />
      </TabPanel>
    </Box>
  );
}
