import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import RewordGIf from "@/components/src/gif/RewordGIf.gif";
import Link from "next/link";
import { Button, IconButton } from "@mui/material";
import AudioButton from "@/components/Layout/elements/AudioBtn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Modal from "@mui/material/Modal";
import Confetti from "react-confetti";
import CardM from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CompleateModal from "@/components/Layout/popup/CompleateModal";
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
  const style = {
    position: "absolute",
    top: "48%",
    left: "58%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: 10,
    boxShadow: 24,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full  ">
      <div className=" bg-white rounded-3xl w-full mt-5 ml-5">
        <div className=" w-full p-2 rounded-3xl  flex flex-row justify-between pt-6">
          {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
          <h1
            className="p-3 text-white bg-dark-purple rounded-lg text-lg  border-2 border-white"
            style={{ marginLeft: -40, width: 600 }}
          >
            Similar Writing Letters
            {/* <span className="p-2 bg-green-200 text-dark-purple rounded-md">
            {props.name} " {props.symbol} "
          </span> */}
          </h1>
          <div className="flex content-center">
            <Link href={`/teacher/whiteboard`} className="mx-3 ">
              <IconButton
                aria-label="delete"
                size="large"
                className="bg-cyan-200 text-dark-purple rounded-full hover:bg-gray-200 p-1.5 "
              >
                <FilterFramesIcon />
              </IconButton>
            </Link>

            <Link href={`/${user}/module/alphabets`} className="mx-2 ">
              <Button
                variant="contained"
                className="bg-cyan-200 text-dark-purple"
                startIcon={<ArrowBackIcon />}
              >
                Main Module
              </Button>
            </Link>
            <Link
              href={`/${user}/module/alphabets/similar-sounding-letters`}
              className="mx-2 "
            >
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
        <div className=" w-full p-5 md:grid-cols-4 ">
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
          {/* <Link href={`/${user}/module/harakat/fatahah`}> */}
          <Button
            variant="contained"
            className="text-dark-purple bg-white"
            onClick={handleOpen}
          >
            Next Module
          </Button>
          {/* </Link> */}
        </div>
      </div>
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}

        <CompleateModal moduleName="Arabic Alphabets" nextModule="/teacher/module/harakat/fatha/discription" open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);

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

  const handleSliderCardClick = (index) => {
    setSelectedOption(index);
    console.log(selectedOption, "selectedOpt");
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
          label="بــ - یــ"
          // className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          style={selectedOption == 0 ? sliderCardSelected : sliderCard}
          {...a11yProps(0)}
        />
        <Tab
          onClick={() => {
            GenerateColor(1);
          }}
          label="نـــ - تـــ"
          style={selectedOption == 1 ? sliderCardSelected : sliderCard}
          {...a11yProps(1)}
        />
        <Tab
          onClick={() => {
            GenerateColor(2);
          }}
          label="ثــ  -شـــ"
          style={selectedOption == 2 ? sliderCardSelected : sliderCard}
          {...a11yProps(2)}
        />
        <Tab
          onClick={() => {
            GenerateColor(3);
          }}
          label="جــ. -خـــ"
          style={selectedOption == 3 ? sliderCardSelected : sliderCard}
          {...a11yProps(3)}
        />
        <Tab
          onClick={() => GenerateColor(4)}
          label="ر-ز"
          style={selectedOption == 4 ? sliderCardSelected : sliderCard}
          {...a11yProps(4)}
        />
        <Tab
          onClick={() => GenerateColor(5)}
          label="د-ذ"
          style={selectedOption == 5 ? sliderCardSelected : sliderCard}
          {...a11yProps(5)}
        />
        <Tab
          onClick={() => GenerateColor(6)}
          label="ضــ  -صــ"
          style={selectedOption == 6 ? sliderCardSelected : sliderCard}
          {...a11yProps(6)}
        />
        <Tab
          onClick={() => GenerateColor(7)}
          label="طــ - ظــ"
          style={selectedOption == 7 ? sliderCardSelected : sliderCard}
          {...a11yProps(8)}
        />
        <Tab
          onClick={() => GenerateColor(8)}
          label="ـــفــ - ــقـــ"
          style={selectedOption == 8 ? sliderCardSelected : sliderCard}
          {...a11yProps(9)}
        />
        <Tab
          onClick={() => GenerateColor(9)}
          label="ل-ك"
          style={selectedOption == 9 ? sliderCardSelected : sliderCard}
          {...a11yProps(10)}
        />
        <Tab
          onClick={() => GenerateColor(10)}
          label="ه-ة"
          style={selectedOption == 10 ? sliderCardSelected : sliderCard}
          {...a11yProps(11)}
        />
        <Tab
          onClick={() => GenerateColor(11)}
          label="  ــه - ـة"
          style={selectedOption == 11 ? sliderCardSelected : sliderCard}
          {...a11yProps(12)}
        />
        <Tab
          onClick={() => GenerateColor(12)}
          label="أ - ــلــ"
          style={selectedOption == 12 ? sliderCardSelected : sliderCard}
          {...a11yProps(13)}
        />
        <Tab
          onClick={() => GenerateColor(13)}
          label="نــ -  ــذ"
          style={selectedOption == 13 ? sliderCardSelected : sliderCard}
          {...a11yProps(14)}
        />
        <Tab
          onClick={() => GenerateColor(14)}
          label="ـــغــــ   -    
          ـــفـــــ"
          style={selectedOption == 14 ? sliderCardSelected : sliderCard}
          {...a11yProps(15)}
        />
        <p className={`w-80`} />
      </Tabs>
      <TabPanel style={{ width: "100%" }} value={value} index={0}>
        <Card
          labelL="یــ"
          labelR="بــ"
          nameR="Baa"
          nameL="Yaa"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ba.mp3"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ya.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={1}>
        <Card
          labelL="نـــ"
          labelR="تـــ"
          nameR="Ta"
          nameL="Noon"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/nuun.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={2}>
        <Card
          labelL="ثــ"
          labelR="شـــ"
          nameL="Tha"
          nameR="Sheen"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/tha.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/shiin.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={3}>
        <Card
          labelL="جــ"
          labelR="خـــ"
          nameL="Jeem"
          nameR="Khaa"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/jiim.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/kha.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={4}>
        <Card
          labelL="ر"
          labelR="ز"
          nameL="Raa"
          nameR="Zay"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ra.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/zay.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={5}>
        <Card
          labelR="ذ"
          labelL="د"
          nameR="Dhaal"
          nameL="Daal"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/thaal.mp3"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={6}>
        <Card
          labelL="ضــ"
          labelR="صــ"
          nameL="Daad"
          nameR="Saad"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/daad.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/saad.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={7}>
        <Card
          labelL="طــ"
          labelR="ظــ"
          nameL="Taa"
          nameR="Dhaa"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/taa.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/thaa.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={8}>
        <Card
          labelL="ـــفــ"
          labelR="ــقـــ"
          nameL="Faa"
          nameR="Qaaf"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/fa.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/qaf.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={9}>
        <Card
          labelL="ل"
          labelR="ك"
          nameL="Laam"
          nameR="Kaaf"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/lam.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/kaf.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={10}>
        <Card
          labelL="ه"
          labelR="ة"
          nameL="Ha"
          nameR="Taa"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ha.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={11}>
        <Card
          labelL=" ــه"
          labelR="ــة"
          nameL="Ha"
          nameR="Taa"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ha.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ta.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={12}>
        <Card
          labelL=" أ"
          labelR="ــلــ"
          nameL="Alif"
          nameR="Laam"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/alif.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/lam.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={13}>
        <Card
          labelL="نــ "
          labelR="ــذ"
          nameL="Noon"
          nameR="Daal"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/nuun.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={14}>
        <Card
          labelL=" ـــغــــ"
          labelR="ـــفــــ"
          nameL="Ghayn"
          nameR="Faa"
          user={props.user}
          bgL={randomColorL}
          bgR={randomColorR}
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ghayn.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/fa.mp3"
        />
      </TabPanel>
    </Box>
  );
}


// <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={{}} id="my-canvas">
//             <CardM sx={style}>
//               <CardActionArea className="h-full flex-1 ">
//                 <Confetti />
//                 <div className="h-10 w-full">
//                   <img src={RewordGIf.src} className="w-80 mx-auto" />
//                 </div>
//                 <CardContent className="mt-56 text-center">
//                   <Typography gutterBottom variant="h1" component="div">
//                   Congratulations 
//                   </Typography>
//                   <Typography gutterBottom variant="h5" component="div">
//                     You have Completed the Arabic Alphabets Modules
//                   </Typography>
                  
//                 </CardContent>
//                 <center>

//                 <Link href={`/${user}/module/harakat/fatha`}>
                  
//                   <Button
//                     variant="contained"
//                     className="text-dark-purple bg-yellow-400"
//                   >
//                     Next Module
//                   </Button>
//                 </Link>
//                 </center>
//               </CardActionArea>
//             </CardM>
//           </Box>
//         </Modal>