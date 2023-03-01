import React from "react";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import { Button, IconButton, TextField } from "@mui/material";
import { DevicesFoldRounded } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextFieldCard from "@/components/Layout/card/TextFieldCard";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AudioBtn from "@/components/Layout/elements/AudioBtn";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CreateAssignments = () => {

  return (
    <div>
      <SelectDropdown lable="Assignment fo Class" type="Assignment" />

      <div className="grid grid-cols-8 bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <div className="col-span-6">
          <SelectDropdown
            lable="Select task from the option"
            type="Assignment"
          />
        </div>
        <div className="col-span-2">
          <div className="px-2 pt-2 text-end w-full">
            <Button
              variant="contained"
              className="bg-dark-purple"
              // onClick={handleOpen}
              startIcon={<AddCircleOutlineIcon />}
            >
              Add Task
            </Button>
          </div>
        </div>
      </div>

      <h1 className="mt-10">Task 1: Tracing </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">
          Enter the words that can be traced by the students
        </h1>
        <div className="grid grid-cols-6 gap-8 p-5">
          <div className="col-span-2 ">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
        </div>
      </div>

      <h1 className="mt-10">Task 2: Select the correct option </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">Write the question for the option</h1>
        <div className="px-5 py-5">
          <TextField
            id="outlined-basic"
            className="w-full text-lg"
            variant="outlined"
          />
        </div>
        <h1 className="px-5">Add the options</h1>
        <div className="grid grid-cols-10 gap-8 p-5">
          <div className="col-span-2 ">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
        </div>
      </div>

      <h1 className="mt-10">Task 3: Identify by audio </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">Write the question for the option</h1>
        <div className="px-5 py-5">
          <TextField
            id="outlined-basic"
            className="w-full text-lg"
            variant="outlined"
          />
        </div>
        <div className="p-5 grid grid-cols-2">
          <div className="col-span-1 mx-5 text-center ">
            <h1 className="py-3">Upload the audio to be identified:</h1>
            <Button
              variant="contained"
              className="bg-dark-purple w-full mt-10"
              component="label"
              endIcon={<DriveFolderUploadIcon />}
            >
              Upload
              <input hidden multiple type="file" />
            </Button>
          </div>
          <div className="col-span-1 mx-5 text-center">
            <h1 className="py-3">Audio Preview</h1>
            <div className="w-full text-5xl">
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
        <h1 className="px-5 pt-10">Add the options</h1>
        <div className="grid grid-cols-10 gap-8 p-5">
          <div className="col-span-2 ">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
        </div>
      </div>

      <h1 className="mt-10">Task 4: Pronounce the Khat </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">Write the question for the option</h1>
        <div className="px-5 py-5">
          <TextField
            id="outlined-basic"
            className="w-full text-lg"
            variant="outlined"
          />
        </div>
        <h1 className="px-5">Add the Khat to pronounce</h1>
        <div className="grid grid-cols-10 gap-8 p-5">
          <div className="col-span-2 ">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
        </div>
      </div>

      <h1 className="mt-10">Task 5: Drag and Drop </h1>
      <div className="bg-gray-50 mt-5 p-5 rounded-md shadow-md">
        <h1 className="px-5">Write the question for the option</h1>
        <div className="px-5 py-5">
          <TextField
            id="outlined-basic"
            className="w-full text-lg"
            variant="outlined"
          />
        </div>
        <h1 className="px-5">Add buckets to drop:</h1>
        <div className="grid grid-cols-10 gap-8 p-5">
          <div className="col-span-2 ">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
        </div>

        <h1 className="px-5">Write the words to be selected:</h1>
        <div className="grid grid-cols-10 gap-8 p-5">
          <div className="col-span-2 ">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
          <div className="col-span-2">
            <TextFieldCard />
          </div>
        </div>

        <FormControl className="mt-5 p-5 ">
      <FormLabel id="demo-row-radio-buttons-group-label">Provide Audio support</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="yes" />
        <FormControlLabel value="no" control={<Radio />} label="no" />
        
      </RadioGroup>
    </FormControl>

      </div>

        
    <Button className="w-full bg-dark-purple mt-5" variant="contained">Finalize Assignment</Button>
    </div>
  );
};

export default CreateAssignments;
