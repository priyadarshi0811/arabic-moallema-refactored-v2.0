import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Link from "next/link";

import MultipleSelectChip from "@/components/Layout/elements/MultiChipSelector";
import { Checkbox, Divider, FormControlLabel, Grid } from "@mui/material";
import InputWithLable from "@/components/Layout/elements/InputWithLable";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const names = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"];

export default function AddUser({ link, user, title }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const [batch, setBatch] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setBatch(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  let isUser;

  const showChip = () => {
    if (user == "teacher") {
      isUser = true;

    }
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  showChip();

  user = user.charAt(0).toUpperCase() + user.slice(1)

  return (
    <div className=" p-5 rounded-md bg-white  pl-2">
      <h1 className="text-2xl pl-2 pb-2">{title || user + ' Details'}</h1>
     
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        className=" border-t-2 border-gray-300 mt-1"
      >

        
        <InputWithLable lable="Name" id='name' type='text' />
        <InputWithLable lable="Contact" id='contact' type='number' />
        <InputWithLable lable="Email" id='email' type='email' />

      </Box>


        <FormControl sx={{ m: 1, width: "250" , minWidth: "100%" }}>
          <div className="grid grid-cols-5 ">
            <div className="col-span-1 mt-3">
              <label className=" mt-3">Batch</label>
            </div>
            <div className="col-span-4">
              <Select
                labelId="demo-controlled-open-select-label"
                className="w-full"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={batch}
                size="small"
                onChange={handleChange}
              >
               
                <MenuItem value={"batch 1"}>batch 1</MenuItem>
                <MenuItem value={"batch 2"}>batch 2</MenuItem>
                <MenuItem value={"batch 3"}>batch 3</MenuItem>
                <MenuItem value={"batch 4"}>batch 4</MenuItem>
              </Select>
            </div>
          </div>


          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Add To Batch Immediately"
          />
        </FormControl>


      <div className="items-center  py-3 text-right mt-2">
        <Link href={link} type="submit" className="m-0 p-0 w-full">
          <Button
            variant="contained"
            className="w-full bg-dark-purple my-3 mx-2"
            disableElevation
          >
            {title || 'Edit ' + user + ' Details' }
          </Button>
        </Link>
      </div>

    </div>
  );
}
