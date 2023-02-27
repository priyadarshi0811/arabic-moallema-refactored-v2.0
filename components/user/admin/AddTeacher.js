import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import MultipleSelectChip from "@/components/Layout/elements/MultiChipSelector";
import InputWithLable from "@/components/Layout/elements/InputWithLable";
import { Button, Box, Modal } from "@mui/material";
import RemoveUser from "@/components/Modules/batches/RemoveUser";


// const names = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddUser({ link, user, title, action }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let isEdit;

  const showChip = () => {
    if (action == "edit") {
      isEdit = true;
    }
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  showChip();

  user = user.charAt(0).toUpperCase() + user.slice(1);

  return (
    <div className=" p-5 rounded-md bg-white  pl-2">
      <h1 className="text-2xl pl-2 pb-2">{title || user + " Details"}</h1>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        className=" border-t-2 border-gray-300 mt-1"
      >
        <InputWithLable lable="Name" id="name" type="text" />
        <InputWithLable lable="Contact" id="contact" type="number" />
        <InputWithLable lable="Email" id="email" type="email" />
      </Box>

      {!isEdit && (
        <div className="m-0 p-0 w-full">
            <MultipleSelectChip />
          </div>
      )}

      <div className="items-center  py-3 text-right mt-2">
        <Link href={link} type="submit" className="m-0 p-0 w-full">
          <Button
            variant="contained"
            className="w-full bg-dark-purple my-3 mx-2"
            disableElevation
          >
            {title || "Edit " + user + " Details"}
          </Button>
        </Link>
      </div>
      {isEdit && (
        <div className="m-0 p-0 w-full">
         
              <MultipleSelectChip />
            

          <div>

            {/* <Stack direction="row" spacing={1} className="px-2 py-4 text-white">
              <Chip
                label="Batch 1"
                onClick={handleOpen}
                onDelete={handleDelete}
                className="bg-dark-purple text-white p-3"
              />
              <Chip
                label="Batch 3"
                onClick={handleOpen}
                onDelete={handleDelete}
                className="bg-dark-purple text-white p-3"
              />
            </Stack> */}
          </div>
          <Button
            variant="contained"
            className="w-full bg-dark-purple my-3 mx-2"
            disableElevation
          >
            Edit Batch
          </Button>
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RemoveUser
            user="Batch 1"
            isReplace={false}
            type="Batch"
            action="Remove"
          />
        </Box>
      </Modal>
    </div>
  );
}
