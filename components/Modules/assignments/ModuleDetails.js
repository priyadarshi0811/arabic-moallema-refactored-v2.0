import React from "react";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import { Button, Card, CardContent, CardMedia, IconButton, TextField, Typography } from "@mui/material";
import { DevicesFoldRounded } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFieldCard from "@/components/Layout/card/TextFieldCard";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AudioBtn from "@/components/Layout/elements/AudioBtn";

import PlayCard from "@/components/Layout/card/PlayCard";
import MicIcon from "@mui/icons-material/Mic";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";

const ModuleDetails = () => {
  return (
    <div>
      <h1 className="">Alif Hamza </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5 pb-5 border-b-2">
          Al-Halq have three parts: Aqsal, Wasal and Adnan
        </h1>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-8 p-5">
          <div className="col-span-2 ">
            <PlayCard title="ض" isBtn="true" btnText=<AudioBtn url="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" /> />
          </div>
          <div className="col-span-2 ">
            <PlayCard title="ص" isBtn="true" btnText=<AudioBtn url="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" /> />
          </div>
          <div className="col-span-2 ">
            <PlayCard title="س" isBtn="true" btnText=<AudioBtn url="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" /> />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          <div className="col-span-1  ">
            <Card sx={{ maxWidth: "100%" }}>
              <CardMedia
                sx={{ minWidth: "100%", height: 220 }}
                image="https://img.pikbest.com/png-images/qianku/book-png-free-button_2215042.png!bw700"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lable
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Look at how the tongue touches palate and teeth while speaking Halq word
                </Typography>
              </CardContent>
              
            </Card>
          </div>
          <div className="col-span-1 lg:col-span-2 ">
            <h1 className="px-5 pb-5 border-b-2">Examples of Halq</h1>
            <div className="grid lg:grid-cols-6 gap-8 p-5">
              <div className="col-span-2 ">
                <PlayCard title="ض" isBtn="true" btnText=<AudioBtn url="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" /> />
              </div>
              <div className="col-span-2 ">
                <PlayCard title="ص" isBtn="true" btnText=<AudioBtn url="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" /> />
              </div>
              <div className="col-span-2 ">
                <PlayCard title="س" isBtn="true" btnText=<AudioBtn url="https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3" /> />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="mt-10">Task 2: Select the correct option </h1>
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
              <AudioBtn url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
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
      </div> */}

      {/* <Button className="w-full bg-dark-purple mt-5" variant="contained">
        Finalize Assignment
      </Button> */}
    </div>
  );
};

export default ModuleDetails;
