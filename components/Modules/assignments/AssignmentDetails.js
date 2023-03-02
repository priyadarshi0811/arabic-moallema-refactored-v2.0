import React from "react";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import { Button, IconButton, TextField } from "@mui/material";
import { DevicesFoldRounded } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFieldCard from "@/components/Layout/card/TextFieldCard";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AudioBtn from "@/components/Layout/elements/AudioBtn";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import MicIcon from "@mui/icons-material/Mic";

const AssignmentDetails = ({markRemark}) => {
  return (
    <div> 
      <h1 className="">Task 1: Tracing </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">
          Enter the words that can be traced by the students
        </h1>
        <div className="border-2 rounded-md min-h-40 p-5 m-5">
          <h1 className="p-5 text-6xl text-gray-400"> يـ ـيـ ـي</h1>
        </div>
      {markRemark}
      </div>


      <h1 className="mt-10">Task 2: Select the correct option </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">Write the question for the option</h1>
        <div className="px-5 py-5">
          <p className="">
            The first letter of the formation{" "}
            <span className="text-2xl font-semibold"> صـ بـ رـ </span> is:
          </p>
        </div>
        <h1 className="px-5">Add the options</h1>
        <div className="grid grid-cols-6 gap-8 p-5">
          <div className="col-span-2 ">
            <MUIMiniCard title="ض" />
          </div>
          <div className="col-span-2 ">
            <MUIMiniCard title="ص" />
          </div>
          <div className="col-span-2 ">
            <MUIMiniCard title="س" />
          </div>
        </div>
      {markRemark}
      </div>


      <h1 className="mt-10">Task 3: Identify by audio </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">Write the question for the option</h1>
        <div className="px-5 py-5"></div>
        <div className="p-5 grid grid-cols-1">
          <div className="col-span-1 mx-5 text-center">
            <h1 className="py-3">
              What Al-Halq is the Khat following in the audio here
            </h1>
            <div className="w-full ">
            <Button
              variant="contained"
              className="bg-dark-purple w-full mt-10 text-5xl"
              component="label"
            >
              <AudioBtn url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            </Button>
            </div>
          </div>
        </div>
        <h1 className="px-5 pt-10">Click to select the correct option</h1>
        <div className="grid grid-cols-6 gap-8 p-5">
          <div className="col-span-2 ">
            <MUIMiniCard title="Adnan" />
          </div>
          <div className="col-span-2 ">
            <MUIMiniCard title="Adnan" />
          </div>
          <div className="col-span-2 ">
            <MUIMiniCard title="Adnan" />
          </div>
        </div>
      {markRemark}
      </div>


      <h1 className="mt-10">Task 4: Pronounce the Khat </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">Write the question for the option</h1>
        <div className="px-5 py-5"></div>
        <h1 className="px-5">Add the Khat to pronounce</h1>
        <div className="grid grid-cols-6 gap-8 p-5">
          <div className="col-span-2 ">
            <MUIMiniCard
              title="حَقّ"
              isBtn="true"
              link=""
              btnText=<MicIcon />
            />
          </div>
          <div className="col-span-2 ">
            <MUIMiniCard
              title="عِلم"
              isBtn="true"
              link=""
              btnText=<MicIcon />
            />
          </div>
          <div className="col-span-2 ">
            <MUIMiniCard
              title="حَقّ"
              isBtn="true"
              link=""
              btnText=<MicIcon />
            />
          </div>
        </div>
      {markRemark}
      </div>


      <h1 className="mt-10">Task 5: Drag and Drop </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">Drag the words and drop it in Heavy or Light Ra bucket:</h1>
        <div className="grid grid-cols-3 gap-10 m-5">
          <div className="col-span-1 border-2 rounded-md p-3 cursor-pointer">
            <p className="pb-3">Heavy</p>
          </div>
          <div className="col-span-1 border-2 rounded-md p-3 cursor-pointer">
            <p className="pb-3">Light</p>
          </div>
          <div className="col-span-1 border-2 rounded-md p-3 cursor-pointer"> 
          <p className="pb-3 gap-5">words</p>
          <div className="my-3">
          <MUIMiniCard
              title="حَقّ"
            />
          </div>
          <div className="my-3">
          <MUIMiniCard
               title="ا لفلق"
            />
          </div>
          <div className="my-3">
          <MUIMiniCard
              title="خلقنا"
            />
          </div>
          
          </div>
        </div>
      {markRemark}
      </div>



      {/* <Button className="w-full bg-dark-purple mt-5" variant="contained">
        Finalize Assignment
      </Button> */}
    </div>
  );
};

export default AssignmentDetails;
