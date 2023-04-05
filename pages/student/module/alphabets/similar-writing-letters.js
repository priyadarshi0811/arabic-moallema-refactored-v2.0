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

const LetterCard = ({ label, name, audioUrl }) => {
  return (
    <div className="items-center w-full  overflow-hidden rounded shadow-lg min:h-fit justify-cente min:w-fit h-80 my-16">
      <div className=" font-bold text-center bg-dark-purple text-white h-64  content-center ">
        <h2 className="text-9xl font-sans flex justify-center content-center py-8 ">
          {label}
        </h2>
      </div>
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

const Card = ({ labelL, labelR, audioUrl, nameR, nameL, audioR, audioL }) => {
  return (
    <div className="w-full  ">
      <div className=" w-full p-2 rounded-md  flex flex-row justify-between   pt-3">
        {/* <img src={logo.src} className="h-14" alt="" />{" "} */}
        <h1 className="mx-2 text-white text-lg">Similar Writing Letters</h1>
        <Link href={""} className="mx-5">
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
        <div className=" w-full p-5 md:grid-cols-4 ">
          <div className=" w-full bg-white rounded-md  sm:col-span-3 md:px-5 lg:px-14">
            <div className="h-full p-3 text-center">
              <h2 className="text-lg  ">Difference Between Two Letters</h2>

              <div className="grid grid-cols-1 gap-5 ">
                <div className="grid grid-cols-2 mx-0 mt-5 gap-10">
                  <LetterCard label={labelR} name={nameR} audioUrl={audioR} />
                  <LetterCard label={labelL} name={nameL} audioUrl={audioL} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full p-2 rounded-md  flex flex-row justify-center   pt-3">
        <div className="mx-5">
          <Link href="/student/module/alphabets/similar-sounding-letters">
            <Button variant="contained" className="text-dark-purple bg-white">
              Next Section
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

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
        <p
          className={`w-80`}
        />
        <Tab
          label="بــ - یــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3  w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(0)}
        />
        <Tab
          label="نـــ - تـــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(1)}
        />
        <Tab
          label="ثــ  -شـــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(2)}
        />
        <Tab
          label="جــ. -خـــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(3)}
        />
        <Tab
          label="ر-ز"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(4)}
        />
        <Tab
          label="د-ذ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(5)}
        />
        <Tab
          label="ضــ  -صــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(6)}
        />
        <Tab
          label="طــ - ظــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(8)}
        />
        <Tab
          label="ـــفــ. - ــقـــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(9)}
        />
        <Tab
          label="ل-ك"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(10)}
        />
        <Tab
          label="ه-ة"
          className={`lg:text-4xl text-3xl text-wrap py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(11)}
        />
        <Tab
          label="  ــه - ـة"
          className={`lg:text-4xl text-3xl text-wrap py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(12)}
        />
        <Tab
          label="أ - ــلــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(13)}
        />
        <Tab
          label="نــ -  ــذ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(14)}
        />
        <Tab
          label="ـــغــــ   -    
          ـــفـــــ"
          className={`lg:text-4xl text-3xl  py-3 px-0 m-3 w-60 text-white font-bold rounded-lg font-sans  focus:bg-cyan-400 border-2 border-emerald-200`}
          {...a11yProps(15)}
        />
      </Tabs>
      <TabPanel style={{ width: "100%" }} value={value} index={0}>
        <Card
          labelL="یــ"
          labelR="بــ"
          nameR="Baa"
          nameL="Yaa"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/ba.mp3"
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
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/nuun.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={2}>
        <Card
          labelL="ثــ"
          labelR="شـــ"
          nameL="Tha"
          nameR="Sheen"
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
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/daal.mp3"
        />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={6}>
        <Card
          labelL="ضــ"
          labelR="صــ"
          nameL="Daad"
          nameR="Saad"
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
          audioL="https://www.arabicreadingcourse.com/audio/isolated-letters/ghayn.mp3"
          audioR="https://www.arabicreadingcourse.com/audio/isolated-letters/fa.mp3"
        />
      </TabPanel> 
    </Box>
  );
}
